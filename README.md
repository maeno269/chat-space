## membersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true, add_index|
|group_id|integer|null: false, foreign_key: true, add_index|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|text|null: false|
|email|text|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|text|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true, add_index|
|group_id|integer|null: false, foreign_key: true, add_index|
|message|text|
|image|text|

### Association
- belongs_to :group
- belongs_to :user

