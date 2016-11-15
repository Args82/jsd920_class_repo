// Virtual Farm

// Goal: You 'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

// Instructions:

//     1) Create a top - level "FarmAnimal"
// object that all the other farm animals will inherit from
// 2) FarmAnimal must have "name", "sound", and "image"
// instance props, and a "talk"
// instance method(talk should alert the animal 's name and its sound)
//     3) Create at least three different animals
// for your farm(remember to inherit from "FarmAnimal"
//     by changing the "prototype"
//     of your animals)

// - Give each animal a name, a sound, and an image(use the web and copy an image path)

// 4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals"
// array

// ex:

//     new rooter = new Rooster('Roger');
// farmAnimals.push(rooster);

// 5) Lastly, iterate over the "farmAnimals"
// array and append each of your animals to the DOM
//     - You will have to create a new DOM element(a < div > is recommended) - This new < div > needs to have the CSS class "animal" - Assign this < div > random "bottom"
// and "left"
// attributes(this is so animals do not overlap each other in the DOM)

// Hint: use % -based values(bottom: 50 % ; left: 25 % )

// - This < div > 's background should be the animal'
// s image

// Hint: background - image: url('http://some-url-here.com')

// - Each < div > should have a click event that alerts the name of the animal and the sound that it makes - Append each new < div > to the body

// Hint: $('body').append(yourElement) * /



$(document).ready(function() {

    //create constructor
    function FarmAnimal(type, name, sound, image, speak) {
        this.type = type
        this.name = name
        this.sound = sound
        this.image = image
        this.speak = function() {
            alert('My name is ' + this.name + ', and I say ' + this.sound)
        }

    }

    FarmAnimal.prototype.speak = function() {
        alert('My name is ' + this.name + ', and I say ' + this.sound)
    }



    var animal = new FarmAnimal('pig', 'Piglet', 'oink, oink')





    function Cow(name, image, speak) {
        FarmAnimal.call(this, 'cow', name, 'mooo', image, speak)
        $('#one').click(function(cow, sheep, rooster) {
            alert('My name is ' + name + ', and I say moooo')

        })


    }

    function Sheep(name, sound, image, speak) {
        FarmAnimal.call(this, 'sheep', name, 'bahhh', image, speak)
        $('#two').click(function(sheep) {
            alert('My name is ' + name + ', and I say bahhhh')

        })

    }

    function Rooster(name, sound, image, speak) {
        FarmAnimal.call(this, 'rooster', name, 'cock a doodle dooo', image, speak)
        $('#three').click(function(rooster) {
            alert('My name is ' + name + ', and I say cock a doodle dooo')

        })

    }

    var cow = new Cow('Dolly', 'http://www.activityvillage.co.uk/sites/default/files/images/images2/cows_350.jpg')
    var sheep = new Sheep('Wooly', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6SeD-7XnpI0wo85_DJwHquYyiye8bquXZ_kbKLG5GgXs46wMQrQ')
    var rooster = new Rooster('Rocky', 'http://www.offthegridnews.com/wp-content/uploads/2015/08/rooster-fameimagesDOTcom.jpg')


    var farmAnimals = [];

    farmAnimals.push(cow)
    farmAnimals.push(sheep)
    farmAnimals.push(rooster)

    //loop through array
    console.log(farmAnimals);
    farmAnimals.forEach(function(farmAnimal) {

        // var div = $('<div>').addClass('animal').css('background-image', 'url(' + farmAnimal.image')
        // $('body').append(div)
        // $('div').click(function(){
        // alert('My name is ' + this.name + ', and I say ' + this.sound)
        // 
        // })
        // 

    })
})
