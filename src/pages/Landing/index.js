import styled from "styled-components";

import { Link } from "react-router-dom";

const Landing = () => (
  <>
    <h1>Landing</h1>
    <Link to="/recipes">
      <button>Log in</button>
    </Link>
  </>
);

export default Landing;