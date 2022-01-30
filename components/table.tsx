import useCompanies from "../services/companies";
import CompanyRow, { key } from "./row";

const CompaniesTable: React.FC = () => {
  const companies = useCompanies();

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
