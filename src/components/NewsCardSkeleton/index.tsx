import React from 'react';
import Icons from '../../resources/Icons';

const NewsCardSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="rounded-t-lg flex items-center justify-center h-64 mb-1 bg-gray-300 dark:bg-gray-700">
        <Icons name="Image" />
      </div>
      <div className="p-5">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-10"></div>
        {[1, 2, 3, 4].map((key) => (
          <div
            key={key}
            className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
          ></div>
        ))}
        <div className="flex items-center mt-6 space-x-3">
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
