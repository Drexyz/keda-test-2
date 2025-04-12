const About = () => {
  const aboutTexts = [
    "We are a startup building a web-based ERP system designed to help entrepreneurs manage their daily operations with ease.",
    "Our platform simplifies inventory tracking — recording every item that comes in and out — and automatically keeps track of daily profits. No more complicated spreadsheets or manual notes.",
    "Our mission is to empower business owners with modern tools so they can focus on growing their business, not managing paperwork."
  ]

  return (
    <section id="about" className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center p-8 md:px-20 bg-white">
      <div className="flex flex-col justify-center gap-12">
        <h3 className="text-4xl font-bold text-black">About Us</h3>

        <p className="flex flex-col gap-4 text-lg text-gray-700 font-medium">
          {aboutTexts.map((text, index) => (
            <span key={index} className="text-justify">{text}</span>
          ))}
        </p>
      </div>
      <img src="svg/about.svg" className="mx-auto lg:ml-16 mt-10 w-4/5 aspect-square" />
    </section>
  );
};

export default About;