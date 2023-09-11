"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {
  const [formValue, SetFormValue] = useState({
    email: "email@email.com",
    password: "123",
  });

  const router = useRouter();

  const inputChange = (e) => {
    SetFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue);
    if (formValue.email.length === 0) {
      alert("email Required");
    } else if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/Login", config);
      const json = await response.json();
      console.log(json["status"])
      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json['message'])
        router.replace("/")
      }
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="card p-5">
        <label>email:</label>
        <br />
        <input
          name="email"
          onChange={inputChange}
          type="email"
          className="border-2 rounded-lg p-2"
          value={formValue.email}
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
