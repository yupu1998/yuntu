import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import {GroupAndName,roleAllAttribute,roleGroup, roleTotalAttribute} from '../../../dto/storageDtos'
import { getRoleAttributeData } from '../roleInfo/data'
import { getroleAllAttribute } from "@/utils/makeDtoObjectUtils";




/**
 * 
 * @param group 
 * @returns 
 */
export function getGroupRoleAttribute(group:number){
    const groups = localStorage.getItem(LocalFileAdreess.GROUP_INFO) as string
    const res: Array<GroupAndName> = JSON.parse(groups);
    const roleName:string[] = []
    const indexName = ['one','two','three','four','five']
    res.forEach((val)=>{
        if (val.index == group){
            indexName.forEach((i)=>{
                if (val.group[i]!='')
                    roleName.push(val.group[i])
            })
        }
    })
    //获取角色属性
    const roleRes:{[key: string]: roleAllAttribute} = {}
    const roleAttribute = getRoleAttributeData()
    roleName.forEach((val)=>{
        roleRes[val] = roleAttribute[val]
    })
    return roleRes
}


export function getTargetData(data:roleTotalAttribute){
    const res = getroleAllAttribute()
    for (const code in data){
        res[code] = data[code]
    }
    return res
}