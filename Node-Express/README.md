## Implementation of Express js and Node.js

1. Basic Routing
   - [app.js](app.js)
2. Demonstrate the use of JSON API with express.js
   - [app.js](app.js)
3. TLS: demonstrate the use of Server and client application using node.js
   - [server.js](server.js)
   - [client.js](client.js)
4. Setting cookies with cookie-parser: Demonstrate an example for setting and reading cookies using the cookie-parser module.
   - [cookie.js](cookie.js)
5. Demonstrate the use of Custom middleware to check the user age is valid or not. To view this, accept the user input as name & age, for age use middleware and if age is not valid then show the error message and if valid then show an appropriate message.
   - [custom-middleware.js](custom-middleware.js)
6. File operation
   - [file-ops.js](file-ops.js)
   - [Reference](https://riptutorial.com/node-js/example/5637/check-permissions-of-a-file-or-directory)
7. Building your own modules
8. Cluster module
9. Readline
   - [file-ops.js](file-ops.js)
   - Install `prompt-sync` for prompts
10. File upload
    - [file-upload.js](file-upload.js)
    - accept attribute to select specific files only (comma separated)
      |Value|Description
      |:------------- |:-------------
      |file_extension|Specify the file extension(s) (e.g: .gif, .jpg, .png, .doc) the user can pick from
      |audio/*|All sound files
      |video/*	|All video files
      |image/*	|All image files
      |media_type|Valid media type

11. Reverse proxy using ExpressJS