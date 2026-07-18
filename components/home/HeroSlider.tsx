"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Hero {
  _id: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  videoText: string;
  videoUrl: string;
  backgroundImage: string;
  isActive: boolean;
}

interface Props {
  heroes: Hero[];
}

export default function HeroSlider({ heroes }: Props) {
  return (
    <Swiper
      modules={[
        Autoplay,
        Pagination,
        Navigation,
        EffectFade,
      ]}
      slidesPerView={1}
      loop={true}
      effect="fade"
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      className="h-screen"
    >
      {heroes.map((hero) => (
        <SwiperSlide key={hero._id}>
          <section className="relative h-screen overflow-hidden">

            {/* Background */}

            <Image
              src={hero.backgroundImage}
              alt={hero.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

            {/* Content */}

            <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">

              <div className="max-w-3xl">

                <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                    {hero.badge}
                  </span>
                </div>

                <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
                  {hero.title}
                </h1>

                <p className="mt-8 text-lg leading-8 text-gray-200">
                  {hero.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <a
                    href={hero.buttonLink}
                    className="rounded-xl bg-[#B5482A] px-8 py-4 font-semibold text-white transition hover:bg-[#98361c]"
                  >
                    {hero.buttonText}
                  </a>

                  <a
                    href={hero.videoUrl}
                    className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                  >
                    {hero.videoText}
                  </a>

                </div>

              </div>

            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}