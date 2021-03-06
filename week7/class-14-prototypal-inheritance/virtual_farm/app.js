/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function() {

    function FarmAnimal(type, name, sound, image) {
        this.type = type
        this.name = name
        this.sound = sound
        this.image = image
    }

    FarmAnimal.prototype.speak = function() {
        alert('My name is ' + this.name + ', and I say ' + this.sound)
    }

    var animal = new FarmAnimal('pig', 'Piglet', 'oink, oink')

    // animal.speak()

    function Cow(name, image) {
        FarmAnimal.call(this, 'cow', name, 'mooo', image)


    }


    function Sheep(name, image) {
        FarmAnimal.call(this, 'sheep', name, 'bahhh', image)

    }

    function Rooster(name, image) {
        FarmAnimal.call(this, 'rooster', name, 'cock a doodle dooo', image)

    }

    var cow = new Cow('Dolly', 'http://wrightsdairyfarm.com/assets/img/cow-facts/cow-yellow-tag.jpg')

    var sheep = new Sheep('Wooly', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6SeD-7XnpI0wo85_DJwHquYyiye8bquXZ_kbKLG5GgXs46wMQrQ')
    var rooster = new Rooster('Rocky', 'http://www.offthegridnews.com/wp-content/uploads/2015/08/rooster-fameimagesDOTcom.jpg')





    // push all animal instances 

    var farmAnimals = [];

    farmAnimals.push(cow)
    farmAnimals.push(sheep)
    farmAnimals.push(rooster)


    function output(res) {
        console.log(res)
        for (var i = 0; i < res.farmAnimals.length; i++) {
            array[i]
            var type = farmAnimals.type
            var name = farmAnimals.name
            var sound = farmAnimals.sound
            var image = $('<img>').attr('src', farmAnimals.image)
        }
    }

    // response.data.photos.forEach(function(photo) {
    //     var img = $('<img>');
    //     img.attr('src', photo.image_url);
    //     $('.images').append(img);

    // });

    // statements
    // 	$('div').on('click', function (e) {
    // 	for (var i = 0; i < farmAnimals.length; i++) {
    // 		alert('My name is ' +this.name+ ', and I say ' +this.sound)

    // 		// $(farmAnimals[i]).append('.animal');
    // } 

    // })






    // 5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
    // 	- You will have to create a new DOM element (a <div> is recommended)
    // 	- This new <div> needs to have the CSS class "animal"
    // 	
    // var div = $("<div>").addClass("animal");
    // 	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

    // 		Hint: use %-based values (bottom: 50%; left: 25%)

    // 	- This <div>'s background should be the animal's image

    // 		Hint: background-image: url('http://some-url-here.com')

    // 	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
    // 	- Append each new <div> to the body

    // 		Hint: $('body').append(yourElement)



    // statements
});
