import { useParams } from "react-router-dom"
import viaggi from "../../data/db"
import { useState } from "react"

const TravelDetail = () => {
  const { id } = useParams()

  const dettaglioViaggio = viaggi.find(viaggio => viaggio.id_viaggio == id)
  console.log(dettaglioViaggio);

  const [isOpen, setIsOpen] = useState(null)

  const openAccordion = (idPartecipante) => {
    setIsOpen(isOpen === idPartecipante ? null : idPartecipante)
  }


  return (
    <div className="container my-5">
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

      <h3 className="mb-3 text-center">Elenco partecipanti</h3>
      <div className="accordion" id="accordionExample">
        {dettaglioViaggio.partecipanti.map(partecipante => (
          <div key={partecipante.id_partecipante} className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button ${isOpen === partecipante.id_partecipante ? '' : 'collapsed'}`} type="button" onClick={() => openAccordion(partecipante.id_partecipante)} aria-expanded={isOpen === partecipante.id_partecipante ? 'true' : 'false'} aria-controls="collapseOne">
                {partecipante.nome} {partecipante.cognome}
              </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse ${isOpen === partecipante.id_partecipante ? 'show' : ''}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p><span className="fw-bold">Numero di telefono: </span>{partecipante.telefono}</p>
                <p><span className="fw-bold">Email: </span>{partecipante.email}</p>
                <p><span className="fw-bold">Codice Fiscale: </span>{partecipante.codice_fiscale}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  )
}

export default TravelDetail