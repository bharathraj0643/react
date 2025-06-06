import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

function Post() {
  const { id } = useParams();
  const url = "http://localhost:3000/posts";
  const [post, error] = useFetch(url + "/" + id);

  return (
    <>
      {post && (
        <div className="container m-5">
          <p>post : {id}</p>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
        </div>
      )}
    </>
  );
}

export default Post;
