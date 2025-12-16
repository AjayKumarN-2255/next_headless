import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import LatestPosts from '@/components/LatestPosts';
import { SocialIcons } from '@/components/SocialIcons';
import { getCategories, getAllPosts } from '@/lib/queries';
import Link from 'next/link';

async function Home(props) {
  const categories = await getCategories();
  const searchParams = await props.searchParams;
  const before = searchParams?.before || null;
  const after = searchParams?.after || null;

  const { posts, pageInfo } = await getAllPosts(null, null, { before, after });
  return (
    <section>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
      <LatestPosts posts={posts} />
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-gray-500 transition-colors duration-200"
        >
          View more...
        </Link>
      </div>
    </section>
  )
}

export default Home