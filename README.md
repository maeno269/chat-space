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
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|text|null: false|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

