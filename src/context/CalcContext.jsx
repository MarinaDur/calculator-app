import { createContext, useContext, useEffect, useState } from "react";

const CalcContext = createContext();

function CalcProvider({ children }) {
  const [display, setDisplay] = useState("0");
  const [isPrevOperator, setIsPrevOperator] = useState("");
  const [actionClicked, setActionClicked] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    setFontSize(display.toString().length > 15 ? 2.5 : 3.5);
  }, [display]);

  function handleClick(e) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    if (e.target.matches("button")) {
      if (!action) {
        numbersClicked(keyContent);
        setIsPrevOperator("number");
      }

      if (action === "subtract") {
        subClicked(action);
      }

      if (action === "add" || action === "multiply" || action === "divide") {
        operatorClicked();
        setIsPrevOperator("operator");
        setActionClicked(action);
      }

      if (action === "decimal") {
        decimalClicked();
        setIsPrevOperator("decimal");
      }

      if (action === "clear") {
        setIsPrevOperator("clear");
        setDisplay("0");
        clear();
      }

      if (action === "calculate") {
        calculateClicked();
        setIsPrevOperator("calculate");
      }

      if (action === "delete") {
        deleteClicked();
      }
    } else {
      return;
    }
  }

  function numbersClicked(content) {
    if (display === "0" || isPrevOperator === "operator") {
      setDisplay(content);
    } else if (isPrevOperator === "calculate") {
      setDisplay(content);
      clear();
    } else {
      setDisplay((prevNum) => prevNum + content);
    }
  }

  function decimalClicked() {
    if (isPrevOperator === "operator") {
      setDisplay("0.");
    } else if (isPrevOperator === "calculate") {
      setDisplay("0.");
      clear();
    } else if (!display.includes(".")) {
      setDisplay((prevNum) => prevNum + ".");
    } else {
      setDisplay((prevNum) => prevNum);
    }
  }

  function subClicked(actionIsClicked) {
    if (display === "0") {
      setDisplay("-");
      setIsPrevOperator("number");
      setActionClicked("");
    } else {
      operatorClicked();
      setIsPrevOperator("operator");
      setActionClicked(actionIsClicked);
    }
  }

  function operatorClicked() {
    if (
      actionClicked &&
      isPrevOperator !== "operator" &&
      isPrevOperator !== "calculate"
    ) {
      setFirstValue((prevFirstValue) => {
        const result = calculate(prevFirstValue, actionClicked, display);
        setDisplay(result); // Update display with the result of the previous operation
        return result;
      });
    } else {
      // Otherwise, set the first value and the current operator
      setFirstValue(display);
    }
  }

  function calculateClicked() {
    if (firstValue) {
      if (isPrevOperator === "calculate" || isPrevOperator === "operator") {
        setIsPrevOperator("calculate");
        return;
      }
      // setDisplay(calculate(firstValue, actionClicked, display));
      // setFirstValue(display);
      setFirstValue((prevFirstValue) => {
        const result = calculate(prevFirstValue, actionClicked, display);
        setDisplay(result); // Update display with the result of the previous operation
        return result;
      });
    } else {
      setDisplay((prevNum) => prevNum);
    }
  }

  function deleteClicked() {
    if (isPrevOperator !== "calculate") {
      setDisplay((prevNum) => {
        let newNum;
        if (prevNum.length > 1) {
          newNum = prevNum.slice(0, -1);
        } else {
          newNum = 0;
        }
        return newNum.toString();
      });
    } else {
      return;
    }
  }

  function clear() {
    setFirstValue("");
    setActionClicked("");
  }

  function calculate(n1, operator, n2) {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if (operator === "add") return firstNum + secondNum;
    if (operator === "subtract") return firstNum - secondNum;
    if (operator === "multiply") return firstNum * secondNum;
    if (operator === "divide") return firstNum / secondNum;
  }

  return (
    <CalcContext.Provider
      value={{ handleClick, display, actionClicked, isPrevOperator, fontSize }}
    >
      {children}
    </CalcContext.Provider>
  );
}

function useCalc() {
  const context = useContext(CalcContext);
  if (context === undefined)
    throw new Error("CalcContext was used outside of the CalcProvider");
  return context;
}

export { CalcProvider, useCalc };
