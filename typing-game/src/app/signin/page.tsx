"use client";

import * as yup from "yup";
import Header from "@/components/Header";
import YupForm from "@/components/YupForm";

const signinSchema = yup.object({
  username: yup.string().label("Username").required().min(3),
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
});

const signinFields = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "rikeda-cloud",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@gmail.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "P@ssW0rd",
  },
];

function SigninPage() {
  const handleSignin = (data: unknown) => console.log("Signin Data: ", data);
  const title = "Sign In";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-12">
      <Header />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">{title}</h1>
        <div>
          <YupForm
            fields={signinFields}
            schema={signinSchema}
            onSubmit={handleSignin}
            submitButtonText={title}
          />
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
