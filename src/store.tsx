import React, { ReactChild, useContext } from "react";

export const AppContext = React.createContext<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGlobalContext(): React.Context<any> {
  return useContext<React.Context<any>>(AppContext); // eslint-disable-line @typescript-eslint/no-explicit-any
}
