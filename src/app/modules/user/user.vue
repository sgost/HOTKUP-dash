<style scoped>

  .side-bar-light .uk-nav-sub>li.selected-menu>a {
      color: #333!important;
      font-weight: bold!important;
      font-size: .7rem;
  }



    .subtasks_box {
      display: grid;
      -moz-column-gap: 30px;
      column-gap: 30px;
      grid-template-columns: 1fr;
      border: 1px solid transparent;
      border-bottom: 0px;
    }

    .subtask_row {
      position: relative;
      padding: 5px 10px;
      display: grid;
      align-items: end;
      height: 30px;
      justify-items: start;
      grid-template-columns: 60px 5fr 2fr 2fr 2fr;
      -moz-column-gap: 20px;
      column-gap: 20px;
      border-bottom: 1px solid #f3f3f3;
      border-left: 5px solid transparent;
      background-color: rgb(255 255 255);
      font-size: 0.65rem;
    }

    .subtask_row:hover {
      border-left: 5px solid rgb(31 105 189);
    }

    .subtask_row > div {
      margin-bottom: 5px;
    }

    .depedencytask_row {
      position: relative;
      padding: 5px 10px;
      display: grid;
      align-items: end;
      height: 30px;
      justify-items: start;
      grid-template-columns: 60px 2fr 1fr 1fr 1fr;
      -moz-column-gap: 20px;
      column-gap: 20px;
      border-bottom: 1px solid #f3f3f3;
      border-left: 5px solid transparent;
      background-color: rgb(255 255 255);
      font-size: 0.65rem;
    }

    .depedencytask_row:hover {
      border-left: 5px solid transparent;
    }

    .depedencytask_row > div {
      margin-bottom: 5px;
    }
    .uk-nav-header {
    padding: 5px!important;
    text-transform: uppercase;
    font-size: .5rem;
    font-weight: 400;
    letter-spacing: 1px;
    background: #f3f3f3;
    margin: 10px 0;
   }
   .btn {
    background-color: rgb(0, 119, 255);
    border-radius: 3px;
    place-self: center;
    place-items: center;
    min-width: 100px;
    font-size: 0.65rem;
    line-height: 30px;
    font-weight: normal !important;
    border: none;
    outline: none;
    color: white;
    width: 100%;
    cursor: pointer;
}
</style>

