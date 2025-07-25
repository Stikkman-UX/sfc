import Image from "next/image";

export const Life = () => {
  return (
    <div className="gsap-fade-in w-11/12 sm:w-10/12 max-w-[1280px] space-y-10 mx-auto mt-10 sm:mt-0">
      <div className="lg:w-[500px] md:space-y-2 mx-auto md:mx-0">
        <h4 className="w-full lg:w-1/2 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
          <span className="text-[rgba(25,169,72,1)]">Life </span>
          at SFC
        </h4>
        <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
          Experience a workplace that values innovation, collaboration and makes
          a meaningful impact. Indulge in an intrapreneurial culture that
          enables you to find your own identity.
        </p>
      </div>
      <div className="w-full h-[380px] flex gap-6 overflow-x-scroll">
        <Image
          className="w-full min-h-[200px] object-cover rounded-xl sm:rounded-2xl"
          width={400}
          height={300}
          src="/careers/team-1.jpg"
          alt="Life at SFC"
        />
        <Image
          className="w-full min-h-[200px] object-cover rounded-xl sm:rounded-2xl"
          width={400}
          height={300}
          src="/careers/team-1.jpg"
          alt="Life at SFC"
        />
        <Image
          className="w-full min-h-[200px] object-cover rounded-xl sm:rounded-2xl"
          width={400}
          height={300}
          src="/careers/team-1.jpg"
          alt="Life at SFC"
        />
        <Image
          className="w-full min-h-[200px] object-cover rounded-xl sm:rounded-2xl"
          width={400}
          height={300}
          src="/careers/team-1.jpg"
          alt="Life at SFC"
        />
      </div>
    </div>
  );
};
