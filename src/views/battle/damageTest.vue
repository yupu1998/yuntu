<template>
  <!-- <babylonvue></babylonvue> -->
  <div>战斗画面等待开发</div>
  <div>战斗耗时{{ time / 15 }}秒</div>
  <el-row>
    <div><damageDist v-model="roleDamageDistData" v-model:name= "Group" /></div>
    <div v-for="(n, i) in name" :key=n><damageDist v-model="DamageDistData[n]" v-model:name='name[i]' /></div>
  </el-row>
  <el-row>
    <el-col><timeDamage v-model="timeDamageData" /></el-col>
  </el-row>
  <el-row>
    <el-col><timeDamage v-model="timeDamageCountData" /></el-col>
  </el-row>
</template>

<script lang ="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { roleAllAttribute } from "@/dto/storageDtos";
import damageDist from "@/views/charts/damageDist.vue"
import timeDamage from "../charts/timeDamage.vue";
import { roleTotalAttribute } from "@/dto/storageDtos";
import { initalDamageTestBattleRoleData, initialFunction } from ".././tsUtils/battle/function"
import { Role } from "@/role/abstractRole"
import { ZANGYIN, KURO } from "@/role/Cyber"
import { SimpleTarget } from "@/role/TestEnemy";
import { damageRecord } from "@/role/abstractDamage";
import { damageDistDto, timeDamgeDto } from "@/dto/chartDto";
import {getAllRoleDamage,getRoleDamageDist,getTimeDamage,getTimeDamageSum} from "@/utils/damageChartUtils"

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

const time = ref(0)

const roleData = ref<{ [k: string]: roleAllAttribute }>({}) //角色属性
const RoleArr = ref<Role[]>([]) //人形对象数组

//存储造成伤害的数组
const Damage: damageRecord[] = []

const name = ref<string[]>([])
const Group = "所有角色"
const roleDamageDistData = ref<damageDistDto[]>([])
const DamageDistData = ref<{ [x: string]: damageDistDto[] }>({})

const timeDamageData = ref<timeDamgeDto[]>([])

const timeDamageCountData = ref<timeDamgeDto[]>([])

//测试开始
const testRun = () => {
  console.log("测试执行任务")
  time.value = 0
  while (time.value < 15000) {
    time.value += 1
    RoleArr.value.forEach(element => {
      element.RoleRun()
      element.damageByStatusList.forEach(damage => {
        damage.getDamage(element as Role, RoleArr.value[RoleArr.value.length - 1] as Role, undefined).forEach(da => {
          da.time = time.value
          Damage.push(da)
        })
      })
    });
    if (RoleArr.value[RoleArr.value.length - 1].hp == 0) {
      //处理伤害统计结果
      roleDamageDistData.value = getAllRoleDamage(Damage,name.value)
      DamageDistData.value = getRoleDamageDist(Damage,name.value)
      timeDamageData.value= getTimeDamage(Damage,name.value)
      timeDamageCountData.value = getTimeDamageSum(Damage,name.value)
      break
    }
  }
}

const initial = () => {
  name.value = []
  console.log("伤害测试数据初始化")
  if (props.groupName != undefined && props.targetData != undefined) {
    roleData.value = initalDamageTestBattleRoleData(props.groupName, props.targetData as roleTotalAttribute)
    console.log("aa")
  }
  if (props.functionArr != undefined && props.ruleArr != undefined)
    initialFunction(props.functionArr as string[], props.ruleArr as string[])

  //生成人形对象
  RoleArr.value.push(new ZANGYIN("绿毛", roleData.value["ZANGYIN"]))
  RoleArr.value.push(new KURO("喷子", roleData.value["KURO"]))
  RoleArr.value.push(new SimpleTarget("靶子", roleData.value["Aim"]))
  name.value.push("绿毛")
  name.value.push("喷子")
  //测试普攻状态是否正常返回
  let i = 0
  // while (i<150){
  //   i+=1
  //   RoleArr.value[0].attackProducer.run(true,100)
  //   console.log(RoleArr.value[0].attackProducer.roleStatus)
  // }
  //测试技能状态是否正常返回
  // while (i<150){
  //   i+=1
  //   RoleArr.value[0].skillProducer.run(true,2000)
  //   console.log(RoleArr.value[0].skillProducer.roleStatus)
  // }

  //开始测试
  testRun()
}
initial()



</script>

<style lang="scss" scoped></style>