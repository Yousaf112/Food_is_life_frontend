import React from "react";

const NavbarDashboardRes = () => {
  return (
    <div class="bg-gray_light">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" class="flex items-center">
            <img
              src="econ-textless.svg"
              class="h-6 mr-3 sm:h-9"
              alt="FoodisLife Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              Food is Life
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="/"
              class="text-sm font-medium text-black-600 dark:text-blue-500 hover:underline"
            >
              SignOut
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="/"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="Restaurants"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="NGOs"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  NGOs
                </a>
              </li>
              <li>
                <a
                  href="Donations"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Donations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDashboardRes;
