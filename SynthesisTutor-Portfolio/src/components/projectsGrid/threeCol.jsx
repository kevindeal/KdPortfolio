import { Card } from "./card";

export const ThreeCol = () => {
  const projects = [
    {
      id: 1,
      name: "Super Smarthome Portal",
      description: "30% of renters feel pressure to leave rental properties due to repairs being ingnored. I used modern technology to solve issues plagueing tenants and propert managers daily needs. I created a complaint feature that makes it easy for a tenant to log a complaint to be filled by property management. This feature also allowed for property management to manange complaints by type and log date each complaint was filed.",
      link: "https://github.com/kevindeal/super-frontend/blob/main/super_gui/src/components/complaint/Complaint.tsx",
      tags: ["React", "Typescript", "Java","SpringBoot"],
      backGround: "bg-purple",
      header: "bg-lavender text-black",
      image: "/assets/supercomplaint.webp"
    },
    {
      id: 2,
      name: "Upitt Admissons",
      description: "Re-Imagined college Admissions for Gen-Z. This was an oppurtunity to pick up new tooling with VueJS and run. The components I built for our reusable library not only won A W3 award for best admissions site. The design system brought life to something as boring as college admissions and made a connection to users of a younger generation facing the challenge of going to college for the first time at home.",
      link: "https://admissions.pitt.edu/",
      tags: ["Vue.js", "JavaScript","Storybook"],
      backGround: "bg-yellow",
      header: "bg-gold text-black",
      image: "/assets/upitt.webp"
    },
    {
      id: 3,
      name: "Custom LMS",
      description: "Stopped users from cheating their trainings.  Provided Frontend leadership to design and build a LMS that prevented users from cheating. Working alongside a backend dev I guided them through wordpress and all its capabilites. Learned a ton about the backend through thorough code reviews and reverse engineering a popular wordpress plugin.",
      link: "https://github.com/kevindeal/pls/blob/main/PLS-WP/template-parts/blocks/clientProfile/courseDetail.php",
      tags: ["Grid.js", "PHP", "TailwindCss"],
      backGround: "bg-grayscale",
      header: "bg-light-gray text-white",
      image: "/assets/pls.webp"
    },
  ];


  return (
    <section className="project-grid full-bleed-bg">
      <div className="container py-20">
        <h1 className="eyebrow section-head small-header grade font-bold text-[2rem] md:text-5xl text-center mb-6">
          Checkout my most proud work
        </h1>
        <h2 className="project-header text-[#b7d0ff] mt-[10px] text-xl text-center leading-[1.4] md:w-[70%] mx-auto">
          With almost a decade of experience in digital, I have excelled at connecting users with products and brands through innovative and impactful solutions.
        </h2>
        <div className="project-grid pt-10 pb-20 grid grid-cols-1 md:grid-cols-6 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                ${index === 0 ? "md:col-start-2 md:col-end-4" : ""} /* First item: spans columns 2-3 */
                ${index === 1 ? "md:col-start-4 md:col-end-6" : ""} /* Second item: spans columns 4-5 */
                ${index === 2 ? "md:col-start-3 md:col-end-5" : ""} /* Third item: spans columns 3-4 (centered) */
              `}
            >
              <Card
                id={project.id}
                name={project.name}
                description={project.description}
                header={project.header}
                tags={project.tags}
                link={project.link}
                backGround={project.backGround}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}