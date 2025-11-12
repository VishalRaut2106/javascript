# Templating
EJS (Embedded Javascript Templates)

> EJS is a simple teplating languagae that lets you generate HTML markup wiht plain Javascript

---
we dont need to require EJS it express by defulte express internally add its


> view engine == templeting enginge  (renders the view)

res.render for rendering the entire page 

views directory 
view ko search kro yha pai
```js
const path = require("path");
app.set("views",path.join(__dirname, "/views"));
```
---

## Interpolation Syntax
embedding expression (for ex: `${}`)

