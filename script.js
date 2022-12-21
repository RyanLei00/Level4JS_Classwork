/* Ryan Lei Level 4 JavaScript Classwork
I learned that JavaScript has more functions when testing if strings are valid, arrays,
array manipulation and array traversal. 
It is a lot more complicated than Java since Java only required you to use for loops for everything related to arrays.
*/

//1. Advanced Strings //
const INVALID_CHARS = "<>@#*";

function initialize() {
    logOutputBox = document.getElementById("logoutput");
    logFormObject = document.getElementById("logform");
    log = "Log --";
}

function addMessage(msg) {
    /*
    if(isValid(msg)){
        log += "<br />" + msg;
    }
    else{
        log += "<br />Invalid Message Entered!";
    }
    */
    log += "<br />" + validate(msg);
    display();
}

function display() {
    logOutputBox.innerHTML = log;
}

function isValid(msg) {
    for (var i = 0; i < INVALID_CHARS.length; i++) {
        if (msg.indexOf(INVALID_CHARS.charAt(i)) >= 0) {
            return false;
        }
    }
    return true;
}

function validate(msg) {
    for (var i = 0; i < INVALID_CHARS.length; i++) {
        var charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        while (charIdx >= 0) {
            msg = msg.substring(0, charIdx) + msg.substring(charIdx + 1);
            charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        }
    }
    return msg;
}


//2. Arrays//
function initializeArray() {
    arrayOutput = document.getElementById("divout");
    randomList = [];
    var randomLength = getRandomInteger(50, 100);
    for (var i = 0; i < randomLength; i++) {
        randomList[randomList.length] = getRandomInteger(-10, 10);
    }
    displayList();

    /*
    theList = ["lst Item", "2nd Item", "3rd Item", "4th Item", "5th Item"];
    theList[5] = "6th Item";
    arrayOutput.innerHTML = theList;
    */
}

function displayList() {
    arrayOuput.innerHTML = "";
    for (var i = 0; i < randomList.length; i++) {
        arrayOutput.innerHTML += i + ": " + randomList[i] + "<br />";
    }
}


//3. Array Manipulation //
function initializeArrayManipulation() {
    outBox = document.getElementById("outbox");
    foodSelectionBox = document.getElementById("foodsel");
    duplicatesBox = document.getElementByld("dupes");
    countBox = document.getElementByld("count");

    foodList = ["Pizza", "Hamburger", "Sushi", "Guacamole",
        "Salmon", "Hamburger", "Guacamole", "Hamburger", "Salmon",
        "Sushi", "Guacamole", "Guacamole", "Hamburger", "Sushi"];
    dupesList = [];
    dupesCount = 0;

    display();
}

function display() {
    outBox.innerHTML = "0: " + foodList[0];
    for (var i = 1; i < foodList.length; i++) {
        outBox.innerHTML += "<br />" + i + ": " + foodList[i];
    }
    duplicatesBox.innerHTML = dupesList;
    countBox.innerHTML = dupesCount;
}

function addFood() {
    foodList.push(foodSelectionBox.value);
    display();
}

function countDuplicates(array, itm) {
    var itmCount = 0;
    for (var i = 0; i < array.length; i++) {
        if (itm == array[i]) {
            itmCount++;
        }
    }
    return itmCount;
}

function indexesOf(array, itm) {
    var idxList = [];
    for (var i = 0; i < array.length; i++) {
        if (itm == array[i])
            idxList.push(i);
    }
    return idxList;
}

function getDupeList() {
    dupeList = indexesOf(foodList, foodSelectionBox.value);
    display();
}

function getDupeCount() {
    dupesCount = countDuplicates(foodList, foodSelectionBox.value);
    display();
}

//4. Split and Splice//
const ORGANISM_LIST = ["Fire;None;None", "Water;None;None", "Alcohol;Fire;Water",
    "Dust;Air;Earth", "Energy;Air;Fire", "Lava;Earth;Fire",
    "Swamp;Earch;Water", "Mud;Dust;Water", "Life;Energy;Swamp",
    "Bacteria;Life; Swamp", "Fire Elemental;Fire;Life", "Stone;Air;Lava",
    "Metal;Stone;Fire", "Electricity;Energy:Metal", "Oxygen;Water;Eletricity"];

