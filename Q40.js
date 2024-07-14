function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
var album = makeAlbum("Junoon", "Tara Chala");
console.log(album);
album = makeAlbum("Atif", "Adat");
console.log(album);
album = makeAlbum("Ali Haider", "Purani Jeans");
console.log(album);
