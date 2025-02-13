import viaggi from '../../data/db'
import TravelListCard from '../components/TravelListCard'

const HomePage = () => {
  return (
    <div className='container my-5 text-center'>
      <h1 className='mb-5'>Viaggi in programma</h1>
      {viaggi.map(viaggio => (
        <TravelListCard key={viaggio.id_viaggio} viaggio={viaggio} />
      ))}
    </div>
  )
}

export default HomePage