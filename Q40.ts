function makeAlbum (artist:string, title: string): { artist: string; title:string} {
    const dictionaries = { 
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),   

    };
    return dictionaries;
}
let album = makeAlbum("Junoon", "Tara Chala")
console.log(album)

 album = makeAlbum("Atif", "Adat")
console.log(album)

album = makeAlbum("Ali Haider", "Purani Jeans")
console.log(album)