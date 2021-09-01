import "./stelys.css"

function Developer ({ name, age, country }) {

    return (
        <section className="container-developer">
            <p className="developer">Dev: <span>{name}</span> </p>
            <p className="developer">idade: <span>{age}</span></p>
            <p className="developer">País: <span>{country}</span></p>
        </section>
    );
}

export default Developer;