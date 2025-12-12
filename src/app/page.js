import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import { SocialIcons } from '@/components/SocialIcons';
import { getCategories } from '@/lib/queries';

async function Home() {
  const categories = await getCategories();
  return (
    <section>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
    </section>
  )
}

export default Home