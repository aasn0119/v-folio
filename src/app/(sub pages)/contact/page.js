import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/form";
export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-4xl font-semibold text-center text-accent capitalize">
            Get in Touch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Thank you for visiting my portfolio! If you have any questions,
            feedback, or collaboration opportunities, I would love to hear from
            you. Feel free to reach out using the form below or contact me
            directly via email or phone. I am excited to connect with you and
            discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
