// src/components/RegistrationForm/RegistrationForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";

const RegistrationForm = ({ setVisibleReg, setVisibleLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(email, password));
    setVisibleReg(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={() => setVisibleLog(true)}>
        Log In
      </button>
    </form>
  );
};

export default RegistrationForm;
