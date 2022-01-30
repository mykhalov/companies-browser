import { Company } from "./types";

const CompanyRow: React.FC<{ value: Company }> = ({ value: c }) => (
  <tr>
    <td>{c.name}</td>
    <td>
      <img width={32} height={32} src={c.logo} alt={`${c.name} logo`} />
    </td>
    <td>{c.specialities.join(", ")}</td>
    <td>{c.city}</td>
  </tr>
);

export const key = (c: Company) => `${c.name}, ${c.city}`;
export default CompanyRow;
