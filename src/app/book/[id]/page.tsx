import { notFound } from "next/navigation";
import { ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
import Image from "next/image";

export function generateStaticParams(){
  return [{id: "1"}, {id: "2"}, {id: "3"}];
}

async function BookDetail({bookId}:{bookId:string}){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);
  if(!response.ok){
    if(response.status === 404)
      notFound();
    return <div>Error Occurred</div>
  }
  const book = await response.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return(
    <section className="flex flex-col gap-[10px]">
      <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${coverImgUrl})`}} className="flex relative justify-center p-[20px] bg-center bg-no-repeat bg-cover">
        <Image src={coverImgUrl} alt={title} width={240} height={300} className="z-1 max-h-[350px] h-full" />
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-gray-600">{subTitle}</div>
      <div className="text-gray-600">{author} | {publisher}</div>
      <div className="bg-[rgba(245,_245,_245)] p-[15px] leading-1.3 whitespace-pre-line rounded-[5px]">{description}</div>
    </section>
  )
}

async function ReviewList({bookId}: {bookId: string}){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    { next: { tags: [`review-${bookId}`] } }
  );
  if(!response.ok){
    throw new Error(`Review fetch failed: ${response.statusText}`);
  }
  const reviews: ReviewData[] = await response.json();

  return(
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  )
}

export default async function Page({params}:
  {params: Promise<{id: string}>}){
    const { id } = await params;
  return(
    <div className="flex flex-col gap-[50px]">
      <BookDetail bookId={id} />
      <ReviewEditor bookId={id} />
      <ReviewList bookId={id} />
    </div>
  )
}