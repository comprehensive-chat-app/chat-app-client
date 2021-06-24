#!/bin/sh

REACT_APP_API_URL=api react-scripts build
docker build -t row248/chat-app-client:latest -f ../
docker push row248/chat-app-client