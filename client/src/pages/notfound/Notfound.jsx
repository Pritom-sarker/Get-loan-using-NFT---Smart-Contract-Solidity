import { Link } from "react-router-dom";
import "./notfound.css";

export default function Notfound() {
  return (
    <div className="notFoundPage">
      <h2>404</h2>
      <h5>PAGE NOT FOUND :(</h5>
      <Link to="/">Back</Link>
    </div>
  );
}
