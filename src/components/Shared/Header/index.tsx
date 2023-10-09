import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const storiesTypes = [
    {
      label: 'Arts',
      value: 'arts',
    },
    {
      label: 'Home',
      value: 'home',
    },
    {
      label: 'Science',
      value: 'science',
    },
    {
      label: 'US',
      value: 'us',
    },
    {
      label: 'World',
      value: 'world',
    },
  ];

  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="font-bold text-xl text-indigo-600">
              News Time
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 mr-16 md:mt-0"
            id="navbar-collapse"
          >
            {storiesTypes.map((type) => (
              <Link
                to={`/?type=${type.value}`}
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                {type.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
