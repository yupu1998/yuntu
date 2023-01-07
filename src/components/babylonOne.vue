<template>
    <div class="scence">
        <canvas class="scenceCenter"></canvas>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BabylonScene } from '@/babylonOne/BabylonScence';
export default defineComponent({
 name: 'BabylonOne',
 mounted(){ //lifecycle hook
  const canvas = document.querySelector("canvas");
  if(canvas)
  new BabylonScene(canvas)
 }
});
</script>
<style lang="scss">
.scence {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .scenceCenter{
        width: 800px;
        height: 400px;
    }
}
</style>