<template>
  <div class="roleList">
    <div v-if="!isRoleView">
      <el-row>
        <div>筛选：</div>
        <el-select v-model="filiter.camp" clearable placeholder="选择阵营" style="width:130px">
          <el-option v-for="item in campList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="filiter.occupation" clearable placeholder="选择职业" style="width:130px">
          <el-option v-for="item in occupationName" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-row>
      <el-row class="showRole">
        <div v-for="e in roleList" :key="e.code" @click="selectRole(e.code)">
          <el-card class="gallery" :body-style="{ padding: '1px', width: '100px', height: '140px' }">
            <div style="font-size:small">{{ e.camp }}|{{ e.occpution }}</div>
            <img :src="e.img" />
            <div style="font-size:small" class="desc">{{ e.name }}</div>
          </el-card>
        </div>
      </el-row>
    </div>
    <div v-if="isRoleView">
      <SingleRole v-model:role="role" v-model:isRoleView="isRoleView"></SingleRole>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { occupationName } from "../../enum/Chinese";
import SingleRole from "./SingleRole.vue";
import {friendCamp} from "../../utils/otherDataUtils"
import {roleListUtil} from "../tsUtils/roleInfo/function"

const isRoleView = ref(false);
const role = ref("");
const campList = friendCamp()
const {roleList,filiter} = roleListUtil()

const selectRole = (k: string) => {
  //点击角色，进入角色属性页面
  role.value = k
  isRoleView.value = true;
};


</script>

<style lang="scss" scoped>
.roleList {
  width: 100%;
  height: 100%;

  .gallery {
    width: 100px;
    height: 140px;
  }

  .gallery:hover {
    border: 1px solid #777;
    background-color: aqua;
  }

  .gallery img {
    width: 60px;
    height: 100px
  }

  .showRole {
    padding: 1px;
    text-align: center;
  }
}
</style>