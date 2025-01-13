import multer from 'multer';
import nextConnect from 'next-connect';
import fs from 'fs';
import { google } from 'googleapis';

const upload = multer({ dest: '/tmp' }); // Temporary storage for uploaded files

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

// Middleware to handle file uploads
apiRoute.use(upload.single('file'));

/**
 * Authorize Google API client with service account credentials.
 */
async function authorize() {
  const clientEmail = process.env.NEXT_PUBLIC_GOOGLEAPIS_CLIENT_EMAIL;
  const privateKey = process.env.NEXT_PUBLIC_GOOGLEAPIS_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google API credentials in environment variables.');
  }

  const jwtClient = new google.auth.JWT(clientEmail, null, privateKey, [
    'https://www.googleapis.com/auth/drive',
  ]);
  await jwtClient.authorize();
  return jwtClient;
}

/**
 * Upload a file to Google Drive.
 * @param {google.auth.JWT} authClient - Authorized Google API client.
 * @param {string} filePath - Path to the file to be uploaded.
 * @param {string} fileName - Name of the file to be displayed in Google Drive.
 */
async function uploadFileToDrive(authClient, filePath, fileName) {
  const drive = google.drive({ version: 'v3', auth: authClient });

  const fileMetadata = {
    name: fileName,
    parents: [process.env.DRIVE_PARENT_FOLDER_ID],
  };

  const media = {
    mimeType: 'application/octet-stream', // General MIME type
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id',
  });

  return response.data.id;
}

// API Route Handler
apiRoute.post(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const authClient = await authorize();

    const { path, originalname } = req.file;
    const fileId = await uploadFileToDrive(authClient, path, originalname);

    // Clean up temporary file
    fs.unlinkSync(path);

    res.status(200).json({ message: 'File uploaded successfully', fileId });
  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default apiRoute;

// Disable bodyParser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
