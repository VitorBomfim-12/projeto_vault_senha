function TechCard({category, name, description}: {category: string, name: string, description: string}) {
    return (
        <div className="about__tech-card">
            <div className="about__tech-header">
                <span>{category}</span>
                <h4>{name}</h4>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TechCard
