import React from "react";
import "./Home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Home({ data, setData }) {
  const history = useHistory();
  const checkName = (string, n) => {
    if (string.length > n) {
      var re = string.substr(n, string.length);
      return string.replace(re, "...");
    } else {
      return string;
    }
  };

  return (
    <div>
      <main>
        {data.length != 0 ? (
          data.map((items) => (
            <div
              id="movies"
              onClick={() => {
                localStorage.setItem("url", items.url);
                history.push("/info/"+items.type.replace(" ","_"));
              }}
            >
              <img src={items.img} alt="" />
              <span>
                <h4>{checkName(items.title, 15)}</h4>
              </span>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    </div>
  );
}
