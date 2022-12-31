<template>
    <el-container>
        <el-header height="35px">
            <el-row>
                <el-button @click="randomAlgo">随机算法</el-button>
                <el-button @click="MakeAlgo">定制算法</el-button>
                <el-button @click="deleteAlgoVue">删除选中的算法</el-button>
                <div>算法筛选：</div>
                <el-select  v-model="filiter.area" clearable placeholder="选择区域"
                    style="width:100px">
                    <el-option v-for="item in filiterList.Area" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select v-model="filiter.suit" clearable placeholder="选择套装"
                    style="width:100px">
                    <el-option v-for="item in filiterList.Suit" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select  v-model="filiter.main" clearable placeholder="选择主属性"
                    style="width:140px">
                    <el-option v-for="item in filiterList.Main" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select  v-model="filiter.assistant1" clearable placeholder="选择副1"
                    style="width:140px">
                    <el-option v-for="item in filiterList.Assist" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select  v-model="filiter.assistant2" clearable placeholder="选择副2"
                    style="width:140px">
                    <el-option v-for="item in filiterList.Assist" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-row>
        </el-header>
        <el-divider style="margin:7px 0;"></el-divider>
        <el-container>
            <el-aside width="200px" height="1200px">
                <div v-if="(algoStatus == ALGO_STATUS.RANDOM || algoStatus == ALGO_STATUS.HIT)">
                    <el-button v-if="algoStatus == 0" @click="saveAlgoVue">保存</el-button>
                    <el-form ref="form" :model="algo" label-width="60px">
                        <el-form-item label="区域">
                            <el-button>{{ algo.area }}</el-button>
                        </el-form-item>
                        <el-form-item label="套装">
                            <el-button>{{ algo.suit}}</el-button>
                        </el-form-item>
                        <el-form-item label="主属性">
                            <el-button>{{ algo.main }}</el-button>
                        </el-form-item>
                        <el-form-item label="副1">
                            <el-button>{{ algo.assistant1 }}</el-button>
                        </el-form-item>
                        <el-form-item label="副2">
                            <el-button>{{ algo.assistant2 }}</el-button>
                        </el-form-item>
                        <el-form-item label="描述">
                            <div style="line-height: 22px;margin-top: 7px;text-align: left;"> {{
                                    AlgoSuitDescription[toCode(algo.suit,"suit")]
                            }}</div>
                        </el-form-item>
                    </el-form>
                </div>
                <div v-if="algoStatus == ALGO_STATUS.MAKE">
                    <el-button @click="saveAlgoVue">保存</el-button>
                    <el-form ref="form" :model="algoName" label-width="60px">
                        <el-form-item label="区域">
                            <el-select v-model="algoName.area">
                                <el-option v-for="item in algoListMake.Area" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="套装">
                            <el-select v-model="algoName.suit">
                                <el-option v-for="item in algoListMake.Suit" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="主属性">
                            <el-select v-model="algoName.main">
                                <el-option v-for="item in algoListMake.Main" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="副1">
                            <el-select v-model="algoName.assistant1">
                                <el-option v-for="item in algoListMake.Assist" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="副2">
                            <el-select v-if="(algoName.suit != '单格')" v-model="algoName.assistant2">
                                <el-option v-for="item in algoListMake.Assist" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述">
                            <div style="line-height: 22px;margin-top: 7px;text-align: left;"> {{AlgoSuitDescription[toCode(algoName.suit,"suit")] }}</div>
                        </el-form-item>
                    </el-form>
                </div>
            </el-aside>
            <el-container>
                <el-main>
                    <el-row>
                        <div v-for="(o, index) in algoList" :key="index" @click="selectAlgo(o.index)">
                            <el-card :body-style="{ padding: '3px', width: '100px', height: '120px' }">
                                <div style="font-size:smaller"> {{ toChinese(o.area, "area") }}</div>
                                <div style="font-size:small"> {{ toChinese(o.suit, "suit") }}</div>
                                <div style="font-size:medium"> {{ toChinese(o.main, "main", o.suit) }}</div>
                                <div style="font-size:smaller"> {{ toChinese(o.assistant1, "assist", o.suit) }}</div>
                                <div style="font-size:smaller"> {{ toChinese(o.assistant2, "assist", o.suit) }}</div>
                            </el-card>
                        </div>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { ref} from "vue";
import {  AlgoSuitDescription } from "../../enum/algorithmEnum"
import { algoListUtil, toChinese,toCode, getRandomAlgo, makeAAlgo } from '../tsUtils/algoInfo/function'
import { algoInfo } from '../tsUtils/algoInfo/interface'


enum ALGO_STATUS {
    RANDOM,
    MAKE,
    HIT
}
const algo = ref({
    index: 0,
    area: "",
    suit: "",
    main: "",
    assistant1: "",
    assistant2: "",
} as algoInfo)
//展示算法的类型 随机/定制/仓库
const algoStatus = ref(ALGO_STATUS.RANDOM)

//筛选后展示的算法
const { algoList, filiterList, filiter,saveAlgo,deletedAlgo } = algoListUtil()
//算法定制时，响应式变化的套装，主属性，副属性数据
const { algoName, algoListMake } = makeAAlgo()



//生成一个随机算法
const randomAlgo = () => {
    //左侧页面定义为随机页面
    algoStatus.value = ALGO_STATUS.RANDOM
    const tmp = getRandomAlgo()
    algo.value = {
        index: NaN,
        area: toChinese(tmp.area,"area"),
        suit: toChinese(tmp.suit,"suit"),
        main: toChinese(tmp.main,"main",tmp.suit),
        assistant1: toChinese(tmp.assistant1,"assist",tmp.suit),
        assistant2: toChinese(tmp.assistant2,"assist",tmp.suit),
    } as algoInfo
}

//定制一个算法
const MakeAlgo = () => {
    algoStatus.value = ALGO_STATUS.MAKE
    algo.value = algoName.value
}


const selectAlgo = (algoindex: number) => {
    algoStatus.value = ALGO_STATUS.HIT
    algo.value = {
        index: algoindex,
        area: toChinese(algoList.value[algoindex].area,"area"),
        suit: toChinese(algoList.value[algoindex].suit,"suit"),
        main: toChinese(algoList.value[algoindex].main,"main",algoList.value[algoindex].suit),
        assistant1: toChinese(algoList.value[algoindex].assistant1,"assist",algoList.value[algoindex].suit),
        assistant2: toChinese(algoList.value[algoindex].assistant2,"assist",algoList.value[algoindex].suit),
    }
}

const deleteAlgoVue = () => {
    if (algoStatus.value == ALGO_STATUS.HIT) {
        deletedAlgo(algo.value.index)
        if (algoList.value.length > 0) {
            selectAlgo(algoList.value[0].index)
        } else {
            MakeAlgo()
        }

    }


}
//保存算法
const saveAlgoVue = () => {
    let Algo: algoInfo = {
        index:0,
        area: toCode(algo.value.area, "area"),
        suit: toCode(algo.value.suit, "suit"),
        main: toCode(algo.value.main, "main",algo.value.suit),
        assistant1: toCode(algo.value.assistant1, "assist",algo.value.suit),
        assistant2: toCode(algo.value.assistant2, "assist",algo.value.suit),
    }
    saveAlgo(Algo)
}



</script>

<style scoped>
.el-header,

.el-aside {
    text-align: center;
    line-height: 20px;

}

.el-main {
    line-height: 22px;
    text-align: center;
    --el-main-padding: 5px
}

body>.el-container {
    margin-bottom: 40px;
}

.el-form-item {
    margin-bottom: 1px;
}
</style>

  