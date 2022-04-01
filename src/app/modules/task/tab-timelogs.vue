<template>
<div v-show="selectedTabKey==='timelogs'" style="overflow-y: hidden; position: relative;;background: #ffffffa1;">
<div v-if="isTimelogsTabInitialized"  style="display: flex;padding: 20px;min-height: 300px;flex-direction: column;">
                      <div style="display: flex;padding: 5px 0px;column-gap: 30px;;margin-right: 15px;margin-left: 15px;">
                            <div style="flex:4">
                                 <label class="uk-form-label">Description</label>
                                <input type="text" v-model="timelogItem.description" class="uk-input" placeholder="Describe activity" style="border-radius:3px"/>
                            </div>
                            <!-- <div style="flex:1">
                                 <label class="uk-form-label">From Date/Time</label>
                                <input type="datetime-local" v-model="timelogItem.startDateTime" class="uk-input" style="border-radius:3px"/>
                            </div>
                            <div style="flex:1">
                                 <label class="uk-form-label">To Date/Time</label>
                                <input type="datetime-local" v-model="timelogItem.endDateTime" class="uk-input" style="border-radius:3px"/>
                            </div> -->
                            <div style="flex:2">
                                <label class="uk-form-label">Duration</label>
                               <div class="uk-form-controls" style="display: grid; grid-template-columns: 1fr 2fr;">
                                <input  v-model="timelogItem.duration" onkeypress="return event.charCode >= 48" min="1" class="uk-input" dir="rtl" type="number" tabindex="6" style="border: 1px solid rgb(187, 187, 187); text-align: right;border-top-right-radius:0px;border-bottom-right-radius:0px;">
                                <div style="position: relative;">
                                  <select  v-model="timelogItem.durationUnit" class="uk-select" id="form-horizontal-select" tabindex="7" style="border-left: 1px;;border-top-left-radius:0px;border-bottom-left-radius:0px;">
                                    <option value="Hour(s)">Hour(s)</option>
                                    <option value="Day(s)">Day(s)</option>
                                    <option value="Week(s)">Week(s)</option>
                                    <option value="Month(s)">Month(s)</option>
                                  </select>
                                  <div style="position: absolute; right: 7px; top: 9px; pointer-events: none;">
                                    <span class="uk-icon" uk-icon="triangle-down">
                                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="triangle-down">
                                        <polygon points="5 7 15 7 10 12"></polygon>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div style="flex: 2 1 0%;align-items: flex-end;display: flex;">
                              <button v-on:click="saveTimelog()"  class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button"
                                      style="background-color:#2196f3;border-radius: 3px;min-width: 100px;font-size: 0.65rem;line-height: 35px;font-weight: normal !important;display: inline-block;">
                                  <span style="padding-left: 10px;">{{timelogLabel}}</span>
                              </button>
                            </div>
                      </div>
                      <br>

                      <div v-show="timelogList.length==0" style="text-align:center;border-bottom: 0px;"> No timelog entries </div>
                      <div  v-show="timelogList.length>0" style="border-radius: 5px;border: 1px solid rgba(128, 128, 128, 0.25);margin-right: 15px;margin-left: 15px;padding: 1px 1px;">
                          <div  style="background:rgb(242 242 242 / 23%);border-width:1px 1px 0px;border-top-style:solid;border-right-style:solid;border-bottom-style:initial;border-left-style:solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:initial;border-left-color:transparent;border-image:initial;text-transform:uppercase;font-size:.5rem;padding: 10px 0px;display:flex;border-bottom:1px solid #d0d0d0;column-gap:20px;font-weight:bold;letter-spacing:1px;">

                              <div style="flex:0.25;text-align:right">Sno.</div>
                              <div style="flex:3;">
                                Description
                              </div>
                              <!-- <div style="flex:1;">From </div>
                              <div style="flex:1;">To</div> -->
                              <div style="flex:1;">Duration</div>
                              <div style="flex:1;">Actions</div>
                          </div>
                          <template v-for="item,index in timelogList">
                            <div style="position: relative;padding: 10px;min-height: 20px;justify-items: start;column-gap: 20px;background-color: rgb(255 255 255 / 75%);font-size: 0.65rem;display: flex;">

                                  <div style="flex:0.25;text-align:right;" v-if="item.status!=='CANCELLED'">{{index+1}}</div>
                                  <div style="flex:0.25;text-align:right;filter: brightness(1.75);" v-if="item.status==='CANCELLED'">{{index+1}}</div>

                                  <div style="flex:3;" v-if="item.status!=='CANCELLED'">
                                    {{item.description}} &nbsp; &nbsp; &nbsp; &nbsp;
                                  </div>
                                  <div style="flex:3;filter: brightness(1.75);" v-if="item.status==='CANCELLED'">
                                    {{item.description}} &nbsp; &nbsp; &nbsp; &nbsp;
                                  </div>


                                  <!-- <div style="flex:1;">{{item.startDateTimeFormatted}}</div>
                                  <div style="flex:1;">{{item.endDateTimeFormatted}}</div> -->
                                  <div style="flex: 1 1 0%;" v-if="item.status!=='CANCELLED'">
                                    {{item.duration}} {{item.durationUnit}} &nbsp; &nbsp; &nbsp; &nbsp;
                                  </div>
                                  <div style="flex: 1 1 0%;filter: brightness(1.75);" v-if="item.status==='CANCELLED'">
                                    <span style="text-decoration: xline-through gray;"> {{item.duration}} {{item.durationUnit}}</span>
                                  </div>
                                  <!-- <div style="flex:1;" ><a v-on:click="updateTimelogItem(item)">Edit</a>  |  <a v-on:click="removeTimelog(item)">Remove</a></div> -->


                                  <div  style="flex:1;" v-if="item.status==='CANCELLED'">
                                    <span style="filter: brightness(1.75);background: rgb(99 99 99);color: #929292;padding:4px 10px;border-radius: 20px;font-size: 0.45rem;margin-left: 20px;letter-spacing: 1px;">CANCELLED</span>
                                  </div>
                                  <div style="flex: 1 1 0%; text-align: center;" v-if="item.status!=='CANCELLED'">
                                    <a uk-tooltip="pos:left;title:You cannot undo once you cancel the item" v-on:click="cancelTimelogItem(item)">Cancel</a>
                                  </div>
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
  props: ['selectedTabKey', 'isTimelogsTabInitialized', 'timelogItem', 'saveTimelog', 'timelogLabel', 'timelogList', 'cancelTimelogItem'],
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
