export default function UploadPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="border-2 border-dashed border-gray-300 p-12 text-center rounded-lg">
          <p className="text-gray-500">
            Drag and drop a video file
          </p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Select File
          </button>
        </div>
      </div>
    </div>
  );
}