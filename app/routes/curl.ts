import { LoaderFunction } from "@remix-run/node";
import boxen from "boxen";
import { Chalk } from "chalk";

const chalk = new Chalk({ level: 3 }); // https://github.com/chalk/chalk#chalklevel
const dw = chalk.reset.dim.white;
const bw = chalk.reset.bold.white;
const it = chalk.bold.italic.underline;

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const message = `
${dw("About")}
${bw(
  `This is a tiny demo of how you can send different ${it(
    "(and styled)"
  )} content to curl while serving normal html to web browsers!`
)}

${bw("Pretty neat!")}

${dw("Links")}
${bw(`- ${url.origin}`)}
${bw("- https://github.com/andrewbrey/remix-curl")}

`.trim();

  const result = boxen(message, {
    padding: 1,
    borderColor: "white",
    borderStyle: "round",
    dimBorder: true,
    textAlignment: "left",
    width: 60,
    title: chalk.reset.bold.white("Remix Curl Demo"),
    titleAlignment: "left",
  });

  return new Response(result, {
    status: 200,
    headers: { "Content-Type": "text/plain; utf-8;" },
  });
};
