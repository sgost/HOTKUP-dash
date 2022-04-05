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
                      Edit User
                     </span>
                  </div>
              </div>
              <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
              </div>
          </div>

          <div class="" style="padding-top: 30px;padding-left: 50px;padding-right: 50px;">

              <form autocomplete="off" class="uk-grid-small uk-grid edit-user-form" uk-grid onsubmit="return false;">

                <!--
                  <div class="uk-width-1-1 uk-first-column">
                      <label class="uk-form-label" for="form-stacked-text" style="font-size: 1rem;font-weight: bold;letter-spacing: 1px;text-transform: none;">Edit TenantUser</label>
                  </div>

                  <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                    <hr class="uk-divider-icon">
                  </div>

                -->

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">First Name</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="1" id="firstName" type="text" class="uk-input"  placeholder=""  v-model="tenantUserObject.firstName" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Last Name</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="2" id="lastName" type="text" class="uk-input"  placeholder=""  v-model="tenantUserObject.lastName" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>

                  <div class="uk-width-1-2@s uk-grid-margin uk-first-column ">
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <input tabindex="3" id="email" type="text" class="uk-input"  placeholder=""  v-model="tenantUserObject.email" style="font-family: Lato;font-weight: 300;" autofocus="true">
                          </div>
                      </div>
                  </div>
                  <div class="uk-width-1-2@s uk-grid-margin"></div>

                  <div  class="uk-width-1-2@s uk-grid-margin uk-first-column">
                      <label class="uk-form-label" for="form-stacked-text">Status</label>
                      <div class="uk-form-controls">
                          <div class="uk-inline uk-width-1-1">
                              <select  tabindex="4" id="status" class="uk-select" v-model="tenantUserObject.status" style="font-family: Lato;font-weight: 300;height: 35px;">
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


            <div><br><hr></div>
            <div class="" style="padding-top: 30px;padding-left: 50px;padding-right: 50px;">
                <div style="font-size:1rem;font-weight:bold;letter-spacing:0.5px;">Password Reset option </div>
                <div>(Clicking on the button below will email the password verification code and link to reset password.)</div>
                <div><hr></div>
                <div class="uk-margin uk-grid-margin uk-first-column">
                    <div class="uk-inline">
                        <a tabindex="6" id="sendPasswordResetMailButton" class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: #e91e63; border-radius: 2px; place-self: center start; place-items: center; min-width: 100px; font-size: 0.65rem; line-height: 32px; font-weight: normal !important;" v-on:click="sendPasswordResetMail()" >Send Password Reset Email</a>
                        &nbsp;&nbsp;&nbsp;
                        <!--<a tabindex="7" class="clickable-btn uk-button uk-button-danger uk-button-small uk-first-column end-call-button" style="background-color: rgba(253, 253, 253, 0.99); color: rgb(111, 111, 111); border: 1px solid rgb(183, 183, 183); border-radius: 3px; place-self: center start; place-items: center; min-width: 100px; font-size: 0.65rem; line-height: 32px; font-weight: normal !important;" v-on:click="goBack()" >Exit</a>-->
                    </div>
                </div>
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
                tenantUserObject :{
                    id : this.id,
                    firstName : null,
                    lastName : null,
                    status : null,
                    email : null
                }
            };
        },
        methods: {
            sendPasswordResetMail () {

                let btnText = document.getElementById("sendPasswordResetMailButton").innerHTML;
                document.getElementById("sendPasswordResetMailButton").innerHTML = "Sending Mail..";
                this.disableHTMLElement(document.getElementById("sendPasswordResetMailButton"));

                let post_url = "./users/save-password-reset-mail";
                console.log("Posting data to : " + post_url);

                  let form = {
                      id :      this.tenantUserObject.id
                  }

                  console.log("Form data : ", form);

                  // VueJS ajax call-1
                  axios.post(post_url, form)
                            .then((dataResponse) => {

                              console.log("TenantUser Password reset mail sending Result : ");
                              console.log(dataResponse);

                              if(dataResponse.data["actionResult"]===1)
                              {
                                  this.newTenantUserInfo = dataResponse.data["bean"];

                                  UIkit.notification(`<div class="taskone-notification">
                                                          <span uk-icon="icon: check;ratio:1"></span>
                                                          <div> Password reset email sent successfully. </div>
                                                      </div>`, {
                                                      status: 'success',
                                                      pos: 'bottom-left',
                                                      timeout: 500000
                                                  });

                                  document.getElementById("sendPasswordResetMailButton").innerHTML = btnText;
                                  this.enableHTMLElement(document.getElementById("sendPasswordResetMailButton"));
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


                                  document.getElementById("sendPasswordResetMailButton").innerHTML = btnText;
                                  this.enableHTMLElement(document.getElementById("sendPasswordResetMailButton"));
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


                          document.getElementById("sendPasswordResetMailButton").innerHTML = btnText;
                          this.enableHTMLElement(document.getElementById("sendPasswordResetMailButton"));
                          return false;
                      });
            },
            goBack(){
              this.$router.push({
                  name: 'tenantUsers-list',
                  params: {
                  }
              });
            },
            doValidation(){

                console.log("this.tenantUserObject = ", this.tenantUserObject);
                if(this.tenantUserObject.firstName.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid first name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      document.querySelector(".create-new-user-form #firstName").focus();
                      return false;
                }
                else if(this.tenantUserObject.lastName.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid last name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      document.querySelector(".create-new-user-form #lastName").focus();
                      return false;
                }
                else if(this.tenantUserObject.email.trim()==="")
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid email.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      document.querySelector(".create-new-user-form #email").focus();
                      return false;
                }
                else if(this.tenantUserObject.email.trim()!=="")
                {


                      if(this.tenantUserObject.email.trim().includes("@") &&
                        !this.tenantUserObject.email.trim().split("@")[1].includes("."))
                      {
                        UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please enter a valid email.", {
                                            status: 'danger',
                                            pos: 'bottom-left',
                                            timeout: 5000
                                        });


                        document.querySelector(".create-new-user-form #email").focus();
                        return false;
                      }

                      if(this.tenantUserObject.email.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)===null)
                      {
                        UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please enter a valid email.", {
                                            status: 'danger',
                                            pos: 'bottom-left',
                                            timeout: 5000
                                        });

                        document.querySelector(".create-new-user-form #email").focus();
                        return false;
                      }
                }
                else if(this.tenantUserObject.status===null)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid account status.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      document.querySelector(".create-new-user-form #status").focus();
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

                let post_url = "./users/save-info";
                console.log("Posting data to : " + post_url);

                let form = {
                    id :      this.tenantUserObject.id,
                    firstName :   this.tenantUserObject.firstName,
                    lastName :   this.tenantUserObject.lastName,
                    status  :   this.tenantUserObject.status,
                    email :this.tenantUserObject.email
                }

                console.log("Form data : ", form);

                // VueJS ajax call-1
                axios.post(post_url, form)
                          .then((dataResponse) => {

                            console.log("TenantUser Registration Result : ");
                            console.log(dataResponse);

                            if(dataResponse.data["actionResult"]===1)
                            {
                                this.newTenantUserInfo = dataResponse.data["bean"];

                                UIkit.notification(`<div class="taskone-notification">
                                                        <span uk-icon="icon: check;ratio:1"></span>
                                                        <div> Tenant User modified successfully. </div>
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

            // Handle the events emitted when selectbox component values are modified.
            updateMembersEmitEvent(data){
                const memberIds = Array.from(data).map(item => item.id);
                this.tenantUserObject["memberIds"] = memberIds;
            },
            updateAdminsEmitEvent(data){
                const adminIds = Array.from(data).map(item => item.id);
                this.tenantUserObject["adminIds"] = adminIds;
            },
            getRecord(){

                let get_url = "./users/get/" + this.tenantUserObject.id;

                axios.get(get_url)
                        .then((dataResponse) => {
                            if(dataResponse.data["actionResult"]==1)
                            {
                                let tenantUserObject = dataResponse.data["bean"];
                                this.tenantUserObject = tenantUserObject;
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
            console.log("Edit tenantUser form");
        },
        watch: {

          // Since we are passing an asynced data as 'availableItems', it is necessary to watch this prop when it receives new data.
          id:function(newId, oldId){
            console.log("id changed from " + oldId + " to " + newId);
            this.tenantUserObject.id = newId;
            this.getRecord();
          }
        }
    }

</script>