<template>

  <div style="display: flex;flex-grow: 1;overflow-y: hidden;position: relative;" class="user-profile-panel">
    <div style="display: flex; height: 100%;">
      <div id="appSideMenuForMySettings" class="app-side-menu" style="xxflex-basis:10%;">
          <div vv-if="loggedInUser.isInformationFetchComplete" id="appSideMenuContent" class="app-side-menu-content">
            <div class="uk-offcanvas-bar0 custom-scroll-bar side-bar-light" style="flex-grow:1;padding-top:50px">
                <ul class="uk-nav uk-nav-default">
                  <button class="btn" v-on:click="loadMySettingsMenu('admin_dashboard')">ADMIN DASHBOARD</button>
                <li v-if="hasAdminRoles" class="menu-item" style="margin-top:20px">
                      <hr>
                    </li>
                  <li class="uk-nav-header">SYSTEM SETTINGS</li>
                    <li class="menu-item uk-active selected-menu" id="rtasks_settings_menu" >
                      <a v-on:click="loadMySettingsMenu('rtasks_settings_menu')" uk-tooltip="title:Admin;pos:right">
                        Users
                      </a>
                    </li>
                    <li class="menu-item" id="ui_group_menu">
                      <a v-on:click="loadMySettingsMenu('ui_group_menu')" uk-tooltip="title:Groups;pos:right">
                        Groups
                      </a>
                    </li>

                    <!--
                    <li class="menu-item" id="draft_tasks_menu">
                      <a v-on:click="loadMySettingsMenu('draft','draft_tasks_menu', 'Drafted Tasks')">
                        <span class="lnr lnr-file-empty"></span>&nbsp;&nbsp;Drafts
                        <span class="counter-label" id="drafts_count"></span>
                      </a>
                    </li>-->
                    <li class="uk-nav-header">TASK SETTINGS</li>
                    <li class="menu-item" id="task_menu" >
                      <a v-on:click="loadMySettingsMenu('task_menu')" uk-tooltip="title:Default Task Stages;pos:right">
                       Default Task Stages
                      </a>
                    </li>
                    <li class="menu-item" id="categories_menu_item">
                      <a v-on:click="loadMySettingsMenu('categories_menu_item')"  uk-tooltip="title:Categories;pos:right">
                       Categories
                      </a>
                    </li>
                    <li class="menu-item" id="work_groups">
                      <a v-on:click="loadMySettingsMenu('work_groups')"  uk-tooltip="title:Workgroups;pos:right">
                       Workgroups
                      </a>
                    </li>
                    <li class="menu-item" id="categories_menu_forms">
                      <a v-on:click="loadMySettingsMenu('categories_menu_forms')"  uk-tooltip="title:Forms;pos:right">
                       Forms
                      </a>
                    </li>
                    <li class="menu-item" id="tabular_forms">
                      <a v-on:click="loadMySettingsMenu('tabular_forms')"  uk-tooltip="title:Tabular Forms;pos:right">
                       Tabular Forms
                      </a>
                    </li>
                     <li class="menu-item" id="chat_settings_menu">
                      <a v-on:click="loadMySettingsMenu('chat_settings_menu')"  uk-tooltip="title:Global Entities ?;pos:right">
                      Global Entities ?
                      </a>
                    </li>

                </ul>
            </div>
          </div>
      </div>

    </div>
    <div style="display: flex;width: 100%;flex-grow: 1;">
        <div style="margin:13px 13px 0px 13px;display: flex;width: 100%;flex-grow: 1;">
            <div v-if="chosenView === 'admin_dashboard'" style="display: flex;width: 100%;flex-direction: column;">
              <AdminDashboard/>
            </div>
            <div v-if="chosenView === 'ui_group_menu'" style="display: flex;width: 100%;flex-direction: column;">
                <GroupListPane/>
            </div>
            <div v-if="chosenView === 'rtasks_settings_menu'" style="display: flex;width: 100%;flex-direction: column;">
                <UserList/>
            </div>
            <div v-else-if="chosenView === 'task_menu'" style="display: flex;width: 100%;flex-direction: column;">
              <StatuseList/>
            </div>
            <div v-else-if="chosenView === 'categories_menu_item'" style="display: flex;width: 100%;flex-direction: column;">
              <CatogeryListPane/>
            </div>
            <div v-else-if="chosenView === 'tabular_forms'" style="display: flex;width: 100%;flex-direction: column;">
              <TabularList/>
            </div>
            <div v-else-if="chosenView === 'work_groups'" style="display: flex;width: 100%;flex-direction: column;">
              <WorkGroupList/>
            </div>
            <div v-else-if="chosenView === 'categories_menu_forms'" style="display: flex;width: 100%;flex-direction: column;">
              <FormList/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

  import { Vue } from 'vue';
  import { bus } from './../../../main.js';
  import uiListMixinLib from './../../mixins/lib/ui-list.js';
  import userMixinLib from './../../mixins/lib/user_mixin_lib.js';
  import * as Comlink from 'comlink';

  export default {
  mixins: [uiListMixinLib, userMixinLib],
  props: ['loggedInUser'],
  data: function () {
    return {
      hasAdminRoles: false,
      chosenView: 'rtasks_settings_menu',
      recurringTasks: new Set()
    };
  },
  methods: {

    loadMySettingsMenu (viewKey) {

      this.chosenView = viewKey;

      document.querySelectorAll('#appSideMenuForMySettings .menu-item').forEach((el) => {
          el.classList.remove('uk-active');
          el.classList.remove('selected-menu');
        }
      );
      document.querySelector('#' + viewKey).classList.add('selected-menu');
      document.querySelector('#' + viewKey).classList.add('uk-active');

    },
    fetchRecurringTasks () {

      const url = './recurring-tasks/list/all';
      try
      {
        // VueJS ajax call-1
        axios.get(process.env.VUE_APP_API_URL + url)
          .then((dataResponse) => {
            console.log('Notification List: ', dataResponse);
            const list = dataResponse.data.bean;

            this.recurringTasks = [];

            list.forEach(task => {

              if (task.createdOn !== null) {
                // task.dueDateTime = new Date(task.dueDateTime).toLocaleString()
                //                                          .slice(0, 17)
                //                                          .replace(',', '')
                //                                          .replace('T',' ');

                // Added during "Fix-Date-UTC-Update"
                // task.dueDateTime = new Date(task.dueDateTime + " UTC").toLocaleString();
                // task.dueDateTime = this.convertUTCDateFromServerToLocalDate(task.dueDateTime);
                task.createdOnFormatted = "";
                task.createdOnFormatted = dayjs(task.createdOn + "Z").format('DD/MM/YYYY HH:mm');
                // task.dueDateTimeAgo = dayjs(task.dueDateTime + "Z").fromNow();
              }

              if (task.nextFireTime !== null) {
                // task.dueDateTime = new Date(task.dueDateTime).toLocaleString()
                //                                          .slice(0, 17)
                //                                          .replace(',', '')
                //                                          .replace('T',' ');

                // Added during "Fix-Date-UTC-Update"
                // task.dueDateTime = new Date(task.dueDateTime + " UTC").toLocaleString();
                // task.dueDateTime = this.convertUTCDateFromServerToLocalDate(task.dueDateTime);
                task.nextFireTimeFormatted = "";
                task.nextFireTimeAgo = "";

                task.nextFireTimeFormatted = dayjs(task.nextFireTime + "Z").format('DD/MM/YYYY HH:mm');
                task.nextFireTimeAgo = dayjs(task.nextFireTime + "Z").fromNow();
              }

              this.recurringTasks.push(task);

            });

          })
          .catch((error) => {
            console.error('fetchNotifications Error : ', error);
          });
      } catch (error) {
        console.error('Unpaginated List data fetch error : ', error);
      }
    },
    viewTask (taskId) {

      bus.emit('viewRTaskEvent', {
        rTaskId: taskId,
        modalKey: "view_rtask"
      });
      return false;
    },
    updateRTaskState (taskId, state, actionLabel) {

      const post_url = './recurring-tasks/state-change';

      const form = {
        taskId: taskId,
        state: state
      };

      // VueJS ajax call-1
      axios.post(process.env.VUE_APP_API_URL + post_url, form)
        .then((dataResponse) => {

            console.log(dataResponse);
            const updatedRTask = {};

            let index = 0;
            let matchingIndex = -1;
            let matchingRTask = {};
            this.recurringTasks
                .forEach(rTask => {

                  if (rTask.id === taskId)
                  {
                    matchingIndex = index;
                    matchingRTask = rTask;
                  }
                  index++;
                });

            if (dataResponse.data.status === "success" && state === "ENABLE") {
              matchingRTask.state = "ENABLED";
            }
            else if (dataResponse.data.status === "success" && state === "DISABLE") {
              matchingRTask.state = "DISABLED";
            }
            else if (dataResponse.data.status === "success" && state === "CANCEL") {
              matchingRTask.state = "CANCELLED";
            }
            else {
              console.log("ELSE BLOCK");
            }

            const matchingRTaskClone = JSON.parse(JSON.stringify(matchingRTask));
            this.recurringTasks[matchingIndex] = matchingRTaskClone;
            console.log('\t replaced at index : ', matchingIndex, matchingRTaskClone);

            const notificationLabel = `Recurring Task Template was ${actionLabel}.`;
            UIkit.notification(`<div class="taskone-notification">
                                                <span uk-icon="icon: check;ratio:1"></span>
                                                <div> ${notificationLabel} </div>
                                            </div>`, {
              status: 'success',
              pos: 'bottom-left',
              timeout: 5000
            });
        })
        .catch(function (errorResponse) {
          console.log('ERROR MS - ', errorResponse);
          const exceptionMsg = errorResponse.response.data.exception;

          UIkit.notification("<span uk-icon='icon: warning ;ratio:1'></span> " + exceptionMsg + '.', {
            status: 'danger',
            pos: 'bottom-left',
            timeout: 5000
          });

          return false;
        });
    },
    enableRTask (taskId) {
      this.updateRTaskState(taskId, "ENABLE", "enabled");
    },
    disableRTask (taskId) {
      this.updateRTaskState(taskId, "DISABLE", "disabled");
    },
    cancelRTask (taskId) {
      this.updateRTaskState(taskId, "CANCEL", "cancelled");
    },
    confirmRTaskCancellation (taskId) {

    }
  },
  created: function () {},
  computed: {
    storeCounter: function () {
      // console.log('Accessing vuex store ', this.$store)
      // console.log('Store data accessed from home page : ' + this.$store.getters.count)
    }
  },
  mounted: function () {
    // bus.on('new-notification', (data) => this.updateNotificationsList(data));
    console.log('Fetching user settings from browser..');

      const encodedSPR = this.getCookie('spr');
      const decodedSPR = decodeURIComponent(encodedSPR);
      this.showMenu1 = decodedSPR === 'jvsb$kdwbj$matiu';
      this.hasAdminRoles = decodedSPR === 'jvsb$matiu';

      this.fetchRecurringTasks();
    // If localstorage theme doesn't exist, then pull it from the server.
    // if (localStorage.getItem("preferredTheme") === null) {
    //   this.refreshSettings();
    // }
    // else {
    //   this.getUserSettingsStoredInBrowser();
    // }
  },
  watch: {
  }
};

</script>
