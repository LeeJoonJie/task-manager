class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  # GET /tasks.json
  def index
    tasks = Task.all
    render json: { tasks: tasks }
  end

  # PUT /tasks
  # For sorting tasks
  def index_sort
    sort_field = params[:sortField]
    sort_order = params[:sortOrder].upcase # DESC or ASC
    non_empty_tasks = Task.where.not("#{sort_field}": nil)
    non_empty_tasks = non_empty_tasks.where.not("#{sort_field}": 'None') if sort_field.to_s == 'priority'
    sorted_tasks = non_empty_tasks.order("#{sort_field} #{sort_order}")

    render json: { tasks: sorted_tasks }
  end

  # GET /tasks/:id
  def show
    task = Task.find(params[:id])
    render json: task
  end

  # GET /tasks/new
  def new
    task = Task.new
  end

  # GET /tasks/1/edit
  def edit; end

  # POST /tasks
  # POST /tasks.json
  def create
    task = Task.new(task_params)

    if task.save
      render json: task
    else
      render json: task.errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    task = Task.find(params[:id])
    if task.destroy
      head :no_content, status: :ok # render just the header
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks
  # DELETE /tasks.json
  def destroy_all
    if Task.destroy_all
      head :no_content, status: :ok # render just the header
    else
      render json: Task.errors, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_task
    @task = Task.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def task_params
    params.require(:task).permit(:title, :description, :priority, :deadline, :progress, tags: [])
  end
end
