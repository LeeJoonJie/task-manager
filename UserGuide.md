# Task Manager

<div markdown="block" class="alert alert-secondary">
* Table of Contents
{:toc}
</div>

--------------------------------------------------------------------------------------------------------------------

## **1. Introduction**
Hello there! If you are reading this, you must be curious about *Task Manager*.
*Task Manager**Task Manager* is a website and tool to help effectively keep track of tasks to be done. 

--------------------------------------------------------------------------------------------------------------------

## **2. Quick Start**

1. Go to https://dry-depths-11934.herokuapp.com/. You should see something like the picture below.
2. The card-like boxes that you see are tasks. These tasks that are already present are sample data loaded for you to play with.
3. To add your own task, press the Add button. Fill in the relevant information in the form that shows and submit. The task title is the only compulsory field. 
4. To edit a task, click the Edit icon and update the form.
5. To delete a task, click the Delete icon and click 'Ok' when prompted with a confirmation message.
6. To delete all tasks, click the Delete All Button and click 'Ok' when prompted with a confirmation message.

Read the next section to explore more features in more detail!

--------------------------------------------------------------------------------------------------------------------

## **3. Features**

### 3.1 Add Task

Add a task.

Field       | Requirement      | Description
------------|------------------|-----------------------
Title       | Compulsory       | Title/name of a task. Cannot be empty.
Description | Optional         | Additional description of a task.
Priority    | Optional         | Priority of a task. Can take values *Low*, *Moderate* or *High*.
Deadline    | Optional         | Deadline of a task. Takes the format DD/MM/YYYY.
Progress    | Default value 0  | Progress of a task in percentage. Can take values 0-100.
Tags        | Optional         | Additional tags eg. can be used to represent custom categories.  

### 3.2 Edit Task

Edit a task by updating the form.

### 3.3 Delete Task

Delete a task.

:exclamation: This action is not reversible. Please make sure you want to do this before pressing the button.

### 3.4 Delete all Tasks

Delete all tasks easily with one button.

:exclamation: This action is not reversible. Please make sure you want to do this before pressing the button.
:memo: You may use this to delete the sample data if you have no need for them anymore.

### 3.5 Sort Tasks

Sort tasks by various fields in either descending or ascending order. 

1. Created At (default)
2. Deadline
3. Priority
4. Progress

:memo: When sorting by Deadline or Priority (optional fields), only tasks that have these fields present will show. 
For example, when sorting by priority, tasks that have no priority will not show since there is no reasonable
sorting order for them.


**Examples:**

:black_nib: To see tasks that have highest priority first: 

:black_nib: To see tasks that have the nearest deadlines first:

:black_nib: To see tasks that have the most progress first:

### 3.6 Search Tasks

Search for tasks using various fields. 
Type a string in the search box and press enter.

1. All 
2. Title
3. Description
4. Tags
5. Deadline
6. Priority

:memo: The search feature finds tasks which contain the specified search string, not just exact matches.

:memo: It is also not case-sensitive.

:memo: The search feature can be used together with the sort feature to achieve more specific results.

**Examples:**

:black_nib: To find tasks with Priority of *High*

:black_nib: To find tasks with Deadline in the month of February

:black_nib: To find tasks with Tags containing 'School'

### 3.7 Change Page Layout

Choose from four different layouts to display your tasks on the Homepage.

Layout       | Description
-------------|------------------------------------
List         | Default layout
Grid 2/Row   | 2 tasks per row
Grid 3/Row   | 3 tasks per row. Not recommended for smaller screens.
Grid 4/Row   | 4 tasks per row. Not recommended for smaller screens.

:memo: Suitability of layout configuration might differ depending on screen size. For example,
a 27-inch monitor will be able to display the Grid 4/Row layout comfortably while a 13-inch monitor 
might be too small to display 4 tasks per row nicely. 


--------------------------------------------------------------------------------------------------------------------