import React from "react";
import { sam, bg, ele } from "./Images";
import { Link } from "react-router-dom";
import { signInWithRedirect, auth, provider } from "../config";
import "../styles/Mobile.css";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const UsersImage = [
    {
      id: 1,
      Title: <img id="users" src={sam} alt="User1" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="user2" />,
    },
    {
      id: 1,
      Title: <img id="users" src={ele} alt="User3" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="User4" />,
    },
  ];
  const listUsers = UsersImage.map((img) => <li key={img.id}>{img.Title}</li>);
  const signIn = (event) => {
    event.preventDefault();
    //signInWithRedirect(auth, provider);
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="page">
      <Helmet>
        <title>AltSchool</title>
        <meta name="description" content="AltSchool second semester Exam" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <h1 className="h1">
          Join AltSchool Africa <br />
          <span className="spanOne"></span>{" "}
        </h1>
        <div className="users-img">
          <span>{listUsers}</span>
        </div>
        <p>You and 8 others have joined</p>
        <div className="btn">
          <button onClick={signIn}>
            <FontAwesomeIcon icon={faEnvelope} />
            Sign in With Google
          </button>
          <h6>Or</h6>
          <button>
            <Link id="Link" to="/display">
              Check Pagination
            </Link>
          </button>{" "}
          <br />
          <button>
            <Link id="Link" to="/error">
              Check ErrorPage
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
