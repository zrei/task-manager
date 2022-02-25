module Api
  module V1
    class TasksController < ApplicationController
      protect_from_forgery with: :null_session

      def index 
        tasks = Task.all

        render json: TaskSerializer.new(tasks, options).serialized_json 
      end 

      def show 
        task = Task.find_by(slug: params[:slug])

        render json: TaskSerializer.new(task, options).serialized_json
      end 

      def create 
        task = Task.new(task_params)

        if task.save
          render json: TaskSerializer.new(task).serialized_json
        else 
          render json: {error: task.errors.messages }, status: 422
        end 
      end

      def update 
        task = Task.find_by(slug: params[:slug])

        if task.update(task_params)
          render json: TaskSerializer.new(task, options).serialized_json
        else 
          render json: {error: task.errors.messages }, status: 422
        end 
      end

      def destroy
        task = Task.find_by(slug: params[:slug])

        if task.destroy
          head :no_content
        else 
          render json: {error: task.errors.messages }, status: 422
        end 
      end 

      private 

      def task_params
        params.require(:task).permit(:name, :tag, :description, :deadline)
      end 

      def options
        @options ||= {include: %i[subtasks]}
      end
    end
  end
end