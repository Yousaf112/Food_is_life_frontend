import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <Link to="/SignupForRestaurants">
        <button class="justify-center bg-gray_greenish hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Register your Restaurant
        </button>
      </Link>
      <Link to="/SignupForNGO">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Register your NGO
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
