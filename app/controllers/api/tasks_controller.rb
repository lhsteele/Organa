# class Api::TasksController < ApplicationController
#   def index
#     @tasks = Task.where(list_id: params[:list_id])
#   end

#   def show
#     @task = Task.find(params[:id])
#   end

#   def create
#     @task = Task.new(task_params)

#     if @task.save
#       render :show
#     else
#       render json: @task.errors.full_messages, status: 422
#     end
#   end

#   def update
#     @task = Task.find(params[:id])

#     if @task.update(task_params)
#       render :show
#     else
#       render json: @task.errors.full_messages, status: 422
#     end
#   end

#   def delete
#     @task = Task.find(params[:id])
#     @task.destroy

#     render :show
#   end

#   private

#   def task_params
#     params.require(:task).permit(
#       :task_name,
#       :section_name,
#       :task_body,
#       :complete,
#       :list_id
#     )
#   end
# end
