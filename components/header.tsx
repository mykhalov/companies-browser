import CompanyNameInput from "./input";

const CompaniesHeader: React.FC = () => {
  return (
    <thead>
      <th>
        <CompanyNameInput />
      </th>
      <th>Logo</th>
      <th>Specialities</th>
      <th>City</th>
    </thead>
  );
};

export default CompaniesHeader;
