import Image from "next/image";

import { PEOPLE_URL } from "@/constants";

type CampSiteProps = {
  title: string;
  subtitle: string;
  peopleJoined: string;
  backgroundImage: string;
};

const CampSite = ({
  title,
  subtitle,
  peopleJoined,
  backgroundImage,
}: CampSiteProps) => {
  return (
    <div
      className={`w-full min-w-[1100px] ${backgroundImage} h-full bg-cover bg-no-repeat lg:rounded-r-5xl lg:rounded-5xl`}
    >
      <div className="h-full flex flex-col justify-between items-start lg:px-10 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="bg-green-50 rounded-full p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regukar-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="w-10 h-10 inline-block rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative 2xl:max-container flex flex-col lg:mb-10 xl:mb-20 py-10 lg:py-20">
      <div className="w-full h-[340px] lg:h-[400px] xl:h-[640px] flex justify-start items-start gap-8 overflow-x-auto hide-scrollbar">
        <CampSite
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
          backgroundImage="bg-bg-img-1"
        />
        <CampSite
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
          backgroundImage="bg-bg-img-2"
        />
      </div>
      <div className="flexEnd mt-10 lg:-mt-60 lg:mr-6 px-6">
        <div className="relative w-full lg:max-w-[500px] xl:max-w-[734px] p-8 xl:px-10 xl:py-20 rounded-3xl xl:rounded-5xl bg-green-50 overflow-hidden">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp 2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};
export default Camp;
