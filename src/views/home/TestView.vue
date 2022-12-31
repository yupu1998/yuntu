<template>
  <div class="prepare">
    <div class="prepareMenu">
      <el-menu
        :default-active="viewIndex"
        class="prepare-menu"
        @select="handleSelect"
      >
        <el-menu-item index="0">单人打靶</el-menu-item>
        <el-menu-item index="1">多人打靶</el-menu-item>
        <el-menu-item index="2">模拟战斗</el-menu-item>
      </el-menu>
    </div>
    <div class="prepareView">
      <roleList v-if="viewIndex == '0'"></roleList>
    </div>
  </div>
</template>

<script  lang="ts">
import {ref,defineComponent} from "vue";
import roleList from "../preparation/roleList.vue"

export default defineComponent({
  name: "TestView",
  components: {
    roleList,
  },
  setup(){
    const viewIndex = ref("0")
    const handleSelect = (key:string) =>{
      viewIndex.value = key
    }
    return{
      viewIndex,
      handleSelect
    }
    }
});


</script>

<style lang="scss">
.prepare {
  width: 100%;
  height: 100%;
  .prepareMenu {
    width: 15%;
    height: 100%;
    float: left;
  }
  .prepareView {
    width: 85%;
    height: 100%;
    display: grid;
  }
}
</style>
