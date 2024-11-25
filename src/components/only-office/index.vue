<template>
  <DocumentEditor
    id="docEditor"
    documentServerUrl="http://192.168.75.150:9000/"
    :config="docRealConfig"
    :events_onDocumentReady="onDocumentReady"
    :onLoadComponentError="onLoadComponentError"
  />
</template>

<script>
import { DocumentEditor } from '@onlyoffice/document-editor-vue';
import { defineComponent } from 'vue';

// 生成唯一值
function getUniqueKey(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

// 根据文档类型获取要打开的文档类型
function getOpenDocType(fileType) {
  if (fileType === 'doc' || fileType === 'docx') {
    return 'word';
  }

  if (fileType === 'xls' || fileType === 'xlsx') {
    return 'cell';
  }

  if (fileType === 'ppt' || fileType === 'pptx') {
    return 'slide';
  }

  if (fileType === 'pdf') {
    return 'pdf';
  }
}

export default defineComponent({
  name: 'OnlyOffice',
  props: {
    option: {
      type: Object,
      required: true,
      default: () => {
        return {
          // 在线查看或编辑的文件路径
          fileUrl: '',
          // 是否可编辑
          isEdit: false,
          // 文件类型
          fileType: '',
          // 文档标题
          docTitle: '',
          // 模式 edit-编辑，view-在线预览
          mode: 'view',
          key: '',
          // 用户信息
          user: {
            id: '',
            name: ''
          },
          // 文件编辑后回调接口
          editCallBackUrl: '',
          // token令牌
          token: ''
        };
      }
    }
  },
  components: {
    DocumentEditor
  },
  data() {
    return {};
  },
  computed: {
    docRealConfig() {
      const opt = this.option;
      console.log('--opt--', JSON.stringify(opt));
      const config = {
        // 定义要打开的文档类型
        documentType: getOpenDocType(opt.fileType),
        key: getUniqueKey(),
        // 文档配置
        document: {
          // 查看或编辑的源文档的文件类型
          fileType: opt.fileType,
          // key: opt.key || getUniqueKey(),
          title: opt.docTitle,
          url: opt.fileUrl
        },
        // 权限配置
        permissions: {
          edit: opt.isEdit,
          print: true,
          // 修改内容控件
          modifyContentControl: true,
          download: true
        },
        // 编辑配置
        editorConfig: {
          mode: opt.mode,
          lang: 'zh-CN',
          // 编辑完成后的回调地址
          callbackUrl: opt.callbackUrl,
          // 必须提供，否则每次打开文档会弹窗输入协作者，影响用户使用体验
          user: {
            id: opt.user.id,
            name: opt.user.name
          }
        }
      };

      return config;
    }
  },
  methods: {
    onDocumentReady() {
      console.log('Document is loaded');
    },
    onLoadComponentError(errorCode, errorDescription) {
      console.log(errorCode, errorDescription);
    }
  }
});
</script>
