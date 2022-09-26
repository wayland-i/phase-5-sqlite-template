class User < ApplicationRecord
    has_many :cards
    has_many :tracks, through: :cards
    has_secure_password
end
