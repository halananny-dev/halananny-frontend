import { reasons } from '../constants';
import Card from './Card';
import Img from './Img';

export default function WhyChooseUs() {
  return (
    <Card title='Why Choose Us?' >
      <div className="flex mt-20 items-center gap-8 justify-between">
        {reasons.map(({ img, description, title }, index) => (
          <div key={index} className="flex flex-col text-center items-center flex-1">
            <Img src={img} />
            <h3 className="text-40 text-gray-900 font-bold mt-8">{title}</h3>
            <p className="mt-4 text-gray-900">{description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
