class Member < ApplicationRecord
  belongs_to :membership
  belongs_to :user
end
