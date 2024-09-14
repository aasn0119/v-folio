import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const Hat = dynamic(() => import("@/components/models/Hat"), { ssr: false });

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vh"
        src={bg}
        alt="background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 left-0 -translate-y-1/2">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
            Anuj Trivedi
          </h1>
          <p className="font-light text-foreground text-lg">
            Discover the Magician Crafting this Portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
