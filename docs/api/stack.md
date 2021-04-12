# Stack

栈是一种 **先进后出(LIFO)** 的有序集合，新添加或待删除的元素都保存在栈的同一端，叫做栈顶。另一端叫做栈底。

## push(element)

* **参数：**

    * <code>{any} element</code> - 进入栈的元素

* **详细：**
将元素推入栈中

* **用法：**

```js
new Stack().push(element);
```

## pop()

* **返回：**

    * <code>{any} element</code>  - 出栈的元素

* **详细：**
执行出栈的操作

* **用法：**

```js
new Stack().pop();
```

## peek()

* **返回：**

    * <code>{any} element</code>  - 栈顶的元素

* **详细：**
获得栈顶的元素, 但是不移出栈

* **用法：**

```js
new Stack().peek();
```

## isEmpty()

* **返回：**

    * <code>{boolean}</code>  - 栈是否为空

* **详细：**
判断栈是否为空

* **用法：**

```js
new Stack().isEmpty();
```

## clear()

* **返回：**

    * <code>{undefined}</code>

* **详细：**
清空栈

* **用法：**

```js
new Stack().clear();
```

## size()

* **返回：**

    * <code>{number} size</code> - 栈内的元素个数

* **详细：**
返回栈内的元素个数

* **用法：**

```js
new Stack().size();
```