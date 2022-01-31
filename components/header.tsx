import { useContext } from "react";
import CompanyNameInput from "./input";
import SpecialitiesCheckbox from "./checkbox";
import { stateContext } from "./state";

const CompaniesHeader: React.FC = () => {
  const [state] = useContext(stateContext);

  return (
    <thead>
      <th>
        <CompanyNameInput />
      </th>
      <th>Logo</th>
      <th>
        {Array.from(new Set(state.companies.flatMap((c) => c.specialities)))
          .sort()
          .map((s) => (
            <SpecialitiesCheckbox key={s} value={s} />
          ))}
      </th>
      <th>City</th>
    </thead>
  );
};

export default CompaniesHeader;
