
   const _apiBase = 'http://www.omdbapi.com/?apikey=';
   const _apiKey = 'a445a5cd';

   const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
    }


  

export const getMovieByName = async (name) => {
    const res = await getResource(`${_apiBase}${_apiKey}&s=${name}`);
    return res
    }