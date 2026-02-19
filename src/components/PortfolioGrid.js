import "./PortfolioGrid.css"
import { Link } from "react-router-dom";



export default function PortfolioGrid({ projects, limit }) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    if (!displayedProjects.length) {
        return <p className="no-projects">No projects found</p>;
    }

    return (
        <div className="portfolio-cards">
            {displayedProjects.map(project => (
                <div className="cards" key={project.id}>
                    <div className="card-image-wrapper">
                        <img
                            src={project.img}
                            alt={project.projectName}
                            className="card-image"
                            loading="lazy"
                        />
                    </div>

                    <div className="card-content">
                        <h3 className="project-title">{project.projectName}</h3>

                        <div className="tech-tags">
                            {project.languages.map((lang, idx) => (
                                <span key={idx} className="tech-tag">{lang}</span>
                            ))}
                        </div>
                        <div className="name-description">
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="card-btn">
                            <Link
                                to={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-btn"
                            >
                                View Project →
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
