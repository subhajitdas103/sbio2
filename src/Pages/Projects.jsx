import React from "react";

const Projects = () => {
  return (
    <div className="projects p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-6">
        {/* Education Management Platform */}
        <li className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            Education Management Platform (2023 – Present)
          </h2>
          <p className="mt-2">
            A web application designed to streamline education management by
            connecting students, teachers, and administrators on a single
            platform. Built with React.js, Laravel, and MySQL, it offers secure
            authentication, real-time communication, and role-based access
            control. Features include student progress tracking, lesson
            management, and attendance monitoring.
          </p>
          <h3 className="mt-3 font-semibold">Key Technologies Used:</h3>
          <ul className="list-disc ml-6">
            <li>Frontend: React.js (Vite), Tailwind CSS, Redux, React Query, React Router</li>
            <li>Other Tools: Git & GitHub, Postman</li>
          </ul>
        </li>

        {/* Tournament Management Web Application */}
        <li className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            Tournament Management Web Application (2024 – Present)
          </h2>
          <p className="mt-2">
            A web application for efficiently managing and organizing tournament
            brackets. Users can create, customize, and track tournament progress
            in real-time. Built with React.js, Laravel, and MySQL, it provides a
            seamless user experience with secure authentication, scalability,
            and performance optimization.
          </p>
          <h3 className="mt-3 font-semibold">Key Technologies Used:</h3>
          <ul className="list-disc ml-6">
            <li>Frontend: React.js (Vite), Tailwind CSS, Redux, React Query, Axios</li>
            <li>Other Tools: Git & GitHub, Postman</li>
          </ul>
        </li>

        {/* Other Projects */}
        <li className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">E-commerce Site</h2>
          <p className="mt-2">
            A full-fledged e-commerce website with secure payment gateways,
            dynamic product listing, and order management.
          </p>
        </li>

        <li className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Portfolio Website</h2>
          <p className="mt-2">
            A personal portfolio website showcasing my skills, projects, and
            experience with smooth animations and responsiveness.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
