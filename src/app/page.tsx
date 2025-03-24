import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-3 md:mx-10 md:py-8 lg:px-0 lg:py-0 mb-16 max-w-full">
      <Image
        className="relative"
        src="/images/hero-min.jpg"
        alt="Western Code"
        width={1800}
        height={1000}
        priority
      />
      <h1 className="absolute top:0 uppercase text-3xl md:text-5xl text-blue-300 pt-56 pl-8 fade-in">
        <span className="header-span">Modern Software Development</span>
        <br />
        <span className="header-span">for Agencies &amp; Businesses</span>
      </h1>
    </div >
  );
}
