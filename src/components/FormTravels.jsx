import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const FormTravels = () => {
  const { travelData, setTravelData, error, setError } = useGlobalContext()

  const randomId = Date.now()

  const initialFormData = {
    id_viaggio: randomId,
    nome_viaggio: '',
    destinazione: '',
    tipologia: '',
    accompagnatore: '',
    immagine: '',
    descrizione: '',
    data_inizio: '',
    data_fine: '',
    partecipanti: []
  }

  const [formData, setFormData] = useState(initialFormData)

  const validate = () => {
    if (!formData.nome_viaggio || !formData.destinazione || !formData.tipologia || !formData.accompagnatore || !formData.descrizione || !formData.data_inizio || !formData.data_fine) return false
    return true
  }

  const handleNewTravel = () => {
    return [...travelData, formData]
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      setError('Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori')
      return
    }

    if (travelData) {

      const updatedTravel = handleNewTravel()

      setTravelData(updatedTravel)

      setFormData(initialFormData)
    } else {
      alert('Non è stato possibile aggiungere il viaggio')
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-danger">{error}</p>
      <div className="mb-3">
        <label>Nome del viaggio</label>
        <input
          type="text"
          className="form-control"
          name="nome_viaggio"
          value={formData.nome_viaggio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Destinazione</label>
        <input
          type="text"
          className="form-control"
          name="destinazione"
          value={formData.destinazione}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Tipologia</label>
        <input
          type="text"
          className="form-control"
          name="tipologia"
          value={formData.tipologia}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Accompagnatore</label>
        <input
          type="text"
          className="form-control"
          name="accompagnatore"
          value={formData.accompagnatore}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Immagine</label>
        <input
          type="url"
          className="form-control"
          name="immagine"
          value={formData.immagine}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Descrizione</label>
        <input
          type="text"
          className="form-control"
          name="descrizione"
          value={formData.descrizione}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Data di partenza</label>
        <input
          type="text"
          className="form-control"
          name="data_inizio"
          value={formData.data_inizio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Data di ritorno</label>
        <input
          type="text"
          className="form-control"
          name="data_fine"
          value={formData.data_fine}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormTravels
