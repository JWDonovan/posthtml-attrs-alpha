# posthtml-attrs-alpha
A [PostHTML](https://github.com/posthtml/posthtml) Plugin to Sort HTML Attributes Alphabetically.
Based on the [posthtml-attrs-sorter](https://github.com/mrmlnc/posthtml-attrs-sorter) plugin.

## Install
```bash
npm install -D posthtml-attrs-alpha
```

## Usage
### Node
```js
const posthtml = require('posthtml');
const attrsAlpha = require('posthtml-attrs-alpha');
const html = fs.readFileSync('path/to/file.html');

posthtml()
    .use(attrsAlpha())
    .process(html)
    .then(function result() {
        fs.writeFileSync('path/to/file.html');
    });
```

### Gulp
#### Install
```bash
npm install -D gulp-posthtml
```

#### gulpfile.js
```js
import { task, src, dest } from 'gulp'
import posthtml from 'gulp-posthtml'
 
task('html', () => {
  let path
 
  const plugins = [ require('posthtml-attrs-alpha')() ]
  const options = {}
 
  return src('src/*.html')
    .pipe(posthtml(plugins, options))
    .pipe(rename({ ext: '.html' }))
    .pipe(dest('dest'))
})
```

## License
[MIT](https://github.com/JWDonovan/posthtml-attrs-alpha/blob/master/LICENSE)