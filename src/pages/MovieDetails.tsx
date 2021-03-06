import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Casts from '../components/Casts';

const StyledBanner = styled.div<any>`
  background: url('https://image.tmdb.org/t/p/original/${(props) =>
      props.poster}')
    center center no-repeat;
  background-size: cover;
  min-height: calc(100vh - 105px);
`;
const GradientDiv = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(5.49%, 12.16%, 12.94%, 1) 150px,
    rgba(5.49%, 12.16%, 12.94%, 0.84) 100%
  );
`;

/**
 * MovieDetails.
 *
 * @param {Object} props
 */
function MovieDetails() {
  const [loading, setLoading] = useState<boolean>();
  const [movie, setMovie] = useState<any>({});
  const [credits, setCredits] = useState<[]>([]);
  const { id } = useParams();

  const callApis = async () => {
    setLoading(true);

    const { data: movie } = await axios.get(`movie/${id}`);
    const {
      data: { cast },
    } = await axios.get(`movie/${id}/credits`);

    setMovie(movie);
    setCredits(cast);

    setLoading(false);
  };

  useEffect(() => {
    callApis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <StyledBanner
        poster={movie.backdrop_path}
        className='relative flex-none md:flex items-center justify-center h-full'
      >
        <GradientDiv className='h-full w-full'>
          <div className='grid md:grid-cols-12 grid-col-1 gap-3 p-4 md:p-0 h-full'>
            <div className='md:col-span-4 col-span-1'>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className='md:col-span-8 col-span-1 transform translate-y-[50px] relative font-pop pb-24 md:pb-0'>
              <h1 className='text-2xl font-semibold tracking-wider uppercase '>
                {movie.original_title}
              </h1>
              <p className='italic mt-3'>{movie?.tagline}</p>
              <p className='my-3 '>
                Release Date: {movie.release_date} |{' '}
                <span>Runtime: {(movie.runtime / 60).toFixed(2)} hours</span>
              </p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </GradientDiv>
      </StyledBanner>
      <section>
        {credits.length > 0 && <Casts movieId={movie.id} casts={credits} />}
      </section>
    </div>
  );
}

export default MovieDetails;
