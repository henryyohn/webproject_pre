<template>
  <div class="option-wraper">
    <div class="option-row">
      <CInput v-model="formData.nickname" title="昵称" placeholder="昵称" />
      <CInput
        v-model="formData.className"
        :select-list="options"
        type="select"
        title="所属学科"
        placeholder="请选择"
      />
      <CInput v-model="formData.position" title="职位" placeholder="职位" />
      <CInput v-model="formData.year" title="工作年限" placeholder="工作年限" />
      <CInput v-model="formData.phone" title="手机号" placeholder="手机号" />
      <el-button
        style="margin-left: 10px"
        size="small"
        type="primary"
        icon="el-icon-search"
        @click="onClickSearch"
        >搜索</el-button
      >
      <el-button
        size="small"
        type="info"
        icon="el-icon-refresh"
        @click="onClickReset"
        >重置</el-button
      >
    </div>
  </div>
</template>

<script>
import CInput from "./CInput.vue";
export default {
  components: { CInput },
  props: {},
  data() {
    return {
      formData: {
        nickname: "",
        className: "",
        position: "",
        year: "",
        phone: "",
      },
      startTime: "",
      endTime: "",
      options: [
        {
          value: "1",
          label: "python",
        },
        {
          value: "2",
          label: "前端",
        },
        {
          value: "3",
          label: "算法",
        },
        {
          value: "4",
          label: "Java",
        },
      ],
    };
  },
  methods: {
    onClickSearch() {
      this.$emit("onClickSearch", this.formData);
    },
    onClickReset() {
      this.resetData();
      this.$emit("onClickReset", this.formData);
    },
    resetData() {
      this.formData = {
        nickname: "",
        className: "",
        position: "",
        year: "",
        phone: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.option-wraper {
  padding-top: 15px;
  width: 100%;
  .option-row {
    display: flex;
    .item-wraper {
      display: flex;
      align-items: center;
      height: 40px;
      .title {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        min-width: 60px;
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
  }
  .margin-r {
    margin-right: 10px;
  }
}
</style>