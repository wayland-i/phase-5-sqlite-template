class TrackSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :audio_data
  has_one :card


  def audio_data
    rails_blob_path(object.audio_data, only_path: true) if object.audio_data.attached?
  end
end




  

