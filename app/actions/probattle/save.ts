import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function register(data) {
    const { teamName, selectedModules, members, timestamp } = data;

    // if (!teamName || !selectedModules || !members || !timestamp) {
    //   return res.status(400).json({ error: 'Missing required fields' });
    // }

    try {
        // Initialize the Google Sheet
        const doc = new GoogleSpreadsheet('YOUR_SHEET_ID');
        await doc.useServiceAccountAuth({
            client_email: process.env.NEXT_PUBLIC_GOOGLEAPIS_CLIENT_EMAIL,
            private_key: process.env.GOOGLEAPIS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        });
        await doc.loadInfo();

        // Select the first sheet
        const sheet = doc.sheetsByIndex[0];

        // Add headers if not already present (optional)
        if (sheet.headerValues.length === 0) {
            await sheet.setHeaderRow([
                'Team Name',
                'Timestamp',
                'Technical Tier 1',
                'Technical Tier 2',
                'Technical Tier 3',
                'General',
                'Member Name',
                'Member Email',
                'Member Contact',
                'Member CNIC',
            ]);
        }

        // Prepare rows to add
        const rowsToAdd = members.map((member) => ({
            'Team Name': teamName,
            'Timestamp': timestamp,
            'Technical Tier 1': selectedModules['Technical Tier 1'] || '',
            'Technical Tier 2': selectedModules['Technical Tier 2'] || '',
            'Technical Tier 3': selectedModules['Technical Tier 3'] || '',
            General: selectedModules['General'] || '',
            'Member Name': member.name,
            'Member Email': member.email,
            'Member Contact': member.contact,
            'Member CNIC': member.cnic,
        }));

        // Append rows to the sheet
        await sheet.addRows(rowsToAdd);

    } catch (e) { }
}