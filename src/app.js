import { AbstractNode } from "./index.js";

document.body.innerHTML = `
<pre>
${AbstractNode.from({
  today: {
    needCoffee: true,
    writeBlog: true,
  },
  tomorrow: {
    holiday: "hopefully!",
    zenMode: {
      forever: true,
    },
  },
}).print()}
</pre>
`;
