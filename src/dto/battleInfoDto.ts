import { Occupation, IsLong, AttentionPosition, Camp } from '../enum/baseEnum'
import { ruleFunctionType ,functionType,functionSuitEnum} from '../enum/battleEnum'

/**
 * 协议的对象
 * name 中文名
 * code 标记
 * type 协议类型
 * range 作用范围
 * description 文本描述
 */
export interface ruleObj{
    name:string,
    code:string,
    type:ruleFunctionType,
    range:rangeObj,
    description:string,
  }

/**
 * 函数方法的对象
 */
export interface functionObj{
  name:string,
  code:string,
  suit:functionSuitEnum,
  type:ruleFunctionType,
  functionType:functionType,
  range:rangeObj,
  description:string,
}
  
  /**
   * 函数或者协议的作用范围
   * isRole 是否作用在人形身上 
   * occupation 职业
   * long 近战/远程
   * camp 阵容
   * Attention 立场
   */
  export interface rangeObj{
    isRole:boolean,
    occupation:Occupation[],
    long:IsLong[]
    camp:Camp[]
    Attention:AttentionPosition[]
  }
  