<template>
  <hr noshade size=2 align=center width=100%>
  <el-row>
    已选函数：
    <div v-for="(e) in selectedFunc" :key="e">
      <el-button @click="deletedRule(e)">{{ funtionStore[e].name }}</el-button>
    </div>
  </el-row>
  <hr noshade size=2 align=center width=100%>
  <el-table :data="functionList" style="width: 100%" @row-click="selectRule">
    <el-table-column prop="name" label="名称" width="180">
    </el-table-column>
    <el-table-column prop="description" label="描述">
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import * as funtionStore from "../../store/funtion"
import { functionObj } from "@/dto/battleInfoDto";

const props = defineProps({
  modelValue: {
    type: Object
  }
});
const emits = defineEmits(['update:modelValue'])
const functionList = ref<functionObj[]>([])
const selectedFunc = ref<string[]>([])
console.log('选择协议')


const deletedRule = (e: string) => {
  selectedFunc.value.splice(selectedFunc.value.indexOf(e), 1)
}
const selectRule = (e: functionObj) => {
  if (selectedFunc.value.indexOf(e.code) == -1) {
    selectedFunc.value.push(e.code)
  }
}
/**
 * 初始化协议数组 未来可能加入筛选功能
 */
const getRuleList = () => {
  for (let i in funtionStore) {
    functionList.value.push(funtionStore[i])
  }
}
const initial = () => {
  if (props.modelValue) {
    selectedFunc.value = props.modelValue as string[]
  }
}

getRuleList()
initial()

watch(() => selectedFunc.value, (val) => {
  emits('update:modelValue', val)
}, { deep: true })


</script>

<style lang="scss" scoped>

</style>