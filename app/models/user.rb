class User < ApplicationRecord
  def to_param
    nickname
  end
  has_one_attached :avatar

  has_many :reviews, dependent: :destroy
  has_many :comments

  validates :nickname, uniqueness: true, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
