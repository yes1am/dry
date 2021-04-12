# Queue

队列是遵循先进先出 **(FIFO 先来先服务)** 原则的一组有序的项，队列在尾部添加新元素，并在顶部移除元素,最新添加的元素必须排在队列的末尾。

## enqueue(element)

* **参数：**
    * <code>{any} element</code> - 进入队列的元素

* **详细：**
从队尾添加元素

* **用法：**

```js
new Queue().enqueue(element);
```

## dequeue()

* **返回：**

    * <code>{any} element</code>  - 出队列的元素

* **详细：**
移除队列头部的第一个元素

* **用法：**

```js
new Queue().dequeue();
```

## peek()

* **返回：**

    * <code>{any} element</code>  - 队列头元素

* **详细：**
查看队列头的元素，但是不移出队列

* **用法：**

```js
new Queue().peek();
```

## isEmpty()

* **返回：**

    * <code>{boolean}</code>  - 队列是否为空

* **详细：**
判断队列是否为空

* **用法：**

```js
new Queue().isEmpty();
```

## clear()

* **返回：**

    * <code>{undefined}</code>

* **详细：**
清空队列

* **用法：**

```js
new Queue().clear();
```

## size()

* **返回：**

    * <code>{number} size</code> - 队列的长度

* **详细：**
获得队列的长度

* **用法：**

```js
new Queue().size();
```
