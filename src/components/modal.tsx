"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({children}: {children: ReactNode}){
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if(!dialogRef.current?.open){
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return(
    createPortal(
      <dialog 
        onClose={() => router.back()}
        onClick={(e)=>{
          if((e.target as any).nodeName === "DIALOG"){
            router.back();
          }
        }}
        className="w-4/5 max-w-[500px] mt-[20px] rounded-2xl border-none backdrop:bg-[rgba(0,_0,_0,_0.7)]" ref={dialogRef}>{children}</dialog>,
      document.getElementById("modal-root") as HTMLElement
    )
  )
}