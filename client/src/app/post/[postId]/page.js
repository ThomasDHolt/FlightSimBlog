import { PostCommentsCard } from "@/Components/PostCommentsCard";
import { db } from "@/utils/utilities";

export default async function PostPage({params}) {
    const slug = await params;
    const post = (await db.query(`SELECT * FROM posts WHERE id = $1`, [slug.postId])).rows;
    const comments = (await db.query(`SELECT * FROM comments WHERE post_id = $1`, [slug.postId])).rows;

    return (
        <div className="flex flex-row justify-center">
            <PostCommentsCard post={post} comments={comments} />
        </div>
    );
}