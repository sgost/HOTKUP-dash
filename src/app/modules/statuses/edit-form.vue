<style scoped>
  .uk-dropdown-nav {
      font-size: .975rem;
  }



  .uk-input, .uk-select:not([multiple]):not([size]) {
      height: 35px;
      vertical-align: middle;
      display: inline-block;
  }

  .uk-grid-small > div{
    margin-bottom:0px;
  }

  .uk-form-label {
      font-size: .56rem;
      text-transform: uppercase;
      letter-spacing: 1px;
  }

</style>


<template>

    <div style="font-size: 0.7rem;background: #fbfbfb;;display:grid;grid-template-columns:1fr;width:100%;place-items:start center;overflow-y:overlay" class="custom-scroll-bar">



      <div class="stage" style="display: grid;place-items: stretch;grid-template-rows: 40px 1fr;padding: 15px;overflow-y: hidden;color: rgb(51, 51, 51);">

          <div class="adk_grid_toolbar" style="grid-template-columns:auto 1fr;margin-right: 50px;margin-left: 50px;border-bottom: 1px solid #e0e0e0;">

              <div style="display: grid;place-self: center start;text-align: left;">
                  <div style="display:grid;place-self:center start;padding-left:0px;padding-right:20px;color:rgba(61, 61, 61, 0.78) !important;grid-template-columns:auto auto;font-size: 1rem;line-height: 35px;">
                     <span style="font-size: 1rem; font-weight: bold;letter-spacing:0.5px">
                      Edit Stage
                     </span>
                  </div>
              </div>
              <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
              </div>
          </div>

          <div class="" style="padding-top: 30px;padding-left: 50px;padding-right: 50px;">

              <form autocomplete="off" class="uk-grid-small uk-grid" uk-grid onsubmit="return false;">

                <!--
                  <div class="uk-width-1-1 uk-first-column">
                      <label class="uk-form-label" for="form-stacked-text" style="font-size: 1rem;font-weight: bold;letter-spacing: 1px;text-transform: none;">Edit TenantStatus</label>
                  </div>

                  <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                    <hr class="uk-divider-icon">
                  </div>

                -->

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Stage Name</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="1" id="name" type="text" class="uk-input"  placeholder=""  v-model="tenantStatusObject.name" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Order</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input min="0" max="25" tabindex="1" id="name" type="number" class="uk-input"  placeholder=""  v-model="tenantStatusObject.order" style="font-family: Lato;font-weight: 300;;height: 37px;" autofocus="true">
                          </div>
                      </div>
                  </div>

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" uk-tooltip="Only the selected users can set this status. Leave it blank for all users">Assignees</label>
                      <div class="uk-form-controls">
                          <ui-selectbox v-bind:availableItems="availableAssignees"
                                               name="Assignees"
                                               tagProperty="firstName"
                                               displayLabelProps="firstName,lastName" maxTagsToDisplay="3"
                                               searchProperty="firstName,lastName"
                                               data_tabindex="3"
                                               v-on:selectBoxUpdate="updateCategoryStageAssigneesEmitEvent($event)"/>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text" uk-tooltip="The Task will be considered as completed if this value is 'YES'">Is End State?</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <div style="position:relative">
                                  <select  tabindex="4"  class="uk-select" v-model="tenantStatusObject.isConsideredComplete" style=";height: 37px;font-family: Lato;font-weight: 300;">
                                      <option value="Y">Yes</option>
                                      <option value="N">No</option>
                                  </select>
                                  <div style="position:absolute;right: 7px;top: 9px;pointer-events: none;background-color:white"><span class="uk-icon" uk-icon="triangle-down"></span></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" >Estd. Duration</label>
                      <div class="uk-form-controls" style="display: grid;grid-template-columns: 1fr 2fr;">
                        <input min="0" max="365" v-model="tenantStatusObject.estimatedDuration" class="uk-input" dir="rtl" type="number" style=";height: 37px;border-right: 0px;text-align:right" tabindex="5">

                        <div style="position:relative">
                            <select v-model="tenantStatusObject.estimatedDurationUnit"  class="uk-select" id="form-horizontal-select" style=";height: 37px;border-left: 0px;" tabindex="6">
                                <option value="Hours">Hour(s)</option>
                                <option value="Days">Day(s)</option>
                                <option value="Weeks">Week(s)</option>
                            </select>
                            <div style="position:absolute;right: 7px;top: 9px;pointer-events: none;background-color:white"><span class="uk-icon" uk-icon="triangle-down"></span></div>
                        </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">

                  </div>

                  <div  class="uk-width-1-2@s uk-grid-margin uk-first-column">
                      <label class="uk-form-label" for="form-stacked-text">Status</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="6"  class="uk-select" v-model="tenantStatusObject.isVisible" style="font-family: Lato;font-weight: 300;height: 35px;">
                                  <option value="ACTIVE">ACTIVE</option>
                                  <option value="SUSPENDED">SUSPENDED</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div  class="uk-width-1-4@s uk-grid-margin"></div>
                  <div  class="uk-width-1-4@s uk-grid-margin"></div>

                  <div class="uk-margin uk-grid-margin uk-first-column">
                      <div class="uk-inline">
                          <a tabindex="6" id="saveButton" class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: rgb(2 119 254); border-radius: 2px; place-self: center start; place-items: center; min-width: 100px; font-size: 0.65rem; line-height: 32px; font-weight: normal !important;" v-on:click="save()" >Save</a>
                          &nbsp;&nbsp;&nbsp;
                          <!--<a tabindex="7" class="clickable-btn uk-button uk-button-danger uk-button-small uk-first-column end-call-button" style="background-color: rgba(253, 253, 253, 0.99); color: rgb(111, 111, 111); border: 1px solid rgb(183, 183, 183); border-radius: 3px; place-self: center start; place-items: center; min-width: 100px; font-size: 0.65rem; line-height: 32px; font-weight: normal !important;" v-on:click="goBack()" >Exit</a>-->
                      </div>
                  </div>
                </form>

            </div>
      </div>
    </div>
