import React from 'react';

function SkillCard({ title, description, icon, techStack }) {
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card h-100 px-3 py-2 rounded-4" data-bs-theme="dark">
        <div className="d-flex">
          <img src={icon} className="skill-card-icon" alt={`${title} icon`} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold fs-4 mb-3">{title}</h5>
            <p className="card-text lh-base" style={{ textAlign: 'justify' }}>
              {description}
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="me-2">Tech Stack: </span>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-info"
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
      </div>
    </div>
  );
}

export default SkillCard;
