import  { createContext, useState } from 'react';



export const SearchContext = createContext()




export const SearchProvider = ({ children }) => {
  const [searchQuiry, setSearchQuiry] = useState('')
  const [searchBtnClick, setsearchBtnClick] = useState(false)



    return (
        <SearchContext.Provider value={{searchQuiry, setSearchQuiry,searchBtnClick,setsearchBtnClick}}>
            {children}
        </SearchContext.Provider>
    );
};

