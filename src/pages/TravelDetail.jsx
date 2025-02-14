import { useParams } from "react-router-dom"
import { useEffect } from "react"
import viaggi from "../../data/db"
import { useGlobalContext } from "../context/GlobalContext"

import TravelDetailCard from "../components/TravelDetailCard"
import PartecipantsList from "../components/PartecipantsList"
import NewPartecipant from "../components/NewPartecipant"

const TravelDetail = () => {

  const { id } = useParams()
  const { travelData } = useGlobalContext()

  const dettaglioViaggio = travelData.find(viaggio => viaggio.id_viaggio == id)

  return (
    <div className="container my-5">
      <TravelDetailCard dettaglioViaggio={dettaglioViaggio} />

      <h3 className="mb-3 text-center">Elenco partecipanti</h3>

      <PartecipantsList dettaglioViaggio={dettaglioViaggio} />

      <NewPartecipant travelId={id} />

    </div>

  )
}

export default TravelDetail