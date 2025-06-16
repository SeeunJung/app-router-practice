"use client";

import { createReviewAction } from '@/actions/create-review.action';
import { useActionState, useEffect } from 'react';

export default function ReviewEditor({bookId}: {bookId: string}){
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if(state && !state.status){
      alert(state.error);
    }
  }, [state]);
  return(
    <section>
      <form className="flex flex-col gap-[5px]" action={formAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea disabled={isPending} className="w-full h-[100px] resize-y p-[10px] box-border border-[1px] border-solid border-rgba(220,_220,_220) rounded-2xl" required name="content" placeholder="Review Content" />
        <div className="flex justify-end gap-[5px]">
          <input disabled={isPending} className="p-[10px] box-border border-[1px] border-solid border-[rgba(220,_220,_220)] rounded-2xl" required name="author" placeholder="Author" />
          <button disabled={isPending} className="w-[80px] p-[10px] bg-[rgba(37,_147,_255)] text-white rounded cursor-pointer" type="submit">
            {isPending? "..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  )
}