const fs = require("fs");
const path = require("path");

console.log("new post");

const [, , name] = process.argv;

console.log({ name });

fs.writeFileSync(
  path.join(process.cwd(), "content", "en", `${name}.mdx`),
  `
---
title: Make a pull request ${name}
---

`
);
