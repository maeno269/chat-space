$(function(){

  var lastId = 0;

  function buildHTML(message){
    var MessageImage = '';
    if(message.image){
    MessageImage = `<img class="lower-message__image" src=${message.image}>`
    }
    var html = `<div class = "message" data-message-id= "${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    ${MessageImage}
                  </div>
                </div>`
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".rightcontents").append(html);
      $(".textbox").val('');
      $(".form__submit").prop('disabled', false);
      $('.rightcontents').animate({scrollTop: $('.rightcontents')[0].scrollHeight}, 'fast');
      lastId = data.id;
    })
    .fail(function() {
      alert('error');
    });
  });

  var interval = setInterval(function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var messageId = $(".message").last().data('message-id');
      console.log(messageId)
      if (lastId == 0) {
        lastId = $("#lastId").attr('value');
        console.log("自動更新時" +lastId);
      }

      $.ajax({
        url: location.href.json,
        dataType: 'json',
        type: "GET",
        data: {lastId: messageId}
      })
      .done(function(data){
        var insertHTML = "";
        data.forEach(function(message){
          insertHTML += buildHTML(message);
        });
        $(".rightcontents").append(insertHTML);
      })
      .fail(function(data){
        alert("自動更新に失敗しました");
      });
    } else {
      clearInterval(interval);
    }
  } ,5000);
});
