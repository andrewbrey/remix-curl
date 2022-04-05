import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ ok: true });
};
