import { getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";
import Link from "next/link";
import Card from "@/components/Card";

export default async function Home() {
  let client = await getClient();

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            uri
            slug
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  return (
    <main className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold py-10">Get Posts from WordPress</h2>
      <div className="grid grid-cols-3 gap-6">
        {data.posts.nodes.map((post) => (
          <Card posts={post} key={post.id} />
        ))}
      </div>
    </main>
  );
}
