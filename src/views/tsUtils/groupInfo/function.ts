
import { ref, watch } from "vue";
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import {GroupAndName,roleGroup} from '../../../dto/storageDtos'
import {getGroup} from './data'


/**
 * 返回编队数据 一个增加编队方法 一个删除编队方法
 */
export function groupListUtil(){
    const groupList = ref(getGroup())


    const addNewGroup = () =>{
        const group:GroupAndName= {
            index:groupList.value.length,
            name:"编队待命名",
            group:{one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:""}
        }
        groupList.value.push(group)
    }

    const deleteGroup = (index:number) =>{
        groupList.value.splice(index,1)
        
        const tmpGroup = groupList.value.copyWithin(groupList.value.length,0)
        for (let i =0;i<tmpGroup.length;i++){
            if (tmpGroup[i].index != i){
                tmpGroup[i].index = i
            }
        }
        groupList.value = tmpGroup
    }

    watch(()=>groupList.value,
    ()=>{
        localStorage.setItem(LocalFileAdreess.GROUP_INFO,JSON.stringify(groupList.value))
    },
    { deep: true }
    )

    return {groupList,addNewGroup,deleteGroup}

}