function getMonth(msg){
    let month = parseInt(prompt(msg));
    checkMonth(month)
}

function checkMonth(month){
    switch (month) {
        case 1:
        case 2:
        case 12:
            document.write("winter");
            break;
        case 3:
        case 4:
        case 5:
            document.write("spring");
            break;
        case 6:
        case 7:
        case 8:
            document.write("summer");
            break;
        case 9:
        case 10:
        case 11:
            document.write("autumn");
            break;
        default:
            getMonth("Error! Write corect month!");
    }
}

getMonth("What is the month number?")