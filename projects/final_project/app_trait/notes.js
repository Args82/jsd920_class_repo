

    Traitify.getSlides(assessmentId).then(function(slideObj) {
        slideObj = slideObj.slice(0, 3);
        $('#total-slides').text(slideObj.length);
        var slideTemplate = $('#slide-template').html();
        var buildSlideHtmlFunction = Handlebars.compile(slideTemplate);

        var slides_array = [];
        slideObj.forEach(function(slide) {
            slides_array.push({
                id: slide.id,
                assessment_id: assessmentId,
                image: slide.image_desktop,
                caption: slide.caption,
                position: slide.position
            });
        });
        // console.log('slides_array', slides_array)
        //     //HACK LOL!!!!!!!!!!

        var slideDataObj = {
            slide: slides_array
        };
        //handlebars must always take in an object
        var htmlOfSlides = buildSlideHtmlFunction(slideDataObj);

        $("#slides-target").append(htmlOfSlides);
    })


    // body... 

// function showCareers(assessmentId, careerObject) {
//         var source = $("#careers-template").html();
//         var template = Handlebars.compile(source);

//             var career_matches = [];
//             careerObject.forEach(function(career) {
//                 career_matches.push({
//                     assessment_id: assessmentId,
//                     experience_level: career.experience_level,
//                     title: career.title,
//                     description: career.description

              
// })
//             })
//             var careerDataObj = {
//                 career: career_matches
//             };
//             var htmlOfCareers = careerHtmlFunction(careerDataObj);
//             console.log(htmlOfCareers);
//             $("#careers-target").append(htmlOfCareers);
//         }
        //PROBLEMS:

        Traitify.getCareers("assessment_id", function(res){
  console.log(res)
             for (i = 0; i < res.new.length; i++){




             }


})

    //TRYING TO GET CAREER MATCHES TO SHOW UP
    function showCareers() {

        Traitify.getCareers(assessmentId).then(function(careerObject) {
            careerObject = careerObject;
            $('#total-careers').text(careerObject.length);
            var careerTemplate = $('#career-template').html();
            var careerHtmlFunction = Handlebars.compile(careerTemplate);


            var career_array = [];
            careerObject.forEach(function(career) {
                career_array.push({
                    experience_level: career.experience_level,
                    title: career.title,
                    description: career.description
                })
            });

            var careerDataObj = {
                career_matches: career_array
            };

            var htmlOfCareers = careerHtmlFunction(careerDataObj);
            console.log(htmlOfCareers);
            $("#career-target").append(htmlOfCareers);
        })
    }


    // var traitify = Traitify.ui.load("careers", assessmentId, ".careers", {
    //       careers: {
    //         experience_levels: "1,2", // Comma deliminated list
    //         number_of_matches: 5, // max 100

    //       }
    //     });
    // body... 

// function showCareers(assessmentId, careerObject) {
//         var source = $("#careers-template").html();
//         var template = Handlebars.compile(source);

//             var career_matches = [];
//             careerObject.forEach(function(career) {
//                 career_matches.push({
//                     assessment_id: assessmentId,
//                     experience_level: career.experience_level,
//                     title: career.title,
//                     description: career.description

              
// })
//             })
//             var careerDataObj = {
//                 career: career_matches
//             };
//             var htmlOfCareers = careerHtmlFunction(careerDataObj);
//             console.log(htmlOfCareers);
//             $("#careers-target").append(htmlOfCareers);
//         }
        //PROBLEMS:

    //TRYING TO GET CAREER MATCHES TO SHOW UP
    // function showCareers() {

    //     Traitify.getCareers(assessmentId).then(function(careerObject) {
    //         var careerTemplate = $('#career-template').html();
    //         var careerHtmlFunction = Handlebars.compile(careerTemplate);


    //         var career_matches = [];
    //         careerObject.forEach(function(career) {
    //             career_matches.push({
    //                 experience_level: career.experience_level,
    //                 title: career.title,
    //                 description: career.description
    //             })
    //         });

    //         var careerDataObj = {
    //             career_matches: career_matches
    //         };
    //         var htmlOfCareers = careerHtmlFunction(careerDataObj);
    //         console.log(htmlOfCareers);
    //         $("#careers-target").append(htmlOfCareers);
    //     })
    // }


    // var traitify = Traitify.ui.load("careers", assessmentId, ".careers", {
    //       careers: {
    //         experience_levels: "1,2", // Comma deliminated list
    //         number_of_matches: 5, // max 100

    //       }
    //     });
