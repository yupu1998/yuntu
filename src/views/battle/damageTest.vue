<template>
    <babylonvue></babylonvue>
</template>
  
  <script lang ="ts" setup>
  import { ref, watch,defineProps,defineEmits } from "vue";
  import { ruleObj } from "@/dto/battleInfoDto";
  import babylonvue from "@/components/babylonOne.vue"
  // import roleOccupationEnum from "../../enum/roleOccupation"
  // import attribute from "../../enum/attribute";
  const props = defineProps({
    groupName: {
    type: Number
  },
  targetData: {
    type: Object
  },
  ruleArr: {
    type: Array
  },
  functionArr: {
    type: Array
  },
  });

  const selectedRule = ref<string[]>([])
  

  const deletedRule = (e:string) =>{
    selectedRule.value.splice(selectedRule.value.indexOf(e),1)
  }
  const selectRule = (e:ruleObj) =>{
    if (selectedRule.value.indexOf(e.code) == -1){
      selectedRule.value.push(e.code)
    }
  }
  /**
   * 初始化协议数组 未来可能加入筛选功能
   */
  const initial = ()=>{
    console.log(props);
  }


  initial()
  

  </script>
  
  <style lang="scss" scoped>
  </style>