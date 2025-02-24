import { steps } from '../constants';
import Card from './Card';
import Img from './Img';

export default function Steps() {
  return (
    <Card title='Our Simple Steps' >
      <div className="flex mt-32 justify-between relative">
        <div className="absolute w-full top-0 flex z-40 justify-evenly px-6 pt-12">
          <Img src='/arc.svg' />
          <Img src='/arc-rotated.svg' className='-mr-9' />
          <Img src='/arc.svg' />
        </div>
        {steps.map(({ img, description, title }, index) => (
          <div key={index} className="flex max-w-72 items-center text-center flex-col">
            <Img src={img} className='h-32' />
            <h3 className="text-2xl text-gray-900 font-semibold mt-8">
              <span className="text-teal-500">{index}·  </span>
              {title}
            </h3>
            <p className="mt-4 text-gray-900 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
