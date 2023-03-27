import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import slider from "../assets/slide5.jpg";
import slider2 from "../assets/slide7.png";
import slider3 from "../assets/slide8.jpg";
import slider4 from "../assets/slide6.jpg";


function Home() {

  return (
    <div className=" m-auto">
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper">
          <SwiperSlide>
          <img
            src={slider}
            alt=".."
            className="w-full h-[30vh] md:h-[100vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt=".."
            className="w-full h-[30vh] md:h-[100vh]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slider3}
            alt=".."
            className="w-full h-[30vh] md:h-[100vh]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slider4}
            alt=".."
            className="w-full h-[30vh] md:h-[100vh]"
          />
        </SwiperSlide>
        
       
       
      </Swiper>
          
        
      </>
    </div>
  );
}

export default Home;
