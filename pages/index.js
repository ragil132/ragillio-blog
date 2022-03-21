import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ posts }) {

  let latestPost = posts.reduce((latestItem, item) => new Date(`${item.frontmatter.date}Z`) > new Date(`${latestItem.frontmatter.date}Z`) ? item : latestItem)

  return (
    <div className="mt-12">
      <Head>
        <title>R-Verse Blog</title>
      </Head>
      <div className="md:text-5xl text-4xl mx-12 mb-5">
        <h1 className="font-bold mx-auto mb-5 text-center md:text-left lg:text-left">Latest Post 👇</h1>
        <hr className='lines' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-0 md:mx-12 lg:mx-12 mb-12'>

        <div key={latestPost.slug} className='card-content border border-gray-200 rounded-xl overflow-hidden flex flex-col md:mr-5 lg:mr-5 mb-5'>
          <Image
            width={600}
            height={340}
            alt={latestPost.frontmatter.title}
            src={`/${latestPost.frontmatter.socialImage}`}
          />
        </div>

        <div>
          <Link href={`/post/${latestPost.slug}`}>
            <a>
              <h1 className='md:text-3xl lg:text-3xl font-bold mb-2'>{latestPost.frontmatter.title}</h1>
            </a>
          </Link>
          <p className='text-sm text-slate-500 mb-5 post-date'>Posted: {latestPost.frontmatter.date}</p>
          <p className='text-sm'>
            {latestPost.frontmatter.tags.map((tag) =>
              <span className={'rounded-md text-white p-2 mr-1 ' + (tag === 'nextjs' ? 'bg-gray-500' : tag === 'javascript' ? 'bg-yellow-500' : tag === 'nodejs' ? 'bg-teal-500' : tag === 'programming' ? 'bg-blue-500' : 'bg-red-500')}>{tag}</span>
            )}
          </p>
        </div>

      </div>
      <div className="md:text-3xl text-2xl mx-12 mb-5">
        <h1 className="font-bold mx-auto mb-5 text-center">Other posts 💁</h1>
        <hr className='lines' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-4 md:p-0 md:mx-12 lg:mx-12'>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='card-content-other border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col dark-card'
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <p className='pt-5 pb-0 mb-1 px-5 text-slate-500 post-date'>Posted: {frontmatter.date}</p>
                <p className='px-5 mt-5 mb-3 text-sm'>
                  {frontmatter.tags.map((tag) =>
                    <span className={'rounded-md text-white p-2 mr-1 ' + (tag === 'nextjs' ? 'bg-gray-500' : tag === 'javascript' ? 'bg-yellow-500' : tag === 'nodejs' ? 'bg-teal-500' : tag === 'programming' ? 'bg-blue-500' : 'bg-red-500')}>{tag}</span>
                  )}
                </p>
                <h1 className='py-3 px-5 text-lg font-bold'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export async function getStaticProps() {

  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
