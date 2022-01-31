import Input from "./input";

const CompaniesHeader: React.FC = () => {
  return (
    <thead>
      <th>
        <Input />
      </th>
      <th>Logo</th>
      <th>Specialities</th>
      <th>City</th>
    </thead>
  );
};

export default CompaniesHeader;
