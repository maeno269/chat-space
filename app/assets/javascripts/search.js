$(function() {
  function buildHTML(user){
    var html =   `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add"
                    dataUserId=${user.id} dataUserName=${user.name}>追加</a>
                  </div>`
    return html;
  }
  function unbuildHTML(){
    var html =   `<div class="chat-group-user clearfix">
                        <p class="chat-group-user__name">一致するメンバーはありません</p>
                      </div>`
    return html;
  }

  function buildGROUP(userId,userName){
    var group =  `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                    <input name='group[user_ids][]' type='hidden' value=${userId}>
                    <p class='chat-group-user__name'>${userName}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
    return group;
  }

  $("#user-search-result").on("click", ".chat-group-user__btn--add", function(){
    $(this).parent().remove();
    var userId = $(this).attr("dataUserId");
    var userName = $(this).attr("dataUserName");
    var group = buildGROUP(userId,userName);
    $("#chat-group-users").append(group);
  });

  $(".chat-group-form__field").on("click", ".chat-group-user__btn--remove", function(){
    $(this).parent().remove();
  });

  $("#user-search-field").on("keyup",function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })

    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0) {
        users.forEach(function(user){
         var html = buildHTML(user);
         $("#user-search-result").append(html)
        });
      }
      else{
        var html = unbuildHTML();
        $("#user-search-result").append(html)
      }
    })
    .fail(function(){
      alert("メンバーの検索に失敗しました");
    })
  });
});