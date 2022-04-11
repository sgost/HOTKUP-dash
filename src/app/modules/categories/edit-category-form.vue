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


  .category-stage-row{
    position: relative;
    padding: 5px 10px;
    display: grid;
    align-items: end;
    height: 30px;
    justify-items: start;
    grid-template-columns: 50px 3fr 2fr 1fr 1fr 1fr;
    -moz-column-gap: 20px;
    column-gap: 20px;
    border-bottom: 1px solid #f3f3f3;
    border-left: 5px solid transparent;
    background-color: rgb(255 255 255);
    font-size: 0.65rem;
  }

  .category-stage-row:hover{
    border-left: 5px solid transparent;
  }

  .category-stage-row>div{
    margin-bottom:5px;
  }


  .category-process-row{
    position: relative;
    padding: 5px 10px;
    display: grid;
    align-items: center;
    height: 35px;
    justify-items: start;
    grid-template-columns: 3fr 1fr 1fr auto;
    -moz-column-gap: 20px;
    column-gap: 20px;
    border-top: 1px solid #f3f3f3;
    border-left: 5px solid transparent;
    background-color: #fff;
    font-size: 0.65rem;
  }

  .category-process-row:hover{
    border-left: 5px solid rgb(31 105 189);
  }

  .category-process-row.selected-process {
    border-left: 5px solid rgb(31 105 189);
  }

  .category-process-row>div{
    margin-bottom:5px;
  }


  .uk-input, .uk-select:not([multiple]):not([size]) {
      height: 35px;
      vertical-align: middle;
      display: inline-block;
      background: #fbfbfb;
  }

  .hide-process-statuses-list{
    display:none;
  }

  .process_name_icon{
    transform-origin:50% 50%;
    transition:0.25s linear;
  }

  .rotate90deg{
    transform:rotateZ(180deg);
  }

  .isEndState{
    background-color:red !important;
  }


  .updateTaskInfoTrigger{
    background: #efefef;
    border-radius: 50%;
    border-radius: 3px;
    padding: 3px;
    cursor: pointer;
    line-height:0px;
  }

  .updateTaskInfoTrigger:hover{
    background: #e4e4e4;
  }

  .subtask-back-button {
      background-color: hsl(0deg 1% 72%/18%);
      border-radius: 50%;
      place-self: center start;
      place-items: center;
      font-size: .65rem;
      line-height: 32px;
      font-weight: 400!important;
      padding: 0 7px;
      fill: #0de60d;
      color: rgb(255 255 255);
      transition: .25s linear;
  }

  .subtask-back-button>svg>path{
      background-color: rgb(232 232 232);
      fill: rgb(101 101 101);
  }


  .attachedFormTemplate_row{
    position: relative;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    -moz-column-gap: 20px;
    column-gap: 20px;
    border-bottom: 1px solid #f3f3f3;
    border-left: 5px solid transparent;
    background-color: rgb(255 255 255);
    font-size: 0.65rem;
  }

  .attachedFormTemplate_row:hover{
    border-left: 5px solid rgb(31 105 189);
  }

  .attachedFormTemplate_row>div{
    margin-bottom:0px;
  }


  .uk-form-label {
      font-size: .66rem;
      text-transform: capitalize;
      letter-spacing: 1px;
      color: black;
  }

</style>


