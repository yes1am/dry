# 介绍

@songjp/dry 是个人的 JavaScript Utils 包

## 1. 如何使用

**安装:**
```shell
yarn add @songjp/dry
```

**三种使用方式:**
```js
// 方式1: import
import { Queue } from '@songjp/dry'
console.log(new Queue().isEmpty())

// 方式2: require
const { Queue } = require('@songjp/dry')
console.log(new Queue().isEmpty())

// 方式3: 在 HTML 文件中使用 script 标签加载，此时会在 window 上挂载一个 Dry 的变量，比如
<script src="node_modules/@songjp/dry/lib/bundle.browser.js"></script>
<script>
  console.log(new Dry.Queue().isEmpty())
</script>
```
