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

export default function App(){
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
  return(
    <ThemeContext.Consumer>
      {({toggleTheme}) => {
        return <button onClick={toggleTheme}>Change Theme</button> }}
    </ThemeContext.Consumer>)
}

function Panel(){
  return (
    <ThemeContext.Consumer>
      {({theme})=>(
        <div style ={{...theme}}>
          <p>Profile Panel</p>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
