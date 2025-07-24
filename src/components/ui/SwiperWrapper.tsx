import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { ReactNode } from 'react'

interface SwiperWrapperProps {
  children: ReactNode
  className?: string
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  centeredSlides?: boolean
  showNavigation?: boolean
  showPagination?: boolean
}

const SwiperWrapper = ({
  children,
  className,
  slidesPerView = 1,
  spaceBetween = 30,
  centeredSlides = true,
  showNavigation = true,
  showPagination = true
}: SwiperWrapperProps) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      grabCursor={true}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      className={className}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  )
}

export { SwiperWrapper, SwiperSlide }
