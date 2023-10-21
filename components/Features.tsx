import { FEATURES } from "@/constants";
import Image from "next/image";

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const FeatureItem = ({ icon, title, description }: FeatureItem) => {
  return (
    <li className="w-full flex flex-col flex-1 items-start">
      <div className="rounded-full bg-green-90 p-4 lg:p-7">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="capilatize bold-20 lg:bold-32 mt-5">{title}</h2>
      <p className="regular-16 bg-white/80 lg:bg-none mt-5 lg:mt-[30px] text-gray-30">
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="flexCenter flex-col bg-feature-bg bg-center bg-no-repeat py-24 overflow-hidden">
      <div className="flex max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="flex w-full lg:w-[60%] flex-col z-20">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute -left-[5px] -top-[28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="grid mt-10 lg:mt-20 gap-10 lg:gap-20 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Features;
