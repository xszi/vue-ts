<template>
  <div class="el-transfer">
    <transfer-panel
      v-bind="$props"
      ref="leftPanel"
      :data="sourceData"
      :title="titles[0] || '左边列表'"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || '请输入搜索内容'"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToLeft"
        :disabled="rightChecked.length === 0"
      >
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToRight"
        :disabled="leftChecked.length === 0"
      >
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
    <transfer-panel
      v-bind="$props"
      ref="rightPanel"
      :data="targetData"
      :title="titles[1] || '右边列表'"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || '请输入搜索内容'"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
    </transfer-panel>
  </div>
</template>

<script>
import Emitter from "../mixins/emitter";
import TransferPanel from "./transfer-panel.vue";
import Migrating from "../mixins/migrating";
import { deepCopy } from "../mixins/deepCopy";
export default {
  name: "iTreeTransfer",

  mixins: [Emitter, Migrating],

  components: {
    TransferPanel,
  },

  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    buttonTexts: {
      type: Array,
      default() {
        return [];
      },
    },
    filterPlaceholder: {
      type: String,
      default: "",
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: Function,
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    format: {
      type: Object,
      default() {
        return {};
      },
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: "label",
          key: "key",
          children: "children",
          disabled: "disabled",
        };
      },
    },
    targetOrder: {
      type: String,
      default: "original",
    },
  },

  data() {
    return {
      leftChecked: [],
      rightChecked: [],
      rightHalfChecked: [],
    };
  },

  computed: {
    sourceData() {
      const data = deepCopy(this.data);
      const filterData = (list) => {
        return list.filter((item) => {
          if (
            item[this.props.children] &&
            item[this.props.children].length > 0
          ) {
            item[this.props.children] = filterData(item.children);
          }
          return this.value.indexOf(item[this.props.key]) === -1;
        });
      };
      console.log(filterData(data), "filterData(data) ---sourceData");
      return filterData(data);
    },

    targetData() {
      const data = deepCopy(this.data);
      const filterData = (list) => {
        const res = [];
        list.forEach((item) => {
          if (this.value.indexOf(item[this.props.key]) > -1) {
            res.push(item);
          }

          if (
            item[this.props.children] &&
            item[this.props.children].length > 0
          ) {
            const result = filterData(item[this.props.children]);
            if (result.length > 0) {
              item[this.props.children] = result;

              const find = res.find((i) => i.key === item.key);
              if (find === undefined) {
                res.push(item);
              }
            }
          }
        });
        return res;
      };
      console.log(filterData(data), "filterData(data) ---targetData");
      return filterData(data);
    },

    hasButtonTexts() {
      return this.buttonTexts.length === 2;
    },
  },

  watch: {
    value(val) {
      this.dispatch("ElFormItem", "el.form.change", val);
    },
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          "footer-format": "footer-format is renamed to format.",
        },
      };
    },

    onSourceCheckedChange(val, movedKeys) {
      this.leftChecked = val;
      if (movedKeys === undefined) return;
      //   this.$emit("left-check-change", val, movedKeys);
    },

    onTargetCheckedChange(val, movedKeys, halfChecked) {
      this.rightChecked = val;
      this.rightHalfChecked = halfChecked;
      if (movedKeys === undefined) return;
      //   this.$emit("right-check-change", val, movedKeys);
    },

    addToLeft() {
      const currentValue = this.value.slice();
      console.log(this.rightChecked, 'this.rightChecked');
      console.log(this.rightHalfChecked, 'this.rightHalfChecked');
    //   将刚选中右边的key从currentValue中删除，可能存在
      const list = this.rightChecked.concat(this.rightHalfChecked);
      list.forEach((item) => {
        const index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit("input", currentValue);
      console.log(currentValue, 'currentValue addToLeft');
      //   this.$emit("change", currentValue, "left", this.rightChecked);
    },

    addToRight() {
      let currentValue = this.value.slice();
    //   const itemsToBeMoved = [];
    //   console.log(this.leftChecked, "leftChecked");
    //   const findSelectkey = (list) => {
    //     const key = this.props.key;
    //     const itemsToBeMoved = [];
    //     list.forEach((item) => {
    //       const itemKey = item[key];
    //       if (
    //         this.leftChecked.indexOf(itemKey) > -1 &&
    //         this.value.indexOf(itemKey) === -1
    //       ) {
    //         itemsToBeMoved.push(itemKey);
    //       }

    //       if (
    //         item[this.props.children] &&
    //         item[this.props.children].length > 0
    //       ) {
    //         itemsToBeMoved.push(...findSelectkey(item[this.props.children]));
    //       }
    //     });
    //     return itemsToBeMoved;
    //   };

    //   itemsToBeMoved.push(...findSelectkey(this.data));
      currentValue = currentValue.concat(this.leftChecked);

      // currentValue = this.targetOrder === 'unshift'
      //     ? itemsToBeMoved.concat(currentValue)
      //     : currentValue.concat(itemsToBeMoved)

      this.$emit("input", currentValue);
      console.log(currentValue, "currentValue addToRight");
      // this.$emit('change', currentValue, 'right', this.leftChecked)
    },

    clearQuery(which) {
      if (which === "left") {
        this.$refs.leftPanel.query = "";
      } else if (which === "right") {
        this.$refs.rightPanel.query = "";
      }
    },
  },
};
</script>
