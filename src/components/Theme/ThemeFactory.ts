import {Theme} from "./ITheme";

const defaultTheme: Theme = {
    baselineColor: '#595959',
    primaryColor: 'red',
    secondaryColor: 'blue',
    shadowColor: 'rgba(163,177,198,0.6)',
    backgroundColor: '#ebebf0',
    button: {
        color: 'primary'
    },
    toggle: {
        color: 'primary'
    },
    linearProgressBar: {
        color: 'primary'
    },
    roundProgressBar: {
        color: 'primary'
    },
    input: {
        color: 'baseline'
    },
    select: {
        color: 'baseline'
    }
}


export const createTheme = (settings: any = defaultTheme): Theme => {
    return {...defaultTheme, ...settings};
}