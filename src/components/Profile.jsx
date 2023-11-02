function Profile (props) {
    return (
        <div>
            <img src="https://img.freepik.com/premium-vector/happy-boy-working-computer-cartoon-icon-illustration-people-technology-icon-concept_138676-2117.jpg" alt="" />
            <h2>HALOO EVERY ONE!!!!!</h2>
            <h5>My name {props.name}</h5>
            <h5>I am a {props.job}</h5>
        </div>
        )
    }


export default Profile;