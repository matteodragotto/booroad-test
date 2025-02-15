import TravelListCard from '../components/TravelListCard'
import NewTravel from '../components/NewTravel'
import { useGlobalContext } from '../context/GlobalContext'
import SearchHomePage from '../components/SearchHomePage'

const HomePage = () => {
  const { travelData } = useGlobalContext()

  const validate = () => {
    if (travelData.length == 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='container my-5 text-center'>
      {<SearchHomePage />}
      {validate() ? (<h1>Nessun viaggio in programma</h1>) : (
        <>
          <h1 className='mb-5'>Viaggi in programma</h1>
          {travelData.map(viaggio => (
            <TravelListCard key={viaggio.id_viaggio} viaggio={viaggio} />
          ))}
        </>
      )
      }
      <NewTravel />
    </div>
  )
}

export default HomePage