<template>
  <div>Index</div>
  {{state.count}}
  <button v-on:click="onClick">click</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/auth';
  const state = useCounterStore();

  function onClick() {
    state.increment();
  }
  
</script>