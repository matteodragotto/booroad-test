import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

const SearchTravelDetail = () => {
  const { originalTravelDetail, setOriginalTravelDetail, initialPartecipants, setInitialPartecipants } = useGlobalContext();

  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    if (originalTravelDetail?.partecipanti) {
      setInitialPartecipants(originalTravelDetail.partecipanti);
    }
  }, [originalTravelDetail, setInitialPartecipants]);

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const filteredData = () => {
    if (!originalTravelDetail?.partecipanti || !initialPartecipants) {
      return;
    }

    const filteredTravelData = originalTravelDetail.partecipanti.filter(partecipante => partecipante?.nome.toLowerCase().includes(searchData.toLowerCase()));
    if (searchData.length > 0) {
      setOriginalTravelDetail(prevDetail => ({
        ...prevDetail,
        partecipanti: filteredTravelData
      }));
    } else {
      setOriginalTravelDetail(prevDetail => ({
        ...prevDetail,
        partecipanti: initialPartecipants
      }));
    }
  };

  useEffect(() => {
    filteredData();
  }, [searchData]);

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchData}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchTravelDetail;
