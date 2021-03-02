

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=z0dInkD7qvgcON5S3EAqmp5hziPvYZcv`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        url: gif.images.downsized_medium.url,
        title: gif.title
    }));

    return gifs;
}
