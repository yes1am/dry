[使用 rollup 打造自己的 npm 包 (全流程)](https://juejin.cn/post/6950557086916804645)

# @songjp/dry

Personal JavaScript Utils, dry means `Don't Repeat Yourself`

> *当前仅包含示例代码，不含实用代码，主要用于演示如何打包及发布。*  
> *Currently contains only sample code, no utility code, It is mainly used to demonstrate how to package and publish.*


## 1. 使用

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

## 2. 发布

```shell
# 打 tag
npm version patch/minor/maior

# 推代码
git push

# 推 tag 触发 CI 执行发布
git push origin --tags
```
