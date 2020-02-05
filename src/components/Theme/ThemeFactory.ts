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
        color:'red'
    },
    linearProgressBar:{
        color:'primary'
    },
    roundProgressBar:{
        color:'red'
    }
}


export const createTheme = (settings:any=defaultTheme):Theme => {
    return {...defaultTheme, ...settings};
}