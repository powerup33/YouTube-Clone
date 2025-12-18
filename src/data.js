export const API_KEY ='AIzaSyCbZZ47OuxpiH-1Xfm2VSo1kBzMgPsIkMk'

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else {
        return value;
    }
}