// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {


	var list = $('#list')
    var input = $('#new-item')
    $('li').on('click', '.archive',function(){
        	$(this).parent().remove();
	    	});

    $('#clickme').click(function(event){
      event.preventDefault()
      if(input.val() == "") {alert("type something")}
      else { 
        var item = $('<li>').html(input.val()) 
        var archive = $('<span>').html(" archive ").addClass('archive')//adds content "archive" to item
        item.prepend(archive)//adds content infront of element
        list.append(item)//adds content at end
        
        input.val("").focus()

    })
      }//else
    })//click event
})//ready event
