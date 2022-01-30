import StateProvider from "./state";
import CompaniesTable from "./table";

const Companies: React.FC = () => (
  <StateProvider>
    <CompaniesTable />
  </StateProvider>
);

export default Companies;
