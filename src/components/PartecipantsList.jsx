import { useState } from "react";

const PartecipantsList = ({ dettaglioViaggio }) => {

  const [isOpen, setIsOpen] = useState(null)

  const openAccordion = (idPartecipante) => {
    setIsOpen(isOpen === idPartecipante ? null : idPartecipante)
  }

  return (
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
  )
}

export default PartecipantsList