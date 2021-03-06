import { createApp, defineAsyncComponent } from 'vue';

import * as Comlink from 'comlink';
// import './registerServiceWorker';
import router from './router';
import store from './store';
import mitt from 'mitt';
// axios.defaults.withCredentials = true;

// var dayjs = require('dayjs');
import dayjs from 'dayjs'; // ES 2015);

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// import App from './App.vue';
import App from './app/adk-app.vue';
// import ADKHome from './app/adk-home.vue';
// import AdminDashboard from "./components/admin/admin-dashboard.vue"

// UI components
import UIIcon from './app/ui-components/ui-icon.vue';
import UISelectBox from './app/ui-components/ui-selectbox.vue';
import UISelectBox2 from './app/ui-components/ui-selectbox-2.vue';
import UISelectBoxSingle from './app/ui-components/ui-selectbox-single.vue';
import TaskInbox from './app/modules/task/task-inbox.vue';
import TaskActivityChannel from './app/modules/channels/task-activity-channel.vue';

import TaskListItemFormat1 from './app/modules/task/task-list-item-format-1.vue';
import TaskListItemFormat2 from './app/modules/task/task-list-item-format-2.vue';

// import NewTaskForm from './app/new-task-form.vue';

import NewScheduledTaskForm from './app/modules/task/new-scheduled-task-form.vue';
import NewRecurringTaskForm from './app/modules/task/new-recurring-task-form.vue';
import NewTaskTemplateForm from './app/modules/task/new-task-template-form.vue';
// import NewSubTaskForm from './app/modules/task/new-subtask-form.vue';
import TaskViewFormat1 from './app/modules/task/task-view-format-1.vue';
import TaskViewFormat2 from './app/modules/task/task-view-format-2.vue';
import RTaskViewFormat2 from './app/modules/task/rtask-view-format-2.vue';
// import CronBuilder from './app/modules/task/cron-builder.vue';

import TaskSearchModal from './app/modules/task/task-search-modal.vue';
import TaskViewInfoTab from './app/modules/task/task-info-tab.vue';
import TaskViewActivityTab from './app/modules/task/task-activity-tab.vue';
import TaskViewSubtasksTab from './app/modules/task/task-subtasks-tab.vue';

import TaskViewCheckList from './app/modules/task/tab-checklist.vue';
import TaskViewRemainders from './app/modules/task/tab-reminders.vue';
import TaskViewTimeLogs from './app/modules/task/tab-timelogs.vue';
import TaskViewTransitions from './app/modules/task/tab-transitions.vue';

import TaskViewFormsTab from './app/modules/task/task-forms-tab.vue';
import ChatBook from './app/modules/chat/chat-book.vue';
import ChatPage from './app/modules/chat/chat-page.vue';
import Calendar from './app/modules/calendar/calendar.vue';


import User from './app/modules/user/user.vue';
import UserList from './app/modules/user/list-pane.vue';
import UserNewForm from './app/modules/user/new-form.vue';
import UserEditForm from './app/modules/user/edit-form.vue';
import AdminDashboard from './app/modules/user/admin-dashboard.vue';


import EditGroupForm from './app/modules/groups/edit-form.vue';
import NewGroupForm from './app/modules/groups/new-form.vue';
import GroupListPane from './app/modules/groups/list-pane.vue';


import CatogeryListPane from './app/modules/categories/categories-list-pane.vue';
import CatogeryList from './app/modules/categories/categories-list.vue';
import CatogeryEditForm from './app/modules/categories/edit-category-form.vue';
import CatogeryEditFormLagging from './app/modules/categories/new-category-form-lagging-bug.vue';
import CatogeryForm from './app/modules/categories/new-category-form.vue';



import FormList from './app/modules/forms/list-pane.vue';
import FormEdit from './app/modules/forms/edit-form-maker.vue';
import FormNewMaker from './app/modules/forms/new-form-maker.vue';



import TabularList from './app/modules/tabular-forms/list-pane.vue';
import TabularNewForm from './app/modules/tabular-forms/new-form-maker.vue';
import TabularNewEdit from './app/modules/tabular-forms/edit-form-maker.vue';


import WorkGroupList from './app/modules/workgroups/list-pane.vue';
import WorkGroupNewForm from './app/modules/workgroups/new-form.vue';
import WorkGroupNewEdit from './app/modules/workgroups/edit-form.vue';


import StatuseList from './app/modules/statuses/list-pane.vue';
import StatuseNewForm from './app/modules/statuses/new-form.vue';
import StatuseNewEdit from './app/modules/statuses/edit-form.vue';


import ActivityFormTab from './app/modules/task/activity-form-tab.vue';

import ComponentA from './app/modules/test/component-a.vue';
import ComponentB from './app/modules/test/component-b.vue';
// import TaskInboxPrivate from './app/wireframes/task-inbox-private.vue';
// import TaskCreate from './app/task-create.vue';
// import PrivateTaskCreate from './app/wireframes/task-create-private.vue';
// import SubTaskCreate from './app/task-create-sub.vue';
// import TaskViewPrivate1 from './app/wireframes/task-view-private-1.vue';
// import TaskViewPrivate2 from './app/wireframes/task-view-private-2.vue';
// import TextAreaComponent from './app/textarea-component.vue';
import NotificationSubscriptionForm from './app/modules/notifications/notification-subscription-form.vue';
import NotificationsPanel from './app/modules/notifications/notifications-panel.vue';
import UserProfilePanel from './app/modules/user-profile/user-profile-panel.vue';
export const bus = mitt();

