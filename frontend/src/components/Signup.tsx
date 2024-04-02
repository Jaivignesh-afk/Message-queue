import { useState } from "react";
import type { FormEvent } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phno, setPhno] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phno:
          <input
            type="tel"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Retype Password:
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
