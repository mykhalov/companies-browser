import { useContext, useMemo } from "react";
import { stateContext } from "./state";

const CompanyNameInput: React.FC = () => {
  const [state, setState] = useContext(stateContext);
  const listId = useMemo(() => Math.random().toString().replace("0", "id"), []);

  return (
    <>
      <input
        placeholder="Company name"
        onChange={(e) => setState((s) => ({ ...s, query: e.target.value }))}
        className="p-2 shadow-inner"
        list={listId}
      />
      <datalist id={listId}>
        {state.companies.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
    </>
  );
};

export default CompanyNameInput;
