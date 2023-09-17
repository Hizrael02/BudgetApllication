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
    availableBalance.innerHTML = +totalBudget.value;
});





enterButin.addEventListener("click", () => {

    saveBalance = +totalBudget.value;
    budgetminusexpense = saveBalance - itemCost.value;
    availableBalance.innerHTML = budgetminusexpense;
    newList = document.createElement('li');
    newList2 = document.createElement('li');
    newListtextnode = document.createTextNode(itemName.value);
    newList2textnode = document.createTextNode(itemCost.value);
    newList.appendChild(newList2textnode);
    newList2.appendChild(newList2textnode);

    disitemCost.appendChild(newList);
    disitemCost.appendChild(newList2);
    itemCost.value = "";

})
