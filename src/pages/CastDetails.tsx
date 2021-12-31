import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CastDetails() {
  const [credits, setCredits] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  const { id } = useParams();

  /**
   * callCredits.
   */
  const callCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(`movie/${id}/credits`);

    setCredits(cast);
  };

  useEffect(() => {
    callCredits();
  }, []);

  const convertToSlug = (e) => {
    return e
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  return (
    <div>
      <h1 className='text-2xl mb-5'>Casts</h1>
      {credits
        ?.filter((c) => c.profile_path != null)
        .map((credit) => (
          <div key={credit?.credit_id}>
            <div className='flex mb-4'>
              <Link to={`/person/${credit?.id}/${convertToSlug(credit?.name)}`}>
                <img
                  className='rounded'
                  src={`https://image.tmdb.org/t/p/w66_and_h66_face${credit?.profile_path}`}
                />
              </Link>
              <h2 className='flex items-center ml-3'>
                <strong>{credit?.name} </strong> {credit?.character}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CastDetails;
