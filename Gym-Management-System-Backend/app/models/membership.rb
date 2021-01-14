class Membership < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
end
