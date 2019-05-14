class AddIsDraftToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :is_draft, :boolean, default: false
  end
end
