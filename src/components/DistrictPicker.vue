<template>
  <div class="district-picker">
    <div class="district-header">
      <div :class="['tabs-' + tab]">
        <span @click="handleTabProvince">{{ currentProvinceName }}</span>
        <span v-if="showCityTab && !onlyProvince" @click="handleTabCity">{{
          currentCityName
        }}</span>
        <span v-if="showAreaTab && !onlyProvince && !hideArea">{{ currentAreaName }}</span>
      </div>
    </div>
    <div class="district-body">
      <template v-if="onlyProvince">
        <ul class="list" v-if="tab === 1">
          <li
            v-for="province in provinces"
            v-bind:key="province.id"
            :class="[
              'item',
              {
                selected: province.name === currentProvinceName ? true : false,
              },
            ]"
            @click="handleChooseProvince(province)"
          >
            {{ province.name }}
          </li>
        </ul>
      </template>
      <template v-else>
        <ul class="list" v-if="tab === 1">
          <li
            v-for="province in provinces"
            v-bind:key="province.id"
            :class="[
              'item',
              {
                selected: province.name === currentProvinceName ? true : false,
              },
            ]"
            @click="handleChooseProvince(province)"
          >
            {{ province.name }}
          </li>
        </ul>
        <ul class="list" v-if="tab === 2">
          <li
            v-for="city in cities"
            v-bind:key="city.id"
            :class="[
              'item',
              {
                selected: city.name === currentCityName ? true : false,
              },
            ]"
            @click="handleChooseCity(city)"
          >
            {{ city.name }}
          </li>
        </ul>
        <ul class="list" v-if="tab === 3 && !hideArea">
          <li
            v-for="area in areas"
            v-bind:key="area.id"
            :class="[
              'item',
              {
                selected: area.name === currentAreaName ? true : false,
              },
            ]"
            @click="handleChooseArea(area)"
          >
            {{ area.name }}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import DISTRICTS from './districts.js';

const DEFAULT_CODE = '0';

export default {
  name: 'DistrictPicker',
  props: {
    province: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    area: {
      type: String,
      default: '',
    },
    onlyProvince: {
      type: Boolean,
      default: false,
    },
    hideArea: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.DISTRICTS = DISTRICTS;
    this.init();
  },
  methods: {
    init() {
      this.getProvinces();
      this.currentProvinceName = this.province || this.default.provinceName;
      this.currentCityName = this.city || this.default.cityName;
      this.currentAreaName = this.area || this.default.areaName;

      const provinceObj = this.DISTRICTS[DEFAULT_CODE];
      for (let key in provinceObj) {
        if (provinceObj[key] === this.currentProvinceName) {
          const province = { id: key, name: provinceObj[key] };
          this.handleChooseProvince(province);
          const cityObj = this.DISTRICTS[province.id];
          for (let key in cityObj) {
            if (cityObj[key] === this.currentCityName) {
              const city = { id: key, name: cityObj[key] };
              this.handleChooseCity(city);
              break;
            }
          }
          break;
        }
      }
    },
    handleTabProvince() {
      this.tab = 1;
      this.showCityTab = false;
      this.showAreaTab = false;
      this.resetCity();
      this.resetArea();
    },
    handleTabCity() {
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = true;
      this.resetArea();
    },
    handleChooseProvince(province) {
      this.currentProvinceName = province.name;
      this.currentProvinceId = province.id;
      this.selectedProvince = province;
      if (this.onlyProvince) {
        this.$emit('selected', province);
      } else {
        this.tab = 2;
        this.showCityTab = true;
        this.getCities(province.id);
      }
    },
    handleChooseCity(city) {
      this.currentCityName = city.name;
      this.currentCityId = city.id;
      this.selectedCity = city;
      if (this.hideArea) {
        const { selectedProvince, selectedCity } = this;
        const result = { province: selectedProvince, city: selectedCity };
        this.$emit('selected', result);
      } else {
        this.tab = 3;
        this.showAreaTab = true;
        this.getAreas(city.id);
      }
    },
    handleChooseArea(area) {
      this.currentAreaName = area.name;
      this.currentAreaId = area.id;
      this.selectedArea = area;
      const { selectedProvince, selectedCity, selectedArea } = this;
      const result = { province: selectedProvince, city: selectedCity, area: selectedArea };
      this.$emit('selected', result);
    },
    getProvinces() {
      let provinces = [];
      const provinceObj = this.DISTRICTS[DEFAULT_CODE];

      for (let key in provinceObj) {
        provinces.push({ id: key, name: provinceObj[key] });
      }
      this.provinces = provinces;
    },
    getCities(provinceId) {
      let cities = [];
      const cityObj = this.DISTRICTS[provinceId];

      for (let key in cityObj) {
        cities.push({ id: key, name: cityObj[key] });
      }
      this.cities = cities;
    },
    getAreas(cityId) {
      let areas = [];
      const areaObj = this.DISTRICTS[cityId];

      for (let key in areaObj) {
        areas.push({ id: key, name: areaObj[key] });
      }
      this.areas = areas;
    },
    resetCity() {
      this.currentCityName = this.default.cityName;
    },
    resetArea() {
      this.currentAreaName = this.default.areaName;
    },
  },
  data() {
    return {
      default: {
        provinceName: '省',
        cityName: '市',
        areaName: '区',
      },
      provinces: [],
      cities: [],
      areas: [],
      currentProvinceName: '',
      currentCityName: '',
      currentAreaName: '',
      tab: 1,
      showCityTab: false,
      showAreaTab: false,
      DISTRICTS: null,
    };
  },
};
</script>

<style>
.district-picker {
  font-size: 16px;
}
.district-picker ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.district-picker .district-header {
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 10px 15px;
}
.district-picker .district-header .tabs-1 {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.district-picker .district-header .tabs-2,
.district-picker .district-header .tabs-3 {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.district-picker .district-body {
  height: 400px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.district-picker .district-body .list .item {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
.district-picker .district-body .list .selected {
  color: red;
}
</style>
