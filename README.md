## membersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|text|null: false|
|email|text|null: false|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_name|text|null: false|

### Association
- has_many :users
- has_many :messages

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text|null: false|
|image|text|null: false|

### Association
- belongs_to :group
- belongs_to :user

