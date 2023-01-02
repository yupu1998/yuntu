<template>
    <div class="prepare">
        <el-steps :active="viewIndex">
            <el-step title="选择编队"></el-step>
            <el-step title="设置靶机"></el-step>
            <el-step title="选择协议"></el-step>
            <el-step title="选择函数"></el-step>
            <el-step title="开始战斗"></el-step>
        </el-steps>
    <el-row>
      <el-button v-if="viewIndex <5" @click="clickNext">确定</el-button>
      <el-button v-if="viewIndex >0" @click="returnLast">返回</el-button>
    </el-row>
    <div class="prepareView">
        <selectGroup v-if="viewIndex==0"  v-model:groupName="groupName"></selectGroup>
        <!-- <setTargetDataVue v-model="targetData" v-if="viewIndex==1 "></setTargetDataVue> -->
        <!-- <selectRulesVue v-model="ruleArr" v-if="viewIndex==2 "></selectRulesVue>
        <selectFunctionVue v-model="functionArr" v-if="viewIndex==3 "></selectFunctionVue> -->
    </div>
</div>

</template>

<script lang = "ts" setup>
import {ref,watch} from "vue";
import selectGroup from "./selectGroup.vue"
import setTargetDataVue from "./setTargetData.vue";
// import selectFunctionVue from "./selectFunction.vue";
// import selectRulesVue from "./selectRules.vue"
import {initalDamageTestData} from "../tsUtils/damageTest/function"

const viewIndex = ref(0)
const {groupName,targetData,ruleArr,functionArr} = initalDamageTestData()

const clickNext = () =>{
    viewIndex.value = viewIndex.value +1
}
const returnLast = () =>{
    viewIndex.value = viewIndex.value -1
}


</script>

<style lang="scss">
.prepare{
width: 100%;
height: 100%;
.prepareMenu{
    width: 110px;
    height: 100%;
    float: left;
}
.prepareView{
    height: 100%;
    display: grid;  
}
}

</style>
  