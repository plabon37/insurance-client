"use client";

interface LogoItem {
  image: string;
  websiteUrl: string;
  displayOrder: number;
  isActive: boolean;
}

interface PartnersSliderProps {
  heading: string;
  logos: LogoItem[];
}

export default function PartnersSlider({
  heading,
  logos,
}: PartnersSliderProps) {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {heading}
          </h2>
        </div>

        <div className="group relative overflow-hidden">
          <div className="flex w-max animate-partners-scroll group-hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={logo.image}
                  alt={`Partner ${index + 1}`}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}