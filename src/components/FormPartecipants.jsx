import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const FormPartecipants = () => {
  const { originalTravelDetail, setOriginalTravelDetail, error, setError } = useGlobalContext()

  const randomId = Date.now()

  const initialFormData = {
    id_partecipante: randomId,
    nome: '',
    cognome: '',
    telefono: '',
    email: '',
    codice_fiscale: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleNewPartecipant = () => {

    return [...originalTravelDetail.partecipanti, formData]
  }

  const validate = () => {
    if (!formData.nome || !formData.cognome || !formData.telefono || !formData.email || !formData.codice_fiscale) return false
    return true
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      setError('Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori')
      return
    }

    if (originalTravelDetail) {

      const updatedPartecipanti = handleNewPartecipant()
      const updatedTravelData = { ...originalTravelDetail, partecipanti: updatedPartecipanti }

      setOriginalTravelDetail(updatedTravelData)
      setFormData(initialFormData)
    } else {
      alert('Non è stato possibile aggiungere il nuovo partecipante')
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
        <label>Nome</label>
        <input
          type="text"
          className="form-control"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Cognome</label>
        <input
          type="text"
          className="form-control"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Telefono</label>
        <input
          type="tel"
          className="form-control"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Codice Fiscale</label>
        <input
          type="text"
          className="form-control"
          name="codice_fiscale"
          value={formData.codice_fiscale}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormPartecipants
