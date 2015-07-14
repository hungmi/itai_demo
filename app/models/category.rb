class Category < ActiveRecord::Base
  has_many :subcategories
  has_many :products

  accepts_nested_attributes_for :subcategories, :reject_if => :all_blank, :allow_destroy => true
  accepts_nested_attributes_for :products, :reject_if => :all_blank, :allow_destroy => true
end
