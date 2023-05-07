<template>
  <div :id="id"></div>
</template>

<script lang ="ts" setup>
import { timeDamgeDto } from "@/dto/chartDto";
import { randomInt } from "@/utils/dataUtils";
import { Chart } from "@antv/g2"
import { defineProps, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Array
  }
});

const id = Math.floor(Math.random()*100000).toString()

// const data = [
//   { time: 4, role: 'Tokyo', value: 7 },
//   { time: 8, role: 'Tokyo', value: 7 },
//   { time: 10, role: 'Tokyo', value: 7 },
//   { time: 20, role: 'Tokyo', value: 7 },

// ];


onMounted(() => {
  if (props.modelValue != undefined) {

    const chart = new Chart({
      container: id,
      autoFit: true,
      width:800,
      height: 180,
    });

    chart.data(props.modelValue as timeDamgeDto[]);
    chart.scale({
      value: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });


    chart
      .line()
      .position('time*value')
      .color('role')

    // chart
    //   .point()
    //   .position('time*value')
    //   .color('role')
    //   .shape('circle');

    chart.render();
  }
})
</script>

<style >
</style>