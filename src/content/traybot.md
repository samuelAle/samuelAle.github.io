---
title: 'Traybot; a refreshing spin on robotics'
date: '2016-03-15'
tags: ['Robotics', 'Computer Vision']
description: 'Have you ever hosted a party, but been too busy serving guests to enjoy it yourself?'
---

Have you ever hosted a party, but been too busy serving guests to enjoy it yourself?
Well I've got a solution!

TrayBot&copy; is a friendly robot designed using a [TurtleBot](http://www.turtlebot.com/)
robot system in order to enhance your home lifestyle, and any scale of events from house
parties to large symposiums. The software hosted here publicly, when configured to a
TurtleBot using the robotics framework [ROS](http://wiki.ros.org/), will transform the
TurtleBot into a sophisticated TrayBot. A TrayBot can perform the following tasks:

- Navigate through a room while avoiding non-human obstacles in its path
- Detect people using leg-recognition software via a Microsoft Kinect
- Approach people safely, and efficiently to serve them refreshments or whatever you might like to serve.
- Tell pre-programmed jokes as it moves from guest to guest.
- Navigate back to a pre-defined refill station when it has run out of refreshments.

The TrayBot is fully autonomous, yet can be controlled via a web-app interface if desired.
The web interface shows a map of the area the TrayBot is using to navigate and serve guests.
An operator could manually force the TrayBot to return to a refill station,
or manually point out a location for the TrayBot to navigate to.
The operator can even drive the TrayBot using the web controls too.
Some things we would like to add is support for multiple TrayBots in the same location, and
having configureable settings for the user to be able to define their own jokes and easily
redefine the TrayBot's internal map of the area its in.

##### Click for a short presentation of a functional TrayBot

<iframe alt="TrayBot Presentation" width="560" height="315" src="https://www.youtube.com/embed/yKJAJsvxj6k" frameborder="0" allowfullscreen></iframe>

## Components

- TurtleBot
- Kinect
- Flat bottom tray
- Staples usb scale
- Unix OS configured with ROS
- (Optional) TurtleBot extension stand

## Autumn 2014 Robotics Capstone

This software was developed for a senior capstone course held at the
University of Washington, Seattle. The course objective was to teach the basics
of robotics and give students implementation experience with a state-of-the-art
mobile robot using the robot programming framework ROS (Robot Operating System).
For more information, please visit the course [website](https://sites.google.com/site/cse481au14/)

## Contributors

- [Samuel Alebachew](https://www.samuelale.com)
- Andy Fu
- Seth Hampson
