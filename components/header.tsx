import { useContext } from "react";
import CompanyNameInput from "./input";
import SpecialitiesCheckbox from "./checkbox";
import { stateContext } from "./state";

const CompaniesHeader: React.FC = () => {
  const [state] = useContext(stateContext);

  return (
    <thead>
      <tr className="bg-slate-50 border-b border-slate-200">
        <th className="p-2">
          <CompanyNameInput />
        </th>
        <th>Logo</th>
        <th>
          <span className="flex divide-x">
            {Array.from(new Set(state.companies.flatMap((c) => c.specialities)))
              .sort()
              .map((s) => (
                <SpecialitiesCheckbox key={s} value={s} />
              ))}
          </span>
        </th>
        <th>City</th>
      </tr>
    </thead>
  );
};

export default CompaniesHeader;
