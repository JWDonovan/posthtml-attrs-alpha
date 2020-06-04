# posthtml-attrs-alpha
A [PostHTML](https://github.com/posthtml/posthtml) Plugin to Sort HTML Attributes Alphabetically.
Based on the [posthtml-attrs-sorter](https://github.com/mrmlnc/posthtml-attrs-sorter) plugin.

## Install
```bash
npm install -D posthtml-attrs-alpha
```

## Usage
```js
const posthtml = require('posthtml');
const attrsAlpha = require('posthtml-attrs-alpha');
const html = `
    <html>
        <body>
            <p id="omg" class="wow">OMG</p>
        </body>
    </html>
`

posthtml()
    .use(attrsAlpha())
    .process(html)
    .then((result) => console.log(result.html));
```

## License
[MIT](https://github.com/JWDonovan/posthtml-attrs-alpha/blob/master/LICENSE)