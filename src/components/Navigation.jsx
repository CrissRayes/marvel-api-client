export const Navigation = ({ search, handleSearch }) => {
  return (
    <nav className='navigation'>
      <h1> Personajes de Marvel</h1>
      <input
        className='form-control'
        type='text'
        placeholder='Buscar personaje'
        aria-label='search'
        value={search}
        onChange={handleSearch}
      />
    </nav>
  );
};
