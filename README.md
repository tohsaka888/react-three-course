## Note

### `mesh`与`object3D`的区别

- `mesh`代表场景中的一个节点,他可以包含材质`material`和几何体`geometry`
- `object3D`也是代表场景中的一个节点,但是他没有材质`material`和几何体`geometry`,他只代表一个局部空间。

> `object3D`有点类似`svg`中的`g`

### `react-three-fiber`中的 camera

`react-three-fiber`中`camera`好像只能通过`Canvas`创建????
实际使用`perspectiveCamera`,设置位置和`lookAt`好像无效???

> 待确认
