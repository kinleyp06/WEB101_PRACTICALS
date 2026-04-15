import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }
    
    // Get file details
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // Save file or process it
    console.log('File received:', file.name, 'Size:', buffer.length)
    
    return NextResponse.json({ 
      message: 'File uploaded successfully',
      fileName: file.name 
    })
    
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}