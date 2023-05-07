<template>
    <div :id='id'></div>
</template>

<script lang ="ts" setup>
import { damageDistDto } from "@/dto/chartDto";
import { Chart } from "@antv/g2"
import { defineProps, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Array
  },
  name: {
    type: String
  }
});
const id = Math.floor(Math.random() *100000).toString()
onMounted(() => {
  if (props.modelValue != undefined) {

    // Step 1: 创建 Chart 对象
    const chart = new Chart({
      container: id, // 指定图表容器 ID
      width: 250, // 指定图表宽度
      height: 180, // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.data(props.modelValue as unknown as damageDistDto[]);
    chart.scale({
      precentage: {
        max: 1,
        min: 0,
        alias: props.name + '伤害分布',
      },
    });
    chart.axis('typeName', {
      title: null,
      tickLine: null,
      line: null,
    });

    chart.axis('precentage', {
      label: null,
      title: {
        offset: 30,
        style: {
          fontSize: 12,
          fontWeight: 300,
        },
      },
    });
    chart.legend(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('typeName*precentage')
      .size(26)
      .label('precentage', (xValue:number) => {
        return {
          style: {
            fill: '#8d8d8d',
          },
          content: (100*xValue).toFixed(2) + '%',
          offset: 10,
        }
      });
    chart.interaction('element-active');
    chart.render();
  }
})
</script>

<style >
</style>