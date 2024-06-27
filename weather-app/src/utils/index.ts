export const convertCelsius = (temp: number) => {
    return (temp - 272.15).toFixed(2);
}

export const convertTime = (time: number) => {
    return new Date(time * 1000).toLocaleTimeString();
}

export const convertDistance = (distance: number) =>{
    return (distance/1000).toFixed(2);
}

export const feels = (feel: number, temp:number) => {
    if(feel < temp){
        return 'Colder'
    }else{
        return  'Warmer'
    }
}