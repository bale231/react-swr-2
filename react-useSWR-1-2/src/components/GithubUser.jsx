import React from "react";
import { Link } from "react-router-dom";
import useGithubUser from "../hooks/useGithubUser";

function GithubUsers() {
  const { users, error, isLoading, onFetchUser } = useGithubUser(null);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error === null ? (
        <>
          <h1 className="text-danger">404</h1>
          <h3>API not worked, retry again.</h3>
        </>
      ) : (
        ""
      )}
      {users && <h1>{users.login}</h1>}
      <button className="ruonded" onClick={onFetchUser}>
        Refresh API
      </button>
      <button>
        <Link className="text-decoration-none" to="/">
          Back to home
        </Link>
      </button>
    </>
  );
}

export default GithubUsers;
