import { FaArrowRight } from "react-icons/fa";
import Btn from './Button';

export default function Hero() {
  return (
    <section className="max-w-max mt-4 py-32 px-40 mx-auto">
      <div className="flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl leading-snug font-bold text-gray-900">
            Finding the <span className='text-teal-500'>Perfect
              Nanny</span> in the <span className='text-teal-500'>Middle East </span>
            Just Got Easier
          </h1>
          <p className="text-lg text-gray-900 font-semibold font-sans mt-3">
            We connect you with curated & professional verified nannies.
          </p>
          <Btn size="xl" variant='primary' className="mt-9 w-96" >
            Find your perfect Nanny <FaArrowRight className="inline-block ml-1" />
          </Btn>
        </div>
      </div>
    </section>
  );
}
