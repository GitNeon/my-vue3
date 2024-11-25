<script>
import OnlyOffice from '../../components/only-office/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OnlineOffice',
  components: {
    OnlyOffice
  },
  props: {},
  data() {
    return {
      userInfo: {
        name: '小明',
        id: 'U100001'
      },
      show: false,
      officeOption: {},
      tableData: [
        {
          fileName: '测试文件1-word',
          // fileUrl: 'https://d2nlctn12v279m.cloudfront.net/assets/docs/samples/zh/demo.docx',
          fileUrl: 'http://192.168.3.243:8422/zgdb_auth/testOnlyOffice/getDocumentContent?fileId=docx',
          fileType: 'docx'
        },
        {
          fileName: '测试文件2-excel',
          fileUrl: 'http://192.168.3.243:8422/zgdb_auth/testOnlyOffice/getDocumentContent?fileId=xlsx',
          fileType: 'xlsx'
        }
      ]
    };
  },
  methods: {
    handleView(scope) {
      console.log('view', scope);
      const fileInfo = scope.row;

      if (!fileInfo.fileUrl) {
        this.$message.info('该文件还未上传');
        return;
      }

      this.officeOption = {
        fileUrl: fileInfo.fileUrl,
        isEdit: false,
        fileType: fileInfo.fileType,
        docTitle: 'demo',
        mode: 'view',
        user: {
          id: this.userInfo.id,
          name: this.userInfo.name
        },
        callbackUrl: 'http://192.168.3.243:8422/zgdb_auth/testOnlyOffice/saveDocumentCallback?fileId=docx'
      };
      this.show = true;
    },
    handleEdit() {
      this.officeOption.mode = 'edit';
    }
  }
});
</script>

<template>
  <div style="padding: 10px">
    <h1>测试onlyoffice</h1>
    <p>当前用户信息: {{ JSON.stringify(userInfo) }}</p>
    <p>文件列表</p>
    <hr />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="fileName" label="文件名称" width="180" />
      <el-table-column prop="fileType" label="文件类型" width="180" />
      <el-table-column prop="fileUrl" label="文件地址" width="300" />
      <el-table-column label="操作" min-width="140">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleView(scope)">查看</el-button>
          <el-button link type="primary" size="small" @click="handleEdit()">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>onlyoffice查看区域：</p>
    <hr />
    <div style="height: 800px">
      <OnlyOffice v-if="show" :option="officeOption"></OnlyOffice>
    </div>
  </div>
</template>

<style scoped></style>
