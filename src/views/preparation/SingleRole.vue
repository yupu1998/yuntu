<template>
  <el-row>
    <el-button @click="clickReturn">返回</el-button>
    <el-button @click="clickSave">保存</el-button>
    <el-button @click="clearData">科技清零</el-button>

  </el-row>
  <el-row>
    <el-table :data="dockerList" border style="padding: 0px; width: 715px ;height:500px;">
      <el-table-column width="100px" prop="type" label="属性">
      </el-table-column>
      <el-table-column :width="tableWidth" prop="defaultValue" label="基础数值">
      </el-table-column>
      <el-table-column :width="tableWidth" prop="occupation" label="职业加成">
      </el-table-column>
      <el-table-column :width="tableWidth" prop="favorite" label="好感加成">
      </el-table-column>
      <el-table-column :width="tableWidth" prop="algorithm" label="算法加成">
      </el-table-column>
      <el-table-column :width="tableWidth" prop="update" label="刻印加成">
      </el-table-column>
      <el-table-column width="100px" type="number" prop="gua" label="科技加成">
        <template #default="scope">
          <el-input v-model="scope.row.gua" type="number" min="-10000"></el-input>
        </template>
      </el-table-column>
      <el-table-column :width="tableWidth" prop="final" label="最终属性" type="number">
      </el-table-column>
    </el-table>
    <div class="algoEquipment" style="width: 500px ;height: 400px;">
      <el-row>
        角色：{{ getRoleName(role) }}
      </el-row>
      <el-row>
        刻印：<el-radio-group v-model="update">
          <el-radio :label="0">无刻印</el-radio>
          <el-radio :label="1">刻印1</el-radio>
          <el-radio :label="2">刻印2</el-radio>
          <el-radio :label="3">刻印3</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        算法：
        <algorithmEquipment v-model:algoData="algoData" v-model:algoStructure="algoStructure"></algorithmEquipment>
      </el-row>
    </div>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { getRoleName } from '../tsUtils/groupInfo/data'
import algorithmEquipment from "./algorithmEquipment.vue";
import { initialData } from "../tsUtils/roleData/function"

const props = defineProps({
  role: {
    type: String,
  },
  isRoleView: {
    type: Boolean,
  },
});

const role = ref(props.role as string)
const tableWidth = "85px";
const update = ref(0)
const { dockerList,algoData,algoStructure,saveData } = initialData(props.role as string)


const emits = defineEmits(["update:isRoleView"]);

const clickReturn = () => {
  emits("update:isRoleView", false);
};

const clickSave = () => {
  saveData()
};

const clearData = () => {
  for (let newdata of dockerList.value) {
    newdata.gua = 0;
  }
};


</script>

<style lang="scss">

</style>
