import React, { useContext } from "react";

const themes = {
  light: {
   foreground: "#000000",
   background: "#eeeeee"
  },
  dark: {
   foreground: "#ffffff",
   background: "#222222"
  }
 };

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
   <button style={{ background: theme.background, color: theme.foreground }}>
    I am styled by theme context!
   </button>
  );
}

function App() {
  return (
   <ThemeContext.Provider value={themes.dark}>
   <ThemedButton />
   </ThemeContext.Provider>
  );
}

export default App;