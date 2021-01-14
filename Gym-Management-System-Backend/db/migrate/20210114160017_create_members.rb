class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :email
      t.user :belongs_to
      t.membership :belongs_to
      t.user :belongs_to

      t.timestamps
    end
  end
end
