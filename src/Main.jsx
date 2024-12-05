import { Route, Routes } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

const main = () => {
  return (
    <div className="container px-5 mx-auto flex-grow flex flex-col">
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/post/add" element={<AddPostForm />} />
      </Routes>
    </div>
  );
};

export default main;
