import { createContext, useState } from 'react';

export const MainContext = createContext(null);
export const SetMainContext = createContext(() => {});

const MainProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  return (
    <MainContext.Provider value={userName}>
      <SetMainContext.Provider value={setUserName}>
        {children}
      </SetMainContext.Provider>
    </MainContext.Provider>
  );
};

export default MainProvider;
