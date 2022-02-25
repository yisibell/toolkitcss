# toolkitcss

A CSS toolkit class compiled by sass.

# Installation

``` bash
# yarn
$ yarn add toolkit
```

# Usage

``` js
// @/main.js
import 'toolkitcss/dist/index.css'
```

如果你的项目使用的也是 `sass`，可以将 `scss` 源文件导入至你的公共 **styles** 中。注意，确保你的项目使用的是新的 `dart-sass`。

**例如：**

``` scss
// @/styles/index.scss

// ...

@import '~toolkitcss/src/index'

// ...
```

然后在项目入口文件中导入：

``` js
// @/main.js

// ...

import '@/styles/index.scss' // global css

```

# Features