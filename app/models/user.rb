class User < ApplicationRecord
    has_many :cards
    has_many :tracks, through: :cards
    validates :username, uniqueness: true, presence: true
    has_secure_password
end
