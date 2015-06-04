class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :f2f_url
      t.integer :recipe_id
      t.string :image_url
      t.float :social_rank
      t.text :comments, :default => ''
      
      t.timestamps null: false
    end
  end
end
