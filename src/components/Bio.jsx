import { BIO } from "../constants";

const Bio = () => {
  return (
    <section className='flex flex-col max-w-4xl gap-12 pt-20 max' id='bio'>
      <h2 className='text-4xl font-semibold text-center lg:text-4xl'>
        About Me
      </h2>
      <div>
        {BIO.map((bio, index) => (
          <p className='mb-4 text-lg lg:text-xl' key={index}>
            {bio}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
