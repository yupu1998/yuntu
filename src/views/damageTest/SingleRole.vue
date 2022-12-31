<template>
    <div class="prepare">
        <el-steps :active="viewIndex">
            <el-step title="选择角色"></el-step>
            <el-step title="设置靶机"></el-step>
            <el-step title="选择协议"></el-step>
            <el-step title="选择函数"></el-step>
            <el-step title="开始战斗"></el-step>
        </el-steps>
    <el-row>
      <el-button @click="clickSave">确定</el-button>
      <el-button @click="returnLast">返回</el-button>
    </el-row>
    <div class="prepareView">
        <roleListVue v-model="testRole" v-if="viewIndex==0"></roleListVue>
        <setTargetDataVue v-model="targetData" v-if="viewIndex==1 "></setTargetDataVue>
        <selectRulesVue v-model="ruleArr" v-if="viewIndex==2 "></selectRulesVue>
        <selectFunctionVue v-model="functionArr" v-if="viewIndex==3 "></selectFunctionVue>
    </div>
</div>

</template>

<script setup>
import {ref,watch} from "vue";
import {LocalFileAdreess} from "../../enum/LocalFileAdreess"
import roleListVue from "../damageTest/roleList.vue"
import setTargetDataVue from "./setTargetData.vue";
import selectFunctionVue from "./selectFunction.vue";
import selectRulesVue from "./selectRules.vue"

const viewIndex = ref(0)
const testRole = ref("")
const targetData = ref("")
const ruleArr = ref([])
const functionArr = ref([])


const initialData = () =>{
    let role = localStorage.getItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_ROLE)
    if (role == ""){
        let a = ""
    }
}

const clickSave = () =>{
    if (viewIndex.value < 5){
        viewIndex.value += 1
    }
    
}

const returnLast = () =>{
    if (viewIndex.value > 1){
        viewIndex.value -= 1
    }
    
}

watch( 
    () => testRole.value,
    (newValue) => {
        console.log(newValue)
        if (newValue != ""){
            viewIndex.value = 1
        }   
    },
);
watch( 
    () => targetData.value,
    (newValue) => {
        console.log(newValue)
        if (newValue != ""){
            if (newValue=="return"){
            testRole.value = ""
            targetData.value = ""
            viewIndex.value = 0
            }else{
                viewIndex.value = 2
            }
        }    
        
    },
    {deep:true}
);
watch( 
    () => ruleArr.value,
    (newValue) => {
        console.log(newValue)
        if (newValue.length > 0){
            if (newValue=="return"){
            targetData.value = ""
            ruleArr.value = []
            viewIndex.value = 1
            }else{
                viewIndex.value = 3
            }
        }    
        
    },
    {deep:true}
);
watch( 
    () => functionArr.value,
    (newValue) => {
        console.log(newValue)
        if (newValue.length > 0){
            if (newValue=="return"){
                ruleArr.value = []
                functionArr.value = []
                viewIndex.value = 2
            }else{
                viewIndex.value = 4
            }
        }    
        
    },
    {deep:true}
);


</script>

<style lang="scss">
.prepare{
width: 100%;
height: 100%;
.prepareMenu{
    width: 15%;
    height: 100%;
    float: left;
}
.prepareView{
    width: 85%;
    height: 100%;
    display: grid;  
}
}

</style>
  