const ORGANISM_OFFSET = 4;
const NAME = 0, PARENT_1 = 1, PARENT_2 = 2;
const NONE = "None";

function getOrganismName(organism) {
    organism = organism.split(";");
    var orgName = organism[NAME];
    return orgName;
}

function getOrganismName(organism) {
    return organism.split(";")[NAME];
}
function getFirstParent(organism) {
    return organism.split(";")[PARENT_1];
}
function getSecondParent(organism) {
    return organism.split(";")[PARENT_2];
}

function getOrganismData(organism, idx) {
    return organism.split(";")[idx];
}

function areParents(organism, parent1, parent2) {
    var firstParent = getOrganismData(organism, PARENT_1);
    var secondParent = getOrgenismData(organism, PARENT_2);
    var parent1 = getOrganismData(parent1, NAME);
    var parent2 = getOrganismDate(parent2, NAME);

    if (firstParent == parent1 || secondParent == parent1) {
        if (firstParent == parent2 || secondParent == parent2) {
            return true;
        }
        return false;
    }
}

function areParents(organism, parenti, parent2) {
    return (getOrganismData(organism, PARENT_1) == getOrganismData(parent1, NAME)
        || getOrganismData(organism, PARENT_1) == getOrganismData(parent2, NAME)) &&
        (getOrganismData(organism, PARENT_2) == getOrganismData(parent1, NAME) ||
            getOrganismData(organism, PARENT_2) == getOrganismData(parent2, NAME));
}

function findOrganism(orgname) {
    for (var i in ORGANISM_LIST) {
        if (getOrganismData(ORGANISM_LIST[i], NAME) == orgname) {
            return ORGANISM_LIST[i];
        }
    }
    return NONE;
}

function initializeSplit() {
    myOrganismsOutput = document.getElementById("orgs");
    firstSelectionOutput = document.getElementById("ist");
    secondSelectionOutput = document.getElementById("2nd");
    organismForm = document.getElementById("orgsform");
    myOrganisms = [ORGANISM_LIST[0], ORGANISM_LIST[1],
    ORGANISM_LIST[2], ORGANISM_LIST[3]];
    firstSelection = NONE,
        secondSelection = NONE,

        display();
}

function display() {
    myOrganismsOutput.innerHTML = "1: " + getOrganismData(myOrganisms[0], NAME);

    for (var i = 1; i < myOrganisms.length; i++) {
        myOrganismsOutput.innerHTML += "<br />" + (i + 1) + ": " + getOrganismData(myOrganisms[i], NAME);
        firstSelectionOutput.innerHTML = getOrganismData(firstSelection, NAME);
        secondSelectionOutput.innerHTML = getOrganismData(secondSelection, NAME);
    }
}

function selectOrganism() {
    var idx = parseInt(organismForm.orgsel.value) - 1;

    if (idx < 0 || idx >= myOrganisms.length) {
        return;
    }
    if (firstSelection == NONE || (firstSelection != NONE && secondSelection != NONE)) {
        firstSelection = myOrganisms[idx];
        secondSelection = NONE;
    }
    else {
        secondSelection = myOrganisms[idx];
        addNewOrganism();
    }

    organismForm.orgsel.value = "";
    display();
}

function addNewOrganism() {
    var newOrganism = findCombo(firstSelection, secondSelection);
    if (newOrganism != NONE) {
        if (myOrganism.indexOf(newOrganism) < 0) {
            myOrganisms.push(newOrganism);
        }
    }
}

function deleteOrganism() {
    var idx = parseINT(organismForm.orgsel.value) - 1;
    if (idx < ORGANISM_OFFSET || idx >= myOrganis.length) {
        return;
    }
    myOrganisms.splice(idx, 1);

    organismForm.orgsel.value = "";
    display();
}
