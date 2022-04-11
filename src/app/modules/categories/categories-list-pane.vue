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

  .context-menu{
    position: fixed;
    opacity:0;
    transition:0.15s linear;
    transform-origin:top right;
    transform:scale(0);
    pointer-events:none;
    width: 200px;
    max-height: 150px;
    font-size: 0.8rem;
    padding: 9px 0px;
    z-index: 10;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px 0px, rgba(0, 0, 0, 0.16) 0px 2px 10px 0px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
  }

  .context-menu.is-open{
    opacity:1;
    transform:scale(1);
    pointer-events:all;
  }

  .context-menu div div{
    cursor:pointer;
    padding:5px 15px !important;
  }

  .context-menu div div:hover{
    background-color:#fbfbfb;
    padding:5px 15px !important;
  }

  .contextMenuTrigger{
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
    line-height: 0;
    transform: scale(0.9) rotate(90deg);
  }

  .contextMenuTrigger:hover{
    background: #e4e4e4;
    transition:0.15s linear;
    transform: scale(0.9) rotate(0deg);
  }

  .contextMenuTrigger:active{
    background: #e4e4e4;
    transform:scale(0.75);
  }

  .contextMenuTrigger > svg{
    pointer-events:none;
  }

  .category_item .category_row{
    pointer-events:none;
  }
</style>

<template>

