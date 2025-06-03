import { BookData } from "@/types";
import Link from "next/link";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className="flex py-[20px] px-[10px] border-b-solid border-b-[1px] border-b-gray-300 gap-[15px] text-black no-underline">
      <img src={coverImgUrl} className="w-[80px]" />
      <div>
        <div className="font-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-600">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}