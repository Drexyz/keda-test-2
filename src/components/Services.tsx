
const Services = () => {
  const tierIntro = "We offer three tiers designed to support entrepreneurs at every stage — from basic inventory tracking to smart business analytics with AI."

  const benefits = [
    "Record incoming goods",
    "Record outgoing goods",
    "Record profit results",
    "Analyze sales results with charts",
    "24/7 support",
    "Export data to Excel",
    "AI income prediction",
  ]

  const tiers = [
    {
      name: "Basic",
      totalBenefits: 3,
      price: 9,
    },
    {
      name: "Business",
      totalBenefits: 5,
      price: 19,
    },
    {
      name: "Entrepreneur",
      totalBenefits: 7,
      price: 39,
    },
  ]

  const notIncludeClass = "text-gray-400 line-through"


  return (
    <section id="services" className="flex flex-col items-center py-16 gap-8 bg-gray-50">
      <h3 className="text-4xl font-bold text-black">Our Services</h3>
      <p className="text-lg text-gray-700 font-medium w-2/3 md:1/2 lg:w-1/3 text-center">{tierIntro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full my-auto px-8 md:px-20">
        {tiers.map((tier, index) => (
          <div key={index + tier.name} className="bg-white border border-blue-300 hover:border-blue-500 shadow-lg hover:shadow-xl rounded-lg p-6 flex flex-col items-center gap-4 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black">{`Tier ${index + 1} - ${tier.name}`}</h4>
            <p className="flex items-center gap-2 font-medium">
              <span className="text-3xl text-black">{`$${tier.price}`}</span>
              <span className="text-lg text-gray-700">/ month</span>
            </p>

            <ul className="list-disc w-full text-lg pb-4 px-4 md:py-8 xl:px-16 space-y-2">
              {benefits.map((benefit, index) => (
                <li className={index >= tier.totalBenefits ? notIncludeClass : "text-gray-700"} key={index + benefit}>
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;