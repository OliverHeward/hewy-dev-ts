import Clients from '@/components/Clients';
import AboutMe from '@/components/AboutMe';
import BlogPosts from '@/components/BlogPosts';
import SEO from '@/components/SEO';
import HomeHero from '@/components/HomeHero';


export default function Home() {

  return (
    <main>
      <SEO {...{
        title: 'Home'
      }} />
      <HomeHero />
      <AboutMe />
      <Clients />
      <BlogPosts />
    </main>
  );
}
