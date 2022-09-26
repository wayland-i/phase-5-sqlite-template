class TrackSerializer < ActiveModel::Serializer
  attributes :id
  has_one :card
end
