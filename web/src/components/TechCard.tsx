function TechCard({category, name, description}: {category: string, name: string, description: string}) {
    return (
        <div className="about__tech-card">
            <span>{category}</span>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default TechCard
