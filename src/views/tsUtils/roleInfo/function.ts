/**
 * 人形数据的处理方法
 */
import { ref, watch } from "vue";
import {getLocalData,addRole,deleteRole} from "./data"
import { ListObj } from "./interface";


export function roleListUtil(){
    let allRoleList= getLocalData()
    const filiter = ref({
        camp: "",
        occupation: "",
      })
    const roleList = ref([]as ListObj[])
    
    //人形筛选过滤方法
    const filiterFunc = () => {
        const tmp = [] as ListObj[]
        allRoleList.forEach((role) => {
          if (filiter.value.camp == "" || role.camp == filiter.value.camp) 
          if (filiter.value.occupation == "" || role.occpution == filiter.value.occupation)
          tmp.push(role)
        })
        roleList.value = tmp
      }

    //新增人形，传入人形模板和名字 
    //名字为唯一性id，不可重复，不可修改
    const addNewRole = (role:ListObj)=>{
      console.log("添加新人",role.name)
      const name = "新绿毛"
      if(allRoleList.find(role=>role.name == name)==undefined){
        //调用添加人形方法，将新人形存入本地存储，并更新人形列表
        allRoleList = addRole(role.code,name)
        filiterFunc()
      }else{
        //抛出提示弹窗异常，命名不可重复
      }
    }

    const deleteOldRole = (role:ListObj)=>{
      console.log("删除指定人",role.name)
      if(allRoleList.filter(role=>role.code == role.code).length > 1){
        //调用删除人形方法，本地存储，并更新人形列表
        allRoleList = deleteRole(role.name)
        filiterFunc()
      }else{
        //抛出提示弹窗，每种人形至少需要一个角色!
      }
    }

      watch(
        //监听到筛选条件变化，更新界面
        () => filiter.value ,
        () => {
            filiterFunc()
        },
        { deep: true ,immediate:true}
      );

      return {roleList,filiter,addNewRole,deleteOldRole}
    
}