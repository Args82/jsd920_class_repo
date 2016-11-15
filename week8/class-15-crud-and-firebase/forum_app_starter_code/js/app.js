<<<<<<< HEAD
//CR$(document).ready(function() {

var messageAppReference = firebase.database(); //must use to start firebase

$('#message-form').submit(function(e) {
    e.preventDefault();
    var message = $('#message').val();
    $('#message').val('');

    var messagesReference = messageAppReference.ref('messages')
    messagesReference.push({
        msg: message,
        votes: 1
    })

    function getMessages() {
        messageAppReference.ref('messages').on('value', function(res) {
            $('.message-board').empty()
            res.forEach(function(msg) {
                console.log("this is the actual obj: ", msg)
                var id = msg.key
                var message = msg.val();

                var messageText = message.msg
                var votes = message.votes
                    //create a new li item
                    //populate that li with the content
                    //append the li
                var li = $('<li>')
                var upVote = $('<i class="fa  fa-thumbs-up pull-right"></i>')

                // put ++ and -- infront of votes to fire when clicked

                upVote.on('click', function() {
                    updateMessage(id, ++votes)
                        /* body... */
                })
                var downVote = $('<i class="fa  fa-thumbs-down pull-right"></i>')
                downVote.on('click', function() {
                    updateMessage(id, --votes)
                        /* body... */
                })
                var remove = $('<i class="fa  fa-trash pull-right"></i>')
                remove.on('click', function() {
                    li.empty()
                        /* body... */
                })


                li.html(messageText)
                li.append(upVote)
                li.append(downVote)
                li.append(remove)
                li.append('<div class="pull-right">' + votes + '</div>')

                $('.message-board').append(li)

                //fix repeats
                //refactor

            });
        });

    }

    function updateMessage(id, votes) {
        var messagesReference = messageAppReference.ref('messages/' + id)
        messagesReference.update({ votes: votes })
    }

    getMessages()

}); //message-form
=======
'use strict'
$(document).ready(function() {

  var messageAppReference = firebase.database();

  $('#message-form').submit(function(e){
      e.preventDefault();
      var message = $('#message').val();
      $('#message').val('');
      
      var messagesReference = messageAppReference.ref('messages')
      messagesReference.push({ 
        msg: message, 
        votes: 1
      })
  });//message-form

  function getMessages() {
    messageAppReference.ref('messages').on('value',function(res){
      $('.message-board').empty()
      res.forEach(function(msg){
        console.log("this is the actual obj: ", msg)
        var id = msg.key
        var message = msg.val();

        var messageText = message.msg
        var votes = message.votes
        //create a new li item
        var li = $('<li>');

        var upVote = $('<i class="fa fa-thumbs-up pull-right"></i>')
        upVote.on('click', function() {
          updateMessage(id, votes++)
        })
        var downVote = $('<i class="fa fa-thumbs-down pull-right"></i>')
        var remove = $('<i class="fa fa-trash pull-right"></i>')
         //populate that li with the content
        li.html(messageText);
        li.append(upVote)
        li.append(downVote)
        li.append(remove)
        li.append('<div class="pull-right">' + votes + '</div>')
        //append the li
        $('.message-board').append(li);
      });//forEach
    });//.on
  }//getMessages
  function updateMessage(id,votes){
    var messageReference = messageAppReference.ref('messages/' + id)
    messageReference.update({votes:votes})
  }
  getMessages()
});







>>>>>>> bc34673c965b1791b8ccf72232cda7b4b2f7e384
