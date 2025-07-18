"use client";

import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import SimpleButton from "./SimpleButton";

function HomePageButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center space-y-8">
      <LanguageSwitcher />
      <SimpleButton
        height={100}
        width={200}
        textColor="#FFFFFF"
        backgroundColor="#2563F0"
        onClick={() => router.push("/game")}
      >
        Play
      </SimpleButton>
      <div className="flex space-x-4">
        <SimpleButton
          height={60}
          width={120}
          onClick={() => router.push("/login")}
        >
          Login
        </SimpleButton>
        <SimpleButton
          height={60}
          width={120}
          onClick={() => router.push("/signin")}
        >
          Signin
        </SimpleButton>
      </div>
    </div>
  );
}

export default HomePageButtons;
