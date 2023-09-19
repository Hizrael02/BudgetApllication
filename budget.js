let totalBudget, availableBalance, saveBalance, hopeSave, timeOut, incomeBudget, submitButin, itemName, itemCost, budgetminusexpense, enterButin, newList, newListtextnode, newList2textnode, newList2, disTotalbudget, disitemCost;
totalBudget = document.getElementById('totalincome');
availableBalance = document.getElementById('availbalance');
submitButin = document.getElementById('submit');
itemName = document.getElementById('itemsName');
itemCost = document.getElementById('itemscost');
enterButin = document.getElementById('enter');
disTotalbudget = document.getElementById('distoinc');
disitemCost = document.getElementById('unorlis');

submitButin.addEventListener("click", () => {
    incomeBudget = totalBudget.value;
    disTotalbudget.innerHTML = incomeBudget;
    availableBalance.innerHTML = totalBudget.value;
    totalBudget.value = '';
});





enterButin.addEventListener("click", () => {
    availableBalance.innerHTML = availableBalance.innerText - itemCost.value;
    newList = document.createElement('li');
    newList.style.border = "1px solid purple";
    newList.style.height = "10%";
    newList.style.width = "30%"
    newList.style.fontSize = "140%"
    newList.style.fontWeight = "bold"
    newList.style.listStyle = "none"
    newList.style.display = "flex";
    newList.style.margin = "auto";
    newList.style.marginTop = "2%";
    // newList.style.justifyContent = "center";
    hopeSave = document.createElement("button");
    hopeSave.style.fontSize = '130%';

    hopeSave.style.marginLeft = "5%";
    hopeSave.appendChild(document.createTextNode("X"));
    saveBalance = document.createTextNode(itemName.value + " " + " " + " ");
    newList2textnode = document.createTextNode(" " + " " + " " + itemCost.value);
    newList.appendChild(saveBalance);
    newList.appendChild(newList2textnode);
    newList.appendChild(hopeSave);
    disitemCost.appendChild(newList);
    itemCost.value = "";
    itemName.value = "";

    hopeSave.addEventListener("click", () => {
        disitemCost.removeChild(newList);
        disitemCost.innerHTML = "";
    });


});
