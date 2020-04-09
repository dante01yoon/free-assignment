import React, { FC, useContext, createContext } from 'react'; 
import { useLocalStore } from 'mobx-react-lite';
import { ProblemStore } from 'src/store/ProblemStore';

export type RootStore ={
	problem: ProblemStore
}

export type StoreKeys = keyof RootStore;

const storeContext = createContext<RootStore |null>(null);

const initRootStore =(): RootStore => {
	const rootStore: RootStore = {} as RootStore;
	rootStore.problem = new ProblemStore(rootStore); 

	return rootStore;
}

export const StoreProvider: FC =({children}) => {
	const store = useLocalStore(initRootStore);
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export function useStore<K extends StoreKeys>(storeName: K):RootStore[K]{
	const store = useContext(storeContext);
	if(!store ) { 
		throw new Error('useStore');
	}
	return store[storeName]; 
}