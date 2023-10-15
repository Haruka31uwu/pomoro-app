<template>
  <div class="modal">
    <div class="modal-title">
      <h3>Settings</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" @click="closeModal()">
        <path
          fill="#1E213F"
          fill-rule="evenodd"
          d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
          opacity=".5"
        />
      </svg>
    </div>
    <hr class="main-divider" />
    <section class="time-settings">
      <h4>TIME ( MINUTES )</h4>
      <div class="time-setings-options">
        <pomodoro-components-option-select />
        <pomodoro-components-option-select />
        <pomodoro-components-option-select />
      </div>
    </section>
    <hr />
    <section class="font-settings">
      <h4>FONT</h4>
      <div class="font-options">
        <span
          v-for="(color, index) in 3"
          :key="index"
          :class="index == 0 ? 'selected' : ''"
        >
          Aa
        </span>
      </div>
    </section>
    <hr />
    <section class="color-settings">
      <h4>COLOR</h4>
      <div class="color-options">
        <span v-for="(color, index) in 3" :key="index">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="152"
            height="40"
            viewBox="0 0 152 40"
            fill="none"
            v-if="index == 0"
          >
            <path
              d="M14 20.5L17.9526 24.4526L26.4053 16"
              stroke="#161932"
              stroke-width="2"
            />
          </svg>
        </span>
      </div>
    </section>
  </div>
</template>
<script>
export default{
   //config emit close modal in vue 3
    emits: ['close-modal'],
    methods: {
        closeModal(){
            this.$emit('close-modal')
        }
    }
}
</script>