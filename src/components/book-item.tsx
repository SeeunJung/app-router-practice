import { BookData } from "@/types";
import Image from "next/image";
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
    <Link href={`/book/${id}`} scroll={false} className="flex py-[20px] px-[10px] border-b-solid border-b-[1px] border-b-gray-300 gap-[15px] text-black no-underline">
      <Image src={coverImgUrl} width={80} height={105} alt={`${title}의 표지 이미지`} />
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