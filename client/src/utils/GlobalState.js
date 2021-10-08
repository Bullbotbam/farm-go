import React, { createContext, useContext} from 'react';

const StateContext = createContext()

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { useStoreContext};