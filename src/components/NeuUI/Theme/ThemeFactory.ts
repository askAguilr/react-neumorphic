import {Theme} from "./ITheme";

const defaultTheme:Theme = {
    baselineColor: 'orange',
    primaryColor:'red',
    secondaryColor:'blue',
    shadowColor:'#343434',
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