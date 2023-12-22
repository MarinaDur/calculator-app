import { ThemeProvider } from "./context/ThemeContext";
import Main from "./components/Main";
import { CalcProvider } from "./context/CalcContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <CalcProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </CalcProvider>
    </>
  );
}

export default App;
