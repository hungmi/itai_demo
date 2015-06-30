module CategoriesHelper
  def current_category
    @category = Category.find(params[:id])
  end
end
