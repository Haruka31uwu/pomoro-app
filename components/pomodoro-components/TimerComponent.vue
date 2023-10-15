<template>
  <div class="timer-container">
    <div class="circle-container">
      <div class="loader-container"></div>
      <div class="time-container">
        <span>{{ formatTimer(timer.timer.value) }}</span>
        <span>PAUSE</span>
      </div>
      <svg viewBox="0 0 36 36" class="circular-chart">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#05a" />
          </linearGradient>
        </defs>
        <path
          class="circle"
          stroke-dasharray="100, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import { initTimer,getTimerConfig} from "/composables/timer.js";
export default {
  setup() {
    const timer = initTimer(100);
    const timerConfigs = getTimerConfig;
    onMounted(() => {
      timer.start();
      setProgressCircle(timer.timer.value);
      console.log(timerConfigs.value.selected)
    });
    const formatTimer = (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600);
      if (hours > 0){
        timer.stop();
        return "59:59";
      };
      if (timeInSeconds <= 0){
        timer.stop();
        return "00:00";
      }
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${padZero(minutes)}:${padZero(seconds)}`;
    };

    // Función para agregar un cero delante de un número si es menor que 10
    const padZero = (number) => {
      return number < 10 ? `0${number}` : number;
    };
    const setProgressCircle = (timer) => {
        const circle= document.querySelector('.circle')
        circle.animate([
            {strokeDasharray: '100, 0'},
            {strokeDasharray: '0, 100'}
        ],{
            duration: timer*1000,
            easing: 'ease-out',
            fill: 'forwards'
        })
    };
    return { timer, formatTimer };
  },
};
</script>