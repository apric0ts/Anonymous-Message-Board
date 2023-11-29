# Anonymous-Message-Board-Web-App
 
## Overview

This application allows users to send messages back and forth in a message board fashion anonymously.
Each message is denoted with the date and time, and is limited to 128 characters.


## An explanation of the components and their interactions

The message board is created with two main components: Flask (Python) backend and React (JS) frontend.
The Flask backend adds in the date/time component of the message and does the character limiting. The backend receives JSON objects  and returns JSON objects
The React frontend creates the visual application, shows messages, and allows users to send messages.



## Features
- Users should be able to type a message and post it to the message board. &#x2611;
- The message must be non-empty, and at most 128 characters long. &#x2611;
- Users on different computers should be able to post to the same board and view each other’s messages, as APIs are used to send data back and forth between front and backend. &#x2611;


## Installation:

In a code editor terminal from the main directory for the project, `% cd flask`

`pip install flask` if it is not already installed

Run the server.py file

On macOS: `python3 server.py`

The Flask server should start running

<img width="560" alt="image" src="https://github.com/apric0ts/Anonymous-Message-Board/assets/69058754/5a4045fe-e9d3-4638-8a6c-27d4d02dca9f">

Make sure that the port for the Flask server is on `http://127.0.0.1:5000`


Create a new terminal, `% cd my-app`
Run `npm start`

The React server should start running

<img width="464" alt="image" src="https://github.com/apric0ts/Anonymous-Message-Board/assets/69058754/523a8f4f-5f27-47cf-a6c4-f2bcefa3928d">

Make sure that the port for the React server is on `http://localhost:3000/`

Have fun!


