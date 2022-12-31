<template>
    <hr noshade size=2 align=center width=100%>
    <el-row>
    已选协议：
    <div 
        v-for="(e) in selectedRule" 
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
  import rulesEnum from "../../rules/rulesEnum"
  import roleOccupationEnum from "../../enum/roleOccupation"
  import attribute from "../../enum/attribute";
  const props = defineProps({
    modelValue: {
    type: Object
  }
  });
  const emits = defineEmits(['update:modelValue'])
  const ruleList = ref([])
  const selectedRule = ref([])
  console.log('选择协议')
  console.log(props.modelValue)

  for (let rule in rulesEnum){
    ruleList.value.push(rulesEnum[rule])
  }
  const deletedRule = (e) =>{
    for (let i in selectedRule.value){
        if (selectedRule.value[i].code == e){
            selectedRule.value.splice(i,1)
        }
    }
  }
    
  
  const selectRule = (e) =>{
    let add = true
    selectedRule.value.forEach(elment=>{
        if (e ==elment ){
            add = false
        }
    })
    if(add){
        selectedRule.value.push(e)
    }

  }
  const clickSave = ()=>{
    emits('update:modelValue',selectedRule.value)
  }
  const returnLast = ()=>{
    emits('update:modelValue','return')
  }
  
  
  
  
  
  </script>
  
  <style lang="scss" scoped>
  </style>