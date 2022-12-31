import {ref,watch} from 'vue'
import { AttributeAddObj,roleTotalAttribute,roleBaseAttribute } from '../../../dto/storageDtos'
import { AddOrPerAdd } from "../../../enum/operation";
import { RoleBaseAttribute } from '../../../enum/baseEnum'
import { attributeName } from "../../../enum/Chinese"
import {selectRole} from './data'
import {roleAttribution,listObj,getroleBaseAttribute} from './interface'
import { getRoleAlgoFunc } from '../../tsUtils/algoData/function'
import { algoDataToArr } from '../../tsUtils/algoInfo/function'
import { roleAlgoObj, algoDraw, algoPort, areaType, portType } from '../../tsUtils/algoData//interface'

export const initialData = (code:string) => {
    console.log(code);
    
    const roleData = selectRole(code)
    const defaultData: roleAttribution = getroleBaseAttribute(roleData.baseData);
    const occupationData: roleAttribution = getIncrease(defaultData, roleData.occupationData);//职业加成
    const favoriteData: roleAttribution = getIncrease(defaultData, roleData.favoriteData);//好感度加成
    const rolefinalData = ref(roleData.localData)
    //角色装备信息
    const { algoData, algoStructure } = getRoleAlgoFunc(code, rolefinalData.value.occupation as string)
    const algoIncreaseData = getAlgoIncrease(defaultData,algoData.value)//算法加成

    const data: Array<listObj> = []
    for (const code in RoleBaseAttribute) {
      const tmp: listObj = {
        code: code,
        type: attributeName[code],
        defaultValue: defaultData[RoleBaseAttribute[code]],
        occupation: Math.floor(occupationData[RoleBaseAttribute[code]]),
        favorite: Math.floor(favoriteData[RoleBaseAttribute[code]]),
        algorithm: 0,
        update: 0,
        final: rolefinalData.value[RoleBaseAttribute[code]],
        gua: 0
      }
      tmp.gua = tmp.final - tmp.defaultValue - tmp.occupation - tmp.favorite - tmp.algorithm - tmp.update
      data.push(tmp)
    }
    const dockerList = ref(data)
    
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
      getAlgoIncrease(defaultData,val)//算法加成
    },{deep:true})


    return {dockerList,rolefinalData,algoData,algoStructure}
  };

  /**
   * 输入人形基本属性和增幅数组，返回增加的属性对象
   * @param defaultData 人形基本属性
   * @param increaseArr 增幅数组
   * @returns 
   */
  const getIncrease = (defaultData: roleAttribution, increaseArr: Array<AttributeAddObj>) => {

    const IncreaseData: roleAttribution = getroleBaseAttribute()
  
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
  const getAlgoIncrease = (defaultData: roleAttribution, AlgoData: roleAlgoObj) =>{
    //将算法信息转化成数值增长信息
    const increaseArr = algoDataToArr(AlgoData)
    console.log("算法提升",increaseArr);
    console.log(getIncrease(defaultData,increaseArr))
    return
  }