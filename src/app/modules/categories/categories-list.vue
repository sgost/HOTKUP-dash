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
    padding: 20px 30px;
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
</style>

<template>

<div class="app_container" style="background-color: whitesmoke">
    <div class="desktop">

        <div class="adk_grid_toolbar" style="grid-template-columns: auto auto 1fr;">

            <div style="display: grid;place-self: center start;padding-right: 10px;">
                <div class="uk-button-group">
                    <div class="uk-inline">

                        <button v-on:click="goBack()"  class="uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column back-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z" style="fill: #5a5a5a;"></path></svg></button>

                    </div>
                </div>
            </div>
            <div style="display: grid;place-self: center start;text-align: left;">
                <div style="display: grid;place-self: center start;padding-left: 0px;padding-right: 20px;color: rgba(61, 61, 61, 0.78) !important;grid-template-columns: auto auto;font-size: 0.75rem;">
                   <span>
                    Admin Page <span uk-icon="icon:triangle-right;ratio:1"></span> Category ({{list.length}})
                   </span>
                </div>
            </div>
            <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
                <a  v-bind:href="'#/categories/new'" class=" uk-button uk-button-small uk-button-default ui_button_small_green ui_button_small"
                style="cursor: pointer;background: rgb(2 119 254);color: white !important;line-height: 32px !important;min-width: 125px;border: 0.05em solid rgb(131, 181, 50);border-radius: 3px;">
                      <span class="" style="margin-right: 5px!important;" uk-icon="icon:plus;ratio:0.45"></span>New Category
                </a>
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
            </div>

        </div>

        <div class="adk_grid_list" style="margin-top:10px">

            <div class="ui_grid_header adk_columns">
                <div>Name </div>
                <div>Status</div>
                <div>Created Date</div>
                <div>Email</div>
                <div style="text-align: center;">Options</div>
            </div>
            <div class="adk_grid_list_content custom-scroll-bar">
                <div style="padding: 7px 12px;border-bottom:0.05em solid #e5e5e5;display:grid"
                      v-bind:key="category.id"
                      v-for="category in list"
                      class="ui_grid_row adk_columns">
                    <div style="grid-template-columns: 1fr;">
                        <span style="cursor:pointer" v-on:click="editCategory(category.id)">&nbsp;&nbsp;{{category.name}}</span>
                    </div>
                    <div>
                      {{category.type}}
                    </div>
                    <div>{{category.createdOn}}</div>
                    <div>{{category.status}}</div>
                    <div style="display: grid;grid-template-columns: 1fr;">
                        <a v-on:click="modifyCategoryStatus(category.id, false)" class="uk-button uk-button-small uk-button-default conf_inactive ui_button_small" style="cursor: pointer; width:75%;">
                            <span class="" style="margin-right: 5px!important;" uk-icon="icon:lock;ratio:0.65"></span>DISABLE
                        </a>
                    </div>
                </div>

                <div id="isObserver" class="ui_grid_row" style="padding: 7px 12px;border-bottom: 0.0em solid rgb(229, 229, 229);display: grid;place-items: center;background: #ffffff;color: #9e9e9e;"><span v-show="allRecordsFetched">No more available records.</span></div>
            </div>
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
            api : "categories",
        };
    },
    methods: {

        goBack(){
            this.$router.push({
                name: 'admin-dashboard',
                params: {}
            });
        },
        editCategory(idParam){
            this.$router.push({
                name: 'edit-category',
                params: {
                  id : idParam
                }
            });
        },
        modifyCategoryStatus(idParam, shouldEnable){
            console.log("Category : " + idParam + (shouldEnable)?" will be enabled.":" will be disabled.");
        },
        updateFetchURL(){
            let searchQuery = (this.searchQuery!=="")? this.searchQuery: "all";
            this.url = "./" + this.api + "/list/" + this.pageNumber + "/" + searchQuery;
        },
        handleData(dataResponse){

            if (dataResponse.data["actionResult"] === 1) {

                let listOfCategories = (dataResponse.data["bean"]);//.slice(0, 10);

                // Since we are pulling 20 records per page, then if the resulting size is lesser than 20, then it means
                // no more records are available.
                if(listOfCategories.length <20)
                {
                  this.allRecordsFetched = true;
                }

                listOfCategories.forEach(category => {

                    if(category.createdOn !== null)
                    {
                        category.createdOn = new Date(category.createdOn).toLocaleString()
                                                                 .slice(0, 17)
                                                                 .replace(',', '')
                                                                 .replace('T',' ');
                    }

                    if(category.isOnline!==null && category.isOnline===1)
                    {
                        category.isOnline = "LIVE";
                    }

                    this.list.push(category);
                });

            }
            else {
                console.error("Error", dataResponse);
                //alert("Error : " + dataResponse)
            }
        },
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
