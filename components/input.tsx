import { useContext } from "react";
import { stateContext } from "./state";

const CompanyNameInput: React.FC = () => {
  const [, setState] = useContext(stateContext);

  return (
    <input
      placeholder="Company name"
      onChange={(e) => setState((s) => ({ ...s, query: e.target.value }))}
      className="p-2 shadow-inner"
    />
  );
};

export default CompanyNameInput;
