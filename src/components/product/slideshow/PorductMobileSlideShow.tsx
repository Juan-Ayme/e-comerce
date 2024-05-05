'use client'

import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshon.css';


interface Props{
    images: string[];
    title: string;
    className?: string;
}

export const PorductMobileSlideShow = ({images,title,className}:Props) => {
  return (
    <div className={className}>
         <Swiper
        style={{
          width: '100vw',
          height: '500px',
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }as React.CSSProperties
    }
        pagination = {true}
        autoplay = {{
            delay:2500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
            images.map(image =>(
            <SwiperSlide key={image}>
                <Image
                width={800}
                height={800}
                src={`/products/${image}`}
                alt={title}
                className='object-fill'
                />
            </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}
