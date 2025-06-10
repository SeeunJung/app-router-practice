"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({error, reset}: {error: Error; reset: () => void}){
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return(
    <div>
      <h3 className="text-2xl font-bold">Error Occurred</h3>
      <button onClick={() =>{
        startTransition(() => {
          router.refresh();
          reset();
        })
      }
      }>Retry</button>
    </div>
  )
}