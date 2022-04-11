// Methods related to Category-Processes functionality on March 21, 2021 by C.Bhaskara Vignesh.

export default
{
  data: function () {
      return {
        categoryProcesses : [],
        categoryProcess : {},


        // Checklist data
        checklistLabel : "Add Item",
        checklistItem : {"actionType" : "NEW"},

        // Forms Attachment data
        isFormTemplateRendered: false,
        newFormTemplate : {
          assigneeInfo : "any"
        },
        formTemplatesList : [],
        tabularFormTemplatesList : [],
        attachedForms : [],
        availableDependencySubtasks :[],
        currentlySelectedSubtaskForDependencyUpdate : null,
        attachmentIdToBeEdited : null,
        attachmentFormTemplateIdToBeEdited : null,
        attachmentFormTemplateNameToBeEdited : null,
        formTemplateObject : {},
        chosenFormDataMap : {},
        currentFormToBeSubmitted : {}
      }
  },
  methods: {

    doCategoryProcessValidation(){

        console.log("this.categoryProcess = ", this.categoryProcess);
        if(this.categoryProcess.name.trim()==="")
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
        return true;
    },
    saveCategoryProcess(){

        if(!this.doCategoryProcessValidation())
            return false; // stop here if form is invalid.


        let btnText = document.getElementById("saveButtonModal2").innerHTML;
        document.getElementById("saveButtonModal2").innerHTML = "Saving..";
        this.disableHTMLElement(document.getElementById("saveButtonModal2"));

        let post_url = "./category-processes/save";
        console.log("Posting data to : " + post_url);

        let isNewItem = this.categoryProcess.id=="new";
        let form = {
            id :      this.categoryProcess.id,
            categoryId : this.categoryObject.id,    // The parent category's id (Ref.)
            name :   this.categoryProcess.name,
        };

        // VueJS ajax call-1
        axios.post(post_url, form)
                  .then((dataResponse) => {

                    console.log("CategoryProcess Registration Result : ");
                    console.log(dataResponse);

                    if(dataResponse.data["actionResult"]===1)
                    {
                        this.newCategoryInfo = dataResponse.data["bean"];

                        let successMessage = "";
                        if(isNewItem){

                            successMessage = `<div class="taskone-notification">
                                                    <span uk-icon="icon: check;ratio:1"></span>
                                                    <div> New Process added successfully. </div>
                                              </div>`;
                        }
                        else {

                            successMessage = `<div class="taskone-notification">
                                                    <span uk-icon="icon: check;ratio:1"></span>
                                                    <div> Process modified successfully. </div>
                                              </div>`;
                        }

                        UIkit.notification(successMessage, {
                                            status: 'success',
                                            pos: 'bottom-left',
                                            timeout: 500000
                                        });

                        document.getElementById("saveButtonModal2").innerHTML = btnText;
                        this.enableHTMLElement(document.getElementById("saveButtonModal2"));


                        //this.$emit("refreshList",{});         // Refresh the List that pulls the category-stages for this category. (To be done..)
                        this.loadCategoryProcessesForCategory();   // This code will refresh the stages-list.
                    }
                    else
                    {
                        let errorMsg = (dataResponse["data"])["message"];
                        UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                            status: 'danger',
                                            pos: 'top-right',
                                            timeout: 5000
                                        });


                        document.getElementById("saveButtonModal2").innerHTML = btnText;
                        this.enableHTMLElement(document.getElementById("saveButtonModal2"));
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


                document.getElementById("saveButtonModal2").innerHTML = btnText;
                this.enableHTMLElement(document.getElementById("saveButtonModal2"));
                return false;
            });
    },
    getCategoryProcessRecord(){

        let get_url = "./category-processes/get/" + this.categoryProcess.id;

        axios.get(get_url)
                .then((dataResponse) => {
                    if(dataResponse.data["actionResult"]==1)
                    {
                        let categoryProcess = dataResponse.data["bean"];
                        this.categoryProcess = categoryProcess;
                        //this.loadPotentialCategoryStageAssignees();
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
    loadCategoryProcessesForCategory(){
        let url = "./category-processes/list/all/" + this.categoryObject.id;   // Fetch all potential assignees (users)
        this.getUnpaginatedList("categoryProcesses", url);                   // This lib call will fire the callback "handleUnpaginatedListData" when it completes.
    },
    handleFetchedCategoryProcesses(dataResponse){
        let categoryProcesses = dataResponse.data; //.bean;
            categoryProcesses.forEach(process => {
              process["statuses"] = [];
            });
        console.log("---Category Processes are ", categoryProcesses);
        this.categoryProcesses = categoryProcesses;
    },

    updateChecklistItem(item){
        this.checklistLabel = "Update Item";
        this.checklistItem = item;

        if(item.stageId !== null && item.stageId !== undefined) {
          this.checklistItem.stage = item.stageId + "#" + item.stageName;
        }

        this.checklistItem["actionType"] = "UPDATE";
        this.checklistItem.previousActivityName = item.activityName;  //This is the key to update
    },
    saveChecklistItem(categoryProcessId){

        let post_url = "./category-processes/save-checklist-item";

        let form = {
            categoryProcessTemplateId : categoryProcessId,
            actionType :      this.checklistItem.actionType,
            activityName :   this.checklistItem.activityName,
            previousActivityName : this.checklistItem.previousActivityName,
        }

        // alert(this.checklistItem.stage);
        let stage = null;
        if (this.checklistItem.stage !== 'none') {
          form["stageId"] = this.checklistItem.stage.split("#")[0];

          // To display the stage name in the UI list immediately after adding.
          stage = {
                    id : this.checklistItem.stage.split("#")[0],
                    name: this.checklistItem.stage.split("#")[1]
              };
        }

        console.log("Checklist Form : ", form);
        console.log("this.currentlySelectedCategoryProcess checklist before save", this.currentlySelectedCategoryProcess["checklist"]);


        // VueJS ajax call-1
        axios.post(post_url, form)
                  .then((dataResponse) => {

                    console.log("Process Checklist Save Result : ");
                    console.log(dataResponse);

                    if(dataResponse.data["actionResult"]===1)
                    {
                        if(dataResponse.data["bean"].first!==null &&
                           dataResponse.data["bean"].first.checklistItems!==null &&
                           dataResponse.data["bean"].first.checklistItems.length>0)
                         {
                            let addedItem = dataResponse.data["bean"].first.checklistItems[0];

                            // Get the current item from the existing list and update it, otherwise add new item.
                            if(form.actionType === "NEW")
                            {
                                if(this.currentlySelectedCategoryProcess["checklist"]===null)
                                    this.currentlySelectedCategoryProcess["checklist"] = [];

                                const newlyAddedChecklistItem = {
                                    activityName : addedItem.label,
                                    status : "NEW",
                                };

                                if (stage !== null) {
                                    newlyAddedChecklistItem.stageId = stage.id;
                                    newlyAddedChecklistItem.stageName = stage.name;
                                }

                                this.currentlySelectedCategoryProcess["checklist"].push(newlyAddedChecklistItem);

                            }
                            else if(form.actionType === "UPDATE")
                            {
                                // Iterate through the existing items and change its value.
                                this.currentlySelectedCategoryProcess["checklist"].forEach((item)=>{

                                    if(form.previousActivityname === item.activityName)
                                    {
                                        item.activityName = addedItem.label;

                                        if (stage !== null) {
                                            item.stageId = stage.id;
                                            item.stageName = stage.name;
                                        }
                                    }

                                });
                            }
                         }


                        console.log("this.currentlySelectedCategoryProcess checklist after save", this.currentlySelectedCategoryProcess["checklist"]);

                        this.checklistItem = {"actionType" : "NEW"};
                        this.checklistLabel = "Add Item";

                        let notificationLabel = (this.checklistItem["actionType"] === "UPDATE")? "Checklist item updated." : "Checklist item added.";

                        UIkit.notification(`<div class="taskone-notification">
                                                <span uk-icon="icon: check;ratio:1"></span>
                                                <div> ${notificationLabel} </div>
                                            </div>`, {
                                            status: 'success',
                                            pos: 'bottom-left',
                                            timeout: 5000
                                        });

                        this.loadCategoryProcessesForCategory();
                        //this.$emit("refreshList",{});
                    }
                    else
                    {
                        let errorMsg = (dataResponse["data"])["message"];
                        UIkit.notification("<span uk-icon='icon: warning;ratio:1'></span>" + errorMsg, {
                                            status: 'danger',
                                            pos: 'bottom-left',
                                            timeout: 5000
                                        });
                        return false;
                    }


            })
            .catch(function(errorResponse) {

                console.log("ERROR MS - ", errorResponse);
                let exceptionMsg = errorResponse.data["exception"];

                UIkit.notification("<span uk-icon='icon: warning ;ratio:1'></span> " + exceptionMsg + ".", {
                                    status: 'danger',
                                    pos: 'bottom-left',
                                    timeout: 5000
                                });


                document.getElementById("saveButton").innerHTML = btnText;
                this.enableHTMLElement(document.getElementById("saveButton"));
                return false;
            });
    },

    /* Form Templates */
    fetchAllFormTemplates(){

        let url = "./task-form-templates/list/all";
        this.formTemplatesList = [];
        try
        {
            // VueJS ajax call-1
            axios.get(url)
                .then((dataResponse) => {
                      console.log("Notification List: " , dataResponse);
                      let list = dataResponse.data.bean;
                      this.formTemplatesList = [];

                      list.forEach((item) => {

                          if(item.createdOn !== null)
                          {
                              item.createdOn = new Date(item.createdOn).toLocaleString()
                                                                       .slice(0, 17)
                                                                       .replace(',', '')
                                                                       .replace('T',' ');
                          }

                          item.hide = false;
                          this.formTemplatesList.push(item);
                      });

                })
                .catch((error) => {
                    console.error("fetchNotifications Error : ", error);
                });
        }
        catch(error)
        {
            console.error("Unpaginated List data fetch error : ", error);
        }
    },
    fetchAllTabularFormTemplates () {
      const url = './task-tabular-form-templates/list/all';
      try {
        // VueJS ajax call-1
        axios.get(url)
          .then((dataResponse) => {
            console.log('Tabular Forms List: ', dataResponse);
            const list = dataResponse.data.bean;
            this.tabularFormTemplatesList = [];

            list.forEach((item) => {
              if (item.createdOn !== null) {
                item.createdOn = new Date(item.createdOn).toLocaleString()
                  .slice(0, 17)
                  .replace(',', '')
                  .replace('T', ' ');
              }

              item.hide = false;
              this.tabularFormTemplatesList.push(item);
            });
          })
          .catch((error) => {
            console.error('fetchNotifications Error : ', error);
          });
      } catch (error) {
        console.error('Unpaginated List data fetch error : ', error);
      }
    },

    attachFormToThisTask(){

      let btnText = document.getElementById("attachFormTemplateButton").innerHTML;
      document.getElementById("attachFormTemplateButton").innerHTML = "Saving..";
      this.disableHTMLElement(document.getElementById("attachFormTemplateButton"));

          let post_url = "./category-processes/attach";
          console.log("Saving new process-template to : " + post_url);

          let form = {
              id :   (this.attachmentIdToBeEdited===undefined || this.attachmentIdToBeEdited===null) ? "new" : this.attachmentIdToBeEdited,
              categoryProcessId : this.currentlySelectedCategoryProcess.id,    // The parent category's id (Ref.)
              // formTemplateId : this.newFormTemplate.formTemplateInfo.split("#")[1],
              formTemplateName : this.newFormTemplate.formTemplateInfo.split("#")[2],
              assigneeInfo     : this.newFormTemplate.assigneeInfo,
          };

          // The below logic determines if the attached form is just a normal_form or a tabular_form.
          // While rendering the form for submission or viewing data,
          //       if formTemplateId is not null, then its a normal_form render
          //    or if tabularFormTemplateId is not null, then its a tabular_form render
          const formType = this.newFormTemplate.formTemplateInfo.startsWith("tabular_form") ? "tabular_form" : "form";
          if (formType === "tabular_form") {
            form["tabularFormTemplateId"] = this.newFormTemplate.formTemplateInfo.split('#')[1];
          } else {
            form["formTemplateId"] = this.newFormTemplate.formTemplateInfo.split('#')[1];
          }

          if (this.newFormTemplate.stageId !== 'none') {
            form["stageId"] = this.newFormTemplate.stageId;
          }

          // VueJS ajax call-1
          axios.post(post_url, form)
                .then((dataResponse) => {

                  console.log("FormTemplate attachment result : ");
                  console.log(dataResponse);

                  if(dataResponse.data["actionResult"]===1)
                  {
                      this.newTenantUserInfo = dataResponse.data["bean"];

                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: check;ratio:1"></span>
                                              <div> Form Template attached successfully. </div>
                                          </div>`, {
                                          status: 'success',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      document.getElementById("attachFormTemplateButton").innerHTML = btnText;
                      this.enableHTMLElement(document.getElementById("attachFormTemplateButton"));


                      this.newFormTemplate.formTemplateInfo = null;
                      this.saveFormAttachmentButtonLabel = "Add";
                      //this.closeFormTemplateAttachmentModal();
                      this.fetchFormTemplatesAttachedToProcess();
                      //this.$emit("refreshList",{});
                  }
                  else if(dataResponse.data["actionResult"]===0 && dataResponse.data["message"]!==null)
                  {
                      let errorMsg = (dataResponse["data"])["message"];
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });


                      document.getElementById("attachFormTemplateButton").innerHTML = btnText;
                      this.enableHTMLElement(document.getElementById("attachFormTemplateButton"));
                      return false;
                  }
                  else if(dataResponse.data["actionResult"]===0 && dataResponse.data["exception"]!==null)
                  {
                      let errorMsg = (dataResponse["data"])["exception"];
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });


                      document.getElementById("attachFormTemplateButton").innerHTML = btnText;
                      this.enableHTMLElement(document.getElementById("attachFormTemplateButton"));
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
                                    timeout: 5000
                                });


                document.getElementById("attachFormTemplateButton").innerHTML = btnText;
                this.enableHTMLElement(document.getElementById("attachFormTemplateButton"));
                return false;
          });
    },
    fetchFormTemplatesAttachedToProcess(){

        console.log("fetchFormTemplatesAttachedToTask called..");

        let url = "./category-processes/list-attached-forms/" + this.currentlySelectedCategoryProcess.id;
        try
        {
            // VueJS ajax call-1
            axios.get(url)
                .then((dataResponse) => {

                      this.attachedForms = [];
                      console.log("FormTemplate Attachment List: " , dataResponse);
                      let list = dataResponse.data.bean;

                      list.forEach((item) => {

                          if(item.createdOn !== null)
                          {
                              item.createdOn = new Date(item.createdOn).toLocaleString()
                                                                       .slice(0, 17)
                                                                       .replace(',', '')
                                                                       .replace('T',' ');
                          }

                          item.hide = false;

                          if (item["formTemplateId"] !== null && item["formTemplateId"] !== undefined ) {
                            item["formTemplateId"] = "form_#" + item.formTemplateId;
                          }
                          else if (item["tabularFormTemplateId"] !== null && item["tabularFormTemplateId"] !== undefined ) {
                            item["formTemplateId"] = "tabular_form#" + item.tabularFormTemplateId;
                          }

                          this.attachedForms.push(item);
                      });

                })
                .catch((error) => {
                    console.error("FormTemplate Attachment Fetch Error : ", error);
                });
        }
        catch(error)
        {
            console.error("Unpaginated List data fetch error : ", error);
        }
    },
    editFormAttachment(attachmentInfo, attachedFormTemplateId, attachedFormTemplateName){
      console.log(attachmentInfo, attachedFormTemplateId, attachedFormTemplateName);
      this.saveFormAttachmentButtonLabel = "Modify";
      this.attachmentIdToBeEdited = attachmentInfo.id;
      this.newFormTemplate.formTemplateInfo = attachedFormTemplateId + "#" + attachedFormTemplateName;
      this.newFormTemplate.assigneeInfo     = attachmentInfo.assigneeInfo;
    },
  }
}
