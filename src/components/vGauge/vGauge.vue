<template>
  <div>
    <div class="gauge-title">
      <span ref="gauge-value" v-if="top" :class="gaugeValueClass"></span>
      <span v-if="top" :class="gaugeValueClass">{{unit}}</span>
    </div>
    <canvas ref="gauge" :height="height" :width="width"></canvas>
    <div class="gauge-title">
      <span ref="gauge-value" v-if="!top" :class="gaugeValueClass"></span>
      <span v-if="!top" :class="gaugeValueClass">{{unit}}</span>
    </div>
  </div>
</template>

<style src="./vGauge.styl" lang="stylus" scoped></style>
