import { createClient } from "next-sanity";

import { apiVersion, dataset, token, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false
});
