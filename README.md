# vue-ts

## Project Practise

我将在这个`vue+ts`项目中练习工作当中学习的新方法。

练习目录如下：

* 使用`mixins`实现分页组件的封装
* 使用`layout+slot`简化重复样式的书写
* 一个类似el-tabs的组件
* 改写el-transfer实现定制化需求
* 实现一个多层嵌套组件
* 路由模块化，状态管理模块化


## 构建该项目遇到的一些问题：

* 问题1： 使用ESlint/prettier严格模式校验语法自动修复命令

在`package.jsom`中修改lint命令如下：
```
"lint": "eslint --fix --ext .js,.vue src"
```

执行`npm run lint`自动修复重新启动项目，可以消除大部分告警提示，剩下未能消除的按照提示进入文件修改。



