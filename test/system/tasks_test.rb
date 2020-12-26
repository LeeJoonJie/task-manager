require "application_system_test_case"

class TasksTest < ApplicationSystemTestCase
  setup do
    @task = tasks(:one)
  end

  test "visiting the index" do
    visit tasks_url
    assert_selector "h1", text: "Tasks"
  end

  test "creating a Task_view" do
    visit tasks_url
    click_on "New Task_view"

    fill_in "Deadline", with: @task.deadline
    fill_in "Description", with: @task.description
    check "Is completed" if @task.is_completed
    fill_in "Priority", with: @task.priority
    fill_in "Title", with: @task.title
    click_on "Create Task_view"

    assert_text "Task_view was successfully created"
    click_on "Back"
  end

  test "updating a Task_view" do
    visit tasks_url
    click_on "Edit", match: :first

    fill_in "Deadline", with: @task.deadline
    fill_in "Description", with: @task.description
    check "Is completed" if @task.is_completed
    fill_in "Priority", with: @task.priority
    fill_in "Title", with: @task.title
    click_on "Update Task_view"

    assert_text "Task_view was successfully updated"
    click_on "Back"
  end

  test "destroying a Task_view" do
    visit tasks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Task_view was successfully destroyed"
  end
end
