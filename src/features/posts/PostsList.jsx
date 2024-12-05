import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import TimeAgo from "./TimeAgo";

import PostAuthor from "./PostAuthor";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className="flex flex-col space-y-3 mt-5" key={post.id}>
      <div className="flex justify-around space-x-1 border bg-slate-500 border-slate-400 rounded-md p-1">
        <h3 className="text-sm text-gray-200">{post.title}</h3>
      </div>
      <div className="border border-slate-400 rounded-md p-2">{post.body}</div>
      <div className="flex items-center justify-between">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.createdAt} />
      </div>
    </article>
  ));

  return (
    <div className="mb-2">
      <h2 className="text-2xl">Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default Posts;
