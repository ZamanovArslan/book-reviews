class Review < ApplicationRecord
  belongs_to :user
  validates :rating, numericality: { only_integer: true, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 10 }
  validates :title, :text, :rating, presence: true
  paginates_per 6
  has_many :comments
end
