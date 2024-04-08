import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method !== 'POST') {
    //     return res.status(405).end(); // Method Not Allowed
    // }

    try {
        const { image } = req.body;

        // Save the file to a local folder within your project
        const filePath = path.join(process.cwd(), 'uploads', 'image.jpg');
        fs.writeFileSync(filePath, image, 'base64');

        console.log('File saved successfully');

        res.status(200).json({ message: 'File saved successfully' });
    } catch (error) {
        console.error('Error saving file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
