import { Link } from "react-router-dom"

function Authors({picture, name, type, description, linkedin, github}: {picture: string, name: string, type: string, description: string, linkedin: string, github: string}) {
    return (
        <div className="about__authors-card">
            <div className="about__photo">
                <img src={picture} alt={`Imagem do Dev ${name}`} />
            </div>
            <div className="about__authors-content">
                <div className="about__authors-header">
                    <span>{type}</span>
                    <h4>{name}</h4>
                </div>
                <p>{description}</p>
                <div className="about__authors-footer">
                    <Link to={linkedin}><i className="bxl bx-linkedin-square" />.-.. .. -. -.- . -.. .. -.</Link>
                    <Link to={github}><i className="bxl bx-github" />--. .. - .... ..- -...</Link>
                </div>
            </div>
        </div>
    )
}

export default Authors
