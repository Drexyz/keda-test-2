import { Fragment } from "react/jsx-runtime";

const Contact = () => {
  const contactContents = [
    {
      id: 1,
      name: "Address",
      contents: [
        "1234 Main St, Anytown"
      ]
    },
    {
      id: 2,
      name: "Phone",
      contents: [
        "012123456",
        "081-234-567-890"
      ],
    },
    {
      id: 3,
      name: "Email",
      contents: [
        "contact@us.com",
        "contact@here.com"
      ],
    },
  ]

  const socials = [
    {
      id: 1,
      name: "Twitter / X",
      link: "https://twitter.com",
    },
    {
      id: 2,
      name: "Instagram",
      link: "https://instagram.com",
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://facebook.com",
    },
    {
      id: 4,
      name: "LinkedIn",
      link: "https://linkedin.com",
    },
  ]

  const handleSubmit = () => {
    // Handle form submission logic here
  }

  return (
    <section id="contact" className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center px-4 pt-8 pb-16 md:px-20 bg-white">
      <div className="flex flex-col justify-center gap-12">
        <h3 className="text-4xl font-bold text-black">Contact Us</h3>

        <form onSubmit={handleSubmit} className="px-4 py-4 bg-blue-500 border border-blue-300 hover:border-blue-500 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write Your Message..."
              className="bg-lawDarkGray/40 border border-lawDarkGray rounded-sm py-3 px-4 w-full focus:outline-none focus:border-lawGold focus:ring-1 focus:ring-lawGold transition-all duration-300"
            ></textarea>
          </div>

          <div className="text-right">
            <button type="submit" className="bg-white text-blue-500 px-6 py-2 rounded font-medium hover:text-blue-700 transition-colors duration-300">
              Request Consultation
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col justify-center gap-12 pt-8">
        <div className="flex flex-col justify-center px-6 py-8 gap-4 bg-gray-50 border border-blue-300 hover:border-blue-500 rounded-lg">
          {contactContents.map((contact) => (
            <Fragment key={contact.id}>
              <h5 className="text-2xl font-bold text-black">{contact.name}</h5>

              <div className="space-y-2">
                {contact.contents.map((content, index) => (
                  <p key={index + content} className="text-lg font-medium text-gray-600">
                    {content}
                  </p>
                ))}
              </div>
            </Fragment>
          ))}

          <h5 className="text-2xl font-bold text-black">Social</h5>
          <div className="flex flex-col gap-2">
            {socials.map((social) => (
              <a key={social.id} href={social.link} className="w-fit text-lg font-medium text-gray-600 hover:text-gray-400">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;