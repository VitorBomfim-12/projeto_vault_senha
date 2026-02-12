import { useAuth } from "../contexts/AuthenticationContext"

function Profile() {
    const {user} = useAuth();

    return (
        <>
            <h1>Minha Conta</h1>
            <section className="pages-content">
                <div className="profile__header">
                    <div className="profile__user">
                        <span>
                            {user?.name?.charAt(0)}
                            {user?.lastName?.charAt(0)}
                        </span>
                    </div>
                    <div className="profile__info">
                        <div>    
                            <h3>{user?.name} {user?.lastName}</h3>
                            <h4>{user?.email}</h4>
                        </div>
                        <h5>{user?.type === "E" ? "Empregado" : "Admin"}</h5>
                    </div>
                </div>
                
            </section>
        </>

    )
}

export default Profile
