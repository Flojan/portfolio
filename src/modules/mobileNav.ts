import { computed, reactive } from "vue"

const state = reactive({
    open: false,
})

function toggle() {
    if (state.open === true) {
      state.open = false;
    } else {
      state.open = true;
    }
}

function comfortClose () {
    if (state.open === true) {
        state.open = false;
      }
}

export function useMobileNav() {
    
    return { open: computed(() => state.open), toggle, comfortClose }
}
