export const Card = ({ name, src, description }) => {
  return (
    <div className='card mb-4 shadow-sm mx-auto'>
      <div
        className='card-img'
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 1%',
          height: '250px',
        }}
      ></div>
      <div className='card-body'>
        <h5>{name}</h5>
        <p>{description || 'Description not avaliable'}</p>
      </div>
    </div>
  );
};
