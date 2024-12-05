import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id == userId);

  return (
    <div className="flex space-x-4 items-center">
      <img
        className="border block h-16 border-slate-300 rounded-full"
        src={`/uploads${author ? author.imgUrl : "/profile/unkown.png"}`}
        alt=""
      />
      <span>by {author ? author.name : "Unkown author"}</span>
    </div>
  );
};

export default PostAuthor;
