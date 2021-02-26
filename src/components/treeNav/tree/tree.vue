<template>
  <ul class="tree" :level="level">
    <li v-for="(v, index) in data" :key="index">
      <div class="li-data" v-if="v.count > 0">
        <div class="node-item" @click="handleClickNode">
          <span
            v-if="level > 0 && whetherHasNodes(data)"
            class="node-arrow"
            @click.stop="handleExpandNode"
          >
            <!-- 展开/收起图标 -->
            <i
              v-if="v.hasNodes"
              class="iconfont"
              :class="{
                'el-icon-caret-right': !v.expand,
                'el-icon-caret-bottom': v.expand,
              }"
            ></i>
          </span>
          <!-- 目录名称 -->
          <span
            class="node.name"
            :class="{ current: currentNode && currentNode.nodeId === v.nodeId }"
            :title="v.path"
            @mouseenter="setTestSuitePath(v, v.id)"
          >
            <span>{{ v.name }}</span>
          </span>
          <!-- 数量 -->
          <!-- <span>{{ v.count || 0 }}</span> -->
        </div>
        <tree
          v-if="v.expand"
          :data="v.nodes"
          :level="level + 1"
          :clickNode="clikeNode"
          :currentNode="currentNode"
          :loadNodes="loadNodes"
        ></tree>
      </div>
    </li>
  </ul>
</template>
<style src="./tree.styl" lang="stylus" scoped></style>
