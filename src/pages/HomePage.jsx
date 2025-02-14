import viaggi from '../../data/db'
import TravelListCard from '../components/TravelListCard'
import NewTravel from '../components/NewTravel'
import { useGlobalContext } from '../context/GlobalContext'

const HomePage = () => {
  const { travelData } = useGlobalContext()

  return (
    <div className='container my-5 text-center'>
      <h1 className='mb-5'>Viaggi in programma</h1>
      {travelData.map(viaggio => (
        <TravelListCard key={viaggio.id_viaggio} viaggio={viaggio} />
      ))}
      <NewTravel />
    </div>
  )
}

export default HomePage