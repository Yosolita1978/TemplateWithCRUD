### Your Template For Express and React App
Create full stack apps with React and Express. 
Run your client, server and do a restart of your dump db to have a full-stack project working in minutes

# Step by Step instructions - To use this project as your start point

### For create the whole project
1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/TemplateWithCRUD.git NAMENEWDIRECTORY`
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password. 
If you had configured your postgres without password just run the command `psql -f db.sql`.

3. To clean your folder from the owner git, run the command `rm -rf .git`
4. Run the command `git init` to start your git repository
5. Go to the server folder in the project (`cd server`) and run the command `npm install`

6. Inside your server folder, create an .env file with `touch .env`
7. Inside your server folder, open the file `.env.example` and copy the file there. 
8. Inside your .env file, paste the string from .env.example and change the variables with the values from the project. 
Important: For this template, the name of your db is `techtonica1`. If you had configured your postgress without password your .env file should look like this:
```
// server/.env
DATABASE_URL="postgresql://@localhost/techtonica1"
DATABASE_SSL="false"
```
9. Inside your server file: run the command `psql -U postgres -f db.sql` to restore the DB from the file db.sql
If you had configured your postgress without password your command should be: `psql -f db.sql`

10. Go to the cliente folder (`cd .. and cd client`) and run the command `npm start`

11. This template have two enviroments already working, so for this template you need to build production. Inside your cliend folder run the command `npm run build`, this will build production locally. 

11. Both server should run now with `npm start`. Please note that in server 5000 you will have production and in server 3000 you will have dev from React. 

12. Go to localhost:5000 and you should see something like this (for your server and production)
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-04-04%20at%204.50.28%20PM.png?raw=true)
If you are confused about production and dev environments, please refer to [this instructions](https://docs.google.com/document/d/1ley6fg1x44w5Env4a8CKOpaPQNqCPkr8wagtiGOhEHI/edit#heading=h.fm4g4rkeqb8)