import projects from "../utils/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/ProjectCard.css"; // (if not imported inside ProjectCard)

export default function Projects() {
  return (
    <div className="year-page">
      <h1>Projects</h1>
      <div className="courses-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            to={p.path}
            image={p.image}
            github={p.github}
            website={p.website}
          />
        ))}
      </div>
    </div>
  );
}
