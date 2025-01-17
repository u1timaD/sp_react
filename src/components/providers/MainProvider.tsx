import { createContext, useState } from 'react';
import {
  MainContextType,
  MainProviderType,
  SetMainContextType,
} from './MainProvider.types';

export const MainContext = createContext<MainContextType>(null);
export const SetMainContext = createContext<SetMainContextType>(() => {});

const MainProvider = ({ children }: MainProviderType) => {
  const [userName, setUserName] = useState<MainContextType>(null);

  return (
    <MainContext.Provider value={userName}>
      <SetMainContext.Provider value={setUserName}>
        {children}
      </SetMainContext.Provider>
    </MainContext.Provider>
  );
};

export default MainProvider;
