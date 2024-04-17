import { writeFile, mkdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join, extname } from 'path';

export async function POST(request: NextRequest) {
	const data = await request.formData();
	const file: File | null = data.get('file') as unknown as File;

	if (!file) {
		return NextResponse.json({ success: false });
	}

	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	const uploadDirectory = join(process.cwd(), '/public/images/users/banner-upload'); // Adjust directory path as needed

	try {
		await mkdir(uploadDirectory, { recursive: true }); // Create directory if it doesn't exist
	} catch (error) {
		console.error('Error creating banner-upload directory:', error);
		return NextResponse.json({ success: false, error: 'Failed to create banner-upload directory' });
	}

	const fileExtension = extname(file.name);
	const newFileName = 'banner-bg' + fileExtension;
	const filePath = join(uploadDirectory, newFileName);

	try {
		await writeFile(filePath, buffer); // Write file to the specified path
		console.log(`Uploaded file saved as ${newFileName}`);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Error writing file:', error);
		return NextResponse.json({ success: false, error: 'Failed to write file' });
	}
}
