

# Project Overview
	An application that finds career matches based on personality type.

## Project Description

	Take assessment
	Returns personality type results
	Returns career matches that best suit you
	Connects you to the O*NET database, containing information on hundreds of standardized and occupation-specific descriptors

	*As of now this app has already been set to a Users results

Use this section to describe their final project and perhaps any links to relevant sites that help convey the concept and\or functionality

	API DOCS
	https://student12.traitify.com/developer 
	https://github.com/traitify/traitify-js-widgets
	https://github.com/traitify/traitify-js-client
	traitify.com

## Functional Components

This is a breakdown of the top level functionality for final project

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| GET request for assessment| H | 2hrs| 3hrs | 
| --- | :---: |  :---: | :---: | :---: |
| PUT request for slide data| H | 2hrs| 3hrs |  
| --- | :---: |  :---: | :---: | :---: |
| GET results for personality| H | 2hrs| 1hrs |  
| --- | :---: |  :---: | :---: | :---: |
| GET career matches for assessment| H | 2hrs| 5hrs |   
| --- | :---: |  :---: | :---: | :---: |
| HTML & CSS| H | 2hrs| 3hrs |  

## Helper Functions
Use this section to document all helper functions. These functions should be versatile enough to be reused in other projects

## Additional Libraries
	jQuery
	Handlebars
	Bootstrap
	Traitify Ui
	Google fonts

## JSON Data Keys
 Use this section to list specific JSON Data Key mappings.  
 	Obtain your authorization keys.
 		public     399c11fc4bb447b9d67d175d88
		secret    xxxxxxxxx8c8a
	Use code in terminal to get authorization results
      curl https://api-sandbox.traitify.com/v1/assessments \
		-H "Content-Type: application/json" \
		-u 508f7a24948e461475c8858c8a:x \
		-d '{"deck_id": "career-deck"}'
    Response should look like
    	{"id":"17e5bb42-f56f-46b8-aeb3-9f70bd5bd298","deck_id":"career-deck","completed_at":null,"created_at":1480380408773,"locale_key":"en-US","profile_id":"990a4599-412c-4054-9a3a-0ba9e11a9ef7"}

## jQuery Functional Requirements
 Use this section to list some, but not all, of the jQuery methods discovered while working on this project.

| Function Name | Purpose |
| --- | :---: | --- | :---: |
| getSlides	 | GET request for each slide in assessment |
| --- | :---: | --- | :---: |
| slideUpdate |	PUT request, keeps track of slide data |
| --- | :---: | --- | :---: |
| updateProgress | Displays progress bar |
| --- | :---: | --- | :---: |
| lastSlide	| Determines which slide is last |
| --- | :---: | --- | :---: |
| getResults | GET Request for personality results |
| --- | :---: | --- | :---: |
| showCareers |	GET Request for career matches |


## Change Log
 I hate the styling and will continue to update it

## Issues and Resolutions
 Use this section to list of all issues encountered and their resolution
	Displaying career-matches
		need to make two separate functions for career and personality results

	Clearing results
		need to get a new assessement id for each client
		need a server side library
	Handlebars
		had difficulty setting template up properly and getting it to work
		became confusing when trying to style


