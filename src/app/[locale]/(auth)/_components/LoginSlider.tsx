"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginSlider = () => {
  const images = [
    "/images/Screenshot from 2024-06-19 17-42-34.png",
    "/images/il_1588xN.2441310775_7az8.webp",
  ];

  return (
    <div className="mahmoood flex items-center justify-center h-full w-full">
      <Swiper
        modules={[Navigation, Keyboard, Autoplay, Pagination]}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
        // navigation
        loop
        speed={1000}
        keyboard
        centeredSlides={true}
        // pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {images.map((s, index) => {
          return (
            <SwiperSlide key={s + index}>
              <div className="w-full flex items-center justify-center rounded-xl relative h-full">
                <Image
                  src={s}
                  className="h-full"
                  layout="fill"
                  alt="مستر کلاس"
                  priority
                  loading="eager"
                />
                {/* <div className="w-full absolute bottom-5 backdrop:blur-lg h-auto">
                  <Card className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-none p-4 shadow-lg h-auto mx-6">
                    <CardHeader>
                      <CardTitle></CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LoginSlider;
