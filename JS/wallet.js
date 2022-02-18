// Get Element Id
function _(elem){
    return document.getElementById(elem);
}

// Validate Each Field  
function validateFields(fieldName){

    var isValidated = true;
    var fieldLength = fieldName.length;
    
    for(var i = 0; i < fieldLength; i++){
        fieldValue = Number(_(fieldName[i]).value);
        if(fieldValue == NaN){
            alert(fieldName[i] +' value should be a number');
            _(fieldName[i]).focus();
            isValidated = false;
            return isValidated;
        }
        else if(fieldValue < 0){
            alert(fieldName[i] +' value should not be a negative number!');
            _(fieldName[i]).focus()
            isValidated = false;
            return isValidated;
        }
    }
    return isValidated;
}

// Get Total Expenses
function getTotalExpenses()
{
    var foodCost = Number(_('Food').value);
    var rentCost = Number(_('Rent').value);
    var clothesCost = Number(_('Clothes').value);
    var ttlCost = foodCost + rentCost + clothesCost
    return ttlCost;
}

// Calculate Expenses and Balance
_('btnCalculate').addEventListener('click', 
    function(){
        if(validateFields(['Income','Food','Rent','Clothes'])){

            var income = Number(_('Income').value);
            var ttlExpenses = getTotalExpenses();

            if(ttlExpenses > income){
                _('ttlExpenses').innerText = '0';
                _('balance').innerText = '0';
                _('Income').focus();
                alert('Expenses cannot be greater than income!');
            }
            else{
                _('ttlExpenses').innerText = ttlExpenses;
                _('balance').innerText = income - ttlExpenses;
            }            
        }
        else{
            _('ttlExpenses').innerText = '0';
            _('balance').innerText = '0';
        }
    }
);

// Calculate SAvings
_('btnSaving').addEventListener('click', function(){
    if(validateFields(['Savings'])){
        var Income = Number(_('Income').value);
        var SavingRate = parseFloat( Number(_('Savings').value) / 100);
        var savingAmount = parseFloat(Income * SavingRate);
        var Balance = Number(_('balance').innerText);

        if(Balance < savingAmount || Balance === 0){
            alert('Wallet has not sufficient balance for saving!');
            _('savingAmount').innerText = 0;
            _('remainingBalance').innerText = 0;
            return;
        }
        else{
            _('savingAmount').innerText = savingAmount.toFixed(2);
            _('remainingBalance').innerText = parseFloat(Balance - savingAmount).toFixed(2);
        }

    }
});



