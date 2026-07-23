"use client";

import Image from "next/image";

interface Step {
  image: string;
  stepNumber: number;
  title: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
}

interface WorkingProcessSectionProps {
  badge: string;
  heading: string;
  description: string;
  backgroundImage: string;
  steps: Step[];
}

export default function WorkingProcessSection({
  badge,
  heading,
  description,
  backgroundImage,
  steps,
}: WorkingProcessSectionProps) {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.displayOrder}
              className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-black">
                  {step.stepNumber}
                </span>
              </div>

              <h3 className="mb-3 text-center text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="text-center text-gray-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}