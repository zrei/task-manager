module Api
  module V1
    class SubtasksController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        subtask = Subtask.new(subtask_params)

        if subtask.save
          render json: SubtaskSerializer.new(subtask).serialized_json
        else 
          render json: { errors: subtask.errors.messages }, status: 422
        end
      end

      def destroy
        subtask = Subtask.find(params[:id])

        if subtask.destroy
          head :no_content
        else 
          render json: { errors: subtask.errors.messages }, status: 422
        end
      end

      def update 
        subtask = Subtask.find(params[:id])

        if subtask.update(subtask_params)
          render json: SubtaskSerializer.new(subtask).serialized_json
        else 
          render json: { errors: subtask.errors.messages }, status: 422
        end
      end

      private

      def subtask_params
        params.require(:subtask).permit(:name, :description, :deadline, :task_id)
      end
    end
  end
end