import styles from "@picocss/pico/css/pico.classless.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  {
    href: styles,
    rel: "stylesheet",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Curl",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="container">
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
