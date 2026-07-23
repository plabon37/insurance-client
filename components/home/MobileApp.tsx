import Image from "next/image";
import Link from "next/link";
import {
  FaGooglePlay,
  FaApple,
  FaArrowRight,
} from "react-icons/fa";

export default function MobileApp() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[30px] border border-gray-200 bg-gradient-to-br from-[#fffaf8] to-[#fff4ef] shadow-lg">

          <div className="mx-auto max-w-4xl px-6 pt-16 text-center">

            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-red-500" />

              <span className="text-sm font-bold uppercase tracking-[3px] text-red-500">
                Get Our Mobile App
              </span>

              <div className="h-[2px] w-12 bg-red-500" />
            </div>

            <h2 className="text-4xl font-extrabold uppercase leading-tight text-gray-900 md:text-6xl">
              Experience Our
              <br />
              Mobile App
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Simplify your insurance experience with our mobile app.
              Access your policy details, track insurance claims,
              manage policies, receive instant notifications and stay
              protected anytime, anywhere.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FaGooglePlay size={28} />

                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-lg font-bold">
                    Google Play
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FaApple size={30} />

                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-lg font-bold">
                    App Store
                  </p>
                </div>
              </Link>

            </div>
          </div>

          <div className="mt-16 flex justify-center">

            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&auto=format&fit=crop&q=80"
              alt="Insurance Mobile App"
              width={700}
              height={500}
              className="rounded-t-3xl object-cover"
              unoptimized
            />

          </div>

          <div className="flex justify-center pb-10">

            <Link
              href="#"
              className="mt-6 flex items-center gap-2 font-semibold text-red-600 transition hover:gap-4"
            >
              Learn More

              <FaArrowRight />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}