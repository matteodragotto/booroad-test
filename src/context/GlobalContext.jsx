import { useContext, useState, createContext, useEffect } from "react"
import viaggi from "../../data/db"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const randomId = Date.now()

  const travelForm = {
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

  const [travelData, setTravelData] = useState(viaggi)
  const [originalTravelDetail, setOriginalTravelDetail] = useState(travelForm)
  const [initialPartecipants, setInitialPartecipants] = useState(originalTravelDetail.partecipanti)
  const [error, setError] = useState('')

  const fetchTravel = (id) => {
    return travelData.find(viaggio => viaggio.id_viaggio == id)
  }

  const value = {
    travelData,
    setTravelData,
    originalTravelDetail,
    setOriginalTravelDetail,
    fetchTravel,
    initialPartecipants,
    setInitialPartecipants,
    error,
    setError
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>

  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }