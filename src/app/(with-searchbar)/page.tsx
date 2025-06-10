import BookItem from "@/components/book-item";
import { BookData } from "@/types";

async function AllBooks(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {cache: "force-cache"}
  );
  if(!response.ok){
    return <div>Error Occurred</div>
  }
  const allBooks : BookData[] = await response.json();
  return(
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {next: {revalidate: 3}}
  );
  if(!response.ok){
    return <div>Error Occurred</div>
  }
  const recoBooks : BookData[] = await response.json();
  return(
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}


export default async function Home(){
  

  return(
    <div className="flex flex-col gap-[20px]">
      <section>
        <h3 className="mb-0 text-xl font-bold">Now Recommended</h3>
        <RecoBooks />
      </section>
      <section>
        <h3 className="mb-0 text-xl font-bold">All Books</h3>
        <AllBooks />
      </section>
    </div>
  )
}