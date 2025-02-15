import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

const SearchTravelDetail = () => {
  const { originalTravelDetail, initialPartecipants, setInitialPartecipants } = useGlobalContext();

  const [searchData, setSearchData] = useState('');


  useEffect(() => {
    if (originalTravelDetail?.partecipanti) {
      setInitialPartecipants(originalTravelDetail.partecipanti);
    }
  }, [originalTravelDetail, setInitialPartecipants]);

  console.log(initialPartecipants);


  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const filteredData = () => {
    if (!originalTravelDetail?.partecipanti || !initialPartecipants) {
      return;
    }

    const filteredTravelData = initialPartecipants.filter(partecipante => partecipante?.nome.toLowerCase().includes(searchData.toLowerCase()));
    if (searchData.length > 0) {
      setInitialPartecipants(filteredTravelData);
    } else {
      setInitialPartecipants(originalTravelDetail.partecipanti);
    }
  };

  useEffect(() => {
    filteredData();
  }, [searchData]);

  return (
    <div className="mb-3 container w-50">
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
