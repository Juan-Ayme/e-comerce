'use client'

import { useState } from 'react'
import {Swiper as SwiperObject} from 'swiper' // SwiperObject es solo para tener el tipado
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshon.css';
import Image from 'next/image';

interface Props{
    images: string[];
    title: string;
    className?: string;
}

export const PorductSlideShow = ({images,title,className}:Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
         <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }as React.CSSProperties
    }
        spaceBetween={10}
        navigation={true}
        autoplay = {{
            delay:2500
        }}
        thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null // si thumbsSwiper no esta destruido lo asigna
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
            images.map(image =>(
            <SwiperSlide key={image}>
                <Image
                width={500}
                height={500}
                src={`/products/${image}`}
                alt={title}
                className='rounded-lg object-fill'
                />
            </SwiperSlide>
            ))
        }
      </Swiper>
      <Swiper
        onSwiper={ setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       {
            images.map(image =>(
            <SwiperSlide key={image}>
                <Image
                width={300}
                height={300}
                src={`/products/${image}`}
                alt={title}
                className='rounded-lg object-fill'
                />
            </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}
