import React from "react"
// embed_url, title
export  const GifList= ({gifs})=>gifs.map(gif=><div><h1>{gif.title}</h1><img src={gif.images.original.url} alt={gif.title}/></div>)
