'use client';

import { useEffect, useState } from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nannies } from '../constants';
import { Button } from '../ui/button';
import Btn from './Button';
import Card from './Card';
import Img from './Img';

export default function Nannies() {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, [swiper]);

  return (
    <Card title="Meet Some of Our Nannies">
      <h3 className="text-center text-gray-900 text-2xl font-semibold mx-auto">
        All the nannies are already in UAE
      </h3>
      <div className='relative'>
        <div className='absolute w-full top-10 flex justify-between z-40'>
          <button onClick={() => swiper?.slidePrev()} className='-ml-12'>
            <Img src="/slide-left.svg" />
          </button>
          <button onClick={() => swiper?.slideNext()} className='-mr-12'>
            <Img src="slide-right.svg" />
          </button>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides
          onSwiper={setSwiper}
          className="w-full mt-20 !pb-8"
          spaceBetween={32}
          slidesPerView={3}
          loop
        >
          {nannies.map(({ image, age, country, desired_salary, experience, language, location, name, testimonial }, index) => {
            const active = index === activeIndex
            return <SwiperSlide
              key={index}
              className={`transition-all duration-300 py-1 ${active ? "blur-0" : "blur-md"}`}
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow">
                <div className='h-8 text-xs font-semibold text-white flex items-center justify-center bg-yellow-500'>
                  <AiFillThunderbolt className='inline mr-1' />
                  highly demand
                </div>
                <div className="p-4">
                  <div className="flex gap-4 items-start">
                    <Img src={image} width={112} height={112} className="rounded-md object-cover" />
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-1 mb-0.5">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {name}
                        </h3>
                        <Img src="/verified-badge.svg" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Img src="/egypt.svg" />
                        <h3 className="text-gray-900">{country}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegCalendarAlt className="text-teal-500 text-xl" />
                        <h3 className="text-gray-900">{age}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-teal-500 text-xl" />
                        <h3 className="text-gray-900">{location}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-900 rounded-lg text-xs bg-gray-800 py-3.5 px-2.5 flex items-center justify-between text-center">
                    <div className='flex-1 flex flex-col gap-2.5'>
                      <p className="text-gray-300">Experience</p>
                      <h6 className='font-semibold'>{experience}</h6>
                    </div>
                    <div className='flex-1 flex flex-col gap-2.5'>
                      <p className="text-gray-300">Languages</p>
                      <h6>{language}</h6>
                    </div>
                    <div className='flex-1 flex flex-col gap-2.5'>
                      <p className="text-gray-300">Desired Salary</p>
                      <h6>{desired_salary}</h6>
                    </div>
                  </div>
                  {active && <>
                    <p className="text-gray-300 mt-4 text-xs text-center">Testimonial from a previous family</p>
                    <h6 className="text-xs mt-1 text-center text-gray-900">
                      {testimonial}
                    </h6>
                  </>}

                  <div className="mt-4 flex gap-5 text-xs font-semibold">
                    <Button variant="outline" className="border-teal-500 text-teal-500 rounded-md hover:text-teal-500 grow">
                      See my profile
                    </Button>
                    <button className="text-gray-900 flex items-center gap-1">
                      <LuVideo className="inline font-dark text-base" />
                      <span>Video CV Available</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
        <div className="text-center mt-9">
          <Btn size="lg" variant='primary' className="w-96">
            View All Nannies
          </Btn>
        </div>
      </div>
    </Card>
  );
}
