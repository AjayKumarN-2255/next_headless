import LatestPosts from "@/components/LatestPosts";
import { getAllPosts } from "@/lib/queries";

async function Blog(props) {

  const searchParams = await props.searchParams;
  const searchTerm = searchParams.search;
  const category = searchParams.category;
  const before = searchParams?.before || null;
  const after = searchParams?.after || null;

  const { posts, pageInfo } = await getAllPosts(searchTerm, category, { before, after });
  const latestPostProps = {
    category,
    searchTerm
  }

  return (
    <section>
      <LatestPosts />
    </section>
  )
}

export default Blog