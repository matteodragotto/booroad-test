import { useContext, useState, createContext } from "react"
import viaggi from "../../data/db"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [travelData, setTravelData] = useState(viaggi)

  return (
    <GlobalContext.Provider value={{ travelData, setTravelData }}>
      {children}
    </GlobalContext.Provider>

  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }