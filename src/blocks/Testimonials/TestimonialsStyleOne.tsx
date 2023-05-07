import React from "react";
import Image from "next/image";

export default function TestimonialsStyleOne() {
  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      title: "Founder, Creative Solutions",
      content:
        "Working with this company has been a game-changer for our business. Their attention to detail and innovative ideas have helped us achieve remarkable results.",
      imageUrl: "/circleProfile.svg",
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "CTO, TechWorld",
      content:
        "Their team consistently delivers high-quality work that exceeds our expectations. I'm always impressed by their dedication and ability to solve complex problems.",
      imageUrl: "/circleProfile.svg",
    },

    {
      id: 3,
      name: "Samantha Brown",
      title: "Marketing Manager, Brand Boost",
      content:
        "I've never encountered such a reliable and dedicated team. They truly understand our needs and always go above and beyond to deliver exceptional results.",
      imageUrl: "/circleProfile.svg",
    },

    {
      id: 4,
      name: "Carlos Gomez",
      title: "Product Manager, Innovate Corp.",
      content:
        "Their expertise and commitment to excellence have made a significant impact on our projects. They're always eager to find the best solutions and consistently deliver on time.",
      imageUrl: "/circleProfile.svg",
    },

    {
      id: 5,
      name: "Alice Nguyen",
      title: "Director of Engineering, Webwise",
      content:
        "This company's team of professionals have been instrumental in the success of our projects. Their expertise, responsiveness, and dedication set them apart from the competition.",
      imageUrl: "/circleProfile.svg",
    },

    {
      id: 6,
      name: "Thomas Lee",
      title: "COO, Digital Ventures",
      content:
        "Their ability to think outside the box and tackle complex challenges has been invaluable to our business. We couldn't be happier with their services and highly recommend them to others.",
      imageUrl: "/circleProfile.svg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
            >
              <Image
                width={100}
                height={100}
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full"
              />
              <p className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                {testimonial.name}
              </p>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                {testimonial.title}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
