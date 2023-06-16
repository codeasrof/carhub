"use client";

import { useState } from "react";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  
  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMenuFacturer
                manufacture={manufacture}
                setManufacture={setManufacture}
            />
        </div>
    </form>
  )
}

export default SearchBar