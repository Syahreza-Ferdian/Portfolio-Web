import React from 'react';

function ProjectCard({ title, date, description, repositoryLink, techStack }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100" data-bs-theme="dark">
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="project-date text-info">{date}</p>
          <p className="project-desc">{description}</p>
          {repositoryLink ? (
            <a
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              View Repository
            </a>
          ) : (
            <span className="animated-link animated-link-private">
              Private Repository
            </span>
          )}
        </div>

        <div className="card-footer d-flex flex-wrap gap-2">
          <span className="me-2">Tech Stack: </span>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="badge rounded-pill bg-body-secondary"
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
