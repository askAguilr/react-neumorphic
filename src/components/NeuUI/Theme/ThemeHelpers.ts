export function determineColor(colors:Array<any>,palette:any){
    for(let i = 0; i<colors.length; i++){
        if(colors[i]){
            return palette[colors[i]] || colors[i];
        }
    }
}