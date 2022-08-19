import React from "react";

export default function MainConent(props) {
  console.log(props)
  return (
    <div className={props.lightMode ? "light" : "maincontent"}>
      <h1>Fun Facts About React</h1>
      <ol>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB" />
          </svg>
          Was first released in 2013
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB" />
          </svg>
          Was originally created by Jordan Walke
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB" />
          </svg>
          Has well over 100K stars on GitHub
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB" />
          </svg>
          Is maintained by Facebook
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.80333" cy="4.80333" r="4.80333" fill="#61DAFB" />
          </svg>
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ol>
    </div>
  );
}
