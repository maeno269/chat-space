
json.array! @newMessages.each do |message|
  json.name message.user.name
  json.content message.content
  json.created_at message.created_at
  json.image @message.image.url
  json.id message.id
end