<style scoped>
  .uk-dropdown-nav {
      font-size: .975rem;
  }

  .desktop{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 1fr;
    overflow-y: hidden;
    border: 0px solid red;
    padding: 15px 15px 15px 7.5px;
  }

  .adk_columns{
  	display: grid;
  	grid-template-columns: 5fr 2fr 2fr 3fr 2fr;
  }

  .back-button {
    background-color: rgb(226 226 226);
    border-radius: 50%;
    place-self: center start;
    place-items: center;
    font-size: 0.65rem;
    line-height: 32px;
    font-weight: normal !important;
    padding: 0px 7px;
    fill: green;
    transition: 0.25s linear;
  }

  .back-button:hover {
      background-color: rgb(212 212 212);
  }

  .pane-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    background-color: #fff;
    xbox-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    /* border: 0.01em solid #dadada; */
    overflow-y: hidden;
    border-radius: 3px;
  }

  .list-row {
    display: grid;
    height: 55px;
    grid-template-rows: auto auto auto;
    margin-right: 10px;
    border: .05em solid #e5e5e5;
    border-left: .05em solid #e5e5e5;
    background: #fff;
    border-radius: 5px;
  }

  .list-row.active {
    border-left: 5px solid #0077ff;
  }

  .list-row:hover {
    background: whitesmoke;
  }

  .list-row .task-sno {
    font-size: 0.75rem;
    font-weight: bold;
    font-family: Muli, sans-serif !important;
  }

  .list-row .task-created-date {
    background: #f3d889;
    padding: 2px 5px;
    border-radius: 3px;
  }

  .list-row .task-status {
    font-weight: bold;
    font-size: 0.5rem;
  }

  .pane-detail-view{
    display: grid;
    grid-template-rows: 1fr;
  }
</style>

<template>

<div class="app_container" style="background-color: whitesmoke;grid-template-columns:1.5fr 3fr; height: 100%">
    <div class="desktop pane_list_view" style="padding: 15px 15px 15px 15px; overflow-y: hidden; display: grid; background: rgb(242, 242, 242); color: rgb(51, 51, 51);">

        <div class="adk_grid_toolbar" style="grid-template-columns: auto 1fr;margin-right: 10px;">

            <div style="display: grid;place-self: center start;text-align: left;">
                <div style="display: grid;place-self: center start;padding-left: 0px;padding-right: 20px;color: rgba(61, 61, 61, 0.78) !important;grid-template-columns: auto auto;font-size: 0.75rem;">
                   <span style="font-size: 1rem; font-weight: bold;letter-spacing:0.5px">
                    Tabular Forms ({{list.length}})
                   </span>
                </div>
            </div>
            <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
                <div class="uk-inline">
                      <div class="uk-inline">
                           <span class="uk-form-icon" uk-icon="icon: search;ratio:0.65"></span>
                           <input class="uk-input uk-form-width-medium uk-form-small" style="border: 0.1em solid rgb(173, 173, 173);border-radius: 2px;height: 35px;width: 100%;" type="text"
                           v-model="searchQuery"
                           placeholder="Search.."
                           v-on:keyup.enter.stop="getSearchList()"
                           >
                      </div>
                </div>
                <a uk-tooltip="Add New TenantUser" v-on:click="newItem()" class=" uk-button uk-button-small uk-button-default ui_button_small_green ui_button_small"
                style="cursor: pointer;background: rgb(2 119 254);color: white !important;line-height: 35px !important;min-width: 60px;border: 0em solid rgb(131, 181, 50);border-radius: 3px;">
                      <span class="" style="margin-right: 5px!important;" uk-icon="icon:plus;ratio:0.45"></span>New
                </a>
            </div>

        </div>

        <div class="pane-list" style="margin-top: 10px;background-color:#f2f2f2">

            <div class="adk_grid_list_content custom-scroll-bar" style="display:grid;row-gap:7.5px">
                <div  v-bind:key="item.id"
                      v-on:click="showDetails(item.id, index)"
                      v-bind:id="'item_' + item.id"
                      v-for="item,index in list"
                      class="ui_grid_row list-row"
                      style="padding: 7px 12px; display: grid;">

                    <div class="list-item-row-1" style="display:flex;column-gap:5px">
                      <div class="task-sno">
                        {{item.name}}
                      </div>
                      <div style="display:flex;column-gap:5px">
                        <span style="color:gray"> </span>
                        <span style="font-size: 0.6rem;"></span>
                      </div>
                      <div style="display:flex;column-gap:10px;margin-left:auto">
                      </div>
                      <div>
                        <span uk-icon="icon:more-vertical;ratio:0.75"></span>
                      </div>
                    </div>
                    <div class="list-item-row-3">
                      <div style="display:flex;column-gap:10px">
                        <div class="task-created-date" style="font-size: 0.65rem;">{{item.createdOn}}</div>
                        <div v-if="item.status==='ACTIVE'" class="task-status" style="align-self: center;text-transform: uppercase;background: rgb(76, 175, 80);padding: 4px 10px;border-radius: 3px;letter-spacing: 0.075rem;font-weight: normal;font-size: 0.45rem;color: white;">{{item.status}}</div>
                        <div v-else-if="item.status==='SUSPENDED'" class="task-status" style="align-self: center;text-transform: uppercase;background: #757575;padding: 4px 10px;border-radius: 3px;letter-spacing: 0.075rem;font-weight: normal;font-size: 0.45rem;color: white;" >{{item.status}}</div>
                        <div style="display:flex;column-gap:10px;color: gray;font-size: .5rem;align-self: flex-end;">
                            <div>{{item.contactName}}</div>
                            <div>{{item.contactEmail}}</div>
                        </div>
                      </div>
                    </div>

                </div>

                <div id="isObserver" class="ui_grid_row" style="padding: 7px 12px;border-bottom: 0.0em solid rgb(229, 229, 229);display: grid;place-items: center;background: #ffffff;color: #9e9e9e;margin-right:10px"><span v-show="allRecordsFetched">No more available records.</span></div>
            </div>
        </div>
    </div>

    <div class="pane-detail-view" style=";overflow-y:hidden">

        <div v-show="!isUserChosen" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
            <div v-show="!displayNewForm" style="display:grid;place-items:center;background: #fbfbfb">
                No Tabular Form chosen.
            </div>
            <div v-show="displayNewForm" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
                <new-tabular-form-maker v-on:refreshList="refreshPaneList()" v-bind:resetTime="resetTime"/>
            </div>
        </div>
        <div v-show="isUserChosen" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
            <edit-tabular-form-maker v-bind:id="selectedUser.id" v-on:refreshList="refreshPaneList()"/>
        </div>
    </div>
