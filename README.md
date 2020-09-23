# IronhackPrework
Javascript Prework (LAB | JS: Mars Rover Kata)

## Table of contents
* [General info](#general-info)
* [Setup](#setup)

## General info
This project was made for Ironhack Prework. 
I use only JS.

## Setup

Firstly, I created an object to represent the rover. There are four properties to mention directions, positions and coordinates of the places.

const myRover = {
    x: 0,
    y: 0,
    direction: 'N',
    travelLog: [{ "prevX": 0, "prevY": 0 }]
};


command(rover, orders) is the main function and can call following methods.

turnLeft(rover) / in case l
turnRight(rover) /in case  r
moveForward(rover) /in case f
moveBackward(rover) /in case  b
