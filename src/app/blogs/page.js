import ListItemShow from '@/components/ListitemShow';

const BlogsPageContainer = async () => {
  const fetchPostData = async () => {
    const data = await fetch(`https://dummyjson.com/posts`);
    const resData = await data.json();
    return resData;
  };
  const postData = await fetchPostData();
  //console.log('___postData', postData.posts);
  return (
    <div className="bodyWrap">
      <h1>Hello im Blogs Page</h1>
      {postData && postData.posts && postData.posts.length > 0
        ? postData.posts.map((item) => {
            return <ListItemShow data={item} />;
          })
        : 'No data Found'}
    </div>
  );
};
export default BlogsPageContainer;
