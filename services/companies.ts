import { useContext, useEffect, useMemo } from "react";
import { stateContext } from "../components/state";

export default function useCompanies() {
  const [state, setState] = useContext(stateContext);

  const params = useMemo(() => {
    const params = new URLSearchParams();

    if (state.query) params.set("q", state.query);

    const specialities = Array.from(state.specialities.entries())
      .filter(([k, v]) => v)
      .map(([k, v]) => k);

    if (specialities.length) params.set("s", specialities.join(","));

    return params.toString();
  }, [state.query, state.specialities]);

  useEffect(() => {
    const ctrl = new AbortController();

    fetch(`/api/companies?${params}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((companies) => setState((s) => ({ ...s, companies })));

    return () => ctrl.abort();
  }, [params]);

  return state.companies;
}
