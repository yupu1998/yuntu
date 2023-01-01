/**
 * 人形数据常量工具
 * 返回人形数据对象
 */
 import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
 import { roleTotalAttribute,roleAllAttribute } from "../../../dto/storageDtos";
 import { getRoleImg } from "../../../store/image";
 import { occupationName, campName } from "../../../enum/Chinese";
 import { Camp } from "../../../enum/baseEnum"
 import { ListObj } from "./interface";


 /**
  * 人形列表数据
  */
export const getLocalData = () => {
    //获取本地保存的人形数据
    const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
    const roleDefaultData: { [key: string]: roleAllAttribute } = JSON.parse(localInfoData);
    
    const list: Array<ListObj> = [];
    for (const code in roleDefaultData) {
      list.push({
        code: code,
        name: roleDefaultData[code].name,
        occpution: occupationName[roleDefaultData[code].occupation],
        img: getRoleImg(code),
        camp: campName[Camp[roleDefaultData[code].camp]]
      });
    }
    return list;
  };
  /**
   * 获取本地保存的人形数据
   * @returns 
   */
  export const getRoleAttributeData = () => {
    
    const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string;
    const roleDefaultData: { [key: string]: roleAllAttribute } = JSON.parse(localInfoData);
    
    return roleDefaultData;
  };

  