import Experience from "./Experince";
import experiences from "./js/experiences";

function ExperiencesSection() {
  return (
    <div className="experiences">
      {experiences.map((experience) => {
        return (
          <Experience
            key={experience.id}
            desc={experience.desc}
            date={experience.date}
            jobTitle={experience.jobTitle}
            companyName={experience.companyName}
          ></Experience>
        );
      })}
    </div>
  );
}

export default ExperiencesSection;
