"use client"
import React, {useState} from "react";
import style from "./authLinks.module.css";
import Link from 'next/link';


const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  // Temporary
  const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>
            Write
          </Link>
          <span className={style.link}>Logout</span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/" className="link">
            Homepage
          </Link>
          <Link href="/" className="link">
            About
          </Link>
          <Link href="/" className="link">
            Contact
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