</template>


<script>



import userMixinLib               from './../../mixins/lib/user_mixin_lib';
import utilsMixinLib              from './../../mixins/lib/utils_lib';
import uiListMixinLib             from './../../mixins/lib/ui-list.js';

    export default{
        mixins :    [
                        userMixinLib,
                        utilsMixinLib,
                        uiListMixinLib
                    ],
        props: ["id"],
        data: function () {
            return {
                appName: "taskone",
                tenantStatusObject :{
                    id : this.id,
                },
                availableAssignees : [],
            };
        },
        methods: {

            goBack(){
              this.$router.push({
                  name: 'tenantStatuses-list',
                  params: {
                  }
              });
            },
            // Handle the events emitted when selectbox component values are modified.
            updateCategoryStageAssigneesEmitEvent(data){
                const assigneeIds = Array.from(data).map(item => item.id);
                this.tenantStatusObject["assigneeIds"] = assigneeIds;
                console.log("updateCategoryStageAssigneesEmitEvent : ", assigneeIds);
            },
            doValidation(){

                console.log("this.tenantStatusObject = ", this.tenantStatusObject);
                if(this.tenantStatusObject.name.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid stage name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      return false;
                }
                else if(this.tenantStatusObject.isVisible===null)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid account status.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }

                return true;
            },
            save(){

                if(!this.doValidation())
                    return false; // stop here if form is invalid.


                let btnText = document.getElementById("saveButton").innerHTML;
                document.getElementById("saveButton").innerHTML = "Saving..";
                this.disableHTMLElement(document.getElementById("saveButton"));


                let post_url = "./categories-stages/save";
                console.log("Posting data to : " + post_url);

                let isNewItem = this.tenantStatusObject.id=="new";
                let form = {
                    id :      this.tenantStatusObject.id,
                    order : this.tenantStatusObject.order,
                    name :   this.tenantStatusObject.name,
                    isVisible :   this.tenantStatusObject.isVisible,
                    isConsideredComplete :this.tenantStatusObject.isConsideredComplete,
                    assigneeIds : this.tenantStatusObject.assigneeIds,
                    estimatedDuration : this.tenantStatusObject.estimatedDuration,
                    estimatedDurationUnit : this.tenantStatusObject.estimatedDurationUnit,
                };

                console.log("Form data : ", form);

                // VueJS ajax call-1
                axios.post(post_url, form)
                          .then((dataResponse) => {

                            console.log("TenantStatus Registration Result : ");
                            console.log(dataResponse);

                            if(dataResponse.data["actionResult"]===1)
                            {
                                this.newTenantStatusInfo = dataResponse.data["bean"];

                                UIkit.notification(`<div class="taskone-notification">
                                                        <span uk-icon="icon: check;ratio:1"></span>
                                                        <div> Tenant Status modified successfully. </div>
                                                    </div>`, {
                                                    status: 'success',
                                                    pos: 'bottom-left',
                                                    timeout: 500000
                                                });

                                document.getElementById("saveButton").innerHTML = btnText;
                                this.enableHTMLElement(document.getElementById("saveButton"));
                                this.$emit("refreshList",{});
                            }
                            else
                            {
                                let errorMsg = (dataResponse["data"])["message"];
                                UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                                    status: 'danger',
                                                    pos: 'top-right',
                                                    timeout: 5000
                                                });


                                document.getElementById("saveButton").innerHTML = btnText;
                                this.enableHTMLElement(document.getElementById("saveButton"));
                                return false;
                            }


                    })
                    .catch(function(errorResponse) {

                        console.log("ERROR MS - ", errorResponse);
                        let exceptionMsg = errorResponse.data["exception"];

                        UIkit.notification("<span uk-icon='icon: warning ;ratio: 0.75'></span> " + exceptionMsg + ".", {
                                            status: 'danger',
                                            pos: 'top-right',
                                            timeout: 500000
                                        });


                        document.getElementById("saveButton").innerHTML = btnText;
                        this.enableHTMLElement(document.getElementById("saveButton"));
                        return false;
                    });
            },


            // This data will be used to filter both members and admins by merging with the result from 'get-associated-people/{workgroup-id}'
            loadPotentialUsers(){
                let url = "./categories/get-potential-users";         // Fetch all potential members (users)
                this.getUnpaginatedList("potentialUsers", url);   // This lib call will fire the callback "handleUnpaginatedListData" when it completes.
            },
            // Callbacks of loadPotentialUsers function.
            handleUnpaginatedListData(listKey, data){
                if(listKey === "potentialUsers")
                  this.handlePotentialUsers(data);
            },
            handleUnpaginatedListDataError(error){
                console.error("Unpaginated List data fetch error : ", error);
            },
            //Callbacks
            handlePotentialUsers(dataResponse){

              //Pass it to the availableMembers prop to the dropdown.
              console.log("Potential Users : ", dataResponse);
              console.log("tenantStatusObject : ", this.tenantStatusObject);

              let mapFunction = (user) => {
                  return {
                      id        : user.id,
                      firstName : user.firstName,
                      lastName  : user.lastName,
                      isSelected: false
                  };
              };

              let mappedArrayOfUser = dataResponse.data.bean.map(mapFunction);

              let assignees=[];

              mappedArrayOfUser.forEach((user)=>{

                  let userObj = {
                      id : user.id,
                      firstName : user.firstName,
                      lastName : user.lastName,
                      isSelected : false // Set false by default, so that if the category didn't have any member, then all of the available list could be passed to selectbox.
                  };

                  this.tenantStatusObject.assigneeIds.forEach((assigneeId)=>{
                        if(user.id===assigneeId)
                          userObj["isSelected"] = true;
                  });
                  assignees.push(userObj);
              });

              this.availableAssignees = assignees;

              console.log("this.availableAssignees : " , this.availableAssignees);


            },
            getRecord(){

                let get_url = "./categories-stages/get/" + this.tenantStatusObject.id;

                axios.get(get_url)
                        .then((dataResponse) => {
                            if(dataResponse.data["actionResult"]==1)
                            {
                                let tenantStatusObject = dataResponse.data["bean"];
                                this.tenantStatusObject = tenantStatusObject;
                                this.loadPotentialUsers();
                            }
                        })
                        .catch((error) => {

                            UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + error, {
                                                status: 'danger',
                                                pos: 'bottom-left',
                                                timeout: 5000
                                            });
                            return false;
                        });


            },

        },
        mounted: function () {

        },
        created: function () {
            console.log("Edit tenantStatus form");
        },
        watch: {

          // Since we are passing an asynced data as 'availableItems', it is necessary to watch this prop when it receives new data.
          id:function(newId, oldId){
            console.log("id changed from " + oldId + " to " + newId);
            this.tenantStatusObject.id = newId;
            this.getRecord();
          }
        }
    }

</script>
