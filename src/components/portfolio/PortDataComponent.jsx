import { useState } from 'react';

export default function PortDataComponent({ 
    projectName, 
    pageLink, 
    image, 
    type, 
    overview, 
    problem, 
    role, 
    tech, 
    challenges, 
    solution, 
    result, 
    nextSteps 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`portBox ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpand}>
            <div className="portHeader">
                <div className="portImageContainer">  
                    <img className="webEx" src={image} alt={projectName} />
                </div>
                <div className="portTitleSection">
                    <h2 className="projectName">{projectName}</h2>
                    <span className="projectType">{type}</span>
                </div>
                <div className="expandIcon">
                    {isExpanded ? '▼' : '▶'}
                </div>
            </div>

            {isExpanded && (
                <div className="portContent">
                    <div className="portSection">
                        <h3>Overview</h3>
                        <p>{overview}</p>
                    </div>

                    <div className="portSection">
                        <h3>Problem</h3>
                        <p>{problem}</p>
                    </div>

                    <div className="portSection">
                        <h3>Role & Responsibilities</h3>
                        <ul className="portList">
                            {role.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="portSection">
                        <h3>Technologies</h3>
                        <div className="techTags">
                            {tech.map((item, index) => (
                                <span key={index} className="techTag">{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="portSection">
                        <h3>Challenges</h3>
                        <ul className="portList">
                            {challenges.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="portSection">
                        <h3>Solution</h3>
                        <ul className="portList">
                            {solution.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="portSection">
                        <h3>Results</h3>
                        <ul className="portList">
                            {result.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="portSection">
                        <h3>Next Steps</h3>
                        <p>{nextSteps}</p>
                    </div>

                    <div className="portSection portLink">
                        <a href={pageLink} target="_blank" rel="noopener noreferrer" className="btn" onClick={handleLinkClick}>
                            View Project →
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}