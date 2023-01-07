<template>
  <div class="inputView" v-for="(e, v) in targetData" :key="v">
    <div class="demo-input-suffix">
      {{ e.name }}
      <el-input v-model="e.value" type="number" min="0" :max="e.max"></el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { RoleBaseAttribute } from "../../enum/baseEnum";
const props = defineProps({
  modelValue: {
    type: Object
  }
});
const emits = defineEmits(['update:modelValue'])
const targetData = ref<{ code: RoleBaseAttribute, name: string, value: number, max: number }[]>([])

const initial = () => {
  if (props.modelValue) {
    targetData.value.push({ code: RoleBaseAttribute.HP, name: "最大生命", value: props.modelValue[RoleBaseAttribute.HP], max: 1000000000 })
    targetData.value.push({ code: RoleBaseAttribute.PHYSICAL_DEFENSE, name: "物理防御", value: props.modelValue[RoleBaseAttribute.PHYSICAL_DEFENSE], max: 20000 })
    targetData.value.push({ code: RoleBaseAttribute.POWER_DEFENSE, name: "算量防御", value: props.modelValue[RoleBaseAttribute.POWER_DEFENSE], max: 20000 })
    targetData.value.push({ code: RoleBaseAttribute.DODGE, name: "闪避", value: props.modelValue[RoleBaseAttribute.DODGE], max: 100 })
    targetData.value.push({ code: RoleBaseAttribute.DAMAGE_REDUCE, name: "减伤", value: props.modelValue[RoleBaseAttribute.DAMAGE_REDUCE], max: 100 })
  }
}
initial()

watch(() => targetData.value, (val) => {
  if (props.modelValue) {
    const tmp = props.modelValue
    val.forEach((getvalue) => {
      tmp[getvalue.code] = Number(getvalue.value)
    })

    emits('update:modelValue', tmp)
  }
}, { deep: true })

</script>

<style lang="scss" scoped>

</style>