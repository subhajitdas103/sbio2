import React from 'react';

const About = () => {
  return (
    <div className="about p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-center max-w-lg mb-8">
        I'm a full-stack developer with experience in React.js, Laravel, and MySQL. I love creating intuitive user interfaces and building scalable web applications.
      </p>

      <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center border">
          <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
          <p className="text-gray-600">2019 - 2022</p>
          <p className="text-gray-700 font-medium">82%</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center border">
          <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-gray-600">2015 - 2018</p>
          <p className="text-gray-700 font-medium">64.93%</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center border">
          <h3 className="text-xl font-semibold">Higher Secondary (WBCHSE)</h3>
          <p className="text-gray-600">2013 - 2015</p>
          <p className="text-gray-700 font-medium">72%</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center border">
          <h3 className="text-xl font-semibold">Secondary (WBBSE)</h3>
          <p className="text-gray-600">2012 - 2013</p>
          <p className="text-gray-700 font-medium">62%</p>
        </div>
      </div>
    </div>
  );
};

export default About;
