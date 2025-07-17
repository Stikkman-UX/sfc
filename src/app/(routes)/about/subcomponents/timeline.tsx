import React from "react";

const timelineData = [
  {
    year: "2005",
    description: "“SFC” formed by EnviroPro Watertech and SFC Umwelttechnik",
  },
  {
    year: "2008",
    description:
      "SFC Umwelttechnik , Austria acquired by SFC Environmental Technologies, India",
  },
  {
    year: "2011",
    description: [
      "100th C-Tech Order booked",
      "We advanced our C-Tech technology package in India by integrating turbo blowers through an exclusive agreement with TurboMax Company Limited (South Korea), thereby enhancing its energy efficiency",
    ],
  },
  {
    year: "2012",
    description:
      "Exclusive tie up with IST Angelbau, Germany for Solar Sludge drying system",
  },
  {
    year: "2014",
    description: [
      "Hindustan Waste Treatment formed to execute India’s first integrated SWT facility in North Goa (100 TPD)",
      "Exclusive tie up with Yucheon Co, South Korea for Fiber Disc Filters",
    ],
  },
  {
    year: "2017",
    description: "500th C-Tech Order booked",
  },
  {
    year: "2019",
    description: "HWT received expansion order to enhance facility to 250 TPD",
  },
  {
    year: "2020",
    description:
      "100 TPD South Goa plant award to subsidiary vasudha Waste Treatment",
  },
  {
    year: "2022",
    description: [
      "Decanter Manufacturing began in India",
      "Fine Aeration Systems formed to manufacture diffusers",
    ],
  },
  {
    year: "2023",
    description: [
      "TurboMax India incorporated with a joint venture agreement with TurboMax Co to manufacture blowers in India",
      "Exclusive rights from EDI Inc, USA to manufacture their diffusers in India",
      "1000th C-Tech Order booked",
      "100 TPD South Goa Plant inaugrated by Hon’ble Pm Narendra Modi",
      "Exclusive tie up with Smicon, Netherlands for SWT equipment",
      "New subsidiary Pentagen Biofuels incorporated for agro-based CBG plants",
    ],
  },
  {
    year: "2024",
    description: [
      "Care upgraded SFC from A- to A",
      "Tie up with oil and gas marketing companies/ PSU’s for municipal waste to CBG projects",
      "Exclusive distribution agreement with a leading Singapore based UF technology company for India",
    ],
  },
];

const Timeline = () => {
  return (
    <div className="relative w-full flex flex-col items-center py-16 bg-white mt-10">
      <div className="w-full max-w-[1152px] flex flex-col items-center lg:mt-20 relative">
        {/* Vertical timeline line */}
        <div className="absolute top-[-7%] bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-[linear-gradient(to_bottom,_#ffffff00_2%,_#00A84933_10%,_#00A84933_100%)] z-0" />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          const content = Array.isArray(item.description) ? (
            <ul
              className={`space-y-2 text-[#4A5565] list-none text-[16px] text-center md:text-${
                isLeft ? "right" : "left"
              } p-0 m-0`}
            >
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p
              className={`text-[#4A5565] text-[16px] text-center md:text-${
                isLeft ? "right" : "left"
              }`}
            >
              {item.description}
            </p>
          );

          return (
            <div
              key={item.year}
              className={`w-full flex flex-col lg:flex-row justify-between items-center mb-16 relative z-10`}
            >
              {/* Dot on top in mobile */}
              <div className="lg:hidden flex justify-center mb-[-12px] z-10">
                <div className="w-6 h-6 bg-[#12ae56] border-4 border-white rounded-full" />
              </div>

              {/* LEFT side (desktop), full width on mobile */}
              {isLeft ? (
                <div className="w-full md:w-1/2 px-4 text-center md:text-right">
                  <div className="inline-block bg-[#F9F9F9] w-full max-w-[520.35px] rounded-xl p-6 mx-auto md:mx-0">
                    <p className="text-[#00A849] font-semibold text-lg">
                      {item.year}
                    </p>
                    {content}
                  </div>
                </div>
              ) : (
                <div className="hidden md:block md:w-1/2" />
              )}

              {/* Dot (desktop only) */}
              <div className="hidden lg:flex w-6 h-6 bg-[#12ae56] border-6 border-white rounded-full z-20" />

              {/* RIGHT side (desktop), full width on mobile */}
              {!isLeft ? (
                <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                  <div className="inline-block bg-[#F9F9F9] w-full max-w-[520.35px] rounded-xl p-6 mx-auto md:mx-0">
                    <p className="text-[#00A849] font-semibold text-lg">
                      {item.year}
                    </p>
                    {content}
                  </div>
                </div>
              ) : (
                <div className="hidden md:block md:w-1/2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
