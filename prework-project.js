// Rover object goes here:
//ITERATION 1| The rover object
const myRover = {
    x: 0,
    y: 0,
    direction: 'N',
    travelLog: [{ "prevX": 0, "prevY": 0 }]
};

const borderCom= "Rover can't get out from border";

//progress brach
// Direction attribute
// ITERATION 2| Turning the rover
function turnLeft(rover) {
    switch (rover.direction) {
        case 'N':// North
            rover.direction = 'W';
            break;
        case 'W':// West
            rover.direction = 'S';
            break;
        case 'S': //Sounth
            rover.direction = 'W';
            break;
        case 'E': // East
            rover.direction = 'S';
            break;
    }
    //console.log("Turned left and new direction :" + rover.direction);
    return ("Turned left and new direction :" + rover.direction);
}

function turnRight(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
    //console.log("Turn right and new direction: " + rover.direction);
    return ("Turn right and new direction: " + rover.direction);
}

// Bonus1
//ITERATION 3| Moving the rover
function moveForward(rover) {
    rover.travelLog.push({ "prevX": rover.x, "prevY": rover.y });

    if ((rover.x === 0 && rover.direction === 'W') || (rover.y === 0 && rover.direction === 'N') ||
        (rover.y >= 10 && rover.direction === 'S') || (rover.x >= 10 && rover.direction === 'E')) {
        //console.log("Rover can't get out from border");
        //return rover;
        return borderCom;
    }
    else {
        switch (rover.direction) {
            case 'E':
                rover.x++;
                break;
            case 'S':
                rover.y++;
                break;
            case 'W':
                rover.x--;
                break;
            case 'N':
                rover.y--;
                break;
        }
        // console.log(rover);
        return rover;
    }
}
//console.log(moveForward(myRover));

//Bonus 2
function moveBackward(rover) {
    rover.travelLog.push({ "prevX": rover.x, "prevY": rover.y });

    if ((rover.x === 0 && rover.direction === 'E') || (rover.y === 0 && rover.direction === 'S') ||
        (rover.y >= 10 && rover.direction === 'N') || (rover.x >= 10 && rover.direction === 'W')) {
        //console.log("Rover can't get out from border");
        //return rover;
        return borderCom;
    }
    else {
        switch (rover.direction) {
            case 'W':
                rover.x++;
                break;
            case 'N':
                rover.y++;
                break;
            case 'E':
                rover.x--;
                break;
            case 'S':
                rover.y--;
                break;
        }
        //console.log(rover);
        return rover;
    }
}
//console.log(moveBackward(myRover));

/* making with switch
function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case 'l': // left
                turnLeft(rover, order);
                break;
            case 'r': // right
                turnRight(rover, order);
                break;
            case 'f': // forward
                moveForward(rover, order);
                break;
            case 'b': //backward
                moveBackward(rover, order);
        }
        console.log(rover);
    }
}
*/

//ITERATION 4| Commands & Bonus 3
function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        if (order === 'l') {
            console.log(turnLeft(rover)); // left
        }
        else if (order === 'r') {
            console.log(turnRight(rover)); // right
        }
        else if (order === 'f') {
            console.log(moveForward(rover)); //forward
        }
        else if (order === 'b') {
            console.log(moveBackward(rover)); //backward
        }
        else { //Bonus 4 wants to ignore but always better to warn...
            console.log(" You can write only 'l', 'r', 'f' or 'b'.")
        }
    }
}
command(myRover, 'rffrfflfrff');

