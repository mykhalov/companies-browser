// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

// Read file asynchronously to avoid stalling server startup
const data = readFile(resolve("./public", "generated.json"), {
  encoding: "utf-8",
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  data.then((json) => res.status(200).send(json));
}
