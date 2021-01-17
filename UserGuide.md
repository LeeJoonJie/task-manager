# Task Manager

<div markdown="block" class="alert alert-secondary">
* Table of Contents
{:toc}
</div>

--------------------------------------------------------------------------------------------------------------------

## **1. Introduction**
Hello there! If you are reading this, you must be curious about *Task Manager*.
*Task Manager* is a tool built help you manage and keep track of tasks. 
With Task Manager you can set deadlines, monitor progress, add tags, search for tasks and more!

--------------------------------------------------------------------------------------------------------------------

## **2. Quick Start**

1. Go to [https://dry-depths-11934.herokuapp.com/](https://breadpeanutbutter.github.io/task-manager/UserGuide.html). You should see something like the picture below.
2. The card-like boxes that you see are tasks. These are sample data loaded for you to play with.
3. To add your own task, click the Add Task button on the Homepage. Fill in the relevant information in the form that shows and submit. The task title is the only compulsory field. 
4. To edit a task, click the Edit icon on the task card and update the form.
5. To delete a task, click the Delete icon on the task card and click 'Ok' when prompted with a confirmation message.
6. To delete all tasks, click the Delete All Button on the Homepage and click 'Ok' when prompted with a confirmation message.

Read the next section to explore more features in more detail!

--------------------------------------------------------------------------------------------------------------------

## **3. Features**

### 3.1 Add Task

Add a task. 
You can add the following fields to a task.

Field       | Requirement      | Description
------------|------------------|-----------------------
Title       | Compulsory       | Title/name of a task. Cannot be empty.
Description | Optional         | Description of a task.
Priority    | Optional         | Priority of a task. Can take values *Low*, *Moderate* or *High*.
Deadline    | Optional         | Deadline of a task. Takes the format DD/MM/YYYY.
Progress    | Default value 0  | Progress of a task in percentage. Can take values 0-100.
Tags        | Optional         | Tags eg. can be used to represent custom categories. Can have multiple tags but no repeats. 

:memo: When adding tags, press the 'Enter' or ',' key to add a tag after typing it in the input box. 
This also means tags cannot have ',' characters in them.

:memo: Tags will appear as blue boxes below the input box if they have been successfully added.

:memo: To rearrange tags, use the mouse to drag and drop the blue tag boxes to the desired position.

### 3.2 Edit Task

Edit a task by updating the form.

### 3.3 Delete Task

Delete a task.

:exclamation: This action is not reversible. Please make sure you want to do this before pressing the button.

### 3.4 Delete all Tasks

Delete all tasks easily.

:exclamation: This action is not reversible. Please make sure you want to do this before pressing the button.

:memo: You may use this to delete the sample data if you have no need for them anymore.

### 3.5 Sort Tasks

Sort tasks by various fields in either descending or ascending order. 

![Sort fields](images/sort_fields.png)

:memo: When sorting by Deadline or Priority (optional fields), only tasks that have these fields present will show. 
For example, when sorting by priority, tasks that have no priority will not show since there is no reasonable
sorting order for them.

**Examples:**

:black_nib: To display tasks that have highest priority first:

![](images/sort_eg1.png)

:black_nib: To display tasks that have the closest deadlines first:

![](images/sort_eg2.png)

:black_nib: To display tasks that have the most progress first:

![](images/sort_eg3.png)

### 3.6 Search Tasks

Search for tasks using various fields. 
Type a string in the search box and press the 'Enter' key.

![Search fields](images/search_fields.png)

:memo: The search feature finds tasks which contain the specified search string, not just exact matches, and it is not case-sensitive.

:memo: The search feature can be used together with the sort feature to achieve more specific results.

:memo: When searching for Deadline , you can use '-', '/' or ' ' as date separators
eg. searching for'02-02-2021', '02/02/2021' and '02 02 2021' will all give the same results.

**Examples:**

:black_nib: To find tasks with Priority of *High*:

![](images/search_eg1.png)

:black_nib: To find tasks with Deadline in the month of February:

![](images/search_eg2.png)

:black_nib: To find tasks with Tags containing 'school':

![](images/search_eg3.png)

### 3.7 Change Page Layout

Choose from four different layouts to display your tasks on the Homepage.

![Layout fields](images/layout_fields.png)

Layout       | Description
-------------|------------------------------------
List         | Default layout
Grid 2/Row   | 2 tasks per row
Grid 3/Row   | 3 tasks per row. Not recommended for smaller screens.
Grid 4/Row   | 4 tasks per row. Not recommended for smaller screens.

:memo: Suitability of layout configuration might differ depending on screen size. For example,
a 27-inch monitor will be able to display the Grid 4/Row layout comfortably while a 13-inch monitor 
might not be wide enough to display 4 tasks per row nicely. 


--------------------------------------------------------------------------------------------------------------------