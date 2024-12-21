import styles from "./ProjectsStyles.module.css";
import flashcart from "../../assets/flashcart.avif";
import booklx from "../../assets/booklx.jpg";
import freelance from "../../assets/freelance.avif";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freelance}
          link="https://github.com/GousDev/Mern-FreelanceConnect-frontend"
          h3="FreelanceConnect"
          p="Freelance Website(MERN)"
        />
        <ProjectCard
          src={booklx}
          link="https://github.com/GousDev/Book_Marketplace_frontend"
          h3="Booklx"
          p="Books Marketplace(MERN)"
        />
        <ProjectCard
          src={flashcart}
          link="https://github.com/GousDev/FlashCart"
          h3="FlashCart"
          p="Quick Delivery App (NextJs)"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
