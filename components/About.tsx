import React from "react";
import family from "@/public/mum.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <h3 className="uppercase tracking[20px] text-2xl">About</h3>
      </div>
      <main className="md:grid md:grid-cols-2 gap-14">
        <div className="relative w-32 h-32 md:w-96 md:h-[450px] xl:w-[500px] xl:h-[520px] my-10  md:top-0 mx-auto">
          <Image
            src={family}
            alt="Mum and I"
            className="object-cover rounded-full md:rounded-lg"
            fill
          />
        </div>
        <div className="space-y-4 md:my-auto">
          <h4 className="text-3xl">A little more about me</h4>
          <p className="text-md">
            My journey in the industry began at FromSolvers, a Latin American
            software company specialising in the betting industry. Since I have
            delved into the tech freelance world, working as a full-stack
            developer. This role has not only enhanced my technical acumen but
            also cultivated my ability to effectively communicate with clients.
            I take pride in my capacity to comprehend client needs and deliver
            bespoke solutions promptly and with unwavering quality. With a
            passion for innovation and a commitment to continuous improvement, I
            am poised to contribute effectively to cutting-edge projects and
            drive success in the web development landscape.
          </p>
        </div>
      </main>

      <div className="flex flex-col space-y-2 my-5">
        <h3 className="uppercase tracking-[3px]">Languages</h3>
        <section>{/* Skills */}</section>
        <h3 className="uppercase tracking-[3px]">Technologies</h3>
        {/* Software Used */}
      </div>
    </div>
  );
};

export default About;
