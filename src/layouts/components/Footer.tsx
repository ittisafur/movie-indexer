const Footer = () => {
  return (
    <div className='mt-6 md:flex md:justify-between'>
      <div>
        Powered by{' '}
        <a href='https://themoviedb.org' rel='noreferrer' target='_blank'>
          {' '}
          TMDB
        </a>
      </div>
      <div>
        Made by{' '}
        <a href='https://ittisafur.com' rel='noreferrer' target='_blank'>
          <span className='underline'>Ittisafur</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
