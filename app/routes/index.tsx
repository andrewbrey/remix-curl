import { HeadersFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface LoaderData {
  origin: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const data: LoaderData = { origin: url.origin };

  return json(data);
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=31536000, s-maxage=31536000, immutable",
  };
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Remix Curl Demo</h1>
      <section>
        <blockquote>
          Show one response to users of a browser and another to users of a
          terminal!
        </blockquote>
      </section>
      <hr />
      <section>
        <p>Try loading this same page with a terminal:</p>
        <pre>
          <code>curl --silent {data.origin}</code>
        </pre>
      </section>
    </main>
  );
}
