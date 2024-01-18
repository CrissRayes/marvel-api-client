import { useState, useEffect } from 'react';
import getData from '../helpers/getData';

const useGetData = (itemsPerPage) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const itemsPerPage = 9;
  const offset = 0;
  const limit = 100;

  useEffect(() => {
    const getDataFromApi = async () => {
      setLoading(true);
      const data = await getData(offset, limit);
      setData(data);
      setLoading(false);
    };

    getDataFromApi();
  }, []);

  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return { data, paginatedData, loading, page, setPage };
};

export default useGetData;
