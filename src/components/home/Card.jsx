// import { useContext } from "react";
// import { dataContext } from "../Home";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  
  return (
    <div
      className="card m-3"
      style={{ width: "18rem" }}
      onClick={() => {
        navigate("/post/" + props.id);
      }}
    >
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">{props.body}</p> */}
      </div>
    </div>
  );
}

export default Card;
