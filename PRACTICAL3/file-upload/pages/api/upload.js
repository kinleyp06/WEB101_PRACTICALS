import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing since we're using formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Configure formidable
    const form = formidable({
      uploadDir: uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filter: (part) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
        return allowedTypes.includes(part.mimetype);
      },
      filename: (name, ext, part, form) => {
        // Create unique filename
        const timestamp = Date.now();
        return `${timestamp}-${part.originalFilename}`;
      }
    });

    // Parse the form
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return res.status(400).json({ error: 'File upload failed: ' + err.message });
      }

      const uploadedFile = files.file;
      
      if (!uploadedFile) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // File validation
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(uploadedFile.mimetype)) {
        // Delete the uploaded file
        fs.unlinkSync(uploadedFile.filepath);
        return res.status(400).json({ error: 'Invalid file type' });
      }

      // Success response
      res.status(200).json({
        message: 'File uploaded successfully',
        file: {
          originalName: uploadedFile.originalFilename,
          fileName: path.basename(uploadedFile.filepath),
          size: uploadedFile.size,
          type: uploadedFile.mimetype,
          description: fields.description || ''
        }
      });
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}