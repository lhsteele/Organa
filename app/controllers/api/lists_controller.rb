class Api::ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end

  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def delete
    @list = List.find(params[:id])
    @list.destroy

    render :show
  end

  private

  def list_params
    params.require(:list).permit(:name, :description, :project_id)
  end
end
