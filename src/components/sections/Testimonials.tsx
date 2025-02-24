"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../constants';
import Card from './Card';
import Img from './Img';
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <Card title="Testimonials">
      <Swiper
        className="w-full mt-16 !pb-9"
        spaceBetween={20}
        slidesPerView={2.6}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
      >
        {testimonials.map(({ image, content, name, role }, index) => (
          <SwiperSlide key={index} className="py-1">
            <div className='bg-white rounded-18 border-gray-80 drop-shadow-sm py-8 px-12 border'>
              <p className="text-gray-900">{content}</p>
              <div className="flex mt-6 items-center justify-between">
                <div className='flex items-center gap-4'>
                  <Img src={image} className='rounded-full w-12 h-12' />
                  <h4 className="font-bold text-sm text-gray-900">
                    {name}
                    <span className='ml-2.5 text-gray-30 rounded-full py-0.5 px-2 text-xs border border-gray-30'>{role}</span>
                  </h4>
                </div>
                <Img src="/quote.svg" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
