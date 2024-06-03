import Image from "next/image";
import Link from "next/link";
import React from "react";

export type PostProps = {
  id: string;
  title: string;
  uri: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
};

const Card = ({ posts }: { posts: PostProps }) => {
  return (
    <Link href={`/blog/${posts.slug}` || '/'} className="rounded-xl bg-slate-100 p-4 space-y-4">
      <Image src={posts.featuredImage.node.sourceUrl} alt="post" width={400} height={400}/>
      <h2 className="text-xl font-semibold">{posts.title}</h2>
      <p className="text-gray-500">{posts.content}</p>
    </Link>
  );
};

export default Card;
