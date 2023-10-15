// store.js
import { defineStore } from 'pinia';

export const timerStore = defineStore('timerStore', {
  state: () => {
    return {
      timersStates: {
        selected: 0,
        pomodoroTimer: {
          id: 0,
          name: 'Pomodoro',
          time: 1500,
        },
        shortBreakTimer: {
          id: 1,
          name: 'Short Break',
          time: 300,
        },
        longBreakTimer: {
          id: 2,
          name: 'Long Break',
          time: 900,
        },
      },
    };
  },
  getters: {
    getTimersInfo: (state) => state.timersStates,
  },
  actions: {
    setTimerInfo(name, time) {
      this.timersStates[name].time = time;
    },
  },
});
