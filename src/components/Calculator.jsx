import { styled } from "styled-components";
import Button from "../ui/Button";
import { useCalc } from "../context/CalcContext";

const StyledCalculator = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: var(--cl-bg-toggle-keypad);
  width: 100%;
  gap: 0.4rem;
  padding: 1rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const buttons = [
  { label: 7, type: "num" },
  { label: 8, type: "num" },
  { label: 9, type: "num" },
  { label: "DEL", type: "action", dataAction: "delete" },
  { label: 4, type: "num" },
  { label: 5, type: "num" },
  { label: 6, type: "num" },
  { label: "+", type: "operator", dataAction: "add" },
  { label: 1, type: "num" },
  { label: 2, type: "num" },
  { label: 3, type: "num" },
  { label: "-", type: "operator", dataAction: "subtract" },
  { label: ".", type: "num", dataAction: "decimal" },
  { label: 0, type: "num" },
  { label: "/", type: "operator", dataAction: "divide" },
  { label: "x", type: "operator", dataAction: "multiply" },
  { label: "RESET", type: "action", name: "clear", dataAction: "clear" },
  { label: "=", type: "equal", name: "eq", dataAction: "calculate" },
];

function Calculator() {
  const { handleClick, actionClicked, isPrevOperator } = useCalc();
  return (
    <StyledCalculator onClick={handleClick}>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          {...btn}
          clicked={
            actionClicked === btn.dataAction &&
            isPrevOperator !== "number" &&
            isPrevOperator !== "calculate"
          }
        />
      ))}
    </StyledCalculator>
  );
}

export default Calculator;
