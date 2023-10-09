import React from 'react';
import Icons from '../../resources/Icons';
import { INews } from '../../types/news';

export interface NewsCardProps {
  news: INews;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div
      key={news.title}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href={news?.url} target="_blank" rel="noreferrer" className="h-64">
        <img
          className="rounded-t-lg"
          src={news?.multimedia?.[0]?.url}
          alt={news?.title}
        />
      </a>
      <div className="p-5">
        <a href={news?.url} target="_blank" rel="noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {news?.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news?.abstract}
        </p>
        <a
          href={news?.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <Icons name="ArrowRight" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
