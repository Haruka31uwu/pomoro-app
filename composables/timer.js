import {computed} from 'vue';
import { timerStore } from '../store/timer.store.js';
// Crea una instancia de Pinia

// Agrega la tienda
export const initTimer = (initTime) => {
    let intervalId; // Variable para almacenar el ID del intervalo
    const timer = ref(initTime);
    if(initTime <= 0){
        timer.value = 0;
    }
    if(initTime >= 3600){
        timer.value = 3599;
    }
    const start = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                timer.value--;
            }, 1000);
        }
    }
    const stop = () => {
        clearInterval(timer.value);
    }
    
    return { timer, start, stop };
};
export const getTimerConfig = computed(() => {
    const store = timerStore();
    return store.getTimersInfo;

});