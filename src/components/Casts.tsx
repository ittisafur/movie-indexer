import { Link } from 'react-router-dom';

const Casts = (prop) => {
  const { movieId, casts } = prop;

  const convertToSlug = (e) => {
    return e
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
  return (
    <div>
      <h1 className='mt-5 text-xl font-mont uppercase font-semibold'>
        Top Casts
      </h1>
      <ul className='flex-none md:flex md:overflow-x-auto pb-3 font-pop items-center'>
        {casts
          .filter((c) => c.profile_path != null)
          .slice(0, 10)
          .map((res) => (
            <li
              className='md:w-1/6 w-full flex-none my-3 ml-3 mr-1 pb-2'
              key={res.id}
            >
              <Link to={`/person/${res.id}/${convertToSlug(res.name)}`}>
                <img
                  className='w-full'
                  src={`https://image.tmdb.org/t/p/w185${res.profile_path}`}
                  alt={res.name}
                />
              </Link>
              <p className='pt-3 font-bold'>{res.name}</p>

              <p className=''>{res.character}</p>
            </li>
          ))}
        <Link to={`/${movieId}/casts`} className=' block px-4 flex-none w-1/10'>
          View More
        </Link>
      </ul>
    </div>
  );
};

export default Casts;
