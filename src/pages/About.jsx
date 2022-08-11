import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">More information</div>
        <div class="collapse-content">
          <p>
            {' '}
            A React app to search GitHub profiles and see profile details. This project is part of
            the{' '}
          </p>
          <p className="text-lg text-gray-400">
            Version <span className="text-white">1.0.0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
