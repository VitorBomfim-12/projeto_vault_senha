function AccordionHome({lead, text, title}: {lead: string, text:string, title:string}) {

    return (
        <>
            <div className="home__accordion"
            >
                <div className="home__accordion-header">
                    <h2>// {title}</h2>
                    <i className="bx bx-arrow-down-right-stroke" />
                </div>

                <div className="home__accordion-content">
                    <div>
                        <div className="home__accordion-texts">
                            <h3>{lead}</h3>
                            <p>{text}</p>
                        </div>
                        <div className="home__accordion-images">
                            <img src="/tela-cofres.png" className="home__accordion-images--1" alt="" />
                            <img src="/tela-modal.png" className="home__accordion-images--2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
           

        </>
    )
}

export default AccordionHome
