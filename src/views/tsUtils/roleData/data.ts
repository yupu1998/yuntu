import { ElMessage } from 'element-plus'
import * as occupationIncrease from "../../../store/occupationIncrease";
import * as roleFavoriteIncrease from "../../../store/favoriteIncrease";
import * as roleDefaultData from "../../../store/baseRole";
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { getRoleAttributeData } from '../roleInfo/data'
import { AttributeAddObj, roleTotalAttribute,roleAllAttribute } from '../../../dto/storageDtos'
/**
 * 获取角色的基本数据 默认数据 职业数据 好感度数据
 * @param k 
 * @returns 
 */
export const selectRole = (k: string) => {
    //点击角色，进入角色属性页面
    return {
        role: k,
        baseData: roleDefaultData[k] as roleAllAttribute,
        localData: getRoleAttributeData()[k],
        occupationData: occupationIncrease[roleDefaultData[k].occupation] as Array<AttributeAddObj>,
        favoriteData: roleFavoriteIncrease[k] as Array<AttributeAddObj>,
    };
};

/**
 * 更新角色的属性
 * @param code 
 * @param newData 
 */
export const updateRoleData = (code:string,newData: roleAllAttribute) => {
    const oldData = getRoleAttributeData()
    oldData[code] = newData
    localStorage.setItem(LocalFileAdreess.ROLE_INFO, JSON.stringify(oldData))
    ElMessage("已更新数据")
}

