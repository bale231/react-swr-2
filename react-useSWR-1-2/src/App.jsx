import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>This is a Home Page, go to user!!</h1>
      <button>
        <Link className="text-decoration-none" to="/users">
          Go to User Github
        </Link>
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
