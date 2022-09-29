class User < ApplicationRecord
    has_many :cards
    has_many :tracks, through: :cards
    validates :username, uniqueness: true, presence: true
    validates :password, length: {minimum: 3}
    has_secure_password
end
