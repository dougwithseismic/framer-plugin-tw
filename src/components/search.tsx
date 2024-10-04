import React, { useState, useEffect } from "react";
import { useSiteContext } from "../contexts/site-context";

const SEARCH_DEBOUNCE_MS = 300;

export const Search = () => {
  const { searchQuery, setSearchQuery } = useSiteContext();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={localQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};
