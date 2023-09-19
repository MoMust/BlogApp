import React from "react";
import style from "./authLinks.module.css";
import Link from 'next/link';
const AuthLinks = () => {

  // Temporary
  const status = "authenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={style.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
