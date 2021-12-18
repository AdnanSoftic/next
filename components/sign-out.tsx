import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        {" "}
        Sign Out
      </button>
    </>
  );
}
