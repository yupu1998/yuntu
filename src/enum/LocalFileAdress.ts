import { roleAllAttribute, simpleDamageTest } from '../dto/storageDtos'
import {defaultTargetData} from '../store/defaultAttribute'
import * as baseRole  from '../store/baseRole'
import {GroupAndName} from '../dto/storageDtos'
import {roleAlgos} from '../dto/algorithmDto'
import { roleName } from './Chinese'

/**
 * 本地存储的项目名称
 */
export enum LocalFileAdreess {
    ROLE_INFO = 'roleInfoJson',//保存角色属性和套装效果的Json文件
    GROUP_INFO = 'groupInfoJson',//保存编队
    ALGORITHM_STROE = 'algorithmStore',//保存算法的仓库
    DAMAGE_TEST_SINGLE_Target = 'damageTestSingleTarget',//检查伤害测试，打靶测试
    ROLE_ALGO = 'roleAlgo',//保存人形算法配置
}

export function initial() {
    console.log("进入初始化")
    initialRoles()
    initialGroup()
    initialAlgoStore()
    initialSingleTargetTestData()
    initialAllRoleAlgo()
}

/**
 * 初始化角色数据
 */
const initialRoles = () =>{
    const roles = localStorage.getItem(LocalFileAdreess.ROLE_INFO)
    // console.log(roles);
    // const newRoles:roleAllAttribute[] = []
    //     for (const i in roleName){
    //         newRoles.push(baseRole[i])
    //     }
    //     localStorage.setItem(LocalFileAdreess.ROLE_INFO,JSON.stringify(newRoles))
    if ((roles == null)){//如果为空,初始化
        const newRoles:roleAllAttribute[] = []
        for (const i in roleName){newRoles.push(baseRole[i])}
        localStorage.setItem(LocalFileAdreess.ROLE_INFO,JSON.stringify(newRoles))
    }else{
        const Roles:roleAllAttribute[] = JSON.parse(roles)
        for (const i in roleName){
            if(Roles.find(role=>role.code == i)==undefined){Roles.push(baseRole[i])}
        }
        localStorage.setItem(LocalFileAdreess.ROLE_INFO,JSON.stringify(Roles))
    }
}
/**
 * 初始化编队数据
 */
const initialGroup = () =>{
    const groups = localStorage.getItem(LocalFileAdreess.GROUP_INFO)
    if (groups == null){
        const initialGroupName = ["第一梯队","第二梯队","第三梯队","第四梯队"]
        const intialGroup = []
        for (let i =0;i<initialGroupName.length;i++){
            const group:GroupAndName= {
                index:i,
                name:initialGroupName[i],
                group:{one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:""}
            }
            intialGroup.push(group)
        }
        
        localStorage.setItem(LocalFileAdreess.GROUP_INFO,JSON.stringify(intialGroup))
    }
}
/**
 * 初始化算法仓库
 */
const initialAlgoStore = () =>{
    const algorithmStore = localStorage.getItem(LocalFileAdreess.ALGORITHM_STROE)
    if (algorithmStore == null){
        localStorage.setItem(LocalFileAdreess.ALGORITHM_STROE,JSON.stringify([]))
    }
}
/**
 * 初始化伤害打靶标靶数据
 */
const initialSingleTargetTestData = () =>{
    const singleRoleDamageTest = localStorage.getItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_Target)
    if (singleRoleDamageTest == null){
        const singleRole:simpleDamageTest = {group:0,target:defaultTargetData,rules:[],functions:[]}
        localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_Target,JSON.stringify(singleRole))
    }
}
/**
 * 初始化人形算法数据
 */
const initialAllRoleAlgo = () =>{
    //获取人形信息
    const roles = localStorage.getItem(LocalFileAdreess.ROLE_INFO) as string
    const Roles:roleAllAttribute[] = JSON.parse(roles)

    const allRoleAlgo = localStorage.getItem(LocalFileAdreess.ROLE_ALGO)
    if (allRoleAlgo == null){
        const tmp = {} as { [key: string]: roleAlgos }
        Roles.forEach(role =>{
            tmp[role.name] = {A:[],B:[],C:[]}
        })
        localStorage.setItem(LocalFileAdreess.ROLE_ALGO,JSON.stringify(tmp))
    }else{
        const tmp = JSON.parse(allRoleAlgo) as { [key: string]: roleAlgos }
        Roles.forEach(role =>{
            if ( !Object.keys(tmp).includes(role.name)){
                tmp[role.name] = {A:[],B:[],C:[]}
            }
        })
        localStorage.setItem(LocalFileAdreess.ROLE_ALGO,JSON.stringify(tmp))
    }
}