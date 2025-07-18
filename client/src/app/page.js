import Image from "next/image";
import { db } from "@/utils/utilities";
import { PostsCollection } from "@/Components/PostsCollection";

export default async function PostsPage({searchParams}) {
  const query = await searchParams;
  const posts = (await db.query(`SELECT * FROM posts`)).rows;

  if (query.sort === "desc") { posts.reverse(); }

  return (
    <>
      <PostsCollection posts={posts} />
    </>
  );
}
