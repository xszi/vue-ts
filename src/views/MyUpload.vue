<template>
  <div id="app">
    <p>121313123132</p>
    <!-- <el-upload
        class="upload-demo"
        action="/api/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload> -->
    <i-upload
      class="upload-demo"
      action="/api/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </i-upload>
    <div class="btn-click">
      <el-button @click="toClick(1)">点击1</el-button>
      <el-button @click="toClick(2)">点击2</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class MyUpload extends Vue {
  fileList = [];
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  handlePreview(file) {
    console.log(file);
  }
  handleExceed(files, fileList) {
    this.$message.warning(
      `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
        files.length + fileList.length
      } 个文件`
    );
  }
  toClick(type) {
    type === 1 &&
      axios.get("/click1").then((res) => {
        console.log(res, "kkkkkk");
      });

    type === 2 &&
      axios.get("/click2").then((res) => {
        console.log(res, "hhhhhh");
      });
  }
  beforeRemove(file) {
    return this.$confirm(`确定移除 ${file.name}？`);
  }
}
</script>

<style lang="stylus" scoped>
.btn-click {
  margin-top: 30px;
}
</style>
