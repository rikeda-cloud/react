"use client";

import Header from '@/components/Header';
import YupForm from "@/components/YupForm";
import * as yup from 'yup';


const loginSchema = yup.object({
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
});

const loginFields = [
  { name: "email", label: "Email", type: "email", placeholder: "example@gmail.com" },
  { name: "password", label: "Password", type: "password", placeholder: "P@ssW0rd" },
];

function LoginPage() {
  const handleLogin = (data: unknown) => console.log("Login Data: ", data);
  const title = "Login";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-12">
      <Header />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          {title}
        </h1>
        <div>
          <YupForm
            fields={loginFields}
            schema={loginSchema}
            onSubmit={handleLogin}
            submitButtonText={title}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
