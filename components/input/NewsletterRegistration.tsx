"use client"
import { FormEvent, useRef } from "react";

import styles from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event: FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={styles.newsletter}>
      <h2>欢迎注册，并加入讨论!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="请输入您的邮箱~"
            aria-label="请输入您的邮箱~"
            ref={emailInputRef}
          />
          <button>注册</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
