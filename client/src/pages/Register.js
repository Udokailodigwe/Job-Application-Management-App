import { useState, useEffect } from "react";
import { logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    console.log(e);
  };

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Wrapper className="full-page">
      <h1>Register page</h1>
    </Wrapper>
  );
};

export default Register;
