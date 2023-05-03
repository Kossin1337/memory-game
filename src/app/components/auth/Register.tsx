import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { signIn } from "next-auth/client";

import { motion } from "framer-motion";

import ModalTemplate from "../modal/ModalTemplate";

import "./Register.scss";

interface IRegister {
  isOpen: boolean;
  onClose: () => void;
}

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const Login: React.FC<IRegister> = ({ isOpen, onClose }: IRegister) => {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // const router = useRouter();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await signIn("register", {
    //   name: form.name,
    //   email: form.email,
    //   password: form.password,
    //   redirect: false,
    // });
    // if (response.error) {
    //   setError(response.error);
    // } else if (response.ok) {
    //   router.push("/dashboard");
    // }
  };

  return (
    <ModalTemplate key="register-modal" isOpen={isOpen} onClose={onClose}>
      <div className="register-modal">
        <h2 className="modal-header">LOGIN</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          EXIT
        </button>
        {error && <p>{error}</p>}
      </div>
    </ModalTemplate>
  );
};

export default Login;
