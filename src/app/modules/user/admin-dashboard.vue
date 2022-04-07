<style scoped>

  .conf_card{
    background-color: #fff;
    border-radius: 1px;
    padding: 7px 12px;
    border-bottom: 0.05em solid rgb(229, 229, 229);
    display: inline-block;
    grid-template-columns: 1fr;
    font-weight: 400;
    margin-left: 0px;
    margin-right: 0px;
    position: relative;
    gap: 20px;

    transition: all 0.2s linear;
    border: 0.05em solid #cccaca !important;
    box-shadow: inset rgba(0, 0, 0, 0.08) 0px -1px 7px 0px;
    min-width: 65%;
  }

  .conf_card:hover{
    background-color:whitesmoke;
  }

  .card_button {
      font-size: 0.60rem;
      line-height: 26px !important;
      height: 30px;
      cursor: pointer;
      background-color: #03A9F4;
      padding: 0px 0px !important;
      border: 0.05em solid #03A9F4;
      font-weight: normal !important;
      color: #fdfdfd !important;
      /*transition: all 0.2s linear;*/
      border-radius: 1px;
  }

  .card_button_disabled{
    background-color: #c3c8ca !important;
    border: 0.05em solid #c3c8ca !important;
    pointer-events:none !important;
  }

  .adk_conf_notification{
    background-color: #fff;
    border-radius: 1px;

    padding: 7px 12px;
    border-bottom: 0.05em solid rgb(229, 229, 229);
    display: inline-block;
    grid-template-columns: 1fr;
    font-weight: 400;
    margin-left: 0px;
    margin-right: 0px;
    position: relative;
    gap: 20px;

  }

  .shortcut{
    padding: 10px;
    -webkit-user-drag: none;user-drag:none;user-select:none;
  }

  /* Show that pressed effect */
  .shortcut:active{
    cursor:pointer;
  }

  .shortcut *{
    -webkit-user-drag: none;user-drag:none;user-select:none;
  }

  .shortcut:hover{
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    transform: rotate(360);
  }

  .left_panel {
    overflow-x: hidden;
    display: grid;
    grid-template-rows: 1fr 50px 1fr;
    place-items: inherit;
    overflow-y: hidden;
    padding: 20px;
    box-sizing: border-box;
}

</style>

<template>

