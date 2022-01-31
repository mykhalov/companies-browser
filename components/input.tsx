import { useContext } from "react";
import { stateContext } from "./state";

const Input: React.FC = () => {
  const [, setState] = useContext(stateContext);

  return (
    <input
      placeholder="Company name"
      onChange={(e) => setState((s) => ({ ...s, query: e.target.value }))}
    />
  );
};

export default Input;
