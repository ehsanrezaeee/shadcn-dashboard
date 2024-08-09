"use client";
import React from "react";

const Loading = () => (
  <div className="bg-gray-50 h-full dark:bg-slate-900 pb-[5rem] animate-pulse">
    <div className="sticky top-0 inset-x-0 bg-white flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full p-2 text-sm lg:ps-64 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      <nav
        className="flex basis-full items-center w-full mx-auto px-1 py-1 backdrop:blur-3xl"
        aria-label="Global"
      >
        <div className="flex items-center lg:hidden mx-2">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar-2"
            aria-controls="application-sidebar-2"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
          </button>
        </div>
        <div className="me-5 lg:me-0 lg:hidden">
          <div className="bg-gray-200 h-12 w-12 rounded-full"></div>
        </div>

        <div className="flex items-center justify-end ms-auto sm:justify-between gap-x-2 sm:gap-x-4 sm:order-3">
          <div className="bg-gray-200 w-10 h-2"></div>

          <div className="inline-flex flex-row items-center justify-end gap-2 hs-dropdown relative [--placement:bottom-right] ms-3">
            <button
              id="hs-dropdown-with-header"
              type="button"
              className="p-1 border-1 border-[rgba(0,0,0,0.05)] shadow-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-800 hover:bg-[#fafafa] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:bg-[#0F172A] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <div className="bg-gray-200 w-14 h-14 rounded-full"></div>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div
      id="application-sidebar"
      className={`hidden lg:block hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-56 lg:w-16 lg:hover:w-56 xl:w-56 bg-gray-300 pt-1 pb-10 lg:translate-x-0 lg:bottom-0 dark:bg-gray-800 dark:border-gray-700`}
    >
      <div className="xl:px-6 mb-1">
        <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
      </div>

      <nav
        className="hs-accordion-group p-2 pt-4 w-[4rem] h-[10rem] flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5 lg:flex lg:flex-col lg:items-center xl:block">
          <li className="lg:w-full">
            <div
              className={`hidden lg:flex lg:items-center mx-1 items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-blue-50 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  `}
            >
              <span></span>
            </div>
          </li>
          <li className="lg:w-full">
            <div
              className={`hidden lg:flex lg:items-center mx-1 items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-blue-50 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  `}
            >
              <span className={` hidden xl:block w-10 h-4`}></span>
            </div>
          </li>
          <li className="lg:w-full">
            <div
              className={`hidden lg:flex lg:items-center mx-1 items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-blue-50 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  `}
            >
              <span className={` hidden xl:block w-10 h-4`}></span>
            </div>
          </li>
          <li className="lg:w-full">
            <div
              className={`hidden lg:flex lg:items-center mx-1 items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-blue-50 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  `}
            >
              <span className={` hidden xl:block w-10 h-4`}></span>
            </div>
          </li>
        </ul>
        <div className="text-left absolute bottom-14 xl:bottom-2 right-3 xl:right-[50%] translate-x-[50%] rotate-90 xl:rotate-0">
          <span className="text-gray-300 text-[12px] my-1 w-full text-nowrap">
            Version 0.0.9 - steach © 2024
          </span>
        </div>
      </nav>
    </div>
    <div className="w-full pt-10 px-2 sm:px-6 md:px-8 lg:ps-24 xl:ps-64 bg-white">
      <div className="grid grid-cols-12 gap-6 mx-auto app-container"></div>
    </div>
  </div>
);

export default Loading;
