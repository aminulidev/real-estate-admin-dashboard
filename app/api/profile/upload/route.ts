import { writeFile, mkdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(request: NextRequest) {
	const data = await request.formData();
	const file: File | null = data.get('file') as unknown as File;

	if (!file) {
		return NextResponse.json({ success: false });
	}

	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	const uploadDirectory = join(process.cwd(), 'public/images/users/upload'); // Adjust directory path as needed

	try {
		await mkdir(uploadDirectory, { recursive: true }); // Create directory if it doesn't exist
	} catch (error) {
		console.error('Error creating upload directory:', error);
		return NextResponse.json({ success: false, error: 'Failed to create upload directory' });
	}

	const filePath = join(uploadDirectory, file.name);

	try {
		await writeFile(filePath, buffer); // Write file to the specified path
		console.log(`Uploaded file saved to ${filePath}`);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Error writing file:', error);
		return NextResponse.json({ success: false, error: 'Failed to write file' });
	}
}
