import React from 'react';
import FreeWheelinThemeProvider from 'src/theme'; 
import MainView from 'src/view'; 
import { StoreProvider } from 'src/lib/hooks';
export const App = () =>  {
  return (
    <FreeWheelinThemeProvider>
			<StoreProvider>
				<MainView/>
			</StoreProvider> 
		</FreeWheelinThemeProvider>
  );
}

export default App;
