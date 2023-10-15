<template>
  <div class="options-container">
    <ul>
      <li v-for="(item, index) in options" :key="index">
        <span :class="index == timerConfigs.selected ? 'selected-option' : ''">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { getTimerConfig} from "/composables/timer.js";

export default defineComponent({
  setup() {
    const options = ["pomodoro", "short break", "long break"];
    const timerConfigs = getTimerConfig;
    return {
      options,
        timerConfigs,
    };
  },
});
</script>
