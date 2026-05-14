import TeamCard from '../components/TeamCard.jsx'

function ChiSiamo({ members }) {
    return (
        <div className="container py-5">
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">Il Nostro Dream Team</h1>
                <p className="lead text-muted">Siamo quelli che rendono possibile l'impossibile (o quasi).</p>
            </header>

            <div className="row g-4">
                {members.map(member => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}
export default ChiSiamo