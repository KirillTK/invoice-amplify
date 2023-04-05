import { Amplify, Auth } from 'aws-amplify'
import '@aws-amplify/ui-vue';
import config from '../src/aws-exports'
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  Amplify.configure(config);

  return {
    provide: {
      auth: Auth,
    }
  }
})