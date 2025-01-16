import dotenv from 'dotenv';
import fs from 'fs';
import { google } from 'googleapis';

dotenv.config({ path: '.env.local' });


const SCOPE = ["https://www.googleapis.com/auth/drive"];

async function authorize() {
    const jwtClient = new google.auth.JWT(
        process.env.NEXT_PUBLIC_GOOGLEAPIS_CLIENT_EMAIL,
        null,
        process.env.GOOGLEAPIS_PRIVATE_KEY,
        SCOPE
    )
    await jwtClient.authorize();
    return jwtClient;
}

async function uploadFile(authClient){
    return new Promise((resolve, rejected) => {
        const drive = google.drive({version: "v3", auth: authClient});

        var fileMetadata = {
            name: "",
            parents: ["1A7U6f3RRg1A_rBgZmXc3r6-0RXb27XlM"]
        }

        drive.files.create({
            resource:fileMetadata,
            media: {
                body: fs.createReadStream("path/to/file"),
                mimeType: 'image/JPG'
            },
            fields:'id'
        },function(err,file){
            if(err){
                return rejected(err);
            }
            resolve(file)
        });
    });
}


authorize().then(uploadFile).catch(console.error);