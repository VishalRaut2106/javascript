# Express

A Node.js web application framework that helps us to make web applications it is used for server side programming


### 4 major uses
 + listen for incoming req
 + parse 
 + match express with routes  (/....)
 + suitable response

---

## What is Express?

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It provides a thin layer of fundamental web application features without obscuring Node.js features.

## Key Features

- **Routing**: Simple and elegant routing system for handling HTTP requests
- **Middleware**: Flexible middleware system for request processing
- **Templating**: Support for multiple view/template engines (EJS, Pug, Handlebars, etc.)
- **Static File Serving**: Built-in support for serving static files
- **Error Handling**: Comprehensive error handling and debugging capabilities
- **Performance**: Lightweight and fast request handling
- **RESTful APIs**: Easy creation of RESTful web services

## Basic Setup

```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Core Concepts

### 1. **Routing**
Routes are the paths and HTTP methods that your application responds to:
```javascript
app.get('/path', (req, res) => { });
app.post('/path', (req, res) => { });
app.put('/path', (req, res) => { });
app.delete('/path', (req, res) => { });
```

### 2. **Middleware**
Functions that have access to request and response objects:
```javascript
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Pass control to next middleware
});
```

### 3. **Request Object (req)**
Contains information about the HTTP request:
- `req.params` - Route parameters
- `req.query` - Query string parameters
- `req.body` - Request body data
- `req.headers` - HTTP headers
- `req.method` - HTTP method (GET, POST, etc.)

### 4. **Response Object (res)**
Used to send a response to the client:
- `res.send()` - Send response
- `res.json()` - Send JSON response
- `res.status()` - Set HTTP status code
- `res.redirect()` - Redirect to another URL
- `res.render()` - Render a template

## Common Middleware

- **express.json()** - Parse incoming JSON payloads
- **express.urlencoded()** - Parse URL-encoded form data
- **cors()** - Enable Cross-Origin Resource Sharing
- **morgan()** - HTTP request logger
- **passport()** - Authentication middleware

## Error Handling

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

## Best Practices

1. Use environment variables for configuration
2. Separate routes into different files
3. Use middleware for common tasks
4. Implement proper error handling
5. Use async/await with try-catch blocks
6. Validate and sanitize user input
7. Use HTTPS in production
8. Implement rate limiting for security 

---

`app.listen` => creates an websrever which listen for incoming api req

`app.use`  => The app.use() function in Express.js adds middleware to the application's request-processing pipeline. It applies the specified middleware to all incoming requests or to specific routes, allowing you to modify request/response objects, perform operations, or handle errors throughout the application.

> http -> text based request but express convert parse it into object
---
`app.get` => take to prameters ()