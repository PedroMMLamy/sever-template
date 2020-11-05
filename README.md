# Server-APP-TodoIst
# Server APP TodoIst - Project 3 Repository II

**TODOIST - Read Me - Server**


# Description:
Improve your professional & Personal life satisfaction. Organize your to do tasks in an easy and clear way to simplify your daily routine.

## User Stories:

- **404** - user warning that the page doesn’t exist 

- **500** - user warning that something in the page isn’t working

- **homepage** -  Access the root to create the next To do list

- **sign up** - Access all the available features of the website login - log in to personal account

- **logout** - log out from personal account to main page 

- **To do list** - All the created todo´s 

- **create To do** - create a new To do 

- **edit To do** - edit a created To do 

- **To do** - written details of a task

- **Delete To do** - delete a task

- **profile** - personal list of To do’s

- **other profiles** - other users personal list of To do’s


# Backlog:
Other features besides the mvp scope:
Task Category (Professional/Personal)


## API Endpoints (backend routes)

| HTTP Method | URL                | Request Body                 | Success status | Error Status | Description                                                                                                                     |
| ----------- | ------------------ | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/user`       | Saved session                | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`     | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`      | {email, password}            | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`     | (empty)                      | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/auth/user`       | {id}                         | 200            | 400          | Retrieve user information, including user's liked artworks (populated)                                                          |
| POST        | `/auth/user/edit`  | {id, name, email, Todo} | 201            | 400          | Edits user's name, email and/or list to do´s                                                                          |
| GET         | `/todo/:id`     | {id}                         | 200            | 400          | Return specific todo from MetAPI                                                                                               |
| GET         | `/todo/:id`     | {id}                         | 200            | 400          | Return specific todo from MetAPI                                                                                             |
| POST        | `/todo/add/:id` | {id, userId}                 | 201            | 400          | Create new todo in user´s database                                                                                              | 
          

# Frontend:
- Homepage
- CSS
- HTML


# Models:

- To Do Model:

```  
 
const mongoose = require("mongoose");
const Todo = mongoose.Schema({
  text: {
    type: String,
  },
  user_id:String,
});
module.exports = mongoose.model("Todo", Todo);
```

- User Model:

``` 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
```


<br>

## Links

### Trello/Kanban

[Trello](https://trello.com/b/awnRyXFw/todoist)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/PedroMMLamy/Client-APP-TodoIst)

[Server repository Link](https://github.com/PedroMMLamy/Server-APP-TodoIst)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
