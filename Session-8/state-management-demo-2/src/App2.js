import './App.css';
import React from 'react'

const themes = {
  light:{
    backgroundColor: "#FFF",
    color:"#000"
  },
  dark:{
    backgroundColor: "#000",
    color:"#FFF"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App2(){
  const [theme, setTheme ]= React.useState(themes.light);

  const toggleTheme = () => setTheme((t) => (t === themes.light ? themes.dark:themes.light))

  return (
    <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
      <ToolBar></ToolBar>
      <Panel></Panel>
    </ThemeContext.Provider>
  )
}

function ToolBar(){
  return <ThemedButton></ThemedButton>
}

function ThemedButton(){
  const {toggleTheme} = React.useContext(ThemeContext);

  console.log("Theme Toggle")

  return <button onClick={toggleTheme}>Change Theme</button>
}

function Panel(){
  const theme = React.useContext(ThemeContext);
  console.log("Theme:"+theme.backgroundColor)
  return (
    <div style={{...theme}}>
      <p>Important Panel</p>
    </div>
  )
}
