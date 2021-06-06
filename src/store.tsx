import React, { ReactChild, useContext } from "react";

export const AppContext = React.createContext<any>(null);

export function AppProvider({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  return (
    <AppContext.Provider value={"ADD GLOBAL STATE"}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext(): React.Context<any> {
  return useContext<React.Context<any>>(AppContext);
}
