import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h2>OOPS! Page Not Found</h2>
        <p>The page you are trying to access does not exist.</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
