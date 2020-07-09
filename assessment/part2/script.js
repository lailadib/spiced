/*
Write your code for this exercise in this file beneath this long comment.
Please be certain to use only syntax and techniques covered in the
assigned freeCodeCamp courses.

1. Write a function named createPainting that expects to receive three
arguments: name, artist, and year. This function should return an object. The
object it returns should have properties that are also named name, artist, and
year. The values assigned to these properties should be the values that are
passed to the function. Additionally, the object that createPainting returns
should have two methods:

    isOlderThan - a function that accepts one painting object as an argument
        and returns true if the painting object the function belongs to is
        older than the painting that is passed as an argument.

    logArtist - a function that logs to the console a sentence that contains
        the values of the paintings's name and artist properties: "[name] was
        painted by [artist]." For example, if the painting were Girl with a
        Pearl Earring, then the sentence that logArtist logs would be "Girl
        with a Pearl Earring was painted by Vermeer."

2. Create a variable named paintings and assign to it an array. This array
should contain seven objects that are created by calling the createPainting
function. The values you should pass to the createPainting function to create
these objects are:

3. Write the following two functions. Both should use the paintings array to
determine what to return.

    getPaintingByName - this function expects a string as an argument and
        returns the object in the paintings array whose name property is equal
        to the string that is passed to it (if there is one).

    getPaintingNamesByArtist - this function expects a string as an argument
        and returns an array containing the names of only those paintings in
        the paintings array whose artist properties are equal to the string
        that is passed to it.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var monaLisa = getPaintingByName('Mona Lisa');
var guernica = getPaintingByName('Guernica');

monaLisa.isOlderThan(guernica);

monaLisa.logArtist();

var byLeonardo = getPaintingNamesByArtist('Leonardo');       

x.isOlderthan = function(y) {
    if  (x.year > y.year) {return false;} else {return true;};
}


painting.logArtist = function(painting) {
        return painting.name + " was painted by " + painting.artist + ".";
}

function getPaintingByName(name) {
   return paintings.getAttribute(name == paintings.name);

}

getPaintingByName('Mona Lisa');

function getPaintingByName(name) {

return paintings.find(function paintingName() {
    this.name == paintings.name;
})
}

getPaintingByName('Mona Lisa');

function getPaintingNamesByArtist(artist) {
    
    paintings.find(function paintingArtist() {
    artist == paintings.artist;

})
}

  */

let paintings = [];


function createPainting(name, artist, year) {
    let painting = {
        'name': name,
        'artist': artist,
        'year': year,
      }
	return paintings.push (painting);
}

createPainting('Mona Lisa', 'Leonardo', '1506');
let monaLisa = paintings[0];

createPainting('The Starry Night', 'Van Gogh', '1889');
let starryNight = paintings[0];

createPainting('Girl with a Pearl Earring', 'Vermeer', '1665');
let pearlEarring = paintings[2];

createPainting('The Last Supper', 'Leonardo', '1495');
let lastSupper = paintings[3];

createPainting('The Birth of Venus', 'Botticelli', '1486');
let birthVenus = paintings[4];

createPainting('Guernica', 'Picasso', '1937');
let guernica = paintings[5];

createPainting('The Kiss', 'Klimt', '1908');
let theKiss = paintings[6];

function logArtist(object) {
    return object.name + " was painted by " + object.artist + ".";
}

logArtist(theKiss);
