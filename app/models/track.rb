class Track < ApplicationRecord
  belongs_to :card
  has_one_attached :audio_data
end
