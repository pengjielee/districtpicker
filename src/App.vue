<template>
  <div id="app">
    <div class="card">
      <h2>默认</h2>
      <district-picker v-on:selected="handleSelected"></district-picker>
    </div>
    <div class="card">
      <h2>只显示省</h2>
      <district-picker :onlyProvince="onlyProvince" v-on:selected="handleSelected"></district-picker>
    </div>
    <div class="card">
      <h2>隐藏区</h2>
      <district-picker :hideArea="hideArea" v-on:selected="handleSelected"></district-picker>
    </div>
    <div class="card">
      <h2>数据回填</h2>
      <district-picker province="北京" city="市辖区" area="朝阳区" v-on:selected="handleSelected"></district-picker>
    </div>
  </div>
</template>

<script>
import DistrictPicker from "./DistrictPicker.vue"

export default {
  components: {
    DistrictPicker
  },
  methods: {
    handleSelected(value){
      /* eslint-disable no-console */
      console.log(value);
    }
  },
  data() {
    return {
      title: "",
      onlyProvince: true,
      hideArea: false
    };
  }
};
</script>
