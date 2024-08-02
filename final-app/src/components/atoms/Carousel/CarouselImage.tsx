import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

interface ImageCarouselProps {
  images: string[]
}

const CarouselImage: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='h-76'>
            <img src={image} alt={`postImage-${index}`} className=' w-full object-cover rounded-xl' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselImage
