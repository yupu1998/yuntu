import {ref,watch} from 'vue'
import { AttributeAddObj,roleTotalAttribute,roleAllAttribute } from '../../../dto/storageDtos'
import { AddOrPerAdd } from "../../../enum/operation";
import { RoleBaseAttribute,RoleNumberAttribute } from '../../../enum/baseEnum'
import { attributeName } from "../../../enum/Chinese"
import {selectRole,updateRoleData} from './data'
import {roleAttribution,listObj,getroleBaseAttribute,getRoleTotalAttribute} from './interface'
import { getRoleAlgoFunc } from '../../tsUtils/algoData/function'
import { algoDataToArr } from '../../tsUtils/algoInfo/function'
import { roleAlgoObj, algoDraw, algoPort, areaType, portType } from '../../tsUtils/algoData//interface'

export const initialData = (code:string) => {
    console.log(code);
    
    const roleData = selectRole(code)
    console.log(roleData);
    
    const defaultData: roleAllAttribute = roleData.baseData;
    const occupationData: roleTotalAttribute = getIncrease(defaultData, roleData.occupationData);//职业加成
    const favoriteData: roleTotalAttribute = getIncrease(defaultData, roleData.favoriteData);//好感度加成
    const rolefinalData = ref(roleData.localData)
    //角色装备信息
    const { algoData, algoStructure,saveAlgo } = getRoleAlgoFunc(code, rolefinalData.value.occupation as string)
    const algoIncreaseData = getAlgoIncrease(defaultData,algoData.value)//算法加成

    const data: Array<listObj> = []
    for (const code in RoleNumberAttribute) {
      const tmp: listObj = {
        code: code,
        type: attributeName[code],
        defaultValue: defaultData[RoleNumberAttribute[code]],
        occupation: Math.floor(occupationData[RoleNumberAttribute[code]]),
        favorite: Math.floor(favoriteData[RoleNumberAttribute[code]]),
        algorithm: Math.floor(algoIncreaseData[RoleNumberAttribute[code]]),
        update: 0,
        final: rolefinalData.value[RoleNumberAttribute[code]],
        gua: 0
      }
      tmp.gua = tmp.final - tmp.defaultValue - tmp.occupation - tmp.favorite - tmp.algorithm - tmp.update
      data.push(tmp)
    }
    const dockerList = ref(data)
    

    const saveData = ()=>{
      for (const newdata of dockerList.value) {
        rolefinalData.value[RoleNumberAttribute[newdata.code]] = newdata.final;
      }
      updateRoleData(code, rolefinalData.value)
      saveAlgo()
    }
    watch(
        //监听表格数据变化
        () => dockerList.value,
        (newValue) => {
          for (const line of newValue) {
            line.final =
              line.defaultValue +
              parseInt(line.gua as unknown as string) +
              line.algorithm +
              line.favorite +
              line.occupation;
            if (line.final < 0) {
              line.final = 0;
              line.gua =
                line.final -
                line.algorithm -
                line.favorite -
                line.occupation -
                line.defaultValue;
            }
          }
        },
        { deep: true }
      );

    watch(()=>algoData.value,(val)=>{
      const algoIn = getAlgoIncrease(defaultData,val)//算法加成
      console.log(algoIn);
      
      dockerList.value.forEach((val)=>{
        val.algorithm = Math.floor(algoIn[RoleNumberAttribute[val.code]])
      })
    },{deep:true})


    return {dockerList,rolefinalData,algoData,algoStructure,saveData}
  };

  /**
   * 输入人形基本属性和增幅数组，返回增加的属性对象
   * @param defaultData 人形基本属性
   * @param increaseArr 增幅数组
   * @returns 
   */
  const getIncrease = (defaultData: roleTotalAttribute, increaseArr: Array<AttributeAddObj>) => {

    const IncreaseData: roleTotalAttribute = getRoleTotalAttribute()
  
    for (const add of increaseArr) {
      if (add.increaseMethod == AddOrPerAdd.ADD) {
        IncreaseData[add.attribute] += add.value
      } else {
        IncreaseData[add.attribute] += (add.value / 100) * defaultData[add.attribute]
      }
    }
  
    return IncreaseData;
  };

  /**
   * 输入人形基本属性和人形算法对象，返回增加的属性对象
   * @param defaultData 
   * @param AlgoArr 
   * @returns 
   */
  const getAlgoIncrease = (defaultData: roleTotalAttribute, AlgoData: roleAlgoObj) =>{
    //将算法信息转化成数值增长信息
    const increaseArr = algoDataToArr(AlgoData)
    console.log("算法提升",increaseArr);
    return getIncrease(defaultData,increaseArr)
  }