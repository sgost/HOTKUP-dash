<template>
              <div v-show="selectedTabKey==='transitions'" style="overflow-y: hidden; position: relative;width: 100%;;background: #ffffffa1;">
                  <div v-if="isTransitionsTabInitialized"  style="display: flex;padding: 20px;min-height: 300px;flex-direction: column;">

                      <div v-show="taskTransitionsList.length==0" style="text-align:center;border-bottom: 0px;"> No task transitions </div>
                      <div v-show="taskTransitionsList.length>0" style="border-radius: 5px;border: 1px solid rgba(128, 128, 128, 0.25);margin-right: 15px;margin-left: 15px;padding: 1px 1px;">
                          <div  style="background:rgb(242 242 242 / 23%);border-width:1px 1px 0px;border-top-style:solid;border-right-style:solid;border-bottom-style:initial;border-left-style:solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:initial;border-left-color:transparent;border-image:initial;text-transform:uppercase;font-size:.5rem;padding: 10px 0px;display:flex;border-bottom:1px solid #d0d0d0;column-gap:20px;font-weight:bold;letter-spacing:1px;">

                              <div style="flex:0.25;text-align:right">Sno.</div>
                              <div style="flex:2;">Transition</div>
                              <div style="flex:1;">From </div>
                              <div style="flex:1;">To</div>
                              <div style="flex:1;">By </div>
                              <div style="flex:1;">Duration</div>
                          </div>
                          <template v-for="item,index in taskTransitionsList">
                            <div style="position: relative; padding: 10px; min-height: 20px; justify-items: start; column-gap: 20px; background-color: rgba(255, 255, 255, 0.75); font-size: 0.65rem; display: flex;">

                                  <div style="flex:0.25;text-align:right">{{index+1}}</div>
                                  <div style="flex:2;">
                                        <span v-if="item.fromStatus!==null">{{item.fromStatus}}</span>
                                        <span v-if="item.toStatus!==null"> &#8594; {{item.toStatus}}</span>
                                  </div>
                                  <div style="flex:1;" v-bind:uk-tooltip="item.startTime">{{item.startDate}} {{item.startTime}}</div>
                                  <div style="flex:1;" v-bind:uk-tooltip="item.endTime">{{item.endDate}} {{item.endTime}}</div>
                                  <div style="flex:1;">{{item.createdBy.split("#")[1]}}</div>
                                  <div style="flex:1">{{item.durationInHours}} {{item.durationUnitFormatted}}</div>
                              </div>
                          </template>
                      </div>

                  </div>
              </div>
</template>
<script>

  import { bus } from './../../../main.js';
  import userMixinLib from './../../mixins/lib/user_mixin_lib';
  import utilsMixinLib from './../../mixins/lib/utils_lib';
  import uiListMixinLib from './../../mixins/lib/ui-list.js';

  export default {
  mixins: [
    userMixinLib,
    utilsMixinLib,
    uiListMixinLib
  ],
  props: ['selectedTabKey', 'isTransitionsTabInitialized', 'taskTransitionsList', 'timelogLabel', 'timelogList', 'cancelTimelogItem'],
  data: function () {
    return {
    };
  },
  methods: {
  },
  created: function () {},
  computed: {
    storeCounter: function () {
      // console.log('Accessing vuex store ', this.$store)
      // console.log('Store data accessed from home page : ' + this.$store.getters.count);
      return this.$store.getters.count;
    }
  },
  mounted: function () {

  },
  unmounted: function () {

  },
  watch: {

  }
};

</script>

<style scoped>
 
</style>
