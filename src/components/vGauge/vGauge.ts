import { Gauge, Donut } from "gaugeJS/dist/gauge.min";
import Vue from "vue"
import { Component, Prop, Watch } from "vue-property-decorator"
import template from "./vGauge.vue"

@Component({
    name: "vGauge",
    mixins: [template],
    components: {
    }
})

export default class VGauge extends Vue {
    @Prop({
        type: String,
        default: ''
    })
    unit

    @Prop({
        type: String,
        default: '200px'
    })
    height

    @Prop({
        type: String,
        default: '200px'
    })
    width

    @Prop({
        type: Number,
        default: 0
    })
    decimalPlace

    @Prop({
        type: String,
        default: ''
    })
    gaugeValueClass

    @Prop({
        type: Boolean,
        default: false
    })
    top

    @Prop({
        type: Number,
        default: 100
    })
    maxValue

    @Prop({
        type: Number,
        default: 0
    })
    minValue
    
    @Prop({
        type: Object,
        default: () => {
            return {
                angle: 0.15,
                lineWidth: 0.44,
                radiusScale: 1,
                pointer: {
                  length: 0.6,
                  strokeWidth: 0.035,
                  color: "#000000"
                },
                limitMax: false,
                limitMin: false,
                colorStart: "#6FADCF",
                colorStop: "#8FC0DA",
                strokeColor: "#E0E0E0",
                generateGradient: true,
                highDpiSupport: true
            }
        }
    })
    options

    @Prop({
        type: Number,
        default: 10
    })
    animationSpeed

    @Prop({
        type: Number,
        default: 0
    })
    initialValue

    @Prop({
        type: [Number, String],
        default: 50
    })
    value

    @Prop({
        type: Boolean,
        default: false
    })
    donut

    gauge = null

    mounted() {
        this.initializeGauge();
    }

    beforeDestroy() {
        delete this.gauge;
    }

    @Watch('value')
    changeValue(newVal) {
        this.gauge.set(newVal);
    }

    initializeGauge() {
        this.gauge = this.donut
          ? new Donut(this.$refs.gauge)
          : new Gauge(this.$refs.gauge);
        this.gauge.maxValue = this.maxValue;
        this.gauge.setMinValue(this.minValue);
        this.gauge.animationSpeed = this.animationSpeed;
        this.gauge.setOptions(this.options);
        this.gauge.setTextField(this.$refs["gauge-value"], this.decimalPlace);
        this.gauge.set(this.value);
      }
}
