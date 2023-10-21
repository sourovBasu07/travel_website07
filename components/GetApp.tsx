import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="w-full flexCenter flex-col pb-[100px]">
      <div className="get-app">
        <div className="w-full flex flex-col flex-1 justify-center items-start gap-12">
          <h2 className="bold-40 lg:bold-64 lg:max-w-[370px] uppercase">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="w-full flex flex-col xl:flex-row whitespace-nowrap gap-3">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center">
          <Image src="/phone.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};
export default GetApp;
