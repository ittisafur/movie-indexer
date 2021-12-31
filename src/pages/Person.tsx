import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Person = () => {
  const [person, setPerson] = useState<any>([]);
  const [related, setRelatedMovies] = useState([]);
  const [clamped, setClamped] = useState<boolean>(true);
  const { id } = useParams();

  const callApis = async () => {
    const { data } = await axios.get(`person/${id}`);
    const { data: related } = await axios.get(`person/${id}/movie_credits`);
    setPerson(data);
    setRelatedMovies(related.cast);
  };

  useEffect(() => {
    callApis();
  }, []);
  // axios
  //   .get(`person/${this.props.match.params.id}`)
  //   .then((res) => this.setState({ person: res.data }));

  // axios
  //   .get(`person/${this.props.match.params.id}/movie_credits`)
  //   .then((res) => this.setState({ related_movies: res.data.cast }));

  return (
    <div>
      <div className='flex-none md:flex md:flex-row space-x-3 mt-7 md:mt-0'>
        <div className='md:w-4/12 '>
          <img
            src={`https://image.tmdb.org/t/p/h632${person?.profile_path}`}
            alt={person?.name}
          />
        </div>
        <div className='md:w-8/12 space-y-2'>
          <h2 className='font-bold text-3xl mt-2'>{person?.name}</h2>
          <h4 className='text-2xl'>Biography</h4>
          <div>
            <p className={`text-base ${clamped && 'line-clamp-3'}`}>
              {person?.biography}
            </p>
            <button
              className='font-bold underline'
              onClick={() => setClamped(!clamped)}
            >
              {clamped ? 'Read More' : 'Show less'}
            </button>
          </div>
          <h3 className='text-xl flex-none'>Known for</h3>

          <div className='md:flex md:overflow-y-auto space-x-3'>
            {related.slice(0, 6).map((relate) => (
              <div className='flex-none' key={relate.id}>
                <Link to={`/movies/${relate.id}`}>
                  <img
                    className='md:w-[154px] w-full '
                    src={`https://image.tmdb.org/t/p/w154${relate.poster_path}`}
                    alt={relate.title}
                  />
                </Link>
                <h5 className='text-base text-center my-3 md:my-0'>
                  {relate.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
