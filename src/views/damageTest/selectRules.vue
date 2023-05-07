<template>
  <hr noshade size=2 align=center width=100%>
  <div>功能未实现</div>
  <el-row>
    已选协议：
    <div v-for="e in selectedRule" :key="e">
      <el-button @click="deletedRule(e)">{{ ruleStore[e].name }}</el-button>
    </div>
  </el-row>
  <hr noshade size=2 align=center width=100%>
  <el-table :data="ruleList" style="width: 100%" @row-click="selectRule">
    <el-table-column prop="name" label="名称" width="180">
    </el-table-column>
    <el-table-column prop="description" label="描述">
    </el-table-column>
  </el-table>
</template>

<script lang ="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import * as ruleStore from "../../store/rule"
import { ruleObj } from "@/dto/battleInfoDto";

const props = defineProps({
  modelValue: {
    type: Array
  }
});
const emits = defineEmits(['update:modelValue'])
const ruleList = ref<ruleObj[]>([])
const selectedRule = ref<string[]>([])


const deletedRule = (e: string) => {
  selectedRule.value.splice(selectedRule.value.indexOf(e), 1)
}
const selectRule = (e: ruleObj) => {
  if (selectedRule.value.indexOf(e.code) == -1) {
    selectedRule.value.push(e.code)
  }
}
/**
 * 初始化协议数组 未来可能加入筛选功能
 */
const getRuleList = () => {
  for (let i in ruleStore) {
    ruleList.value.push(ruleStore[i])
  }
}
const initial = () => {
  if (props.modelValue) {
    selectedRule.value = props.modelValue as string[]
  }
}

getRuleList()
initial()

watch(() => selectedRule.value, (val) => {
  emits('update:modelValue', val)
}, { deep: true })

</script>

<style lang="scss" scoped>

</style>