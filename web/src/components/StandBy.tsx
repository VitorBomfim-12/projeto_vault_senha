function StandBy({direction, id}: {direction:string, id:string}) {
    return (
        <img src={`/stand-by-${direction}.svg`} alt="spinning" className={`login__stand-by login__stand-by--${id}`} />
    )
}

export default StandBy
