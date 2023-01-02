import { ref,watch } from 'vue'
import { simpleDamageTest } from '../../../dto/storageDtos'
import {getData,saveData} from './data'


export function initalDamageTestData(){
    const initalData:simpleDamageTest = getData()
    const groupName = ref(initalData.group)
    const targetData = ref(initalData.target)
    const ruleArr = ref(initalData.rules)
    const functionArr = ref(initalData.functions)
    console.log(initalData);
    
    watch(()=>groupName.value,
    (val)=>{
        initalData.group = val
        saveData(initalData)
    },{deep:true})
    watch(()=>targetData.value,
    (val)=>{
        initalData.target = val
        saveData(initalData)
    },{deep:true})
    watch(()=>ruleArr.value,
    (val)=>{
        initalData.rules = val
        saveData(initalData)
    },{deep:true})
    watch(()=>functionArr.value,
    (val)=>{
        initalData.functions = val
        saveData(initalData)
    },{deep:true})

    return {groupName,targetData,ruleArr,functionArr}
}