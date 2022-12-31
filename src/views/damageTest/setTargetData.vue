<template>
  <div class="inputView"
      v-for="(e,v) in targetData" 
      :key="v"
      >
      <div class="demo-input-suffix">
      {{e.name}}
      <el-input v-model="e.value" type="number" min = "0" :max = "e.max"></el-input>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect,defineProps,defineEmits } from "vue";
import {LocalFileAdreess} from "../../enum/LocalFileAdreess";
import occupationEnum from "../../enum/occupation";
import roleOccupationEnum from "../../enum/roleOccupation";
import attribute from "../../enum/attribute";
const props = defineProps({
  modelValue: {
  type: Object
}
});
const emits = defineEmits(['update:modelValue'])
const targetData = ref({})
let localInfoData = localStorage.getItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_TARGET)

if (localInfoData === null){
  let initalObj = {}
  initalObj[attribute.HP.code] = 100000
  initalObj[attribute.PHYSICAL_DEFENSE.code] = 1000
  initalObj[attribute.POWER_DEFENSE.code] = 1000
  initalObj[attribute.DODGE.code] = 0
  initalObj[attribute.DAMAGE_REDUCE.code] = 0
  localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_TARGET,JSON.stringify(initalObj))
  localInfoData = initalObj
}else{
  localInfoData = JSON.parse(localInfoData)
}

targetData.value[attribute.HP.code] = {name:attribute.HP.name,value:localInfoData[attribute.HP.code],max:999999999}
targetData.value[attribute.PHYSICAL_DEFENSE.code] = {name:attribute.PHYSICAL_DEFENSE.name,value:localInfoData[attribute.PHYSICAL_DEFENSE.code],max:99999}
targetData.value[attribute.POWER_DEFENSE.code] = {name:attribute.POWER_DEFENSE.name,value:localInfoData[attribute.POWER_DEFENSE.code],max:99999}
targetData.value[attribute.DODGE.code] = {name:attribute.DODGE.name,value:localInfoData[attribute.DODGE.code],max:100}
targetData.value[attribute.DAMAGE_REDUCE.code] = {name:attribute.DAMAGE_REDUCE.name,value:localInfoData[attribute.DAMAGE_REDUCE.code],max:100}
console.log(targetData.value)

const clickSave = ()=>{
  emits('update:modelValue',targetData.value)
  let initalObj = {}
  initalObj[attribute.HP.code] = targetData.value[attribute.HP.code].value
  initalObj[attribute.PHYSICAL_DEFENSE.code] = targetData.value[attribute.PHYSICAL_DEFENSE.code].value
  initalObj[attribute.POWER_DEFENSE.code] = targetData.value[attribute.POWER_DEFENSE.code].value
  initalObj[attribute.DODGE.code] = targetData.value[attribute.DODGE.code].value
  initalObj[attribute.DAMAGE_REDUCE.code] = targetData.value[attribute.DAMAGE_REDUCE.code].value
  console.log(initalObj)
  localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_TARGET,JSON.stringify(initalObj))
}
const returnLast = ()=>{
  emits('update:modelValue','return')
}





</script>

<style lang="scss" scoped>
</style>