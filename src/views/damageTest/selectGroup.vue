<template>
  <el-container>
    <el-aside>
      <el-row>
        <div>选择梯队：</div>
        <el-select v-model="target" style="width:100px" @change = "changeValue">
          <el-option v-for="item in groupList" :key="item.index" :value="item.name"></el-option>
        </el-select>
      </el-row>
    </el-aside>
    <el-main>
      <div v-for="e in groupList" :key="e.index">
        <el-row>
          <el-card :body-style="{ padding: '1px' }">
              <div style="font-size:small" class="desc">{{ e.name }}</div>
          </el-card>
          <div v-for="(code, k) of e.group" :key="k" >
            <el-card class="gallery" :body-style="{ padding: '1px' }">
              <img :src=getImg(code) />
              <div style="font-size:small" class="desc">{{ getRoleName(code) }}</div>
            </el-card>
          </div>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref,defineProps,defineEmits } from "vue";
import { groupListUtil } from "../tsUtils/groupInfo/function"
import { getImg, getRoleName } from '../tsUtils/groupInfo/data'

const props = defineProps({
  groupName: {
        type: Number,
    },
});
const { groupList } = groupListUtil()
const target = ref("")
const emits = defineEmits(["update:groupName"]);
const initial= ()=>{
  groupList.value.forEach((val)=>{
    if (val.index == props.groupName){
      target.value = val.name
    }
  })
}
initial()
const changeValue = (val:string) =>{
  groupList.value.forEach((group)=>{
    if (group.name == val){
      emits("update:groupName",group.index)
    }
  })
}
</script>
<style scoped>
.el-aside {
  text-align: center;
  line-height: 20px;
  width: 110px;

}

.el-main {
  line-height: 22px;
  --el-main-padding: 5px
}

body>.el-container {
  margin-bottom: 40px;
}

.el-form-item {
  margin-bottom: 1px;
}

.gallery {
  text-align: center;
  width: 70px;
  height: 90px;
}

.gallery img {

  width: 40px;
  height: 65px
}
</style>
  