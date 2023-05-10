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
        <div v-for="e in roleList" :key="e.name" @click="selectRole(e)" @contextmenu="rightClick($event, e)">
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
  <div id="contextmenu" v-show="menuVisible" class="menu">
    <div class="contextmenu_item" @click="addNewRole(currentRole)">复制</div>
    <div class="contextmenu_item" @click="deleteOldRole(currentRole)">删除</div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { occupationName } from "../../enum/Chinese";
import SingleRole from "./SingleRole.vue";
import { friendCamp } from "../../utils/otherDataUtils"
import { roleListUtil } from "../tsUtils/roleInfo/function"
import { ListObj } from "../tsUtils/roleInfo/interface";

const menuVisible = ref(false)
const currentRole = ref<ListObj>()

const isRoleView = ref(false);
const role = ref<ListObj>();
const campList = friendCamp()
const { roleList, filiter, addNewRole, deleteOldRole } = roleListUtil()

const selectRole = (k: ListObj) => {
  //点击角色，进入角色属性页面
  role.value = k
  isRoleView.value = true;
};

const rightClick = (e: PointerEvent, code: ListObj) => {
  console.log(e)
  currentRole.value = code
  menuVisible.value = true; // 显示模态窗口，跳出自定义菜单栏
  var menu = document.querySelector(".menu");
  styleMenu(e, menu);
}
const foo = () => {
  // 取消鼠标监听事件 菜单栏
  menuVisible.value = false;
  document.removeEventListener("click", foo); // 关掉监听，
}
const styleMenu = (key: PointerEvent, menu: any) => {
  document.addEventListener("click", foo); // 给整个document新增监听鼠标事件，点击任何位置执行foo方法
  console.log(key.clientX);
  menu.style.left = key.clientX - 180 + 10 + "px";
  menu.style.top = key.clientY - 50 - 10 + "px";
}

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

.menu {
  position: absolute;
  background-color: #fff;
  width: 100px;
  /*height: 106px;*/
  font-size: 12px;
  color: #444040;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  white-space: nowrap;
  z-index: 1000;
}

.contextmenu_item {
  display: block;
  line-height: 34px;
  text-align: center;
}

.contextmenu_item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.contextmenu_item:hover {
  cursor: pointer;
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}</style>