<template>
  <div class="select-tab">
    <div class="tab">
      <span
        ref="tab-first"
        class="tab-pane"
        :class="{ 'active-tab': tab === 'first' }"
        @click="changeActiveTab('first')"
      >
        <span class="text">first</span>
        <i class="dot-circle" :class="{ 'active-dot': tab === 'first' }"></i>
        <span>999</span>
      </span>
      <span
        ref="tab-second"
        class="tab-pane"
        :class="{ 'active-tab': tab === 'second' }"
        @click="changeActiveTab('second')"
      >
        <span class="text">secondsecond</span>
        <i class="dot-circle" :class="{ 'active-dot': tab === 'second' }"></i>
        <span>9</span>
      </span>
      <span
        ref="tab-third"
        class="tab-pane"
        :class="{ 'active-tab': tab === 'third' }"
        @click="changeActiveTab('third')"
      >
        <span class="text">thirdthirdthird</span>
        <i class="dot-circle" :class="{ 'active-dot': tab === 'third' }"></i>
        <span>99999</span>
      </span>
    </div>
    <div class="tabs-active-bar"></div>
  </div>
</template>
<style src="./tabNav.styl" lang="stylus" scoped></style>
