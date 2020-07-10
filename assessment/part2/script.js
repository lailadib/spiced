var paintings = [];


function createPainting(name, artist, year) {
    var painting = {
        'name': name,
        'artist': artist,
        'year': year,
        'isOlderThan': function (object) {
                if  (this.year > object.year) {return false;} else {return true;}},
        'logArtist': function() {
            return this.name + " was painted by " + this.artist + "."},
      }
	return paintings.push (painting);
}

createPainting('Mona Lisa', 'Leonardo', '1506');

createPainting('The Starry Night', 'Van Gogh', '1889');

createPainting('Girl with a Pearl Earring', 'Vermeer', '1665');

createPainting('The Last Supper', 'Leonardo', '1495');

createPainting('The Birth of Venus', 'Botticelli', '1486');

createPainting('Guernica', 'Picasso', '1937');

createPainting('The Kiss', 'Klimt', '1908');

let arrayLength = paintings.length;

function getPaintingByName(name) {
    for(let i = 0 ; i < arrayLength; i++) {
       if (name === paintings[i].name) return paintings[i]}
    }

function getPaintingNamesByArtist(artist) {
        for(let i = 0 ; i < arrayLength; i++) {
           if (artist === paintings[i].artist) return paintings[i].name}
        }