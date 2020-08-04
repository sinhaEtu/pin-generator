document.getElementById("successSign").style.display = "none";
document.getElementById("dangerSign").style.display = "none";


function pinGenerator() {
    document.getElementById("pinNumberInput").value = "";

    let pinNumber = parseInt(Math.random() * 10000);

    if (pinNumber > 999) {
        document.getElementById("pinnumberGenerate").value = pinNumber;
    }
    document.getElementById("pinNumberInput").value = "";
}


function inputNumber(number) {
    const beforeNumber = document.getElementById("pinNumberInput").value;
    const afterNumber = beforeNumber + number;
    if (length.afterNumber = 4) {
        document.getElementById("pinNumberInput").value = afterNumber;
    }
}


function clearNumbers() {
    document.getElementById("pinNumberInput").value = '';
}


function backspaceNumber() {
    const presentValue = document.getElementById("pinNumberInput").value;
    if (presentValue != '') {
        document.getElementById("pinNumberInput").value = presentValue.slice(0, -1);
    }
}

function matchOrNot() {
    const pinGenerator = document.getElementById("pinnumberGenerate").value;
    const inputPin = document.getElementById("pinNumberInput").value;

    if (pinGenerator == inputPin) {
        document.getElementById("successSign").style.display = "block";
        document.getElementById("dangerSign").style.display = "none";
    } else {
        document.getElementById("dangerSign").style.display = "block";
        document.getElementById("successSign").style.display = "none";
    }
}

function actionCountdown() {
    const actionCount = parseInt(document.getElementById("actionCount").innerText);
    const actionLeft = document.getElementById("actionCount").innerText = actionCount - 1;
    if (actionLeft < 1) {

        document.getElementById("actionCount").innerText = 0;
        document.getElementById("submitBtn").style.display = "none";
    }

}

function returnToTry() {
    actionCountdown();
    document.getElementById("dangerSign").style.display = "none";
    document.getElementById("pinnumberGenerate").value = "";
    document.getElementById("pinNumberInput").value = "";

}