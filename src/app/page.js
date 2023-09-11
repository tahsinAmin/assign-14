"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {
  const [formValue, SetFormValue] = useState({
    username: "ABC",
    password: "123",
  });

  const router = useRouter();

  const inputChange = (e) => {
    SetFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValue.username.length === 0) {
      alert("username Required");
    } else if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/Login", config);
      const json = await response.json();
      console.log("=> json =", json);
      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="card p-5">
        <label>username:</label>
        <br />
        <input
          name="username"
          onChange={inputChange}
          type="text"
          className="border-2 rounded-lg p-2"
          value={formValue.username}
        />
        <br />
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input
          name="password"
          onChange={inputChange}
          type="password"
          className="border-2 rounded-lg p-2"
          value={formValue.password}
        />
        <br />
        <br />
        <input
          className="btn btn-primary mt-3 bg-blue-500 text-gray-100 p-2"
          type="submit"
          value="Login"
        />
      </form>
    </main>
  );
}
