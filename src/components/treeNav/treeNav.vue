<template>
  <div class="tree-nav">
    <tree
      :level="0"
      :data="treeData"
      :clickNode="clickNode"
      :currentNode="currentNode"
      :loadNodes="loadNodes"
    >
    </tree>
  </div>
</template>
<style src="./treeNav.styl" lang="stylus" scoped></style>
