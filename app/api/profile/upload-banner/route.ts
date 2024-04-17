import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false, // Disable default body parsing
    },
};

export const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form:', err);
                return res.status(500).json({ error: 'Error parsing form' });
            }

            const image = files?.image?.[0]; // Access the first file object

            if (!image) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            const fileExt = path.extname(image.name);
            const newPath = path.join(process.cwd(), 'uploads', `${Date.now()}${fileExt}`);

            // Create a read stream from the uploaded file
            const readStream = fs.createReadStream(image.path);
            // Create a write stream to save the file
            const writeStream = fs.createWriteStream(newPath);

            // Pipe the read stream to the write stream
            readStream.pipe(writeStream);

            // Listen for the 'finish' event to know when the file has been saved
            writeStream.on('finish', () => {
                console.log('File saved successfully:', newPath);
                res.status(200).json({ message: 'File saved successfully', imagePath: newPath });
            });
        });
    } catch (error) {
        console.error('Error saving file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
