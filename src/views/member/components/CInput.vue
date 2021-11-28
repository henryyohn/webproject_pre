<template>
  <div class="item-wraper" v-bind="$attrs" :style="{ height: height }">
    <div class="title">{{ title }}</div>
    <slot>
      <template v-if="type === 'input'">
        <el-input
          :disabled="disabled"
          :size="size"
          :placeholder="placeholder ? placeholder : '请输入'"
          :value="value"
          @input="onChange"
        />
      </template>
      <template v-else-if="type === 'select'">
        <el-select
          :disabled="disabled"
          :size="size"
          :value="value"
          :placeholder="placeholder ? placeholder : '请选择'"
          @change="onChange"
        >
          <el-option
            v-for="item in selectList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
    </slot>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    height: {
      type: [String, Number],
      default: 40,
    },
    type: {
      type: String,
      default: "input", // input select
    },
    size: {
      type: String,
      default: "small",
    },
    selectList: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onChange(value) {
      console.log("====================================");
      console.log(value);
      console.log("====================================");
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wraper {
  display: flex;
  align-items: center;
  .title {
    font-size: 14px;
    text-align: center;
    min-width: 60px;
    margin: 0 5px;
  }
  .width80 {
    width: 100px;
  }
  .width100 {
    width: 110px;
  }
  .width110 {
    width: 110px;
  }
  .el-date-editor .el-input__inner {
    padding-left: 0 !important;
  }
}
</style>