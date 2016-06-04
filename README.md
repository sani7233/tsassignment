# Project Setup #

## Required Tools ##

**GIT:** Download and install for MAC or PC from http://git-scm.com/ make sure during the installation its done as global.

**NODE:** Download and install NODE for MAC or PC from http://nodejs.org/.

**GULP:** Using terminal(MAC) or command prompt/git bash(Windows) use ```npm install -g gulp``` this will install gulp so that gulp commands can be run from any folder on the system.

Once the repository has successfully been cloned and all the above steps are completed. Browser to the project root where *gulpfile.js* and *package.json* files are present run the command ```npm install``` it will add all the project dependencies in *node_modules* folder.

## Project Folder Structure ##

```development``` this folder consists of all the source files for the project

```components``` this folder consist of sass files

## Gulp ##

```gulp``` This is default task that will take care of everything 

### SCSS ###
Though a very small module but the presentation is done in SCSS to show the known workflow that I follow for most of my projects.

```
─── scss/
  ├── _base.scss (base styles)
  ├── _layout.scss (layout styles)
  ├── _mixins.scss (SCSS mixins)
  ├── _variables.scss (SCSS variables ) and rest files
  └── main.scss (responsible of importing all the other partial SCSS files)
```

### JavaScript ###
AngularJS is used along side with modernizr for feature detection.