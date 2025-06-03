import BookItem from "@/components/book-item";
import books from "@/mock/books.json"

export default function Home(){
  return(
    <div className="flex flex-col gap-[20px]">
      <section>
        <h3 className="mb-0 text-xl font-bold">Now Recommended</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3 className="mb-0 text-xl font-bold">All Books</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  )
}