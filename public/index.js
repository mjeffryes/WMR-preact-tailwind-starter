import { hydrate, prerender as ssr } from "preact-iso";
import App from "./App";

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
