import Image from "next/image";

const articles = [
  /*ExpandableCodeStartArea*/
  {
    title: "Feature Section",
    description:
      "Effortlessly highlight your product's essential attributes using our Feature Section. Conveniently tailor the section's text and list of features to align with your brand identity and marketing user interface.",
    image: "/feature-section.svg",
    darkModeImage: "/dark_feature-section.svg",
    time: "Read in 2 minutes",
    url: "#",
  },
  {
    title: "Footer",
    description:
      "Design a tailored Footer Section featuring customizable text, newsletter registration, social media icons, and a responsive layout that adapts to your brand and marketing needs.",
    image: "/footer.svg",
    darkModeImage: "/dark_footer.svg",
    time: "Read in 5 minutes",
    url: "#",
  },
  {
    title: "Pricing Table Section",
    description:
      "Use our pricing table to display plans, and personalize the text and features to create a professional and consistent look that aligns with your brand.",
    image: "/pricing-table.svg",
    darkModeImage: "/dark_pricing-table.svg",
    time: "Read in 8 minutes",
    url: "#",
  },
  {
    title: "Team Showcase Section",
    description:
      "Use our Team Section to showcase your team members and their unique skills. Customize the text and features to match your brand and create an engaging and visually appealing section.",
    image: "/team-showcase.svg",
    darkModeImage: "/dark_team-showcase.svg",
    time: "Read in 12 minutes",
    url: "#",
  },
  /*ExpandableCodeEndArea*/
];
export default function RelatedArticlesStyleOne() {
  return (
    <section className="container mx-auto flex flex-col gap-10 bg-white p-5 dark:bg-gray-800 sm:p-10">
      <header className="flex w-full flex-col items-center justify-center">
        <h2 className="flex flex-row items-center text-4xl font-bold">
          Related Articles
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col gap-10 xl:flex-row">
            <Image
              src={article.image}
              width={300}
              height={400}
              alt={`Image for  "${article.title}"`}
              className="dark:hidden"
            />
            <Image
              src={article.darkModeImage}
              width={300}
              height={400}
              alt={`Image for  "${article.title}"`}
              className="hidden dark:block"
            />

            <div className="flex flex-col justify-center gap-5">
              <a href="#" className="text-xl font-bold">
                {article.title}
              </a>
              <p className="text-md font-light">{article.description}</p>
              <a href="#" className="text-blue-700 underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
