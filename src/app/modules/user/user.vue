<template>

<h1>USER</h1>
</template>

<script>

  import { bus } from './../../../main.js';
  import userMixinLib from './../../mixins/lib/user_mixin_lib';
  import utilsMixinLib from './../../mixins/lib/utils_lib';
  import uiListMixinLib from './../../mixins/lib/ui-list.js';

  export default {
  mixins: [
    userMixinLib,
    utilsMixinLib,
    uiListMixinLib
  ],
  props: ['id', 'uniqueComponentId', 'selectedTask', 'loggedInUser', 'embeddingViewName', 'taskIdToBeViewed', 'tabToDisplay', 'isModalViewed'],
  data: function () {
    return {

    };
  }
};

</script>

<style scoped>

</style>
