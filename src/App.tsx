import React from 'react';
import FreeWheelinThemeProvider from 'src/theme'; 
import MainView from 'src/view'; 
export const App = () =>  {
  return (
    <FreeWheelinThemeProvider>
				<MainView/> 
		</FreeWheelinThemeProvider>
  );
}

export default App;
