class AddViewsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :views, :integer, default: 0
  end
end
