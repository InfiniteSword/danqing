
const state = {
    blurred: false,
};

const mutations = {

    blur (state) {
        state.blurred = true;
    },
    clear (state) {
        state.blurred = false;
    },

};

export default {
    state,
    mutations
}