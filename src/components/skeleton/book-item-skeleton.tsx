export default function BookItemSkeleton(){
  return(
    <div className="flex py-[20px] px-[10px] border-b-solid border-b-[1px] border-b-gray-300 gap-[15px]">
      <div className="w-[80px] h-[105px] bg-[rgba(230,_230,_230)]"></div>
      <div className="flex-auto ">
        <div className="w-full h-[20px] bg-[rgba(230,_230,_230)]"></div>
        <div className="w-full h-[20px] bg-[rgba(230,_230,_230)]"></div>
        <br />
        <div className="w-full h-[20px] bg-[rgba(230,_230,_230)]"></div>
      </div>
    </div>
  )
}