<div class="app_container" style="background-color: whitesmoke;grid-template-columns:2fr 5fr">
    <div class="desktop pane_list_view" style="padding: 15px 15px 15px 15px; overflow-y: hidden; display: grid; background: rgb(242, 242, 242); color: rgb(51, 51, 51);">

        <div class="adk_grid_toolbar" style="grid-template-columns: auto 1fr;margin-right: 10px;">

            <div style="display: grid;place-self: center start;text-align: left;">
                <div style="display: grid;place-self: center start;padding-left: 0px;padding-right: 20px;color: rgba(61, 61, 61, 0.78) !important;grid-template-columns: auto auto;font-size: 0.75rem;">
                   <span style="font-size: 1rem; font-weight: bold;letter-spacing:0.5px">
                    Categories ({{list.length}})
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
                <a uk-tooltip="Add New Category" v-on:click="newItem()" class=" uk-button uk-button-small uk-button-default ui_button_small_green ui_button_small"
                style="cursor: pointer;background: rgb(2 119 254);color: white !important;line-height: 35px !important;min-width: 60px;border: 0em solid rgb(131, 181, 50);border-radius: 3px;">
                      <span class="" style="margin-right: 5px!important;" uk-icon="icon:plus;ratio:0.45"></span>New
                </a>
            </div>

        </div>

        <div class="pane-list"
              v-on:mousedown="closeCategoryItemContextMenu($event)"
              v-on:click="handleClickEvents($event)"
              style="margin-top: 10px;background-color:#f2f2f2;position:relative">

            <div class="context-menu">
                <div style="display:flex;flex-direction:column;">
                  <div style="padding:5px;" class="context-menu-action-1">Make it default category</div>
                  <div style="padding:5px;" class="context-menu-action-2" v-if="clickedCategoryStatus !== null && clickedCategoryStatus === 'INACTIVE'">Enable Category</div>
                  <div style="padding:5px;" class="context-menu-action-3" v-if="clickedCategoryStatus !== null && clickedCategoryStatus === 'ACTIVE'">Disable Category</div>
                </div>
            </div>

            <div class="adk_grid_list_content custom-scroll-bar" style="display:grid;row-gap:7.5px">
                <div  v-bind:key="item.id"
                      v-bind:data-item-id="item.id"
                      v-bind:data-item-index="index"
                      v-bind:data-item-name="item.name"
                      v-bind:data-item-status="item.status"
                      xv-on:click="showDetails(item.id, index)"
                      v-bind:id="'item_' + item.id"
                      v-for="item,index in list"
                      class="ui_grid_row list-row category_item"
                      style="padding: 7px 12px; display: grid;position:relative">


                    <div style="position:absolute;right:15px;top:15px;z-index:2;">
                      <span class="contextMenuTrigger" uk-icon="icon:more-vertical;ratio:0.75"></span>
                    </div>

                    <div class="list-item-row-1 category_row" style="display:flex;column-gap:5px">
                      <div class="task-sno" style="display: flex;">
                        {{item.name}} <span v-if="item.isDefaultCategory === 'Yes'" style="color:green;padding-left:10px">(Default)</span>
                      </div>
                      <div style="display:flex;column-gap:5px">
                        <span style="color:gray"> </span>
                        <span style="font-size: 0.6rem;"></span>
                      </div>
                      <div style="display:flex;column-gap:10px;margin-left:auto">
                      </div>
                    </div>
                    <div class="list-item-row-3 category_row">
                      <div style="display:flex;column-gap:10px">
                        <div class="task-created-date">{{item.type}}</div>
                        
                        <div class="task-status" style="align-self: flex-end;" v-if="item.status==='ACTIVE'">{{item.status}}</div>
                        <div class="task-status" style="align-self: flex-end;background: #e20070;color: white;padding: 2px 5px;border-radius: 3px;" v-else-if="item.status==='INACTIVE'">{{item.status}}</div>

                        <div style="display:flex;column-gap:10px;color: gray;font-size: .5rem;align-self: flex-end;">
                          <div>{{item.memberIds.length}} Members,</div>
                          <div>{{item.adminIds.length}} Admins</div>
                        </div>
                      </div>
                    </div>

                </div>

                <div id="isObserver" class="ui_grid_row" style="padding: 7px 12px;border-bottom: 0.0em solid rgb(229, 229, 229);display: grid;place-items: center;background: #ffffff;color: #9e9e9e;margin-right:10px"><span v-show="allRecordsFetched">No more available records.</span></div>
            </div>
        </div>
    </div>

    <div class="pane-detail-view" style=";overflow-y:hidden">

        <div v-show="!isCategoryChosen && !displayNewForm" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
            <div style="display:grid;place-items:center;background: #fbfbfb">
                No Category chosen.
            </div>
        </div>
        <div v-show="!isCategoryChosen && displayNewForm" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
            <div style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
                <new-category-form v-on:refreshList="refreshPaneList()" v-bind:resetTime="resetTime"/>
            </div>
        </div>
        <div v-show="isCategoryChosen" style="display:grid;grid-template-rows:1fr;overflow-y:hidden">
                <edit-category-form v-bind:id="selectedCategory.id" v-on:refreshList="refreshPaneList()"/>
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
            displayNewForm : false,
            isCategoryChosen: false,
            selectedCategory: {},
            resetTime : {
                time : new Date().getTime()
            },
            clickedCategoryId: null,
            clickedCategoryIndex : null,
            clickedCategoryName : null,
            clickedCategoryStatus : null
        };
    },
    methods: {
        handleClickEvents(event){
          console.log(event.target);
          console.log(event.target.classList);



          // alert(event.target.classList.contains("contextMenuTrigger"));
          // alert(event.target.classList.contains("category_item"));
          // alert(event.target.classList.contains("context-menu-action-1"));
          // alert(event.target.classList.contains("context-menu-action-2"));
          // alert(event.target.classList.contains("context-menu-action-3"));

          if(event.target.classList.contains("contextMenuTrigger")){
            this.clickedCategoryId = event.target.closest(".category_item").getAttribute("data-item-id");
            this.clickedCategoryName = event.target.closest(".category_item").getAttribute("data-item-name");
            this.clickedCategoryStatus = event.target.closest(".category_item").getAttribute("data-item-status");
            this.clickedCategoryIndex = parseInt(event.target.closest(".category_item").getAttribute("data-item-index"));
            this.openCategoryItemContextMenu(event);
          }
          else if(event.target.classList.contains("category_item")){

            this.clickedCategoryId = event.target.getAttribute("data-item-id");
            this.clickedCategoryName = event.target.closest(".category_item").getAttribute("data-item-name");
            this.clickedCategoryStatus = event.target.closest(".category_item").getAttribute("data-item-status");
            this.clickedCategoryIndex = parseInt(event.target.getAttribute("data-item-index"));
            this.showDetails(this.clickedCategoryId, this.clickedCategoryIndex);
          }
          else if(event.target.classList.contains("context-menu-action-1")){
            let clickedCategoryId = this.clickedCategoryId;
            let clickedCategoryIndex = this.clickedCategoryIndex;
            let clickedCategoryName = this.clickedCategoryName;

            // Close the context-menu
            let openedContextMenu = event.target.closest(".pane-list").querySelector(".context-menu.is-open");
            console.log("opened context menu : ", openedContextMenu);
            if(openedContextMenu !== null && openedContextMenu.classList.contains("is-open")){
              openedContextMenu.classList.remove("is-open");
            }

            // Send to the server
            if(clickedCategoryId !== null){
              this.setDefaultCategory(clickedCategoryId, clickedCategoryName);
            }
          }
          else if(event.target.classList.contains("context-menu-action-2") || event.target.classList.contains("context-menu-action-3")){

            let clickedCategoryId = this.clickedCategoryId;
            let clickedCategoryIndex = this.clickedCategoryIndex;
            let clickedCategoryName = this.clickedCategoryName;
            let clickedCategoryStatus = this.clickedCategoryStatus;

            // Close the context-menu
            let openedContextMenu = event.target.closest(".pane-list").querySelector(".context-menu.is-open");
            console.log("opened context menu : ", openedContextMenu);
            if(openedContextMenu !== null && openedContextMenu.classList.contains("is-open")){
              openedContextMenu.classList.remove("is-open");
            }


            // Send to the server
            if(clickedCategoryId !== null){
              this.modifyCategoryStatus(clickedCategoryId, clickedCategoryStatus === "ACTIVE" ? true : false, clickedCategoryName); // true means "disable category", else "enable it"
            }
          }

        },
        closeCategoryItemContextMenu(event){
          console.log("inside close context menu", event);

          // If the mousedown happened on the context-menu item, then don't close the menu.
          if(event.target.classList.contains("context-menu-action-1") ||
             event.target.classList.contains("context-menu-action-2") ||
             event.target.classList.contains("context-menu-action-3")){
            return false;
          }

          let openedContextMenu = event.target.closest(".pane-list").querySelector(".context-menu.is-open");
          console.log("opened context menu : ", openedContextMenu);
          if(openedContextMenu !== null && openedContextMenu.classList.contains("is-open")){
            openedContextMenu.classList.remove("is-open");
            return false;
          }
        },
        openCategoryItemContextMenu(event){

          // If target is other than the context-menu trigger, then ignore it.
          if(!event.target.classList.contains("contextMenuTrigger"))
          {
            this.closeCategoryItemContextMenu(event);
            return false;
          }

          //this.closeCategoryItemContextMenu(event);

          event.stopPropagation();
          event.preventDefault();

          let target = event.target;
          console.log(event);
          let contextMenu = event.target.closest(".pane-list").querySelector(".context-menu");

          // if(contextMenu.classList.contains("is-open")){
          //   contextMenu.classList.remove("is-open");
          //   return false;
          // }

          let position = {
            x : event.clientX, // - contextMenu.getBoundingClientRect().width,
            y : event.clientY + 10
          };

          contextMenu.style.left = position.x - 200 + "px";
          contextMenu.style.top  = position.y + "px";

          if(!contextMenu.classList.contains("is-open"))
          {
            setTimeout(()=>{
              contextMenu.classList.add("is-open");
            }, 50);
          }

        },

        setDefaultCategory(categoryId, categoryName){

            const post_url = './categories/update-default-category';

            const form = {
              id: categoryId,
            };

            // VueJS ajax call-1
            axios.post(post_url, form)
              .then((dataResponse) => {
                console.log('Category set as default : ', dataResponse);

                if (dataResponse.data.actionResult === 1) {

                  UIkit.notification(`<div class="taskone-notification">
                                                      <span uk-icon="icon: check;ratio:1"></span>
                                                      <div>${categoryName} is set as default category.</div>
                                                  </div>`, {
                    status: 'success',
                    pos: 'bottom-left',
                    timeout: 5000
                  });

                  this.refreshPaneList();
                }
                else {
                  const errorMsg = (dataResponse.data).message;
                  UIkit.notification("<span uk-icon='icon: warning;ratio:1'></span>" + errorMsg, {
                    status: 'danger',
                    pos: 'bottom-left',
                    timeout: 5000
                  });
                  return false;
                }
              })
              .catch(function (errorResponse) {
                console.log('ERROR MS - ', errorResponse);
                const exceptionMsg = errorResponse.data.exception;

                UIkit.notification("<span uk-icon='icon: warning ;ratio:1'></span> " + exceptionMsg + '.', {
                  status: 'danger',
                  pos: 'bottom-left',
                  timeout: 500000
                });
                return false;
              });

        },

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
          this.isCategoryChosen = false;
          this.displayNewForm = true;
          this.selectedCategory = {};
        },
        showDetails(itemId, idx) {
          // Toggle the active state of the list-item
          document.querySelectorAll('.active').forEach(item => item.classList.remove('active'))
          document.querySelector('#' + 'item_' + itemId).classList.add('active')

          this.displayNewForm = false;
          this.selectedCategory = {id:itemId};
          this.isCategoryChosen = true;
        },
        editCategory(idParam){
            this.$router.push({
                name: 'edit-category',
                params: {
                  id : idParam
                }
            });
        },
        modifyCategoryStatus(idParam, shouldDisable, categoryName){
            console.log("Category : " + idParam + (shouldDisable)?" will be enabled.":" will be disabled.");



            const post_url = './categories/update-category-status/';

            const form = {
              id: idParam,
              status: shouldDisable ? "INACTIVE" : "ACTIVE"
            };



            // VueJS ajax call-1
            axios.post(post_url, form)
              .then((dataResponse) => {
                console.log('Category status set result : ', dataResponse);

                if (dataResponse.data.actionResult === 1) {

                  UIkit.notification(`<div class="taskone-notification">
                                                      <span uk-icon="icon: check;ratio:1"></span>
                                                      <div>${categoryName} is ${shouldDisable? "disabled" : "enabled"}.</div>
                                                  </div>`, {
                    status: 'success',
                    pos: 'bottom-left',
                    timeout: 5000
                  });

                  this.refreshPaneList();
                }
                else {
                  const errorMsg = (dataResponse.data).message;
                  UIkit.notification("<span uk-icon='icon: warning;ratio:1'></span>" + errorMsg, {
                    status: 'danger',
                    pos: 'bottom-left',
                    timeout: 5000
                  });
                  return false;
                }
              })
              .catch(function (errorResponse) {
                console.log('ERROR MS - ', errorResponse);
                const exceptionMsg = errorResponse.data.exception;

                UIkit.notification("<span uk-icon='icon: warning ;ratio:1'></span> " + exceptionMsg + '.', {
                  status: 'danger',
                  pos: 'bottom-left',
                  timeout: 500000
                });
                return false;
              });
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
