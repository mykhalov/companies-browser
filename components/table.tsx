import useCompanies from "../services/companies";
import CompaniesHeader from "./header";
import CompanyRow, { key } from "./row";

const CompaniesTable: React.FC = () => {
  const companies = useCompanies();

  return (
    <table className="m-2 shadow-md">
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
