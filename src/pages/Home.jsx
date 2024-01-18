import { useState } from 'react';
import { Card } from '../components/Card';
import useGetData from '../hooks/useGetData';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

export const Home = () => {
  const itemsPerPage = 9;
  const { data, paginatedData, loading, page, setPage } =
    useGetData(itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = !search
    ? paginatedData
    : data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className='container'>
      <Navigation
        search={search}
        handleSearch={handleSearch}
      />
      {loading && <span>🤪 Cargando...</span>}
      <div className='flex card-container'>
        {searchResult.map((character) => (
          <Card
            key={character.id}
            {...character}
          />
        ))}
      </div>
      <div className='pagination'>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>
        {Array.from({ length: 3 }, (_, i) => page - i - 1)
          .filter((pageNumber) => pageNumber >= 1)
          .map((pageNumber) => (
            <Link
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber} |{' '}
            </Link>
          ))
          .reverse()}
        <div>Página {page}</div>
        {Array.from(
          { length: Math.min(3, totalPages - page) },
          (_, i) => page + i + 1
        ).map((pageNumber) => (
          <Link
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber} |{' '}
          </Link>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={paginatedData.length < 9}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
