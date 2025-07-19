import { Comment } from "./Comment";

export async function PostCommentsCard({post, comments}) {
    const postData = post[0];
    const dateString = `${postData.date.getDate()}/${postData.date.getMonth()}/${postData.date.getFullYear()}`;

    return (
        <>
            <div className="w-[90vw] bg-[#0F0F0F] border-[#161616] border-dashed border-[5px] rounded-2xl m-[10px] p-[5px] flex flex-col items-start">
                <div className="flex flex-row justify-start">
                    <p>{`${postData.poster_name} - ${dateString}`}</p>
                </div>
                <h2 className="text-4xl font-bold">{postData.title}</h2>
                <p className="text-2xl mt-[20px]">{postData.content}</p>
                <p className="mt-[5px]">{`${postData.likes} likes`}</p>
                <h2 className="text-4xl font-bold mt-[40px]">Comments</h2>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </>
    );
}