import styles from './Blogdetail.module.scss';
import Link from 'next/link';

export const fetchBlogDetailById = async (blogId) => {
  const data = await fetch(`https://dummyjson.com/post/${blogId}`);
  const resData = await data.json();
  return resData;
};

export async function generateMetadata({ params }) {
  const blogId = await params.id[0];
  const blgoData = await fetchBlogDetailById(blogId);
  const keyword = blgoData.tags.map((tag) => `${tag}`);
  return {
    title: blgoData.title,
    description: blgoData.body,
    keywords: keyword,
    alternates: {
      canonical: `/blogs/${blgoData.id}`,
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
  };
}

const BlogDetails = async ({ searchParams, params }) => {
  const blogId = await params.id[0];
  const blogQuery = await searchParams;
  const blgoData = await fetchBlogDetailById(blogId);

  return (
    <div className={styles.blogDetailWrap}>
      <h1>Blog Details of id :- {blogId}</h1>
      <h2>Title :- {blgoData.title}</h2>
      <p>Descriptoin :- {blgoData.body}</p>
      <div className={styles.tags}>
        {blgoData.tags && blgoData.tags.length > 0
          ? blgoData.tags.map((item) => {
              return <span>{item}</span>;
            })
          : ''}
      </div>

      <Link href={`/blogs`}>Back to Blogs details page</Link>
      <br />
      {JSON.stringify(blogQuery)}
    </div>
  );
};

export default BlogDetails;
