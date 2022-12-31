/**
 * 人形数据的处理方法
 */
import { ref, watch } from "vue";
import {getLocalData} from "./data"
import { ListObj } from "./interface";


export function roleListUtil(){
    const allRoleList= getLocalData()
    const filiter = ref({
        camp: "",
        occupation: "",
      })
    const roleList = ref([]as ListObj[])
    
    const filiterFunc = () => {
        const tmp = [] as ListObj[]
        allRoleList.forEach((role) => {
          if (filiter.value.camp == "" || role.camp == filiter.value.camp) 
          if (filiter.value.occupation == "" || role.occpution == filiter.value.occupation)
          tmp.push(role)
        })
        roleList.value = tmp
      }

      watch(
        //监听到筛选条件变化，更新界面
        () => filiter.value ,
        () => {
            filiterFunc()
        },
        { deep: true ,immediate:true}
      );

      return {roleList,filiter}
    
}