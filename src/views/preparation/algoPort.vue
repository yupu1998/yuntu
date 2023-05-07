<template>
    <el-card class="outerArea" v-if="draw.openType == areaType.zero" :body-style="{ padding: '0px' }">
        <img class="image" :src="getImg('no')" />
        <img class="image" :src="getImg('no')" />
    </el-card>
    <el-card class="outerArea" v-if="draw.openType == areaType.one" :body-style="{ padding: '0px' }">
        <img class="image" v-if="draw.type == portType.ALL_NO" :src="getImg('yes')" />
        <el-card @click="clickEvent" @hover = "hoverEvent"
            class="single" v-if="draw.type == portType.ONE_SINGLE"
            :body-style="{ padding: '0px' }">
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].main, "main", draw.algo[0].suit as unknown as
                string)
            }}</div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].assistant1, "assist", draw.algo[0].suit as unknown as
                string)
            }}</div>
        </el-card>
        <img class="image" :src="getImg('no')" />
    </el-card>
    <el-card class="outerArea" v-if="draw.openType == areaType.two" :body-style="{ padding: '0px' }">
        <el-card @click="clickEvent" @hover = "hoverEvent" class="single"
            v-if="draw.type == portType.ONE_SINGLE || draw.type == portType.TWO_SINGLE" :body-style="{ padding: '0px' }">
            <div style="font-size:12px"> {{ toChinese(draw.algo[0].main, "main", draw.algo[0].suit as unknown as string)
            }}</div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].assistant1, "assist", draw.algo[0].suit as unknown as
                string)
            }}</div>
        </el-card>
        <el-card @click="clickEvent" @hover = "hoverEvent" class="single" v-if="draw.type == portType.TWO_SINGLE" :body-style="{ padding: '0px' }">
            <div style="font-size:6px"> {{ toChinese(draw.algo[1].main, "main", draw.algo[1].suit as unknown as string)
            }}</div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[1].assistant1, "assist", draw.algo[1].suit as unknown as
                string)
            }}</div>
        </el-card>
        <el-card @click="clickEvent" @hover = "hoverEvent" class="onesuit" v-if="draw.type == portType.ONE_SUIT" :body-style="{ padding: '0px' }">
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].suit, "suit") }}</div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].main, "main", draw.algo[0].suit as unknown as string) }}
            </div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].assistant1, "assist", draw.algo[0].suit as unknown as
                string) }}</div>
            <div style="font-size:6px"> {{ toChinese(draw.algo[0].assistant2, "assist", draw.algo[0].suit as unknown as
                string) }}</div>
        </el-card>
        <img class="image" v-if="draw.type == portType.ALL_NO || draw.type == portType.ONE_SINGLE" :src="getImg('yes')" />
        <img class="image" v-if="draw.type == portType.ALL_NO" :src="getImg('yes')" />
    </el-card>
</template>
  
<script lang="ts" setup>
import { ref, defineProps, watch } from "vue";
import { getImg } from '../tsUtils/algoData/data'
import { algoPort, areaType, portType } from "../tsUtils/algoData/interface";
import { toChinese, singleAlgorithmToalgoInfo } from '../tsUtils/algoInfo/function'
import { algoInfo } from "../tsUtils/algoInfo/interface";

interface tmpalgoPort {
    type: portType,
    openType: areaType,
    algo: Array<algoInfo>
}
const props = defineProps({
    rolePort: {
        type: Object,
    },
});
const inital = (algoPortObj: algoPort) => {
    const newAlgos: algoInfo[] = []
    algoPortObj.algo.forEach((algo) => {
        newAlgos.push(singleAlgorithmToalgoInfo(algo))
    })
    const tmp: tmpalgoPort = {
        type: algoPortObj.type,
        openType: algoPortObj.openType,
        algo: newAlgos
    }
    return tmp
}
const draw = ref<tmpalgoPort>(inital(props.rolePort as unknown as algoPort))

const clickEvent = () => {
    console.log("触发点击")
}
const hoverEvent = () =>{
    console.log("触发悬停")
}

watch(() => props.rolePort,
    (value) => {

        draw.value = inital(value as unknown as algoPort)
    }, { deep: true })
</script>
  
<style lang="scss">
.outerArea {
    width: 60px;
    height: 120px;
}

.image {
    width: 59px;
    height: 59px;
    padding: 0px;
}

.onesuit {
    width: 59px;
    height: 119px;
}

.single {
    width: 59px;
    height: 59px;
    padding: 0px;
}</style>
  