<template>

    <div style="font-size: 0.7rem;background: rgb(255 255 255);;;display:grid;grid-template-columns:1fr;width:100%;place-items:start start;overflow-y:overlay" class="custom-scroll-bar">



      <div class="stage" style="    box-sizing: border-box;display: flex;flex-direction: column;/* place-items: stretch; */height: 100%;grid-template-rows: 40px 1fr;padding: 15px;color: rgb(51, 51, 51);width: 100%;">


          <ul  id="switcherTabs" class="uk-subnav uk-subnav-pill tab-bar" uk-switcher style="user-select: none;">
            <li uk-tooltip="title:Basic Category Info;pos:bottom">
              <a >
                <span class="tab_icon">
                  <ui-icon name="description" size="width:15px;height:15px"/>
                </span>
                <span class="">Basic Category Settings</span>
              </a>
            </li>
            <li uk-tooltip="title:Advanced Category Info;pos:bottom" v-on:click="openAdvancedSettings()">
              <a >
                <span class="tab_icon">
                  <ui-icon name="hooks" size="width:14px;height:14px"/>
                </span>
                <span class="tab_label">Advanced Settings</span>
              </a>
            </li>
          </ul>
          <div class="uk-switcher uk-switcher-component" style="margin-top: 0px;font-size: 0.7rem;padding: 0px 0px 20px;overflow-y: hidden;display: flex;flex-grow: 1;background: rgb(255 255 255);touch-action: pan-y pinch-zoom;">
            <div style=";flex-grow: 1;overflow-y: hidden;position: relative;padding: 35px;height: 100%;background: white;">
                <div class="" style="">

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

                      <div  class="uk-width-1-4@s uk-grid-margin">
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
                      <div  class="uk-width-1-2@s uk-grid-margin"></div>

                      <!-- <div  class="uk-width-1-2@s uk-grid-margin">
                          <label class="uk-form-label" for="form-stacked-text">Is Default Category?</label>
                          <div class="uk-form-controls">
                              <div class="uk-inline uk-width-1-1">
                                  <select  tabindex="2"  class="uk-select" v-model="categoryObject.isDefaultCategory" style="font-family: Lato;font-weight: 300;height: 35px;">
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
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
              <div><br><hr></div>
              <div>
                <div style="padding:20px;padding-top:20px;text-align:center;border-bottom: 0px;">
                   To define different process templates and their corresponding states under this category, please click on "Advanced Settings" tab.
                </div>
              </div>
            </div>
            <div style=";flex-grow: 1;overflow-y: hidden;position: relative;padding: 35px;height: 100%;background: white;">
                <div class="" v-show="showAdvancedSettings">
                    <div style="padding: 10px 0px;margin-right:0px;margin-top: 10px;margin-bottom: 10px;display: grid;grid-template-rows: 1fr;place-items: start;border-bottom: 0px solid #d0d0d0;">
                        <button xv-on:click="addCategoryStage()" v-on:click="addCategoryProcess()"  class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: rgb(240, 170, 80);border-radius: 3px;min-width: 100px;font-size: 0.65rem;line-height: 30px;font-weight: normal !important;display: inline-block;">
                            <span uk-icon="icon:plus;ratio:0.65" class="uk-icon" style="">
                              <svg width="13" height="13" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus">
                                <rect x="9" y="1" width="1" height="17"></rect>
                                <rect x="1" y="9" width="17" height="1"></rect>
                              </svg>
                            </span>
                            <span style="padding-left: 10px;">Add Process Template</span>
                        </button>
                    </div>
                </div>
                <div class="" v-show="showAdvancedSettings" style="border: 1px solid #dadada;">
                  <div v-show="categoryProcesses.length==0" style="padding:50px;text-align:center;border-bottom: 0px;"> No Process Templates configured.</div>
                  <div v-show="categoryProcesses.length>0"  class="category-process-row" style="align-items: center;background: #f2f2f2;border: 1px solid transparent;border-bottom: 0px;text-transform: uppercase;font-size: 0.55rem;">
                      <div>Process Template Name</div>
                      <div></div>
                      <div style="color: rgb(51, 51, 51);"></div>
                      <div>Options</div>
                  </div>
                  <div v-show="categoryProcesses.length>0"  class="activity_box" style="background-color: white;display: flex;flex-direction: column;    width: auto;">
                      <template v-for="categoryProcess,idx in categoryProcesses">
                          <div class="category-process-row" v-bind:id="'category_process_row_' + categoryProcess.id">
                              <div style="cursor:pointer">
                                <a uk-tooltip="title:View Process Template's configurations;pos:right" v-on:click="openProcessDetailModal(categoryProcess)" >{{idx+1}}. {{categoryProcess.name}}</a>
                              </div>
                              <div style="display:flex;column-gap:5px"></div>
                              <div></div>
                              <div style="display:flex">
                                <!--
                                <div style="display:flex;column-gap:5px;align-items:center;justify-content:center">
                                  <span uk-tooltip="Edit Process Name" uk-icon="icon:pencil;ratio:0.85" class="uk-button updateTaskInfoTrigger"  v-on:click="editCategoryProcess(categoryProcess.id)"></span>
                                  &nbsp;&nbsp;
                                </div>
                                -->

                                <a uk-tooltip="Edit Process Configurations" v-on:click="openProcessDetailModal(categoryProcess)">Edit Process Configurations</a>
                                &nbsp;|&nbsp;<a uk-tooltip="Edit Process Name" v-on:click="editCategoryProcess(categoryProcess.id)">Edit Process Name</a>
                                &nbsp;|&nbsp;<a  uk-tooltip="Delete this record" v-on:click="removeCategoryProcess(categoryProcess.id)">Remove</a>


                              </div>
                          </div>
                      </template>
                  </div>
              </div>
            </div>
          </div>
      </div>

      <div id="category-stages-modal" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style="width: 60%;font-size: 0.65rem;padding: 35px;border: 10px solid #00000091;">
              <button class="uk-modal-close-default" type="button" uk-close></button>




          </div>
      </div>

      <div id="category-processes-modal" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style="width: 60%;font-size: 0.65rem;padding: 35px;border: 10px solid #00000091;">
              <button class="uk-modal-close-default" type="button" uk-close></button>


              <form autocomplete="off" class="uk-grid-small uk-grid" uk-grid onsubmit="return false;">

                  <div class="uk-width-1-2@s uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Process Name</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="1" id="name" type="text" class="uk-input"  placeholder=""  v-model="categoryProcess.name" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>
                  <div  class="uk-width-1-2@s uk-grid-margin"></div>


                  <div class="uk-margin uk-grid-margin uk-first-column">
                      <div class="uk-inline">
                          <a tabindex="7" id="saveButtonModal2" class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: rgb(2 119 254); border-radius: 2px; place-self: center start; place-items: center; min-width: 100px; font-size: 0.65rem; line-height: 32px; font-weight: normal !important;"
                             v-on:click="saveCategoryProcess()" >Save Category Process</a>
                          &nbsp;&nbsp;&nbsp;
                      </div>
                  </div>
                </form>

          </div>
      </div>

      <div id="category-process-wizard-modal" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style="display: flex;width: 75%;flex-direction: column;height: 90%;overflow-y: hidden;font-size: 0.65rem;padding: 0px;border:0px solid rgba(0, 0, 0, 0.57);">

              <!--<button class="uk-modal-close-default" type="button" uk-close ></button>-->



              <div style="display: flex;font-size: 1rem;margin-bottom: 10px;background: #f3f3f3;margin-top: 0px;padding: 10px;">

                <button v-on:click="closeCategoryProcessWizardModal()" v-bind:uk-tooltip="'Go back'"
                  class="uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button subtask-back-button"
                  style="border-radius: 3px;align-self:flex-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" >
                    <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                  </svg>
                </button>
                <div v-if="currentlySelectedCategoryProcess!==null" style="font-weight: bold;display: flex;align-items: center;flex-grow: 1;justify-content: center;">{{categoryObject.name}} &nbsp; &#187; &nbsp;{{currentlySelectedCategoryProcess.name}} &nbsp;<span style="color: #3f98ff;"> - configuration</span></div>
                <hr>
              </div>
              <ul  id="switcherTabs2" class="uk-subnav uk-subnav-pill tab-bar" uk-switcher style="user-select: none;padding: 10px 20px;">
                <li uk-tooltip="title:Basic Category Info;pos:bottom" style="padding-left: 0px;">
                  <a >
                    <span class="tab_icon">
                      <ui-icon name="description" size="width:15px;height:15px"/>
                    </span>
                    <span uk-icon="icon:settings;ratio:0.85"></span>
                    <span class="">&nbsp;&nbsp;Configure Task Statuses</span>
                  </a>
                </li>
                <li uk-tooltip="title:Advanced Category Info;pos:bottom" v-on:click="openAdvancedSettings()">
                  <a >
                    <span class="tab_icon">
                      <ui-icon name="hooks" size="width:14px;height:14px"/>
                    </span>
                    <span uk-icon="icon:check;ratio:0.85"></span>
                    <span class="tab_label">&nbsp;&nbsp;Add Checklist</span>
                  </a>
                </li>
                <li uk-tooltip="title:Advanced Category Info;pos:bottom" v-on:click="openAdvancedSettings()">
                  <a >
                    <span class="tab_icon">
                      <ui-icon name="hooks" size="width:14px;height:14px"/>
                    </span>
                    <span uk-icon="icon:file-edit;ratio:0.85"></span>
                    <span class="tab_label">&nbsp;&nbsp;Attach Forms</span>
                  </a>
                </li>
              </ul>
              <div class="uk-switcher uk-switcher-component" style="margin-top: 0px;font-size: 0.7rem;padding: 0px 0px 20px 20px;overflow-y: hidden;display: flex;flex-grow: 1;background: rgb(255, 255, 255);touch-action: pan-y pinch-zoom;">

                <!-- Task Status Configuration -->
                <div style="flex-grow: 1;overflow-y: hidden;position: relative;padding: 10px;height: 100%;background: white;box-sizing: border-box;">
                  <div style="overflow-y: hidden;display: flex;height: 100%;">
                    <div style="display: flex;flex-direction: column;flex-grow: 1;padding: 10px;box-sizing: border-box;">
                        <div v-show="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.statuses.length==0" style="padding-top:20px;text-align:center;border-bottom: 0px;">
                           This section helps you configure the different statuses a task can transition through, in this process's workflow. The configurations made here will take higher precedence in determining the assignees of the basic settings.
                        </div>
                        <div v-show="currentlySelectedCategoryProcess!==null"  style=";background-color:rgb(255, 255, 255);display: flex;justify-content: flex-end;padding: 10px 0px;margin-bottom:10px;align-items: center;justify-content: center;">
                          <form autocomplete="off" onsubmit="return false;"  class="xuk-grid-small xuk-grid" style="padding-top: 10px;display: flex;column-gap: 15px;flex-grow: 1;">
                              <div style="flex-basis: 10%;">
                                  <label class="uk-form-label" for="form-stacked-text">Order</label>
                                  <div class="uk-form-controls">
                                      <div class="uk-inline uk-width-1-1">
                                          <input min="0" max="25" tabindex="1" id="name" type="number" class="uk-input"  placeholder=""  v-model="categoryStage.order" style="font-family: Lato;font-weight: 300;;height: 37px;" autofocus="true">
                                      </div>
                                  </div>
                              </div>
                              <div style="flex-basis: 30%;">
                                  <label class="uk-form-label" for="form-stacked-text">Task Status Name</label>
                                  <div class="uk-form-controls">
                                      <div class="uk-inline uk-width-1-1">
                                          <input tabindex="2" id="name" type="text" class="uk-input"  placeholder=""  v-model="categoryStage.name" style="font-family: Lato;font-weight: 300;;height: 37px;" autofocus="true">
                                      </div>
                                  </div>
                              </div>

                              <div style="z-index: 1;flex-basis: 40%;">
                                  <div >
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
                              </div>

                              <div style="flex-basis:15%;">
                                  <label class="uk-form-label" for="form-stacked-text" uk-tooltip="The Task will be considered as completed if this value is 'YES'">Is End State?</label>
                                  <div class="uk-form-controls">
                                      <div class="uk-inline uk-width-1-1">
                                          <div style="position:relative">
                                              <select  tabindex="4"  class="uk-select" v-model="categoryStage.isConsideredComplete" style=";height: 37px;font-family: Lato;font-weight: 300;">
                                                  <option value="Y">Yes</option>
                                                  <option value="N">No</option>
                                              </select>
                                              <div style="position:absolute;right: 7px;top: 9px;pointer-events: none;"><span class="uk-icon" uk-icon="triangle-down"></span></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div style="flex-basis: 25%;">
                                  <label class="uk-form-label" >Estd. Duration</label>
                                  <div class="uk-form-controls" style="display: grid;grid-template-columns: 1fr 2fr;">
                                    <input min="0" max="365" v-model="categoryStage.estimatedDuration" class="uk-input" dir="rtl" type="number" style=";height: 37px;border-right: 0px;text-align:right" tabindex="5">

                                    <div style="position:relative">
                                        <select v-model="categoryStage.estimatedDurationUnit"  class="uk-select" id="form-horizontal-select" style=";height: 37px;border-left: 0px;" tabindex="6">
                                            <option value="Hours">Hour(s)</option>
                                            <option value="Days">Day(s)</option>
                                            <option value="Weeks">Week(s)</option>
                                        </select>
                                        <div style="position:absolute;right: 7px;top: 9px;pointer-events: none;"><span class="uk-icon" uk-icon="triangle-down"></span></div>
                                    </div>
                                  </div>
                              </div>

                              <div style="display: flex;align-self: flex-end;">
                                  <button tabindex="7" id="saveTaskStatusButton"
                                    class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button"
                                    style="background-color: rgb(233, 30, 99);border-radius: 2px;place-self: center start;place-items: center;min-width: 75px;height: 37px;font-size: 0.65rem;line-height: 32px;font-weight: normal !important;"
                                    v-on:click="saveCategoryStage()" >{{saveTaskStatusButtonLabel}}</button>
                              </div>
                            </form>
                        </div>
                        <div v-show="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.statuses.length>0"  class="category-stage-row" style="align-items: center;background: rgb(243, 243, 243);border-width: 1px 1px 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: initial;border-left-style: solid;border-top-color: transparent;border-right-color: transparent;border-bottom-color: initial;border-left-color: rgb(146, 146, 146);border-image: initial;text-transform: uppercase;font-size: 0.55rem;position: relative;padding-left:0px;">
                            <div style=";justify-self: end;">#Order</div>
                            <div>Task Stage Name</div>
                            <div uk-tooltip="This value will take precedence over the category's members in basic settings.">Assignees</div>
                            <div uk-tooltip="If yes, then the task will be closed." style="color: rgb(51, 51, 51);">Completed?</div>
                            <div>Estd. Duration</div>
                            <div>Options</div>
                        </div>
                        <div v-if="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.statuses.length>0"  class="activity_box custom-scroll-bar" style="border-left: 1px solid rgb(146, 146, 146);display: flex;flex-direction: column;width: 100%;box-sizing: border-box;margin-left:0px">

                            <template v-for="categoryStage,idx in currentlySelectedCategoryProcess.statuses">

                                <div class="category-stage-row" style="position: relative;background-color:rgb(255, 255, 255)">
                                    <div style="font-weight:normal;justify-self: end;">{{categoryStage.order}}</div>
                                    <div style="cursor:pointer" uk-tooltip="title:Click to edit;pos:right" ><a  v-on:click="editCategoryStage(categoryStage.id)">{{categoryStage.name}}</a></div>
                                    <div style="display:flex;column-gap:5px">
                                        <div>
                                          <template v-for="assignee in categoryStage.assigneesList">
                                              <span v-if="assignee.isLastItem && assignee.isFirsItem" style="color:#1e87f0"></span>
                                              <span v-else-if="!assignee.isLastItem && !assignee.isFirsItem" style="color:#1e87f0">, </span>
                                              <span v-else-if="assignee.isLastItem && !assignee.isFirsItem" style="color:#1e87f0"> & </span>
                                              <a v-bind:uk-tooltip="assignee.hint" style="cursor:default">{{assignee.shortName}}</a>
                                          </template>
                                        </div>
                                    </div>
                                    <div>{{categoryStage.isConsideredComplete==="Y"?"YES":"NO"}}</div>
                                    <div>{{categoryStage.estimatedDuration}} {{categoryStage.estimatedDurationUnit}}</div>
                                    <div style="display:flex">
                                      <!--
                                      <div style="display:flex;column-gap:5px;align-items:center;justify-content:center">
                                        <span uk-tooltip="Edit Task Status" uk-icon="icon:pencil;ratio:0.85" class="uk-button updateTaskInfoTrigger"  v-on:click="editCategoryStage(categoryStage.id)"></span>
                                        &nbsp;&nbsp;
                                      </div>
                                      -->
                                      <a uk-tooltip="Edit Task Status" v-on:click="editCategoryStage(categoryStage.id)">Edit</a>&nbsp;|&nbsp;<a v-on:click="removeCategoryStage(categoryStage.id)">Remove</a>

                                    </div>
                                    <div style="position:absolute;width: 30px;border-top: 1px solid #333;top: 17px;"></div>
                                    <div v-show="categoryStage.isConsideredComplete==='Y'" style="width: 10px;position: absolute;height: 10px;border-radius:50%;background-color: #e91e63;z-index: 1;left:-10px;top: 12px;"></div>
                                    <div v-show="categoryStage.isConsideredComplete!=='Y'" style="width: 10px;position: absolute;height: 10px;border-radius:50%;background-color: #8bc34a;z-index: 1;left:-10px;top: 12px;"></div>
                                </div>

                            </template>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Task Status Configuration ends here-->

                <!-- Task Checklist Configuration -->
                <div style="flex-grow: 1;overflow-y: hidden;position: relative;padding: 10px;height: 100%;background: white;box-sizing: border-box;">
                  <div class="checklist-container" style="overflow-y: hidden;display: flex;flex-direction: column;height: 100%;">
                    <div class="" style="overflow-y: hidden;display: flex;flex-direction: column;">
                        <div v-show="currentlySelectedCategoryProcess!==null &&
                                     currentlySelectedCategoryProcess.checklist.length==0" style="padding-top:20px;text-align:center;border-bottom: 0px;">
                           This section helps you configure the necessary checklist items required for this task.
                        </div>
                        <div v-show="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.checklist!==null"  style="border-left: 0px solid rgb(146, 146, 146);background-color: rgb(255, 255, 255);display: flex;justify-content: flex-end;">

                          <div style="display: flex;padding: 20px 0px 20px 0px;column-gap: 10px;flex-grow: 1;">
                                <div style="flex:1">
                                    <label class="uk-form-label" for="form-stacked-text" data-v-1fddeaf2="">Checklist Item Name</label>
                                    <input type="text" v-model="checklistItem.activityName" class="uk-input" placeholder="Add new checklist item" style="border-radius:3px; height: 37px;"/>
                                </div>
                                <div v-if="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.statuses.length>0" >
                                  <label class="uk-form-label" for="form-stacked-text" data-v-1fddeaf2="" >Display when Task's stage is</label>
                                  <select v-model="checklistItem.stage" class="uk-select">
                                    <option value="none">Not tied to any stage</option>
                                    <template v-for="categoryStage,idx in currentlySelectedCategoryProcess.statuses">
                                      <option v-bind:value="categoryStage.id + '#' + categoryStage.name" v-if="categoryStage.isConsideredComplete !== 'Y'">{{categoryStage.name}}</option>
                                    </template>
                                  </select>
                                </div>
                                <div style="display: flex; align-self: flex-end;">
                                    <button v-on:click="saveChecklistItem(currentlySelectedCategoryProcess.id)"  class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: rgb(240, 170, 80);border-radius: 3px;min-width: 100px;font-size: 0.65rem;line-height: 30px;font-weight: normal !important;display: inline-block;    height: 37px;">
                                        <span style="padding-left: 10px;">{{checklistLabel}}</span>
                                    </button>
                                </div>
                          </div>
                        </div>
                        <div v-show="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.checklist!==null && currentlySelectedCategoryProcess.checklist.length>0"  class="category-stage-row" style="align-items: center;background: rgb(243 243 243);border-width: 1px 1px 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: initial;border-left-style: solid;border-top-color: transparent;border-right-color: transparent;border-bottom-color: initial;border-left-color: transparent;border-image: initial;text-transform: uppercase;font-size: 0.55rem;position: relative;    border-left: 0px solid rgb(146, 146, 146);display: flex;">
                            <div style="width:50px"></div>
                            <div style="flex-grow:1">Checklist Item Name</div>
                            <div style="width: 30%;">Displayed when Task's stage is</div>
                            <div style="min-width:100px">Options</div>
                        </div>
                        <div v-if="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.checklist!==null && currentlySelectedCategoryProcess.checklist.length>0"  class="activity_box custom-scroll-bar" style="border-left: 0px solid rgb(146, 146, 146);overflow-y: overlay;width: auto;flex-direction: column;">

                            <!--
                            <template v-for="categoryStage,idx in categoryProcess.statuses">

                                <div class="category-stage-row" style="position: relative;background-color:rgb(255, 255, 255)" v-on:click="editCategoryStage(categoryStage.id)">
                                    <div style="font-weight:normal;justify-self: end;"><a >{{categoryStage.order}}</a></div>
                                    <div style="cursor:pointer">{{categoryStage.name}}</div>
                                </div>
                            </template>
                            -->
                            <template v-for="item,index in currentlySelectedCategoryProcess.checklist">
                                <div style="padding: 10px 10px;display: flex;border-bottom: 1px solid #d0d0d0;column-gap: 20px;margin-right: 0px;margin-left: 0px;">
                                    <div style="flex-grow:1">
                                      {{index+1}}. {{item.activityName}}
                                    </div>
                                    <div style="width: 30%;">
                                        <span v-if="item.stageName !== null"> {{item.stageName}} </span>
                                    </div>
                                    <div v-if="item.status!=='COMPLETED'"  style="min-width:100px"><a v-on:click="updateChecklistItem(item)">Edit</a>&nbsp;|&nbsp;<a v-on:click="removeChecklistItem(item)">Remove</a></div>
                                </div>
                            </template>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Task Checklist Configuration ends here-->

                <!-- Task Forms Configuration -->
                <div style="flex-grow: 1;overflow-y: hidden;position: relative;padding: 10px;height: 100%;background: white;box-sizing: border-box;">
                  <div class="forms-attachment-container" style="overflow-y: hidden;display: flex;flex-direction: column;height: 100%;">
                    <div class="" style="overflow-y: hidden;display: flex;flex-direction: column;">
                        <div v-show="currentlySelectedCategoryProcess!==null &&
                                     currentlySelectedCategoryProcess.checklist.length==0" style="padding-top:20px;text-align:center;border-bottom: 0px;">
                           This section helps you attach the necessary forms required for this task.
                        </div>
                        <div v-show="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.checklist!==null"  style="border-left: 0px solid rgb(146, 146, 146);background-color: rgb(255, 255, 255);display: flex;justify-content: flex-end;">
                          <form autocomplete="off" onsubmit="return false;"  class="xuk-grid-small xuk-grid" style="padding-top: 10px;display: flex;column-gap: 5px;flex-grow: 1;">
                              <div style="flex-basis: 30%;">
                                  <label class="uk-form-label" for="form-stacked-text">Form Template</label>
                                  <div style="position:relative">
                                      <select tabindex="7" v-model="newFormTemplate.formTemplateInfo" class="uk-select" id="form-stacked-select" style="height:37px">
                                          <!-- <option v-for="formTemplate in formTemplatesList" v-bind:value="formTemplate.id + '#' + formTemplate.name">{{formTemplate.name}}</option> -->
                                          <optgroup label="Forms">
                                            <option v-for="formTemplate in formTemplatesList" v-bind:value="'form_#' + formTemplate.id + '#' + formTemplate.name">{{formTemplate.name}}</option>
                                          </optgroup>
                                          <optgroup label="Tabular Forms">
                                            <option v-for="formTemplate in tabularFormTemplatesList" v-bind:value="'tabular_form#' + formTemplate.id + '#' + formTemplate.name">{{formTemplate.name}}</option>
                                          </optgroup>
                                      </select>
                                      <div style="position:absolute;right: 7px;top: 9px;pointer-events: none;"><span class="uk-icon" uk-icon="triangle-down"></span></div>
                                  </div>
                              </div>
                              <div v-if="currentlySelectedCategoryProcess!==null && currentlySelectedCategoryProcess.statuses.length>0" >
                                <label class="uk-form-label" for="form-stacked-text" >Required for Completing Stage ?</label>
                                <select v-model="newFormTemplate.stageId" class="uk-select">
                                  <option value="none">Not tied to any stage</option>
                                  <template v-for="categoryStage,idx in currentlySelectedCategoryProcess.statuses">
                                    <option v-bind:value="categoryStage.id" v-if="categoryStage.isConsideredComplete !== 'Y'">Required to complete stage - {{categoryStage.name}}</option>
                                  </template>
                                </select>
                              </div>
                              <div style="display: flex;align-self: flex-end;">
                                  <button tabindex="7"
                                    class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button"
                                    style="background-color: rgb(233, 30, 99);border-radius: 2px;place-self: center start;place-items: center;min-width: 75px;height: 37px;font-size: 0.65rem;line-height: 32px;font-weight: normal !important;"
                                     id="attachFormTemplateButton" v-on:click="attachFormToThisTask()"  >{{saveFormAttachmentButtonLabel}}</button>
                              </div>
                            </form>
                        </div>
                        <div  v-show="attachedForms.length>0"  class="attachedFormTemplate_row" style="background: #f2f2f2;border: 1px solid transparent;border-bottom: 0px;text-transform: uppercase;font-size: 0.55rem;;margin-top: 20px;">
                            <div  style=";justify-self: end;flex-basis: 40%;">Form Name</div>
                            <div  style="color: rgb(51, 51, 51);flex-basis: 15%;">Attached on</div>
                            <div  style="color: rgb(51, 51, 51);flex-basis: 15%;">Attached by</div>
                            <div  style="color: rgb(51, 51, 51);flex-basis: 15%;">Assigned to</div>
                            <div  style="color: rgb(51, 51, 51);flex-basis: 15%;">Actions</div>
                        </div>
                        <div v-show="attachedForms.length>0"  class="activity_box" style="display: flex;box-sizing: border-box;width: auto;flex-direction: column;">

                            <template v-for="attachedFormTemplate,idx in attachedForms">

                                <div class="attachedFormTemplate_row" style="width: auto;">
                                  <div style="font-weight:normal;flex-basis: 40%;" >
                                    <a uk-tooltip="title:Click to edit form attachment info;pos:right" v-on:click="editFormAttachment(attachedFormTemplate, attachedFormTemplate.formTemplateId, attachedFormTemplate.formTemplateName)">{{idx+1}}. {{attachedFormTemplate.formTemplateName}} </a>
                                    <span v-if="attachedFormTemplate.stageName !== null" style="margin-left:20px;background: #e3e3e3;padding: 3px 5px;border-radius: 25px;">Stage - {{attachedFormTemplate.stageName}}</span>
                                  </div>
                                  <div style="color:#333;flex-basis: 15%;">{{attachedFormTemplate.createdOn}}</div>
                                  <div style="color:#333;flex-basis: 15%;"><span v-if="attachedFormTemplate.attachedByInfo!==undefined && attachedFormTemplate.attachedByInfo!==null">{{attachedFormTemplate.attachedByInfo.split("#")[1]}}</span></div>
                                  <div style="color:#333;flex-basis: 15%;">
                                    <span v-if="attachedFormTemplate.assigneeInfo!==undefined && attachedFormTemplate.assigneeInfo!==null && attachedFormTemplate.assigneeInfo!=='any'">{{attachedFormTemplate.assigneeInfo.split("#")[1]}}</span>
                                    <span v-if="attachedFormTemplate.assigneeInfo!==undefined && attachedFormTemplate.assigneeInfo!==null && attachedFormTemplate.assigneeInfo==='any'">Any</span>
                                  </div>
                                  <div  style="display:flex;column-gap:5px;flex-basis: 15%;">
                                    <div style="display:flex;column-gap:5px;align-items:center;justify-content:center">
                                      <span uk-tooltip="Edit Form Attachment" uk-icon="icon:pencil;ratio:0.85" class="uk-button updateTaskInfoTrigger" v-on:click=""></span>
                                      &nbsp;&nbsp;
                                    </div>
                                    <a v-on:click="editFormAttachment(attachedFormTemplate, attachedFormTemplate.formTemplateId, attachedFormTemplate.formTemplateName)">Edit</a>&nbsp;|&nbsp;<a v-on:click="removeFormAttachment(attachedFormTemplate)">Remove</a>
                                  </div>
                                </div>

                            </template>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Task Forms Configuration ends here-->
              </div>

          </div>
      </div>


    </div>
