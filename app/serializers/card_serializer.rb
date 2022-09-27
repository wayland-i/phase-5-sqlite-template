class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :is_public
  has_one :user
end
