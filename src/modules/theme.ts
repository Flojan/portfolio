import { computed, reactive } from "vue"



const state = reactive({
    theme: '',
    set: false,
    error: null,
})

const setTheme = () => {
        try {
            if (!("theme" in localStorage)) {
                localStorage.theme = "dark"
                state.theme = String(localStorage.getItem("theme"))
            } else {
                localStorage.theme  = localStorage.getItem("theme") === "dark" ? "light" : "dark"
                state.theme = String(localStorage.getItem("theme"))
            }
        } catch (e) {
            // state.error = e
        }
}

const getTheme = () => {
    try {
        if (!("theme" in localStorage)) {
            localStorage.theme = "dark"
            state.theme = String(localStorage.getItem("theme"))
        } else {
            localStorage.theme  = localStorage.getItem("theme") === "dark" ? "dark" : "light"
            state.theme = String(localStorage.getItem("theme"))
        }
    } catch (e) {
        // state.error = e
    }
}




export function useTheme() {
    
    return { theme: computed(() => state.theme), setTheme, getTheme }
}
