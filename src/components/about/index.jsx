/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout classname="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A highly skilled Full Stack Developer with a Bachelor of Engineering
            degree in Computers and expertise in Javascript, React Js, and Node
            Js. Proven ability to create software products that meet the highest
            standards with innovative problem-solving skills. Adept at working
            in a fast-paced environment and delivering projects on time.
            Passionate about learning new technologies and contributing to the
            tech community.
          </p>
        </ItemLayout>
        <ItemLayout classname="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout classname="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          classname={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aasn0119&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
            alt="aasn0119"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout classname={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=aasn0119&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
            alt="aasn0119"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout classname={"col-span-full "}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=mongodb,postgresql,redis,firebase,mysql,express,react,redux,typescript,sass,bootstrap,tailwind,python,java,dart,cpp,js,html,css,wasm,nodejs,webpack,graphql,bash,vscode,git,github,gitlab,heroku,netlify,vercel,appwrite,aws,gcp,azure,docker,kubernetes,linux,npm,replit,d3,codepen,discord,postman,sublime,vite,nextjs"
            alt="aasn0119"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout classname={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=aasn0119&theme=dark&hide_border=true&type=svg&background=EB545400&currStreakNum=FEFE5B&ring=FEFE5B"
            alt="aasn0119"
            loading="lazy"
          />
        </ItemLayout>

        {/* github repo card */}
        <ItemLayout classname={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=aasn0119&repo=project-zeus&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false&description_lines_count=2"
            alt="aasn0119"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
