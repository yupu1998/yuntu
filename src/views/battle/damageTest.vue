<template>
  <!-- <babylonvue></babylonvue> -->
  <div>画面等待开发</div>
</template>

<script lang ="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { ruleObj } from "@/dto/battleInfoDto";
import babylonvue from "@/components/babylonOne.vue"
import { roleTotalAttribute } from "@/dto/storageDtos";
import {initalDamageTestBattleRoleData,initialFunction} from ".././tsUtils/battle/function"
import {Role} from "@/role/abstractRole"
import {ZANGYIN,KURO} from "@/role/Cyber"
// import roleOccupationEnum from "../../enum/roleOccupation"
// import attribute from "../../enum/attribute";
const props = defineProps({
  groupName: {
    type: Number
  },
  targetData: {
    type: Object
  },
  ruleArr: {
    type: Array
  },
  functionArr: {
    type: Array
  },
});

// 需求，计算对靶子的伤害
// 伤害需要的属性 1，伤害所属1（人形/环境）2，伤害所属2（函数） 3，伤害名称 
// 4，伤害类型1（普攻，技能，其他） 5，伤害类型2（算力，物理，真实伤害，绝对伤害）6，伤害类型3（普通，衍生）
// 7，伤害数值 8，对谁造成伤害 9，造成伤害的时间
const roleData = ref()
const RoleArr = ref<Role[]>([])

//存储造成伤害的数组

//生产伤害的实体

//设计思路
//时间由一个自增的整数控制 +15对应1s时间 即1s15帧
//为每一个单位创建一个实体对象，实体对象存储在一个数组中。
//实体对象存在一个方法，每次调用的时候返回null或者一个伤害实体对象
//伤害实体对象，存在一个方法，返回bool值，当true时，调用另一个方法，产生一个伤害，记录在伤害数组中

//测试开始
const testRun=()=>{
   var i = 0
   while (i<150){
    i = i+1
    RoleArr.value.forEach(element => {
     element.RoleRun()
    });
   }
}


const initial = ()=>{
  console.log("伤害测试数据初始化")
  if (props.groupName != undefined && props.targetData != undefined){
    roleData.value = initalDamageTestBattleRoleData(props.groupName,props.targetData as roleTotalAttribute)
    console.log("aa")
  }
  if (props.functionArr != undefined&& props.ruleArr != undefined)
    initialFunction(props.functionArr as string[],props.ruleArr as string[])

  //生成人形对象
  RoleArr.value.push(new ZANGYIN("绿毛",roleData.value["ZANGYIN"]))
  RoleArr.value.push(new KURO("喷子",roleData.value["KURO"]))
  //开始测试
  testRun()
}
initial()



</script>

<style lang="scss" scoped>

</style>