


 export const getGifs = async( category )=> {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=NqlNHZFWGgJJBcYdbuuuI734cPl20Rp3`;
    
    const resp= await fetch( url );
    const {data}= await resp.json(); // es necesario hacer la desestructuración de la data para no poner data.data.map()

    const gifs = data.map( img => { // Esta parte marca error
    //const gifs = data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;
 
}