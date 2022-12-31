/**
 * 生成编队数据
 */

import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import {roleName} from "../../../enum/Chinese"
import {GroupAndName,roleGroup} from '../../../dto/storageDtos'
import { getRoleImg } from "../../../store/image";
import Defalut from "../../../image/RolePicture/group_default.png"

/**
 * 返回本地保存的编队数据
 * @returns
 */
export function getGroup(){
    const groups = localStorage.getItem(LocalFileAdreess.GROUP_INFO) as string
    const group:GroupAndName[] = JSON.parse(groups) 
    return group
}

/**
 * 获取图片地址
 * @param code 
 */
export function getImg(code:string){
    if (code == ""){
        //换成默认图片
        return Defalut
    }else{
        return getRoleImg(code)
    }
}

/**
 * 获取角色中文名称
 * @param code 
 */
export function getRoleName(code:string){
    return roleName[code]
}