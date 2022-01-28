# EasyBlog
A blog template based on ***Spring Boot***, ***MySQL***, ***React***, and ***Material-UI***.

# Introduction
This is a tech blog template based on ***Spring Boot***, ***MySQL***, ***React***, and ***Material-UI***. The purpose of this project is to 
provide a easy to use blog template for someone to establish their first personal page.

I will continuously add more functions on this template. You can see a TODO list in the following section which indicates my recent plans for it.

If you want to check how it looks like, you can visit my own page: [haocheng-wu.com](https://www.haocheng-wu.com). It's fully based 
on this template.

# Functionalities
- [x] Github signin
- [ ] Blog Articles
    - [x] Backend APIs (Articles information CRUD)
    - [x] Article List
      - [ ] Pagination
    - [ ] Article Tags
    - [ ] Article Search
    - [ ] Comment
- [x] Dashboard
  - [x] Markdown-based editor 
  - [x] Article Manager
  - [ ] Statistics
- [x] About Me Page
- [x] Experience Page
- [x] Project Page
  - [x] Project Tags
  - [x] Project Links (Github & Article)
- [x] Resume Page 

# Environment
- Backend
  - Java 8
  - MySQL 8
- Frontend
  - Node.js 17
  - React 17
  - Material-UI 5

# Instructions

## Configuration

### Github OAuth2 Configuration

*TODO: Security Enhancement*

This template uses Github OAuth2 API to implement the signin function. You need to configure it correctly such that you can sign in your own account and manage your website through the dashboard.

Under

    /easyblog-backend/src/main/java/com/h349wu/easyblog/controller/AuthorizeController.java

, replace the client_id and client_secret with your own code, and replace redirect_uri to your own url. About how to get those information, see [Github OAuth2 Guide](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps). Besides, replace "9999999" in line 32 with your own Github id number such that your account can get the authentication to access dashboard.

### Image Storage Configuration

You should correctly configure the image storage path for the image uploading function, otherwise the article editor won't work properly.

In application.yml, set the server.tomcat.basedir as the path you want to store uploaded images. The files will save in 
  
    {basedir}\work\Tomcat\localhost\ROOT

You should also change the **rootPath** variable in *ImgUtil.java* as the path above. Finally, create a file called **prefix** in the directory, and write a '0' in it.

## Build Frontend And Backend Together

By default, this project build frontend and backend together through maven wrapper. You can simply run 
it through command:

    easyblog-backend > ./mvnw spring-boot:run

Or build it first then run through the generated jar file:

    easyblog-backend > ./mvnw clean package
    easyblog-backend/target > java -jar easyblog-1.0.0.jar

Make sure there is a database called 'blogdb' in your local MySQL server and 
remember to replace your own MySQL URL, username, and password in 'easyblog-backend/src/main/resources/application.properties'
, otherwise the server won't start.

The website is running at localhost:8080.

## Build Frontend And Backend Separately

To building frontend and backend separately, comment lines 59 to 116 in 'easyblog-backend/pom.xml'. Then, start them through 
commands below:

### Backend
    easyblog-backend > ./mvnw spring-boot:run

### Frontend
    easyblog-frontend > npm install
    eastblog-frontend > npm start

The backend server is running at localhost:8080. The frontend client is running at localhost:3000.