/**
 * 人形数据常量工具
 * 返回人形数据对象
 */
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { roleTotalAttribute, roleAllAttribute } from "../../../dto/storageDtos";
import { getRoleImg } from "../../../store/image";
import { occupationName, campName } from "../../../enum/Chinese";
import { Camp } from "../../../enum/baseEnum"
import { ListObj } from "./interface";
import * as baseRole from '@/store/baseRole'

/**
 * 人形列表数据
 */
export const getLocalData = () => {
  //获取本地保存的人形数据
  const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
  const roleDefaultData: roleAllAttribute[] = JSON.parse(localInfoData);
  return sortList(roleDefaultData);
};

/**
 * 添加新人形
 * @param code 
 * @param name 
 * @returns 
 */
export const addRole = (code: string, name: string) => {
  const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
  const roleDefaultData: roleAllAttribute[] = JSON.parse(localInfoData);
  const newRole = baseRole[code];
  newRole.name = name;
  roleDefaultData.push(newRole);
  localStorage.setItem(LocalFileAdreess.ROLE_INFO, JSON.stringify(roleDefaultData));
  return sortList(roleDefaultData);
}

export const deleteRole= (name:string)=>{
  const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
  const roleDefaultData: roleAllAttribute[] = JSON.parse(localInfoData);
  const index = roleDefaultData.findIndex(role=>role.name == name);
  roleDefaultData.splice(index,1)
  localStorage.setItem(LocalFileAdreess.ROLE_INFO, JSON.stringify(roleDefaultData));
  return sortList(roleDefaultData);
}

const sortList=(roleDefaultData:roleAllAttribute[])=>{
  const list: ListObj[] = [];
  roleDefaultData.forEach(role => {
    list.push({
      code: role.code,
      name: role.name,
      occpution: occupationName[role.occupation],
      img: getRoleImg(role.code),
      camp: campName[Camp[role.camp]]
    });
  })
  return list;
}

/**
 * 获取本地保存的人形数据
 * @returns 
 */
export const getRoleAttributeData = () => {

  const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
  const roleDefaultData: roleAllAttribute[] = JSON.parse(localInfoData);

  return roleDefaultData;
};

