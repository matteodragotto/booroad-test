import { useGlobalContext } from "../context/GlobalContext"
const TravelDetailCard = () => {

  const { originalTravelDetail } = useGlobalContext()

  return (
    <div className="card my-3">
      <div className="card-header">
        <h4 className="text-center">{originalTravelDetail.nome_viaggio}</h4>
      </div>
      <div className="card-body">
        <p className="card-text"><span className="fw-bold">Descrizione: </span>{originalTravelDetail.descrizione}</p>
        <p className="card-text"><span className="fw-bold">Meta:</span> {originalTravelDetail.destinazione}</p>
        <p className="card-text"><span className="fw-bold">Tipo di viaggio:</span> {originalTravelDetail.tipologia}</p>
        <p className="card-text"><span className="fw-bold">Responsabile:</span> {originalTravelDetail.accompagnatore}</p>
        <p className="card-text"><span className="fw-bold">Data di partenza:</span> {originalTravelDetail.data_inizio}</p>
        <p className="card-text"><span className="fw-bold">Data di ritorno:</span> {originalTravelDetail.data_fine}</p>
      </div>
    </div>
  )
}

export default TravelDetailCard