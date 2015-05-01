class CreateFortunes < ActiveRecord::Migration
  def change
    create_table :fortunes do |t|
      t.text :quotation
      t.string :source

      t.timestamps null: false
    end
  end
end