window.Comlink = Comlink;
window.ComlinkWorker = Comlink.wrap(new Worker("comlink-worker.js"));
window.axios = require('axios');
dayjs.extend(utc);
dayjs.extend(timezone);
window.dayjs = dayjs;
var relativeTime = require('dayjs/plugin/relativeTime');
// var utc = require('dayjs/plugin/utc');
// var timezone = require('dayjs/plugin/timezone');

window.dayjs.extend(relativeTime);
// window.dayjs.extend(utc);
// window.dayjs.extend(timezone);
// window.timezone = timezone;


// const NewTaskForm = () => import(/* webpackChunkName: "new-task-form" */ './app/modules/task/new-task-form.vue');
const NotificationTypeSubscriptionPage = () => import(/* webpackChunkName: "notification-subscription-page" */ './app/modules/notifications/notification-subscription.vue');
// const Dashboard = defineAsyncComponent(() => import(/* webpackChunkName: "dashboard" */ './app/modules/dashboard/dashboard.vue'));

const app = createApp(App);

// app.component('dashboard', Dashboard);

app.component('task-list-item-format-1', TaskListItemFormat1);
app.component('task-list-item-format-2', TaskListItemFormat2);
app.component('ui-icon', UIIcon);
app.component('ui-selectbox', UISelectBox);
app.component('ui-selectbox-2', UISelectBox2);
app.component('ui-selectbox-single', UISelectBoxSingle);
app.component('taskview', defineAsyncComponent(() => import(/* webpackChunkName: "task-view-2" */ './app/modules/task/taskview.vue'))); // TaskView);
app.component('taskview-format-1', defineAsyncComponent(() => import(/* webpackChunkName: "task-view-format-12" */ './app/modules/task/task-view-format-1.vue'))); // TaskView);
app.component('taskview-format-2', defineAsyncComponent(() => import(/* webpackChunkName: "task-view-format-22" */ './app/modules/task/task-view-format-2.vue'))); // TaskView);
app.component('rtaskview-format-2', defineAsyncComponent(() => import(/* webpackChunkName: "rtask-view-format-22" */ './app/modules/task/rtask-view-format-2.vue'))); // TaskView);
app.component('task-search-modal', TaskSearchModal);
app.component('task-info-tab', TaskViewInfoTab);
app.component('task-activity-tab', TaskViewActivityTab);

app.component('task-checklist-tab', TaskViewCheckList);
app.component('task-remainders', TaskViewRemainders);
app.component('task-time-logs', TaskViewTimeLogs);
app.component('task-time-transitions', TaskViewTransitions);

app.component('task-subtasks-tab', TaskViewSubtasksTab);
app.component('task-forms-tab', TaskViewFormsTab);
app.component('new-task-form', defineAsyncComponent(() => import(/* webpackChunkName: "new-task-form-modal" */ './app/modules/task/new-task-form.vue')));
app.component('new-scheduled-task-form', NewScheduledTaskForm);
app.component('new-recurring-task-form', NewRecurringTaskForm);
app.component('new-task-template-form', NewTaskTemplateForm);

app.component('new-chart-preference-form', defineAsyncComponent(() => import(/* webpackChunkName: "new-chart-preference-form" */ './app/modules/dashboard/new-chart-preference-form.vue')));

// app.component('new-subtask-form', NewSubTaskForm);

app.component('notification-panel', NotificationsPanel);
app.component('user-profile-panel', UserProfilePanel);
app.component('notification-subscription-form', NotificationSubscriptionForm);

app.component('chat-book', ChatBook);
app.component('chat-page', ChatPage);
app.component('User', User);
app.component('AdminDashboard', AdminDashboard);


app.component('edit-group-form', EditGroupForm);
app.component('new-group-form', NewGroupForm);
app.component('GroupListPane', GroupListPane);

app.component('UserList', UserList);
app.component('new-user-form', UserNewForm);
app.component('edit-user-form', UserEditForm);



app.component('CatogeryListPane', CatogeryListPane);
app.component('CatogeryList', CatogeryList);
app.component('edit-category-form', CatogeryEditForm);
app.component('CatogeryEditFormLagging', CatogeryEditFormLagging);
app.component('new-category-form', CatogeryForm);



app.component('FormList', FormList);
app.component('edit-form-maker', FormEdit);
app.component('new-form-maker', FormNewMaker);


app.component('TabularList', TabularList);
app.component('new-tabular-form-maker', TabularNewForm);
app.component('edit-tabular-form-maker', TabularNewEdit);


app.component('WorkGroupList', WorkGroupList);
app.component('new-workgroup-form', WorkGroupNewForm);
app.component('edit-workgroup-form', WorkGroupNewEdit);



app.component('StatuseList', StatuseList);
app.component('new-status-form', StatuseNewForm);
app.component('edit-status-form', StatuseNewEdit);

app.component('activity-form-tab', ActivityFormTab);

// app.component('vue-textarea', TextAreaComponent);

app.component('component-a', ComponentA);
app.component('component-b', ComponentB);

app.component('cron-builder', defineAsyncComponent(() => import(/* webpackChunkName: "cron-builder" */ './app/modules/task/cron-builder.vue'))); // CronBuilder);

app.use(store)
  .use(router)
  .mount('#app');
