import {Theme} from "./ITheme";

const defaultTheme:Theme = {
    baselineColor: 'orange',
    primaryColor:'red',
    secondaryColor:'blue',
    shadowColor:'rgba(163,177,198,0.6)',
    backgroundColor:'#ebebf0',
    button:{
        color: 'primary'
    },
    toggle:{
        color:'primary'
    },
    linearProgressBar:{
        color:'primary'
    },
    roundProgressBar:{
        color:'primary'
    }
}


export const createTheme = (settings:any=defaultTheme):Theme => {
    return {...defaultTheme, ...settings};
}