// $(document).ready(function(argument) {

var careerAppData = firebase.database();

Traitify.setPublicKey("399c11fc4bb447b9d67d175d88");
Traitify.setHost("https://api-sandbox.traitify.com");
Traitify.setVersion("v1");
Traitify.ui.load(assessmentId, ".assessment")
var assessmentId = "07b759ad-ab7a-4c9f-83b4-ab36ddda5e6d";



traitify = Traitify.ui.load(assessmentId, ".slide-deck", {
    results: { target: ".results" },
    personalityTypes: { target: ".personality-types" },
    personalityTraits: { target: ".personality-traits" }
});
traitify = Traitify.ui.load("slideDeck", assessmentId, ".traitify-widget"); // Example selector for widget target
traitify.onInitialize(function() {
    console.log(traitify.data.get("Slides"));
    console.log("Initialized");
})

// Traitify.getDecks("assessment id").then(function(data) {
//             console.log(data)

// })


// });
