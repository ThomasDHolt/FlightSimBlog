export function Comment({comment}) {
    const dateString = `${comment.date.getDate()}/${comment.date.getMonth()}/${comment.date.getFullYear()}`;

    return (
        <div className="mt-[20px]">
            <div className="flex flex-row justify-start">
                <p>{`${comment.commenter_name} - ${dateString}`}</p>
            </div>
            <p className="text-2xl">{comment.content}</p>
            <p className="mt-[5px]">{`${comment.likes} likes`}</p>
        </div>
    );
}