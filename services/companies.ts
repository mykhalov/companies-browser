import { useContext, useEffect } from "react";
import { stateContext } from "../components/state";

export default function useCompanies() {
  const [state, setState] = useContext(stateContext);

  useEffect(() => {
    fetch("/api/companies")
      .then((r) => r.json())
      .then((companies) => setState((s) => ({ ...s, companies })));
  }, []);

  return state.companies;
}
