import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

export default function PostPage({ frontmatter, content }) {
    return (
        <div className='prose mx-auto dark:text-white'>
            <Head>
                <title>{frontmatter.title + ' | R-Verse Blog'}</title>
            </Head>
            <h1 className='dark:text-white'>{frontmatter.title}</h1>
            <p className='text-sm text-slate-500 dark:text-white mt-1'>Author: Ragillio Aji</p>
            <p className='text-sm text-slate-500 dark:text-white mt-1'>Posted: {frontmatter.date}</p>
            <p className='text-sm text-slate-500 dark:text-white mt-1'>Tags: {frontmatter.tags.map((tag) =>
                <span className={'rounded-sm shadow-md p-1 mr-1 text-white ' + (tag === 'nextjs' ? 'bg-gray-500' : tag === 'javascript' ? 'bg-yellow-500' : tag === 'nodejs' ? 'bg-teal-500' : tag === 'programming' ? 'bg-blue-500' : 'bg-red-500')}>{tag}</span>
            )}</p>
            <div className='dark:text-white' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    );
}

export async function getStaticPaths() {

    const files = fs.readdirSync('posts');

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}