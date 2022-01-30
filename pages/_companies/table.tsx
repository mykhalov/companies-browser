import { useEffect, useState } from "react";
import CompanyRow, { key } from "./row";
import { Company } from "./types";

const CompaniesTable: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetch("/api/companies")
      .then((r) => r.json())
      .then(setCompanies);
  }, []);

  return (
    <table>
      <thead>
        <th>Company name</th>
        <th>Logo</th>
        <th>Specialities</th>
        <th>City</th>
      </thead>
      <tbody>
        {companies.map((c) => (
          <CompanyRow key={key(c)} value={c} />
        ))}
      </tbody>
    </table>
  );
};

export default CompaniesTable;
