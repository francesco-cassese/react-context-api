function TeamCard({ member }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <article className="card p-3 h-100 d-flex flex-column justify-content-between shadow border-0">
                <div className="text-center mb-3">
                    <img
                        src={member.foto}
                        alt={member.nome}
                        className="shadow-sm mb-3 img-team"
                    />
                    <h2 className="h5 fw-bold mb-1">{member.nome}</h2>
                    <span className="badge bg-success-subtle text-success rounded-pill px-3">
                        {member.ruolo}
                    </span>
                </div>

                <div className="container-info small flex-grow-1">
                    <p className="fw-bold text-dark mb-1">{member.titoloUfficiale}</p>

                    <p className={`text-muted desciption-member`}>
                        {member.cosaFaDavvero}
                    </p>

                    <div className="mt-3 pt-3 border-top">
                        <span className="text-muted d-block small mb-1">Specializzato/a nel:</span>
                        <p className="fw-bold mb-0">{member.superpotereInutile}</p>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default TeamCard;