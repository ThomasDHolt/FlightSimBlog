export function PostCard({post}) {
    const dateString = `${post.date.getDate()}/${post.date.getMonth()}/${post.date.getFullYear()}`;

    return (
        <a href={`/post/${post.id}`}>
            <div className="w-[90vw] bg-[#0F0F0F] hover:bg-[#2D2D2D] border-[#161616] border-dashed border-[5px] rounded-2xl m-[10px] p-[5px] flex flex-col items-start">
                <div className="flex flex-row justify-start">
                    <p>{`${post.poster_name} - ${dateString}`}</p>
                </div>
                <h2 className="text-4xl font-bold">{post.title}</h2>
            </div>
        </a>
    );
}