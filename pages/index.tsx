import { NextPage } from "next";
import StateProvider from "../components/state";
import CompaniesTable from "../components/table";

const Companies: NextPage = () => (
  <StateProvider>
    <CompaniesTable />
  </StateProvider>
);

export default Companies;
