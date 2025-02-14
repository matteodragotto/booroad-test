import { Link } from "react-router-dom"


const TravelListCard = ({ viaggio }) => {

  const id = viaggio.id_viaggio

  return (
    <Link to={`/dettaglio-viaggio/${id}`}>
      <div className="card my-3">
        <div className="card-header">
          <h4>{viaggio.nome_viaggio}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{viaggio.descrizione}</p>
          <p className="card-text">Data di partenza: {viaggio.data_inizio}</p>
          <p className="card-text">Data di ritorno: {viaggio.data_fine}</p>
        </div>
      </div>
    </Link>


  )
}

export default TravelListCard