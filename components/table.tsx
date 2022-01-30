import useCompanies from "../services/companies";
import CompaniesHeader from "./header";
import CompanyRow, { key } from "./row";

const CompaniesTable: React.FC = () => {
  const companies = useCompanies();

  return (
    <table>
      <CompaniesHeader />
      <tbody>
        {companies.map((c) => (
          <CompanyRow key={key(c)} value={c} />
        ))}
      </tbody>
    </table>
  );
};

export default CompaniesTable;
