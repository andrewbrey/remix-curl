# Remix Curl Demo

This is demo of how you can use the fact that Remix provides you with a real server to send one response to web browsers and another response to a `curl` client.

## Demo

This demo is deployed to `Vercel` and can be viewed in a web browser at https://remix-curl.vercel.app/

Alternatively, you can curl this same url with:

```bash
curl --silent https://remix-curl.vercel.app
```

to see how this site sends a _completely different_ response to `curl`, and in fact, the response to `curl` takes advantage of the fact that it's being called from a terminal and the plaintext response includes ansi style escape codes so that you get a pretty output in the terminal just like you do in the browser!

### Notes

- As of this writing (April 5th, 2022), Remix doesn't support configuring `esbuild` with custom `external` modules (may be fixed if they merge https://github.com/remix-run/remix/pull/1841). Unfortunately in addition to this, the `external` modules declared _internally_ by Remix are the Node built-ins (`process`, `fs`, etc) but _only_ those without the `node:` specifier prefix, which means any 3rd party dependency that references e.g. `node:process` (or any other Node built-in via its `node:` prefixed specifier) will cause a build error.

  Since I wanted to use the [boxen module](https://github.com/sindresorhus/boxen) by @sindresorhus in the `curl` response text, and this module references `node:process`, I needed to use `patch-package` as a quick way to ensure that the un-prefixed Node built-in was being referenced by `boxen`.

  If at some point either:

  - Remix includes _both_ `node:` prefixed and unprefixed Node built-ins in their list of `external` modules for `esbuild`, OR
  - Remix allows users to supply their own `external` module list via configuration

  then this use of `patch-package` can go away.

### See Also

https://blog.andrewbrey.com/2022-04-05-building-a-curl-able-developer-resume-site-with-remix
