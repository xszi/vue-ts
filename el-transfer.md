### 修改Element穿梭框组件el-transfer

#### 需求：

当前Element现有的穿梭框组件为单层列表结构，但项目需求为具有树形结构的穿梭框

#### 准备：

* 分析el-transfer组件源码，确定修改位置

* 查询el-tree组件的属性、事件及方法 [tree](https://element.eleme.io/#/zh-CN/component/tree)

#### 步骤：

* 将原来的el-checkbox替换成el-tree，把数据全部先展示出来

  ![image-20210401114608210](C:\Users\jiuhua-pc\AppData\Roaming\Typora\typora-user-images\image-20210401114608210.png)

* 选中方法check，获取选中点的信息（**key**）

* 点击向右添加，修改addToRight方法

  将获取选中的node的key放入一个数组，修改**value**($emit修改v-model=“value”)

* 通过value过滤原始数据**data**，sourceData给左边，targetData给右边

![image-20210401152116049](C:\Users\jiuhua-pc\AppData\Roaming\Typora\typora-user-images\image-20210401152116049.png)

#### v-model 

v-bind="$props": 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props。 

 ```html
 <i-tree-transfer
    v-model="value"
    :data="data"
    filterable
  />
  <i-tree-transfer :value="value" @input="value=$event.target.value">
  //v-model就是绑定了一个名为value的props和一个事件input
  // (1) v-bind:绑定响应式数据
  // (2) 触发 input 事件 并传递数据 (重点)
      
 ```

```js
data: [
    {
        key: 1,
        label: '备选项1',
        disabled: false,
        children: [
            {
                key: 11,
                label: '备选项11',
                disabled: false,
                children: [
                    { key: 111, label: '备选项111', disabled: false },
                    { key: 112, label: '备选项112', disabled: false },
                    { key: 113, label: '备选项113', disabled: false }
                ]
            },
            { key: 12, label: '备选项12', disabled: false },
            { key: 13, label: '备选项13', disabled: false }
        ]
    },
    { key: 2, label: '备选项2', disabled: false },
    { key: 3, label: '备选项3', disabled: false },
    { key: 4, label: '备选项4', disabled: false },
    { key: 5, label: '备选项5', disabled: false }
]
```

**近段时间的主要工作**：

1. PM中一些零碎需求，比如输入框特殊字符校验，弹窗以及根据后台修复一些逻辑
2. labor2一个维护页面
   * 根据之前的alm后台管理重新建了个项目，因为要独立部署
   * 还在开发当中

1. x-www-form-urlencoded / form-data / raw 

三种类型传值的区别（特别是x-www-form-urlencoded 和 form-data）

不同的传值方式与后台的联系

2. el-tree-transfer 组件思路

