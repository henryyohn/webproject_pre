<template>
  <div>
    <page-layout>
      <div slot="header">
        <head-option
          @onClickReset="onClickReset"
          @onClickSearch="onClickSearch"
        />
      </div>
      <div slot="body">
        <l-table
          v-loading="loading"
          :pagination="true"
          :column="column"
          :data="list"
          layout="total, prev, pager, next, jumper"
          :current-page.sync="currentPage"
          :total="total"
          :page-size="pageSize"
          @p-current-change="handleCurrentChange"
        />
      </div>
    </page-layout>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :append-to-body="true"
      :before-close="handleClose"
    >
      <InfoDetail
        @onClickCancel="dialogVisible = false"
        @onClickConfirm="onClickConfirm"
        :type="currData.type"
        :detail="currData"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getMemberList } from "@/api/member";
import PageLayout from "@/components/PageLayout";
import LTable from "@/components/lb-table/lb-table.vue";
import HeadOption from "./components/HeadOption.vue";
import InfoDetail from "./components/InfoDetail.vue";
export default {
  components: { PageLayout, LTable, HeadOption, InfoDetail },
  data() {
    return {
      column: [
        {
          prop: "nickname",
          label: "昵称",
        },
        {
          prop: "phone",
          label: "手机号",
        },
        {
          prop: "name",
          label: "真实姓名",
        },
        {
          prop: "class_name",
          label: "所属学科",
        },
        {
          prop: "position",
          label: "职位",
        },
        {
          prop: "year",
          label: "工作年限",
        },
        {
          prop: "create_time",
          label: "录入时间",
        },
        {
          prop: "action",
          label: "操作",
          render: (h, scope) => {
            return (
              <div>
                <el-button
                  size="mini"
                  type="text"
                  onClick={() => {
                    this.handleDetail(scope.$index, scope.row);
                  }}
                >
                  查看
                </el-button>
                <el-button
                  size="mini"
                  type="text"
                  onClick={() => {
                    this.handleEdit(scope.$index, scope.row);
                  }}
                >
                  编辑
                </el-button>
                <el-button
                  size="mini"
                  type="text"
                  onClick={() => {
                    this.handleDelete(scope.$index, scope.row);
                  }}
                >
                  删除
                </el-button>
              </div>
            );
          },
        },
      ],
      list: [],
      loading: false,
      currentPage: 1,
      pageSize: 5,
      total: 0,
      dialogVisible: false,
      currData: {},
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.loading = true;
      getMemberList()
        .then((res) => {
          const { code, data } = res;
          this.loading = false;
          if (code === 20000) {
            this.list = data.items;
            this.total = data.total;
          } else {
            this.$message("数据获取失败");
          }
        })
        .catch((err) => {
          this.loading = false;
          this.$message("数据获取失败");
        });
    },
    handleDetail(index, row) {
      console.log(index, row);
      this.currData = row;
      this.currData.type = "read";
      this.$message(`点击的了查看，索引：${index}`);
      this.dialogVisible = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.currData = JSON.parse(JSON.stringify(row));
      this.currData.type = "edit";
      this.$message(`点击的了编辑，索引：${index}`);
      this.dialogVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm("确认删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(index, row);
          this.$message(`点击的了删除，索引：${index}`);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleCurrentChange() {
      console.log("====================================");
      console.log(this.currentPage);
      console.log("====================================");
    },
    onClickReset(data) {
      console.log("====================================");
      console.log("重置：", data);
      console.log("====================================");
    },
    onClickSearch(data) {
      console.log("====================================");
      console.log("搜索：", data);
      console.log("====================================");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onClickConfirm(data) {
      console.log("====================================");
      console.log("edit==", data);
      console.log("====================================");
      if (data) {
        this.$message("编辑保存");
      } else {
        this.$message("查看结束");
      }
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>