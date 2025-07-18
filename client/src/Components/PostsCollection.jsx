import { PostCard } from "./PostCard";
import Link from "next/link";

export function PostsCollection({posts}) {
    {console.log(posts)}

    return (
        <div>
            <div className="flex flex-row justify-center">
                <Link className="hover:underline" href="/?sort=asc">Sort ascending</Link> - <Link className="hover:underline" href="/?sort=desc">Sort descending</Link>
            </div>
            <div className="flex flex-col items-center">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}