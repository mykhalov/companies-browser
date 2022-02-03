import { Company } from "./types";

const CompanyRow: React.FC<{ value: Company }> = ({ value: c }) => (
  <tr className="odd:bg-white even:bg-slate-50">
    <td className="px-4 py-2">{c.name}</td>
    <td className="px-4 py-2">
      <img width={32} height={32} src={c.logo} alt={`${c.name} logo`} />
    </td>
    <td className="px-4 py-2 space-x-2">
      <span className="space-x-1">
        {c.specialities.map((s) => (
          <span
            key="s"
            className="px-2 py-1 text-sm bg-slate-400 text-white rounded-full"
          >
            {s}
          </span>
        ))}
      </span>
    </td>
    <td className="px-4 py-2">{c.city}</td>
  </tr>
);

export const key = (c: Company) => `${c.name}, ${c.city}`;
export default CompanyRow;
