# Remix Curl Demo

This is demo of how you can use the fact that Remix provides you with a real server to send one response to web browsers and another response to a `curl` client.

## Demo

This demo is deployed to `Vercel` and can be viewed in a web browser at https://remix-curl.vercel.app/

Alternatively, you can curl this same url with:

```bash
curl --silent https://remix-curl.vercel.app
```

to see how this site sends a _completely different_ response to `curl`, and in fact, the response to `curl` takes advantage of the fact that it's being called from a terminal and the plaintext response includes ansi style escape codes so that you get a pretty output in the terminal just like you do in the browser!
