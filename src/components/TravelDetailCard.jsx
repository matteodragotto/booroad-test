
const TravelDetailCard = ({ dettaglioViaggio }) => {
  return (
    <div className="card my-3">
      <div className="card-header">
        <h4 className="text-center">{dettaglioViaggio.nome_viaggio}</h4>
      </div>
      <div className="card-body">
        <p className="card-text"><span className="fw-bold">Descrizione: </span>{dettaglioViaggio.descrizione}</p>
        <p className="card-text"><span className="fw-bold">Meta:</span> {dettaglioViaggio.destinazione}</p>
        <p className="card-text"><span className="fw-bold">Tipo di viaggio:</span> {dettaglioViaggio.tipologia}</p>
        <p className="card-text"><span className="fw-bold">Responsabile:</span> {dettaglioViaggio.accompagnatore}</p>
        <p className="card-text"><span className="fw-bold">Data di partenza:</span> {dettaglioViaggio.data_inizio}</p>
        <p className="card-text"><span className="fw-bold">Data di ritorno:</span> {dettaglioViaggio.data_fine}</p>
      </div>
    </div>
  )
}

export default TravelDetailCard