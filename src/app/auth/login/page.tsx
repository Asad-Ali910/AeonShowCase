import IconInput from "@/components/auth/IconInput";
import { FaUser } from "react-icons/fa";
import React from "react";
import { MdLockPerson } from "react-icons/md";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="mt-[15vh] bg-background-darker-focused justify-center-safe place-self-center-safe p-8 rounded-lg shadow-lg">
      <h1 className="font-bold text-4xl text-center">Login</h1>
      <form className="mt-4 space-y-4 gap-3">
        <IconInput
          Label="Username: "
          name="Username"
          Placeholder="Username"
          InputType="text"
          required={true}
          className="text-xl"
          Icon={<FaUser />}
        />
        <div>
          <IconInput
            Label="Password: "
            name="Password"
            InputType="password"
            Placeholder="Password"
            required={true}
            className="text-xl"
            Icon={<MdLockPerson />}
          />
          <Link
            href={"/auth/reset-password"}
            className="font-bold text-error w-full text-end"
          >
            forget password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-sm
          w-full
              text-xl font-bold hover:bg-primary-dark transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
