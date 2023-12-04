import { defineStore } from 'pinia';

export const useUtilityStore = defineStore({
  id: 'alert',
  state: () => ({
    showAlert: false,
    alertContent: {
      title: 'Info Alert',
      content: 'More info about this info alert goes here.',
    },
  }),
  actions: {
    setAlertVisibility(visibility) {
      this.showAlert = visibility;
    },
    setAlertContent(title, content) {
      this.alertContent = { title, content };
    },
  },
});
