export default async function Page({params}:
  {params: {id: string | string[]}}){
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`);
  if(!response.ok){
    return <div>Error Occurred</div>
  }
  const book = await response.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return(
    <div className="flex flex-col gap-[10px]">
      <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${coverImgUrl})`}} className="flex relative justify-center p-[20px] bg-center bg-no-repeat bg-cover">
        <img src={coverImgUrl} alt={title} className="z-1 max-h-[350px] h-full" />
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-gray-600">{subTitle}</div>
      <div className="text-gray-600">{author} | {publisher}</div>
      <div className="bg-[rgba(245,_245,_245)] p-[15px] leading-1.3 whitespace-pre-line rounded-[5px]">{description}</div>
    </div>
  )
}