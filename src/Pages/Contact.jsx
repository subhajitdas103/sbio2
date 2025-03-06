import React from "react";

const Contact = () => {
  return (
    <div className="contact p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p>Feel free to reach out to me via email:</p>
      <p>
        <a
          href="mailto:subhajitdas103@gmail.com"
          className="text-blue-500 hover:underline"
        >
          subhajitdas103@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
