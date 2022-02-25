import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
const myOptions={
    theme:{
        themes: {
            light: {
              myClass:'#0a21a8'
            },
        }
    }
}
export default new Vuetify(myOptions);
