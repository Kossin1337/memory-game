import React, { useState } from "react";
// import { signIn, signOut, useSession } from 'next-auth/client';

import { motion } from "framer-motion";

import ModalTemplate from "../modal/ModalTemplate";

import "./Login.scss";

interface ILogin {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<ILogin> = ({ isOpen, onClose }: ILogin) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [session, loading] = useSession();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await signIn("credentials", { email, password });
  };

  const handleSignOut = async () => {
    // await signOut();
  };

  // const handleSignOut = async () => {
  //   await signOut();
  // };

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <div className="login-modal">
        <h2 className="modal-header">LOGIN</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          EXIT
        </button>
      </div>
    </ModalTemplate>
  );
};

export default Login;
