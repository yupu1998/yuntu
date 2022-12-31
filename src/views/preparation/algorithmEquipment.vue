<template>
    <el-row>
        <div class="AlgoArea" @click="seletArea('攻击区')">
            <div style="font-size:medium" class="desc">攻击区</div>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.A.one"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.A.two"></algoPortVue>
            </el-row>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.A.three"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.A.four"></algoPortVue>
            </el-row>
        </div>
        <div class="AlgoArea"  @click="seletArea('稳定区')">
            <div style="font-size:medium" class="desc">稳定区</div>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.B.one"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.B.two"></algoPortVue>
            </el-row>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.B.three"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.B.four"></algoPortVue>
            </el-row>
        </div>
        <div class="AlgoArea"  @click="seletArea('特异区')">
            <div style="font-size:medium" class="desc">特异区</div>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.C.one"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.C.two"></algoPortVue>
            </el-row>
            <el-row>
                <algoPortVue v-model:rolePort="algoStructure.C.three"></algoPortVue>
                <algoPortVue v-model:rolePort="algoStructure.C.four"></algoPortVue>
            </el-row>
        </div>
    </el-row>
    <el-row>
        <el-select v-model="filiter.suit" clearable placeholder="选择套装" style="width:100px">
            <el-option v-for="item in filiterList.Suit" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="filiter.main" clearable placeholder="选择主属性" style="width:100px">
            <el-option v-for="item in filiterList.Main" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="filiter.assistant1" clearable placeholder="选择副1" style="width:100px">
            <el-option v-for="item in filiterList.Assist" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="filiter.assistant2" clearable placeholder="选择副2" style="width:100px">
            <el-option v-for="item in filiterList.Assist" :key="item" :label="item" :value="item"></el-option>
        </el-select>
    </el-row>
    <el-row style="width: 500px ;height: 200px;">
        <div v-for="(o, index) in algoList" :key="index" @click="selectAlgo(index)" class="desc">
            <el-card :body-style="{ padding: '3px', width: '85px', height: '70px' }">
                <div style="font-size:small"> {{ toChinese(o.suit, "suit") }}</div>
                <div style="font-size:small"> {{ toChinese(o.main, "main", o.suit) }}</div>
                <div style="font-size:10px"> {{ toChinese(o.assistant1, "assist", o.suit) }}</div>
                <div style="font-size:10px"> {{ toChinese(o.assistant2, "assist", o.suit) }}</div>
            </el-card>
        </div>
    </el-row>

</template>

<script setup lang="ts">

import { ref, defineProps, defineEmits,watch } from "vue";
import { AlgoArea } from "@/enum/algorithmEnum";
import algoPortVue from "./algoPort.vue";
import { roleAlgoObj,algoStructureObj } from '../tsUtils/algoData/interface'
import {dealAlgo} from '../tsUtils/algoData/function'
import { algoListUtil, toChinese, algoInfoTosingleAlgorithm} from '../tsUtils/algoInfo/function'
const props = defineProps({
    algoData: {
        type: Object,
    },
    algoStructure: {
        type: Object,
    },
});

// const { algoData, algoStructure } = getRoleAlgoFunc(props.role as string, props.occupation as string)
const algoData = ref(props.algoData as roleAlgoObj)
const algoStructure = ref(props.algoStructure as algoStructureObj)
//筛选后展示的算法
const { algoList, filiterList, filiter } = algoListUtil()

const emits = defineEmits(["update:algoData"]);
//为人形装备算法
const selectAlgo = (index: number) => {

    const algo = algoInfoTosingleAlgorithm(algoList.value[index])

    algoData.value[AlgoArea[algo.area]].algo.unshift(algo)

    dealAlgo(algoData.value[AlgoArea[algo.area]])//保证算法不溢出

    emits("update:algoData", algoData.value);
}

const seletArea = (a:string)=>{
    filiter.value.area = a
}
seletArea("攻击区")
watch(
        //监听到值变化 更新下拉列表
        () => props.algoStructure,
        () => {
            algoStructure.value = props.algoStructure as algoStructureObj
        },
        { deep: true }
    );

</script>


<style scoped>
.desc {
    text-align: center;
    --el-main-padding: 1px
}
.AlgoArea{
    padding-left: 8px;
    padding-right: 8px;
}
</style>