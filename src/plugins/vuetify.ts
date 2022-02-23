import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
            light: {
                blueButtons: '#0e2299',
                lightGrey: '#EBECF0',
                footerColor: '#030236'
            },
        },
    },
})
