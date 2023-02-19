const TeamMember = (props) => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${props.src})`,
                height: '195px',
                width: '195px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
            <div class="card-body text-center">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.position}</p>
            </div>
        </>
    )
}
export default TeamMember;