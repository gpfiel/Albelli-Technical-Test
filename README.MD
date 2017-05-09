# Abroader v0.1

[TOC]

## About the Project

ALBELLI TEST



## Requirements

###Front-end

To run the front-end environment you will need:

- **Node.JS** (https://nodejs.org/)
- **NPM** (https://nodejs.org/)
- **Angular 1 (http://yeoman.io/)  

###Back-end

To run the back-end environment you will need:

- **PHP 7.*** (http://php.net/)
- **Composer** (https://getcomposer.org/)

## Installation and running

First you will have to clone the repository which contain front and back-end source-code.


### Front-end

To run the front-end test/development server you need to run the following:

```bash
cd frontend
npm install
bower install
gulp serve (http://localhost:3000/)
```

Keep your terminal running... the server will be available in http://localhost:****/


### Back-end

To run the back-end test/development server you need to run the following:

```bash
cd backend
composer install
php artisan serve
```

Keep your terminal running... the server will be available in http://localhost:8000/


#### Routes

(generating routes...)
https://github.com/angular/angular-cli#generating-a-route



### RESTful API documentation

(we will use a documentation generator in the project that will be described here soon...)


## Vendor Services and References

Geonames: http://www.geonames.org/
Dingo API: https://github.com/dingo/api/wiki
Laravel CORS: https://github.com/barryvdh/laravel-cors