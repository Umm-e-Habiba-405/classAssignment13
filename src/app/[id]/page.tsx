export default async function BookDetails({ params }: { params: { id: string } }) {
    const { id } = params; // Extract the dynamic `id` from the URL
  
    // Fetch the details of the book using the dynamic `id`
    const response = await fetch(`https://simple-books-api.glitch.me/books/${id}`, { cache: "no-store" });
    const book = await response.json();
  
    // Render the book details
    return (
      <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Book Details</h1>
          <h2 className="text-2xl font-semibold text-gray-800">{book.name}</h2>
          <p className="text-lg mt-4">
            <strong className="font-semibold">Author:</strong> {book.author}
          </p>
          <p className="text-lg mt-2">
            <strong className="font-semibold">Type:</strong> {book.type}
          </p>
          <p className="text-lg mt-2">
            <strong className="font-semibold">Availability:</strong> {book.available ? "Available" : "Not Available"}
          </p>
        </div>
      </main>
    );
  }
  