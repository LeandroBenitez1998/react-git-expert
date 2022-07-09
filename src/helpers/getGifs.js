export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=OCHHmLlSxju5vacOkodivK1n079udpGj&q${category}&limit=10`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    // Filtramos la informacion que queremos del objeto MESSIRVEE
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
  
    console.log(gifs);
    return gifs;
  
  }