class User < ApplicationRecord

  def to_param
    nickname
  end

  has_many :reviews
  has_many :comments, through: :reviews

  validates :nickname, uniqueness: true, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
