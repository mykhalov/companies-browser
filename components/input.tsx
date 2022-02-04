import debounce from "lodash.debounce";
import { useCallback, useContext, useMemo } from "react";
import { stateContext } from "./state";

const CompanyNameInput: React.FC = () => {
  const [state, setState] = useContext(stateContext);
  const listId = useMemo(() => Math.random().toString().replace("0", "id"), []);

  const onChange = useCallback(
    debounce((e) => setState((s) => ({ ...s, query: e.target.value })), 100),
    []
  );

  return (
    <>
      <input
        placeholder="Company name"
        onChange={onChange}
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
