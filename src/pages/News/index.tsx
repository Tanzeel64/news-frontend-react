import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCardSkeleton from '../../components/NewsCardSkeleton';
import NewsCard from '../../components/NewsCard';
import useQuery from '../../hooks/useQuery';
import { INews } from '../../types/news';

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const query = useQuery();

  useEffect(() => {
    setNewsList([]);
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/topnews/${query?.get('type') ?? 'us'}`
      );
      if (response?.data?.results) {
        setNewsList(response?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {newsList?.length > 0
        ? newsList
            .filter((item: INews) => item?.title && item?.url !== 'null')
            .map((news) => <NewsCard news={news} />)
        : [1, 2, 3, 4, 5, 6].map((key) => <NewsCardSkeleton key={key} />)}
    </div>
  );
};

export default News;
