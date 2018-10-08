$(function(){
  function buildHTML(message){
    var MessageImage = '';
    if(message.image){
    MessageImage = `<img class="lower-message__image" src=${message.image}>`
    }
    var html = `<div class = "message">
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
                </div>`
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
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
      $(".rightcontents").append(html)
      $(".textbox").val('')
      $(".form__submit").prop('disabled', false);
      $('.rightcontents').animate({scrollTop: $('.rightcontents')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error');
    });
  });
});
