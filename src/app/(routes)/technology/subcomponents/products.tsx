"use client";
import { ShieldSvg, PointSvg } from "@/app/components/commonsvg";

interface ResCardProps {
  data: {
    icon: React.JSX.Element;
    title: string;
    description: string[];
  };
}

export const Product = () => {
  const cards = [
    {
      icon: <ShieldSvg />,
      title: "C-Tech SBR",
      description: [
        "Design & engineering",
        "Process Automation",
        "Proprietary Decanters and Aeration systems",
      ],
    },
    {
      icon: <ShieldSvg />,
      title: "Advanced energy efficiency system",
      description: [
        "Turbo Blowers",
        "STTC (solar sludge turning & tilling conveyor)",
      ],
    },
    {
      icon: <ShieldSvg />,
      title: "Advanced recycling technologies",
      description: [
        "Fiber Disc Filters",
        "Membrane Bio Reactor (MBR)",
        "Ultra-filtration (UF)",
        "Reverse Osmosis (RO)",
      ],
    },
  ];

  const ResCard = ({ data }: ResCardProps) => {
    const { icon, title, description } = data;

    return (
      <div className="w-[200px] shrink-0 md:flex-1 md:w-full h-full md:min-h-[250px] flex flex-col  gap-2 bg-[rgba(249,249,249,1)] rounded-2xl px-4 py-6 product-wrap">
        <div className="bg-[#005943ff] rounded-full p-3 w-[50px] h-[50px] flex items-center justify-center">{icon}</div>
        <h4 className=" font-bold text-[rgba(0,89,69,1)] mt-2">
          {title}
        </h4>
        <ul className="list-disc list-inside font-normal text-sm text-[rgba(74,85,101,1)] mb-2 text-left w-full px-4 product-list">
          {description.map((item, index) => (
            <li key={index}><PointSvg/> {item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
    <section
      className="relative space-y-12 my-20 lg:py-20 sm:py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/technology/hero-bg.png')" }}
    >
      <div className="w-11/12 md:w-[900px] md:space-y-2 md:text-center mx-auto">
        <h2 className="md:w-fit text-[22px] md:text-[32px] text-[#fff] mx-auto">
          <span className="text-[#b7d433]">C-Tech </span>Products
        </h2>
      </div>
      <div className="disable-scrollbar w-11/12 md:w-10/12 flex items-stretch justify-between gap-4 md:gap-6 mx-auto overflow-x-auto">
        {cards.map((card, i) => {
          return <ResCard key={i} data={card} />;
        })}
      </div>
    </section>
    </>
  );
};
