<template>
  <main>
    <div class="left-content">
      <img alt="Vue logo" src="@/assets/img/logo.svg" width="125" height="125" />
      <div class="text">
        <p>Vue3练习</p>
        <p><a href="https://cn.vuejs.org">vue：https://cn.vuejs.org</a></p>
        <p><a href="https://router.vuejs.org/">vue-router: https://router.vuejs.org</a></p>
      </div>
    </div>
    <div class="right-content">
      <section class="navigation">
        <el-button type="success" text @click="btnClick()">响应式练习(组合式api)</el-button>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data(){
    return {

    }
  },
  methods: {
    btnClick: function(){
      this.$router.push('/reactive')
    }
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}

.text {
  margin-left: 20px;
  color: hsla(160, 100%, 37%, 1);
}


.text p:nth-of-type(1){
  font-size: 30px;
}

main {
  display: flex;
  height: 100vh;
  background-color: var(--vt-c-white);
}

.left-content, .right-content{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.left-content::after {
  position: absolute;
  right: 0;
  content: ' ';
  height: 55%;
  width: 1px;
  border-right: 1px solid var(--color-border);
}

.right-content {
  justify-content: flex-start;
  padding: 20px;
}

.navigation {
  height: 55vh;
  width: 50vw;
  /*border: 1px solid var(--color-border);*/
  overflow-y: auto;
}

</style>
