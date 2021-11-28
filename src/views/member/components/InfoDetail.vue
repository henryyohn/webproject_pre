<template>
  <div>
    <CInput v-model="detail.nickname" size="medium" title="昵称" :disabled="type === 'read'" placeholder="昵称" />
    <CInput
      :disabled="type === 'read'"
      v-model="detail.class_name"
      :select-list="options"
      type="select"
      title="所属学科"
      placeholder="请选择"
      size="medium"
      style="margin-top: 10px;"
    />
    <CInput v-model="detail.position" size="medium" title="职位" :disabled="type === 'read'" placeholder="职位" style="margin-top: 10px;" />
    <CInput v-model="detail.year" size="medium" title="工作年限" :disabled="type === 'read'" placeholder="工作年限" style="margin-top: 10px;" />
    <CInput v-model="detail.phone" size="medium" title="手机号" :disabled="type === 'read'" placeholder="手机号" style="margin-top: 10px;" />
    <div class="footer">
      <el-button @click="onClickCancel">取 消</el-button>
      <el-button type="primary" @click="onClickConfirm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import CInput from './CInput.vue'
export default {
  components: { CInput },
  props: {
    detail: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'read'
    }
  },
  data() {
    return {
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
    }
  },
  methods: {
    onClickCancel() {
      this.$emit("onClickCancel");
    },
    onClickConfirm() {
      if(this.type === 'read') {
        this.$emit("onClickConfirm");
      } else {
        this.$emit("onClickConfirm", this.detail);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0;
}
</style>