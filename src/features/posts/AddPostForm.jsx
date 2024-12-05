import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const errorRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && body && userId) {
      dispatch(postAdded(title, body, userId));

      setTitle("");
      setBody("");

      navigate("/");
    } else {
      errorRef.current.classList.remove("hidden");
    }
  };

  const canSave = Boolean(title) && Boolean(body) && Boolean(userId);

  console.log(canSave);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex flex-col mt-5 space-y-5">
      <h2 className="text-2xl">Add a new Post</h2>
      <p
        ref={errorRef}
        className="hidden border border-red-300 rounded-md p-3 bg-red-200"
      >
        You need to provide a title and a body
      </p>
      <form className="flex flex-col space-y-3">
        <label htmlFor="postTitle">Post Title : </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="p-2 text-slate-600"
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={body}
          onChange={onBodyChanged}
          className="min-h-28 p-2 text-slate-600"
        />

        <label htmlFor="userId">Author :</label>

        <select
          className="p-2 text-slate-600"
          name="userId"
          id="userId"
          value={userId}
          onChange={onUserIdChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>

        <button
          className="border p-2 rounded-md bg-slate-600 hover:bg-slate-700 active:scale-95 disabled:bg-slate-200 disabled:scale-100 disabled:text-slate-700"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onSavePostClicked();
          }}
          disabled={!canSave}
        >
          Save form
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
