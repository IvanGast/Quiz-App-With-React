#!/bin/bash

./node_modules/.bin/ws -c -d /app/dist -p 8000 --spa index.html --rewrite '/api/* -> http://rest-api:8080/api/$1'

