<template>
  <hr noshade size=2 align=center width=100%>
  <el-row>
  已选函数：
  <div 
      v-for="(e) in selectedFunc" 
      :key="e.code"
      >
      <el-button @click="deletedRule(e.code)">{{e.name}}</el-button>
  </div>
  </el-row>
  <hr noshade size=2 align=center width=100%>
  <el-table
    :data="ruleList"
    style="width: 100%"
    @row-click="selectRule"
    :row-class-name="tableRowClassName"
    >
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, watch, watchEffect,defineProps,defineEmits } from "vue";
import functionsEnum from "../../functions/singeFunctionEnum"

const props = defineProps({
  modelValue: {
  type: Object
}
});
const emits = defineEmits(['update:modelValue'])
const ruleList = ref([])
const selectedFunc = ref([])
console.log('选择协议')

for (let f in functionsEnum){
  ruleList.value.push(functionsEnum[f])
}
const deletedRule = (e) =>{
  for (let i in selectedFunc.value){
      if (selectedFunc.value[i].code == e){
        selectedFunc.value.splice(i,1)
      }
  }
}
  

const selectRule = (e) =>{
  let add = true
  selectedFunc.value.forEach(elment=>{
      if (e ==elment ){
          add = false
      }
  })
  if(add){
    selectedFunc.value.push(e)
  }

}
const clickSave = ()=>{
  emits('update:modelValue',selectedFunc.value)
}
const returnLast = ()=>{
  emits('update:modelValue','return')
}





</script>

<style lang="scss" scoped>
</style>