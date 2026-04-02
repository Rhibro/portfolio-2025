export default function EduDatacom({schoolName, course, timePlace, description, schoolLink}) {
    const descriptionPoints = description.split('. ').filter(point => point.trim() !== '');
    return (
        <div className="eduBox">
            <div className="eduHeader">
                <h3 className="schoolName">{schoolName}</h3>
                <p className="courseName">{course}</p>
                <p className="timePlace">{timePlace}</p>
            </div>
            <ul className="eduInfo">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point.trim()}{index < descriptionPoints.length - 1 ? '.' : ''}</li>
                ))}
            </ul>
            <div>
                <a href={schoolLink}
                    target="_blank" className="schoolLink">
                    More Information
                </a>
            </div>
        </div>
    )
}