

<template>
  <div class="select-container">
    <span class="option-tittle">{{ options[0].title }}</span>
    <div class="select-option-selected">
      <span class="selected-option">{{ options[0].selected }}</span>
      <div class="options-handler">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
          <path
            fill="none"
            stroke="#1E213F"
            stroke-opacity=".25"
            stroke-width="2"
            d="M1 6l6-4 6 4"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
          <path
           
            fill="none"
            stroke="#1E213F"
            stroke-opacity=".25"
            stroke-width="2"
            d="M1 1l6 4 6-4"
          />
        </svg>
      </div>
    </div>
    <div class="option-container" v-if="false">
      <span
        v-for="(option, index) in options[0].values"
        :key="index"
        class="options-list"
      >
        <span>{{ option }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [
        {
          title: "pomodoro",
          values: [25, 30, 35, 40, 45, 50, 55, 60],
          selected: 25,
        },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>
