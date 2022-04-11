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



      <div class="stage" style="display: grid;place-items: stretch;height:100%;grid-template-rows: 40px 1fr;padding: 15px;overflow-y: hidden;color: rgb(51, 51, 51);">

          <div class="adk_grid_toolbar" style="grid-template-columns:auto 1fr;margin-right: 50px;margin-left: 50px;border-bottom: 1px solid #e0e0e0;">

              <div style="display: grid;place-self: center start;text-align: left;">
                  <div style="display:grid;place-self:center start;padding-left:0px;padding-right:20px;color:rgba(61, 61, 61, 0.78) !important;grid-template-columns:auto auto;font-size: 1rem;line-height: 35px;">
                     <span style="font-size: 1rem; font-weight: bold;letter-spacing:0.5px">
                      New Category
                     </span>
                  </div>
              </div>
              <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
              </div>
          </div>

          <div class="" style="padding-top: 30px;padding-left: 50px;padding-right: 50px;">

              <form autocomplete="off" class="uk-grid-small uk-grid" uk-grid onsubmit="return false;">

                  <div class="uk-width-1-2@s uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Category Name</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="1" id="name" type="text" class="uk-input"  placeholder=""  v-model="categoryObject.name" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>
                  <div  class="uk-width-1-2@s uk-grid-margin"></div>

                  <div  class="uk-width-1-4@s uk-grid-margin uk-first-column">
                      <label class="uk-form-label" for="form-stacked-text">Type</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="2"  class="uk-select" v-model="categoryObject.type" style="font-family: Lato;font-weight: 300;height: 35px;">
                                  <option value="Person">Person</option>
                                  <option value="Workgroup">Workgroup</option>
                              </select>
                          </div>
                      </div>
                  </div>

                  <div  class="uk-width-1-4@s uk-grid-margin">
                      <label class="uk-form-label" for="form-stacked-text">Status</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="3"  class="uk-select" v-model="categoryObject.status" style="font-family: Lato;font-weight: 300;height: 35px;">
                                  <option value="ACTIVE">Active</option>
                                  <option value="INACTIVE">Inactive</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div  class="uk-width-1-4@s uk-grid-margin"></div>
                  <div  class="uk-width-1-4@s uk-grid-margin"></div>


                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column " style="z-index: 1;">
                      <div style="height: 70px;">
                           <label class="uk-form-label">Members (Can only see tasks assigned/followed)</label>
                           <div class="uk-form-controls">
                               <ui-selectbox v-bind:availableItems="availableMembers"
                                                    name="Members"
                                                    tagProperty="firstName"
                                                    displayLabelProps="firstName,lastName" maxTagsToDisplay="3"
                                                    searchProperty="firstName,lastName"
                                                    data_tabindex="4"
                                                    v-on:selectBoxUpdate="updateMembersEmitEvent($event)"/>
                           </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin"></div>

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column">
                      <div style="height: 70px;">
                           <label class="uk-form-label">Admins (Can only see all tasks in this category)</label>
                           <div class="uk-form-controls">
                               <ui-selectbox v-bind:availableItems="availableAdmins"
                                                    name="Admins"
                                                    tagProperty="firstName"
                                                    displayLabelProps="firstName,lastName"  maxTagsToDisplay="3"
                                                    searchProperty="firstName,lastName"
                                                    data_tabindex="5"
                                                    v-on:selectBoxUpdate="updateAdminsEmitEvent($event)"/>
                           </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin"></div>

                  <div  class="uk-width-1-2@s uk-grid-margin">
                      <label class="uk-form-label" for="form-stacked-text">Preferred Tab to Display</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="2"  class="uk-select" v-model="categoryObject.preferredTab" style="font-family: Lato;font-weight: 300;height: 35px;">
                                  <option value="Description">Description</option>
                                  <option value="Activity">Activity</option>
                                  <option value="Subtasks">Subtasks</option>
                                  <option value="Checklist">Checklist</option>
                                  <option value="Reminders">Reminders</option>
                                  <option value="Timelog">Timelog</option>
                                  <option value="Status Tracking">Status Tracking</option>
                                  <option value="Task Log">Task Log</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin"></div>

                  <!-- <div  class="uk-width-1-2@s uk-grid-margin">
                      <label class="uk-form-label" for="form-stacked-text">Is Default Category?</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="2"  class="uk-select" v-model="categoryObject.isDefaultCategory" style="font-family: Lato;font-weight: 300;height: 35px;">
                                  <option value="true">Yes</option>
                                  <option value="false">No</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin"></div> -->

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
        props: ["resetTime"],
        watch : {
            resetTime: function(oldVal,newVal){

                console.log("resetTime changed = " + newVal.time);
                this.categoryObject ={
                    id : "new",
                    name : "",
                    type : null,
                    status : null,
                    memberIds : [],
                    adminIds : []
                };
            }
        },
        data: function () {
            return {
                appName: "taskone",
                tenantName : this.$route.params.tenant_name,
                categoryObject :{
                    id : "new",
                    name : "",
                    type : null,
                    status : null,
                    memberIds : [],
                    adminIds : []
                },
                availableMembers : [],
                availableAdmins : [],
            };
        },
        methods: {

            goBack(){
              this.$router.push({
                  name: 'categories-list',
                  params: {
                  }
              });
            },
            doValidation(){

                console.log("this.categoryObject = ", this.categoryObject);
                if(this.categoryObject.name.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid Name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      return false;
                }
                else if(this.categoryObject.type===null)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid Type.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.categoryObject.status===null)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid Status.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.categoryObject.memberIds.length===0)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please add atleast one member.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.categoryObject.adminIds.length===0)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please add atleast one admin.", {
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

                let post_url = "./categories/save";
                console.log("Posting data to : " + post_url);

                let form = {
                    id :      this.categoryObject.id,
                    name :   this.categoryObject.name,
                    type  :   this.categoryObject.type,
                    status :   this.categoryObject.status,
                    memberIds :this.categoryObject.memberIds,
                    adminIds : this.categoryObject.adminIds,
                    preferredTab : this.categoryObject.preferredTab,
                    isDefaultCategory : this.categoryObject.isDefaultCategory==='true'
                }

                console.log("categoryForm : ", form);

                // VueJS ajax call-1
                axios.post(post_url, form)
                          .then((dataResponse) => {

                            console.log("Category Registration Result : ");
                            console.log(dataResponse);

                            if(dataResponse.data["actionResult"]===1)
                            {
                                this.newCategoryInfo = dataResponse.data["bean"];

                                UIkit.notification(`<div class="taskone-notification">
                                                        <span uk-icon="icon: check;ratio:1"></span>
                                                        <div> New Category added successfully. </div>
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

                        //https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
                        console.log("ERROR MS - ", errorResponse.response);
                        let exceptionMsg = errorResponse.response.data["exception"];

                        UIkit.notification("<span uk-icon='icon: warning ;ratio: 0.75'></span> " + exceptionMsg + ".", {
                                            status: 'danger',
                                            pos: 'bottom-left',
                                            timeout: 10000
                                        });


                        document.getElementById("saveButton").innerHTML = btnText;
                        this.enableHTMLElement(document.getElementById("saveButton"));
                        return false;
                    });
            },

            // Handle the events emitted when selectbox component values are modified.
            updateMembersEmitEvent(data){
                const memberIds = Array.from(data).map(item => item.id);
                this.categoryObject["memberIds"] = memberIds;
            },
            updateAdminsEmitEvent(data){
                const adminIds = Array.from(data).map(item => item.id);
                this.categoryObject["adminIds"] = adminIds;
            },

            // This data will be used to filter both members and admins by merging with the result from 'get-associated-people/{category-id}'
            loadPotentialUsers(){
                let url = "./categories/get-potential-users";          // Fetch all potential members (users)
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

                let mapFunction = (user) => {
                    return {
                        id        : user.id,
                        firstName : user.firstName,
                        lastName  : user.lastName,
                        isSelected: false
                    };
                };

                let mappedArrayOfUser = dataResponse.data.bean.map(mapFunction);

                this.availableMembers = mappedArrayOfUser;    // When a category is edited, these vals must be merged with existing category members to determine 'isSelected' flag
                this.availableAdmins = mappedArrayOfUser;

                console.log("this.availableMembers : ", this.availableMembers);
                console.log("this.availableAdmins : " , this.availableAdmins);
            },


        },
        mounted: function () {

            this.initListLib();
            this.loadPotentialUsers();

        },
        created: function () {
            console.error("WELCOME TO NEW Category REGISTRATION FORM.");
        }
    }

</script>
