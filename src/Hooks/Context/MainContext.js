import React, { createContext, useEffect, useState } from 'react'

const MainContext = createContext();

const ProvideContext = ({ children }) => {

    const [sideBaropen, setSideBaropen] = useState(false);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
      
    }, [])
    
    const Values = {sideBaropen, setSideBaropen, auth, setAuth}
  return (
    <MainContext.Provider value={Values} >
        {children}
    </MainContext.Provider>
  )
}

export { ProvideContext, MainContext}