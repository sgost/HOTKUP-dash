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


      <input tabindex="1" id="name" type="text" class="uk-input"  placeholder=""  style="font-family: Lato;font-weight: 300;" autofocus="true">

      <div class="stage" style="display: grid;place-items: stretch;height:100%;grid-template-rows: 40px 1fr;padding: 15px;overflow-y: hidden;color: rgb(51, 51, 51);">
 

        </div>
    </div>
</template>


<script>


    export default{
        mixins :    [
                    ],
        watch : {
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



        },
        mounted: function () {

            //this.initListLib();
            //this.loadPotentialUsers();

        },
        created: function () {
            console.error("WELCOME TO NEW Category REGISTRATION FORM.");
        }
    }

</script>
