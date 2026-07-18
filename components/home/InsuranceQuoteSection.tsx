"use client";

import {
  FaHeartbeat,
  FaCarCrash,
  FaPlaneDeparture,
  FaUsers,
  FaShip,
  FaHardHat,
  FaEllipsisH,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Health",
    icon: FaHeartbeat,
    active: true,
  },
  {
    title: "Car",
    icon: FaCarCrash,
  },
  {
    title: "Travel",
    icon: FaPlaneDeparture,
  },
  {
    title: "Life",
    icon: FaUsers,
  },
  {
    title: "Marine",
    icon: FaShip,
  },
  {
    title: "Engineering",
    icon: FaHardHat,
  },
  {
    title: "More",
    icon: FaEllipsisH,
  },
];

export default function InsuranceQuoteSection() {
  return (
    <section className="bg-[#FCF5F2] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Categories */}

        <div className="flex justify-center">
          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className="group flex min-w-[110px] flex-col items-center"
                >
                  <div
                    className={`flex h-32 w-32 items-center justify-center rounded-full transition-all duration-300 ${
                      item.active
                        ? "bg-[#B5482A]"
                        : "bg-[#F3DDD7] hover:bg-[#B5482A]"
                    }`}
                  >
                    <Icon
                      className={`text-5xl transition-all duration-300 ${
                        item.active
                          ? "text-white"
                          : "text-[#B5482A] group-hover:text-white"
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-5 text-3xl font-medium transition-all duration-300 ${
                      item.active
                        ? "text-[#B5482A]"
                        : "text-gray-500 group-hover:text-[#B5482A]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form */}

        <div className="mt-20 grid gap-8 lg:grid-cols-12">

          {/* Name */}

          <div className="lg:col-span-5">
            <label className="mb-4 block text-2xl font-bold text-black">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="h-20 w-full rounded-lg border border-[#EFD8CF] bg-white px-8 text-xl italic outline-none transition focus:border-[#B5482A]"
            />
          </div>

          {/* Mobile */}

          <div className="lg:col-span-5">
            <label className="mb-4 block text-2xl font-bold text-black">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="Enter Your Valid Phone Number"
              className="h-20 w-full rounded-lg border border-[#EFD8CF] bg-white px-8 text-xl italic outline-none transition focus:border-[#B5482A]"
            />
          </div>

          {/* Button */}

          <div className="flex items-end lg:col-span-2">
            <button className="flex h-20 w-full items-center justify-center gap-5 rounded-lg bg-[#B5482A] text-2xl font-semibold text-white transition-all duration-300 hover:bg-[#9E3F24] hover:scale-[1.02]">
              Get Price
              <FaArrowRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}