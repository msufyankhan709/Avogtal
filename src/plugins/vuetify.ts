import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
const myOptions={
    theme: {
        themes: {
          light: {
            white:'#FFFFFF',
            hotpink: '#ED1C70',
            darkNavy: '#281A49',
            mainpurple: '#6133AF',
            darkGrey: '#333333',
            purple1:'#BFA4EB',
            purple2:'#A788DD',
            purple3:'#845DC9',
            purple4:'#6A40B4',
            purple6:'#5224A1',
            Grey:'#E9E9E9',
            lightGrey:'#F7F7F9',
            DarkGrey:'#A8A8A8',
            lightBlue:'#CCEF77'
          },
        },
      },
}
export default new Vuetify(myOptions);
