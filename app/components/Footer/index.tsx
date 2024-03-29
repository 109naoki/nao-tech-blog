import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-2">
      <nav>
        <ul className="footer-2__list">
          <li>
            <a href="https://twitter.com/naoki_0525_109">
              <svg
                className="footer-2__sns-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/109naoki">
              <svg
                className="footer-2__sns-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385 0.6 0.113 0.793-0.258 0.793-0.577 0-0.285-0.01-1.04-0.016-2.04-3.338 0.725-4.042-1.61-4.042-1.61-0.546-1.387-1.332-1.757-1.332-1.757-1.087-0.743 0.082-0.729 0.082-0.729 1.205 0.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492 0.998 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.332-5.466-5.93 0-1.31 0.47-2.38 1.235-3.22-0.135-0.303-0.54-1.523 0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.957-0.267 1.98-0.399 3-0.405 1.02 0.006 2.043 0.138 3 0.405 2.295-1.552 3.3-1.23 3.3-1.23 0.645 1.653 0.24 2.873 0.105 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 0.435 0.375 0.81 1.102 0.81 2.22 0 1.605-0.015 2.895-0.015 3.29 0 0.32 0.195 0.697 0.8 0.577 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer-2__copyright">
        @ 2024 NAO TECH BLOG All rights reserved.
      </p>
    </footer>
  );
};
