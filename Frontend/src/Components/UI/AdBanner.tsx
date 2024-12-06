type SrcProps = {
  url: string;
};

const AdBanner = ({ url }: SrcProps) => {
  return (
    <div className='ad-banner'>
      <img src={url} alt='ad banner'></img>
      <p>Lys upp varje omtanke.</p>
    </div>
  );
};

export default AdBanner;
