export default function PortDataComponent({ pageLink, image, projectName, projectInfo}) {
    return (
        <div className="portBox">
            <div>
            <a href={pageLink} target="_blank">       
            <img className="webEx" src={image} />
            </a>     
            </div>
            <div className="content" >
                    <h2 className="projectName">
                            {projectName}
                    </h2>
                    <p className="portInfo">
                        {projectInfo}
                    </p>
            </div>
        </div>
    )
}