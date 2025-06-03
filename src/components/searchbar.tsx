"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

export default function Searchbar(){
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if(!search || q===search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      onSubmit();
    }
  };

  return(
    <div className="flex gap-[10px] mb-[20px]">
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} className="flex-1 p-[15px] rounded-[5px] border-[1px] border-gray-300 border-solid" />
      <button onClick={onSubmit} className="w-[80px] rounded-[5px] border-none bg-[rgba(37,_147,_255)] text-white cursor-pointer">Search</button>
    </div>
  )
}