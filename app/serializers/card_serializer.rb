class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_one :user
end
