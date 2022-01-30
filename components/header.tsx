import { useContext } from "react";
import { stateContext } from "./state";

const CompaniesHeader: React.FC = () => {
  const [, setState] = useContext(stateContext);

  return (
    <thead>
      <th>
        <input
          placeholder="Company name"
          onChange={(e) => setState((s) => ({ ...s, query: e.target.value }))}
        />
      </th>
      <th>Logo</th>
      <th>Specialities</th>
      <th>City</th>
    </thead>
  );
};

export default CompaniesHeader;
