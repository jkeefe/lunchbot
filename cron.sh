#!/bin/bash

# Tell cron to use my local .profile information
source /home/ubuntu/.profile

# change directories into the /lunchbot
cd /home/ubuntu/bothouse/lunchbot

# run the bot itself using node
node lunchbot.js
