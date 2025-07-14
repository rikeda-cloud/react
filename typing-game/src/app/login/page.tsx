"use client";

import Header from '@/components/Header';
import YupForm from "@/components/YupForm";
import * as yup from 'yup';


const loginSchema = yup.object({
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
});

const loginFields = [
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

function LoginPage() {
  const handleLogin = (data: any) => console.log("Login Data: ", data);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-8 py-12">
      <Header />

      <section className="h-5/6 flex items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          Sign In
        </h1>
      </section>

      <div>
        <YupForm fields={loginFields} schema={loginSchema} onSubmit={handleLogin} />
      </div>
    </div>
  );
}

export default LoginPage;