</template>


<script>



import userMixinLib               from './../../mixins/lib/user_mixin_lib';
import utilsMixinLib              from './../../mixins/lib/utils_lib';
import uiListMixinLib             from './../../mixins/lib/ui-list.js';

import categoryStagesMixin        from './category-stages.js';    // To avoid mixing codes of Category and Its Child Data (CategoryStages) in the same VueJS file.
import categoryProcessesMixin     from './category-processes.js'; // To avoid mixing codes of Category and Its Child Data (CategoryProcesses) in the same VueJS file.

    export default{
        mixins :    [
                        userMixinLib,
                        utilsMixinLib,
                        uiListMixinLib,
                        categoryStagesMixin,
                        categoryProcessesMixin
                    ],
        props: ["id"],
        data: function () {
            return {
                appName: "taskone",
                tenantName : this.$route.params.tenant_name,
                showAdvancedSettings : false,
                categoryObject :{
                    id : this.id,
                    type : null,
                    status : null,
                    memberIds : [],
                    adminIds : [],
                },
                availableMembers : [],
                availableAdmins : [],
                currentlySelectedCategoryProcess : null,
                showTransitionStateForm : false,
                transitionFormLabel : "Define New Task Status",
                saveTaskStatusButtonLabel : "Add",
                saveFormAttachmentButtonLabel : "Add",
            };
        },
        methods: {
            closeCategoryProcessWizardModal(){
              UIkit.modal(document.querySelector("#category-process-wizard-modal")).hide();
            },
            openProcessDetailModal(categoryProcess){


                let categoryProcessId = categoryProcess.id;

                if(categoryProcess.checklist === null)
                  categoryProcess.checklist = [];

                this.currentlySelectedCategoryProcess = categoryProcess;
                this.loadCategoryStagesForCategory(this.currentlySelectedCategoryProcess);
                this.fetchAllFormTemplates();
                this.fetchAllTabularFormTemplates();
                this.fetchFormTemplatesAttachedToProcess();

                //this.getCategoryStageRecord();
                UIkit.modal(document.querySelector("#category-process-wizard-modal")).show();
            },
            openProcessDetail(categoryProcess){

                let categoryProcessId = categoryProcess.id;
                this.currentlySelectedCategoryProcess = categoryProcess;
                let isCategoryProcessStatusesListOpen = document.getElementById("process_status_list_" + categoryProcessId).classList.contains("is-process-statuses-list-open");

                document.querySelectorAll(".category-process-row.selected-process").forEach((el)=>{ el.classList.remove("selected-process"); });
                document.querySelectorAll(".category-process-statuses-container").forEach((el)=>{ el.classList.add("hide-process-statuses-list"); });
                document.querySelectorAll(".rotate90deg").forEach((el)=>{ el.classList.remove("rotate90deg"); });
                document.querySelectorAll(".is-process-statuses-list-open").forEach((el)=>{ el.classList.remove("is-process-statuses-list-open"); });

                if(!isCategoryProcessStatusesListOpen)
                {
                    //alert("categoryProcessId " + categoryProcessId + " needs to be opened");
                    document.getElementById("process_status_list_" + categoryProcessId).classList.remove("hide-process-statuses-list");
                    document.getElementById("process_status_list_" + categoryProcessId).classList.add("is-process-statuses-list-open");
                    document.getElementById("process_name_icon_" + categoryProcessId).classList.add("rotate90deg");
                    document.getElementById("category_process_row_" + categoryProcessId).classList.add("selected-process");

                    // Fetch the existing category-stages for this category.
                    this.loadCategoryStagesForCategory(categoryProcess);
                }
                else{
                  //alert("categoryProcessId " + categoryProcessId + " needs to be closed");
                }

            },
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
                    isDefaultCategory : this.categoryObject.isDefaultCategory
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
                                                        <div>Category updated  successfully. </div>
                                                    </div>`, {
                                                    status: 'success',
                                                    pos: 'bottom-left',
                                                    timeout: 5000
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
                else if(listKey === "potentialAssignees")
                  this.handlePotentialAssignees(data);            //--> This function is located in the category-stages.js mixin.
                else if(listKey === "categoryStages")
                  this.handleFetchedCategoryStages(data);
                else if(listKey === "categoryProcesses")
                    this.handleFetchedCategoryProcesses(data);
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

                let categoryMembers=[];
                let categoryAdmins = [];
                mappedArrayOfUser.forEach((user)=>{

                    let userObj = {
                        id : user.id,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        isSelected : false // Set false by default, so that if the category didn't have any member, then all of the available list could be passed to selectbox.
                    };

                    this.categoryObject.memberIds.forEach((memberId)=>{
                          if(userObj.id===memberId)
                            userObj["isSelected"] = true;
                    });
                    categoryMembers.push(userObj);
                });

                mappedArrayOfUser.forEach((user)=>{

                    let userObj = {
                        id : user.id,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        isSelected : false // Set false by default, so that if the category didn't have any member, then all of the available list could be passed to selectbox.
                    };

                    this.categoryObject.adminIds.forEach((adminId)=>{
                          if(user.id===adminId)
                            userObj["isSelected"] = true;
                    });
                    categoryAdmins.push(userObj);
                });

                this.availableMembers = categoryMembers;
                this.availableAdmins = categoryAdmins;

                console.log("this.availableMembers : ", this.availableMembers);
                console.log("this.availableAdmins : " , this.availableAdmins);
            },
            getRecord(){

                let get_url = "./categories/get/" + this.categoryObject.id;

                axios.get(get_url)
                        .then((dataResponse) => {
                            if(dataResponse.data["actionResult"]==1)
                            {
                                let categoryObject = dataResponse.data["bean"];
                                    console.log("isDefaultCategory = " + categoryObject.isDefaultCategory);
                                this.categoryObject = categoryObject;
                                this.loadPotentialUsers();

                                this.loadPotentialCategoryStageAssignees();   //Pull this info for advanced-settings.

                                this.resetAdvancedSettings();                 // This is required if user clicks on other category in the list to edit, then this form must show its advanced settings.
                                this.openAdvancedSettings();
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

            //CategoryStages related codes
            openAdvancedSettings(){
                this.showAdvancedSettings = true; //!this.showAdvancedSettings;

                if(this.showAdvancedSettings)
                {
                    this.loadCategoryProcessesForCategory();


                }

            },
            resetAdvancedSettings(){
                this.showAdvancedSettings = false;
                this.categoryStages = [];
                this.categoryStage = {};
                this.availableAssignees = [];

            },
            discardTransitionStateFormData(){
                this.showTransitionStateForm = false;
            },
            addCategoryStage(categoryProcessId){


                this.categoryStage = {
                    id : "new",
                    categoryProcessId : categoryProcessId,
                    availableAssignees : this.availableAssignees,   // This 'availableAssignees' data is fetched from the mixin code thats called in this file's getRecord() callback 'loadPotentialCategoryStageAssignees()'
                };

                //UIkit.modal(document.querySelector("#category-stages-modal")).show();
                this.showTransitionStateForm = true;
            },
            editCategoryStage(categoryStageId){

                this.saveTaskStatusButtonLabel = "Modify";
                this.categoryStage = {
                  id: categoryStageId
                };

                this.getCategoryStageRecord();
                //UIkit.modal(document.querySelector("#category-stages-modal")).show();
                //this.showTransitionStateForm = true;
            },
            addCategoryProcess(){
                this.categoryProcess = {
                    id : "new",
                };
                UIkit.modal(document.querySelector("#category-processes-modal")).show();
            },
            editCategoryProcess(categoryProcessId){

                this.categoryProcess = {
                  id: categoryProcessId
                };

                this.getCategoryProcessRecord();
                UIkit.modal(document.querySelector("#category-processes-modal")).show();
            }
        },
        mounted: function () {



        },
        created: function () {
            console.log("Edit category form");
        },
        watch: {

          // Since we are passing an asynced data as 'availableItems', it is necessary to watch this prop when it receives new data.
          id:function(newId, oldId){
            console.log("id changed from " + oldId + " to " + newId);
            this.categoryObject.id = newId;
            this.getRecord();
          }
        }
    }

</script>
