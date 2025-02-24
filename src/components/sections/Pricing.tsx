import { FaCheck } from 'react-icons/fa';
import { plans } from '../constants';
import Btn from './Button';
import Card from './Card';

export default function Pricing() {
  return (
    <Card title="Plans & Pricing">
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <div key={index} className="h-full flex flex-col">
            <div
              className={`bg-white rounded-3xl relative text-gray-900 p-8 border-[3px] grow shadow-xl ${plan.popular ? "border-teal-500 -my-3" : ""}`}
            >
              {plan.popular && <div className='absolute top-0 w-full flex left-0 justify-center'>
                <div className="bg-teal-500 h-10 w-40 rounded-b-xl text-white font-semibold flex items-center justify-center">Most Popular</div>
              </div>}
              <h3 className="text-4xl font-bold mt-8 text-center">{plan.name} Plan</h3>
              <div className='flex items-center justify-center w-full'>
                {plan.discount && <p className='mr-1 mt-6 line-through text-sm text-gray-400'>AED 380</p>}
                <h5 className="mt-6 font-semibold text-2xl text-center">{plan.price}</h5>
                {plan.discount &&
                  <h5 className="mt-6 font-semibold text-center drop-shadow-md ml-3 border border-teal-500 rounded-full text-10 px-2.5 py-1 text-teal-500">{plan.discount} off</h5>
                }
              </div>
              <p className='mt-4 text-center text-gray-500'>100% refund if not satisfied</p>
              <Btn size="md" className="mt-5" variant="primary">
                Get Started
              </Btn>
              <ul className="space-y-4 mt-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <FaCheck className="min-w-3 text-sm mt-1.5 text-teal-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Btn size="lg" className="mt-9" variant={plan.popular ? "primary" : "primary-outlined"}>
              Choose {plan.name}
            </Btn>
          </div>
        ))}
      </div>
    </Card >
  );
}
