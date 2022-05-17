# employee-tracker
  
  ## Table of Contents
  - Description
  - Installation Instructions
  - Usage Information
  - License
  - contribution
  - Tests
  - Questions
  
  ### Description 
  This is a command line app that allows you to connect to a server which saves your employee information and recall it, as well as create new information for Department, Roles within your company, and the Employees themselves. 

  ### Installation Instructions
  run 'npm install' after cloning the repository and cding to the directory.
  you'll also want to ensure you have mysql2 CLI installed.

  ### User Instructions
  BEFORE RUNNING CLI, navigate to the file db/connection.js and make sure that your mysql user and password information is correct.
  
To use this product, you'll need to start by initializing the server. First, ensure that you are in the correct directory in your command line, then run the command 'mysql -u root -p' followed by your password for mysql. then, run 'source db/db.sql', followed by 'source db/schema.sql', followed by 'source db/seeds.sql'. If you have legacy information you can enter it into the seeds file which will populate any empty table, you can reuse these commands to repopulate your tables from the legacy information. You will need to update this file if you inted to re-run these tables often. After you initialize the database and seed it, then you will need to quit msysql, or open a new command line. After ensuring that you are in the correct directory, run 'npm start' and simply follow the prompts!

  ### DEMO
  
https://user-images.githubusercontent.com/97007117/168896837-2edba844-50f4-4fa7-8e0c-e073391f4c76.mp4


  ### License
  

  ### Questions
  If you have any questions, you can reach me at:
  - eMail: fjschmidt292@gmail.com
  - Github: github.com/FSchmidt292/
<<<<<<< HEAD
  
=======
  
>>>>>>> f6a51b306db2c5a4fd425105f10a61efbdbfc865
