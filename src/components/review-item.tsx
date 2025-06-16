import { ReviewData } from "@/types";
import ReviewItemDeleteButton from "./review-item-delete-button";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData){
  return(
    <div className="flex flex-col gap-[5px] p-[15px]">
      <div className="text-[14px]">{author}</div>
      <div className="bg-[rgba(240,_240,_240)] p-[15px] rounded-2xl">{content}</div>
      <div className="flex gap-[10px] text-gray-500 text-[14px]">
        <div>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
      </div>
    </div>
  )
}