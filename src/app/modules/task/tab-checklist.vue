<template>
 <div v-show="selectedTabKey==='checklist'" style="flex-grow: 1;overflow-y: hidden;position: relative;background: rgba(255, 255, 255, 0.75);display: flex;flex-direction: column;">
                  <div style="display: flex;padding: 20px 0px;column-gap: 30px;;margin-right:15px;margin-left:15px;">
                        <div style="flex:1">
                            <input type="text" v-model="checklistItem.activityName" class="uk-input" placeholder="Add new checklist item" style="border-radius:3px"/>
                        </div>
                        <div>
                            <button v-on:click="saveChecklistItem()"  class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color:#2196f3;border-radius: 3px;min-width: 100px;font-size: 0.65rem;line-height: 30px;font-weight: normal !important;display: inline-block;">
                                <span style="padding-left: 10px;">{{checklistLabel}}</span>
                            </button>
                        </div>
                  </div>
                  <br>
                  <div v-if="isChecklistsTabInitialized" class="custom-scroll-bar" style="position: relative;flex-grow: 1;">
                      <template v-for="item,index in taskObject.checklist">
                          <div class="checklist_item"  v-if="(item.stageId === null) ||
                                                             (item.stageId === undefined) ||
                                                             (item.stageId !== null && taskObjectBeforeChange.statusInfo !== null && taskObjectBeforeChange.statusInfo.id === item.stageId)" v-bind:key="index">

                              <div v-show="item.status!=='COMPLETED' && item.status!=='CANCELLED'" v-on:click="updateChecklistItemStatus(item, $event)" style="border:1px solid #555;height: 20px;width: 20px;display: grid;cursor:pointer;border-radius: 3px;">
                              </div>
                              <div v-show="item.status==='COMPLETED'" uk-tooltip="pos:left;title:You cannot change the status of a completed item" style="xcursor: not-allowed;border: 1px solid rgb(86, 206, 42);background: rgb(122, 209, 90);height: 20px;width: 20px;display: grid;border-radius: 3px;">
                                  <span uk-icon="check" class="scaleZero" style="color: white;transform-origin: center center;transition: 0.15s ease-out;"></span>
                              </div>
                              <div v-show="item.status==='CANCELLED'" style="filter: brightness(1.75);border:1px solid gray;height: 20px;width: 20px;display: grid;cursor:pointer;border-radius: 3px;">
                              </div>

                              <div style="flex:1;" v-if="item.status==='COMPLETED'">
                                <div>
                                  {{index+1}}.
                                  <span style="text-decoration: xline-through red;">{{item.activityName}}</span>
                                  <span style="color: #8080809c;display:none" v-if="item.stageName !== null" > [ Visible during stage - {{item.stageName}} ]</span>
                                </div>
                                <div v-if="item.updatedBy !== null" style="padding-left:0px">
                                  <span style="color: rgb(140 140 140);font-size: 0.55rem;">
                                     Completed by {{item.updatedBy.split("#")[1]}}
                                  </span>
                                  <span v-if="item.updatedOn !== null" style="cursor: help;color: rgb(140 140 140);font-size: 0.55rem;" v-bind:title="item.updatedOnFormatted">&nbsp; ({{item.updatedOnAgo}})</span>
                                </div>
                              </div>
                              <div style="flex:1;" v-if="item.status!=='COMPLETED' && item.status!=='CANCELLED'">
                                {{index+1}}. {{item.activityName}}
                                <span style="color: #8080809c;display:none" v-if="item.stageName !== null" > [ Visible during stage - {{item.stageName}} ]</span>
                              </div>
                              <div style="flex: 1 1 0%;filter: brightness(1.75);" v-if="item.status==='CANCELLED'">
                                <div>
                                  {{index+1}}.
                                    <span style="text-decoration: xline-through red;">{{item.activityName}} </span>
                                    <span style="color: #8080809c;display:none" v-if="item.stageName !== null" > [ Visible during stage - {{item.stageName}} ]</span>
                                </div>
                                <div v-if="item.updatedBy !== null" style="padding-left:0px">
                                  <span style="color: rgb(101 101 101);font-size: 0.55rem;">
                                     Cancelled by {{item.updatedBy.split("#")[1]}}
                                  </span>
                                  <span v-if="item.updatedOn !== null" style="cursor: help;color: rgb(101 101 101);font-size: 0.55rem;" v-bind:title="item.updatedOnFormatted">&nbsp; ({{item.updatedOnAgo}})</span>
                                </div>
                              </div>

                              <div v-if="item.status==='COMPLETED'">
                                <span style="background: #59d059;color: white;padding:4px 10px;border-radius: 20px;font-size: 0.45rem;margin-left: 20px;letter-spacing: 1px;">COMPLETED</span>
                              </div>
                              <div v-if="item.status==='CANCELLED'">
                                <span style="filter: brightness(1.75);background: rgb(99 99 99);color: #929292;padding:4px 10px;border-radius: 20px;font-size: 0.45rem;margin-left: 20px;letter-spacing: 1px;">CANCELLED</span>
                              </div>
                              <div v-if="item.status!=='COMPLETED' && item.status!=='CANCELLED'">
                                <a uk-tooltip="pos:left;title:You cannot undo once you cancel the item" v-on:click="cancelChecklistItem(item)">Cancel Item</a>
                              </div>
                          </div>
                      </template>
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
  props: ['selectedTabKey', 'checklistItem', 'saveChecklistItem', 'checklistLabel', 'isChecklistsTabInitialized', 'taskObject', 'taskObjectBeforeChange', 'updateChecklistItemStatus', 'cancelChecklistItem'],
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
