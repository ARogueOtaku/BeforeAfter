## Usage

Include Before After JS and CSS as follows:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="beforeafter.css" />
    <script src="beforeafter.js" defer></script>
  </head>
  <body>
    <div id="root">Toggle Theme</div>
  </body>
</html>
```

Initialize the Before After Viewer using any container element:

```javascript
const root = document.getElementById("root");

initBeforeAfter(
  root,
  "https://www.alanwake.com/wp-content/uploads/2021/09/AWR_comparison_biker_OG2.png",
  "https://www.alanwake.com/wp-content/uploads/2021/09/AWR_comparison_biker2.png"
);
```

---

## Demo

**Find a Working Demo [Here](https://arogueotaku.github.io/BeforeAfter)**
