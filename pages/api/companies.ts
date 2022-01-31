// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
import { Company } from "../../components/types";

// Read file asynchronously to avoid stalling server startup
const data = readFile(resolve("./public", "generated.json"), {
  encoding: "utf-8",
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Company[]>
) {
  data.then((json) => {
    let companies: Company[] = JSON.parse(json);

    if (typeof req.query.q == "string" && req.query.q)
      companies = filterByQuery(companies, req.query.q);

    return res.status(200).json(companies);
  });
}

function filterByQuery(companies: Company[], query: string) {
  return companies
    .filter((c) => c.name.toLowerCase().includes(query))
    .sort(
      (a, b) =>
        a.name.toLowerCase().indexOf(query) -
        b.name.toLowerCase().indexOf(query)
    );
}
