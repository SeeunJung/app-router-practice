"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData){
    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();
    const bookId = formData.get("bookId")?.toString();

    if(!bookId || !content || !author)
      return{
        status: false,
        error: "Please enter review data."
      };

    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
        method: "POST",
        body: JSON.stringify({ bookId, content, author })
      });
      if(!response.ok){
        throw new Error(response.statusText);
      }
      revalidateTag(`review-${bookId}`);
      return{
        status: true,
        error: ""
      }
    } catch(err){
      return{
        status: false,
        error: `Failed to save review: ${err}`
      }
    }
  }