</div>

</template>

<script>

import uiListMixinLib                   from './../../mixins/lib/ui-list.js';
//import {bus}                            from './../../config_admin.js';

export default {
    mixins : [uiListMixinLib],
    props: [],
    data: function() {
        return {
            appName: this.$route.params.app_name,
            api : "task-tabular-form-templates",
            displayNewForm : false,
            isUserChosen: false,
            selectedUser: {},
            resetTime : {
                time : new Date().getTime()
            }
        };
    },
    methods: {

        goBack(){
            this.$router.push({
                name: 'admin-dashboard',
                params: {}
            });
        },
        newItem(){

          // This prop is passed to the new-form component, so that the watcher in it resets the form whenever this value changes.
          // Reason : Since the new-form component is alive, any data entered into it stays on the form until its reset.
          // Since we cannot pass events from parent to child to reset the data of the newFormObject={}, without using event-bus,
          // we are just changing the value of a prop, that can be watched everytime when the "New" button is clicked. The watcher resets the newFormObject={}
          // whenever there is a change in this prop's value.
          this.resetTime = {
              time : new Date().getTime()
          }
          this.isUserChosen = false;
          this.displayNewForm = true;
          this.selectedUser = {};
        },
        showDetails(itemId, idx) {
          // Toggle the active state of the list-item
          document.querySelectorAll('.active').forEach(item => item.classList.remove('active'))
          document.querySelector('#' + 'item_' + itemId).classList.add('active')

          this.displayNewForm = false;
          this.selectedUser = {id:itemId};
          this.isUserChosen = true;
        },
        editTenantUser(idParam){
            this.$router.push({
                name: 'edit-tenantUser',
                params: {
                  id : idParam
                }
            });
        },
        modifyTenantUserStatus(idParam, shouldEnable){
            console.log("TenantUser : " + idParam + (shouldEnable)?" will be enabled.":" will be disabled.");
        },
        updateFetchURL(){
            let searchQuery = (this.searchQuery!=="")? this.searchQuery: "all";
            //this.url = "./" + this.api + "/list/" + this.pageNumber + "/" + searchQuery;
            this.url = "./task-tabular-form-templates/list/" + this.pageNumber + "/" + searchQuery; // + userID;

        },
        handleData(dataResponse){

            if (dataResponse.data["actionResult"] === 1) {

                let listOfTenantUsers = (dataResponse.data["bean"]);//.slice(0, 10);

                // Since we are pulling 20 records per page, then if the resulting size is lesser than 20, then it means
                // no more records are available.
                if(listOfTenantUsers.length <20)
                {
                  this.allRecordsFetched = true;
                }

                listOfTenantUsers.forEach(tenantUser => {

                    if(tenantUser.createdOn !== null)
                    {
                        tenantUser.createdOn = new Date(tenantUser.createdOn).toLocaleString()
                                                                 .slice(0, 17)
                                                                 .replace(',', '')
                                                                 .replace('T',' ');
                    }

                    if(tenantUser.isOnline!==null && tenantUser.isOnline===1)
                    {
                        tenantUser.isOnline = "LIVE";
                    }

                    this.list.push(tenantUser);
                });

            }
            else {
                console.error("Error", dataResponse);
                //alert("Error : " + dataResponse)
            }
        },
        refreshPaneList(){
          console.log("Refresh pane list");
          this.resetRefreshList();
        }
    },
    created: function() {

    },
    mounted: function() {
        this.updateFetchURL();
        this.getList(); // Call to the /mixins/lib/ui-list.js mixin-file which makes a callback to handleData() method in this component.
    },
    watch: {

        // https://router.vuejs.org/en/advanced/data-fetching.html for more options.
        /*
            // call again the method if the route changes
            '$route': 'fetchData' where fetchData is a method defined above.
        */

        '$route.params.app_name' (newAppName, oldAppName) {

            console.log("oldAppName",oldAppName);
            //console.log('AppName changed from ' + oldAppName + ' to ' + newAppName);
            this.appName = newAppName;
        }


    }
}

</script>
