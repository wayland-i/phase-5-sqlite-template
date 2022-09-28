class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :is_public, :created_at
  has_one :user
  has_many :tracks
end