<div class="app_container" style="background:#fff;">

    <div class="desktop fade_in_container" style="width: 100%;display: grid;grid-template-columns: 1fr;grid-template-rows: 1fr;gap: 20px;overflow-y: hidden;;opacity:0;transition:opacity 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) 0s"  id="home_page">

        <div class="desktop_container first_column_scrollable custom-scroll-bar" style="overflow-x: hidden;grid-template-columns:1fr;overflow-y: overlay;">


            <div class="left_panel">

                <div class="">
                    <div class="left_panel_title_1" style="display: grid;">
                        <div class="section_label">
                          <span>
                            System Settings
                          </span>
                        </div>
                    </div>
                    <div class="shortcuts">

                        <div class="shortcut" style="display:none">
                            <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                                <a href="#/organization/list" >
                                    <img src="resources/images/organization.svg" style="height: 35px;cursor:pointer;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/organization/list" style="color: rgb(90 90 90);">Organization</a>
                            </div>
                        </div>

                        <div class="shortcut" style="display:none">
                            <div style="justify-content: center;display: grid;height: 50px;cursor:pointer;    min-width: 75px;">
                                <a href="#/organization-branches/list" >
                                    <img src="resources/images/organization-branches.svg" style="height: 35px;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/organization-branches/list" style="color:rgb(90 90 90);">Branches</a>
                            </div>
                        </div>


                        <div class="shortcut" style="display:none">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/business-entity/list" >
                                <img src="resources/images/business-entity.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/business-entity/list" style="color:rgb(90 90 90);">Business Entities</a>
                          </div>
                        </div>

                        <div class="shortcut" style="display:none">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/business-entity-types/list" >
                                <img src="resources/images/business-entity-type.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/business-entity-types/list" style="color: rgb(90, 90, 90);text-align: center;">Business Entities Types</a>
                          </div>
                        </div>


                        <div class="shortcut" style="display:none">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/business-hours/list" >
                                <img src="resources/images/business-hours.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/business-hours/list" style="color: rgb(90, 90, 90);text-align: center;">Business Hours</a>
                          </div>
                        </div>

                        <div class="shortcut">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/users/list" >
                                <img src="resources/images/user.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/users/list" style="color: rgb(90, 90, 90);text-align: center;">Users</a>
                          </div>
                        </div>

                        <div class="shortcut">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/groups/list" >
                                <img src="resources/images/group.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/groups/list" style="color: rgb(90, 90, 90);text-align: center;">Groups</a>
                          </div>
                        </div>

                        <div class="shortcut" style="display:none">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/roles/list" >
                                <img src="resources/images/role.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/roles/list" style="color: rgb(90, 90, 90);text-align: center;">Roles</a>
                          </div>
                        </div>
                    </div>

                    <div>
                        <hr class="uk-divider-icon" style="width: 90%;justify-self: center;">
                    </div>

                    <div class="left_panel_title_1" style="display: grid;">
                        <div class="section_label">
                          <span>
                            Task Settings
                          </span>
                        </div>
                    </div>
                    <div class="shortcuts">
                        <div class="shortcut">
                            <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                                <a href="#/statuses/list" >
                                    <img src="resources/images/statuses.svg" style="height: 35px;cursor:pointer;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/statuses/list" style="color: rgb(90 90 90);">Default Task Stages</a>
                            </div>
                        </div>
                        <div class="shortcut">
                            <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                                <a href="#/categories/listpane" >
                                    <img src="resources/images/category.svg" style="height: 35px;cursor:pointer;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/categories/listpane" style="color: rgb(90 90 90);">Categories</a>
                            </div>
                        </div>
                        <div class="shortcut">
                            <div style="justify-content: center;display: grid;height: 50px;cursor:pointer;    min-width: 75px;">
                                <a href="#/workgroups/list" >
                                    <img src="resources/images/teams.svg" style="height: 35px;cursor:pointer;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/workgroups/list" style="color:rgb(90 90 90);">Workgroups</a>
                            </div>
                        </div>
                        <div class="shortcut">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/forms/list" >
                                <img src="resources/images/forms.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/forms/list" style="color: rgb(90, 90, 90);text-align: center;">Forms</a>
                          </div>
                        </div>
                        <div class="shortcut">
                          <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                              <a href="#/tabular-forms/list" >
                                <img src="resources/images/forms.svg" style="height: 35px;cursor:pointer;"/>
                              </a>
                          </div>
                          <div style="justify-content: center;display: grid;">
                              <a href="#/tabular-forms/list" style="color: rgb(90, 90, 90);text-align: center;">Tabular Forms</a>
                          </div>
                        </div>
                    </div>

                    <div>
                        <hr class="uk-divider-icon" style="width: 90%;justify-self: center;">
                    </div>

                    <div class="left_panel_title_1" style="display: grid;display:none">
                        <div class="section_label">
                          <span>
                            BusinessBench Settings
                          </span>
                        </div>
                    </div>
                    <div class="shortcuts" style="display:none">
                        <div class="shortcut">
                            <div style="justify-content: center;display: grid;height: 50px;    min-width: 75px;">
                                <a href="#/bb-categories/listpane" >
                                    <img src="resources/images/category.svg" style="height: 35px;cursor:pointer;"/>
                                </a>
                            </div>
                            <div style="justify-content: center;display: grid;">
                                <a href="#/bb-categories/listpane" style="color: rgb(90 90 90);">Business Categories</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

</template>

<script>

//import {bus} from '../../config_admin'
import userMixinLib    from './../../mixins/lib/user_mixin_lib';
import utilsMixinLib   from './../../mixins/lib/utils_lib';
// import homePageMixin   from './../../mixins/home-page/home-page.js';
window.axios  = require('axios');

export default {
    mixins : [userMixinLib, utilsMixinLib],
    props: ["loggedInUser"],
    data: function() {
        return {
        };
    },
    methods: {
    },
    created: function() {
    },
    computed: {
    },
    mounted: function() {

        //Fade in this component.
        document.querySelector(".fade_in_container").style.opacity=1;
    },
    watch: {
    }
}

</script>
