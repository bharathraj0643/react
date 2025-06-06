import {
  useState,
  createContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

export const dataContext = createContext();

import useFetch from "./customHooks/useFetch";
import LoadingOrError from "./ui/LoadingOrError";
import Card from "./home/Card";
import Footer from "./home/Footer";

const initialState = { count: 0, value: 0 };
function reducer(state, action) { 
  switch (action.type) {
    case "increment":
      return { count: state.count + 1};

    case "decrement":
      return { count: state.count - 1 };

    default:
      break;
  }
}

function Home() {
  const url = "http://localhost:3000/posts";
  const [posts, error] = useFetch(url);

  const [theme, setTheme] = useState(false);
  
  function themeMode() {
    setTheme(!theme);
  }
  // const [color, setColor] = useState("red");

  // useLayoutEffect(()=>{
  //   document.body.style.backgroundColor = color;
  // },[color])

  // function themeMode() {
  //   setColor("black");
  // }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="home" data-bs-theme={theme ? "dark" : "light"}>
        <h3>count : {state.count} , value : {state.value} </h3>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </button>

        <dataContext.Provider value={{}}>
          <button onClick={themeMode}>mode</button>
          <div className="container">
            <Link
              className="btn my-2"
              style={{ background: "#427D9D", color: "#DDF2FD" }}
              to="/app"
            >
              Keeper
            </Link>
            <div className="row justify-content-center">
              {!posts ? (
                <LoadingOrError error={error} />
              ) : (
                posts.map((post) => {
                  return (
                    <Card
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  );
                })
              )}
            </div>
          </div>
          <Footer />
        </dataContext.Provider>
      </div>
    </>
  );
}

export default Home;
