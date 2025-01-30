export default function EduDatacom({schoolName, timePlace, description, schoolLink}) {
    return (
        <div className="eduBox">
                    <h3 className="schoolName">{schoolName}</h3>
                    <p className="timePlace">{timePlace}</p>
                    <p className="eduInfo">{description}</p>
                    <div>
                        <a href={schoolLink}
                            target="_blank" className="schoolLink">
                            More Information
                        </a>
                    </div>
               </div>
    )
}