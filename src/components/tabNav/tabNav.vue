<template>
  <div class="tab-bar">
    <div class="tab">
        <div v-for="(item, index) in tabs" :key="index">
            <span
                :ref="`tab-${item.tabName}`"
                class="tab-pane"
                :class="{'active-tab': tab===item.tabName}"
                @click="changeActiveTab(item.tabName)"
            >
                <span class="tab-text">{{item.name}}</span>
                <span class="tab-dot" :class="{'active-dot': tab===item.tabName}"></span>
                <span class="tab-num">{{item.num}}</span>
            </span>
        </div>
    </div>
    <div class="tabs-active-bar"></div>
  </div>
</template>
<style src="./tabNav.styl" lang="stylus" scoped></style>
