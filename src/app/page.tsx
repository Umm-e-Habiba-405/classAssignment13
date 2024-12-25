import Link from "next/link";

export default async function Home() {
  // Fetch the list of books from the API
  const response = await fetch("https://simple-books-api.glitch.me/books", { cache: "no-store" });
  const books = await response.json();

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Book List</h1>
        <ul className="space-y-4">
          {books.map((book: any) => (
            <li
              key={book.id}
              className="border border-gray-300 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              <Link href={`/${book.id}`}>
                <h2 className="text-xl font-semibold text-blue-500 hover:text-blue-700">{book.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
