	document.getElementById('container').onchange = function() {
		var bill = Number(document.getElementById('billTotal').value);
		//If not converted to number it will be treated as strings.
		//alert(bill);
		var tipPercent = document.getElementById('tipInput').value;
		//alert(tipPercent);
		var split = document.getElementById('splitInput').value;
		//alert(split);
		var tipValue = bill*(tipPercent/100);
		var newBillEach = (bill+tipValue)/split;
		var tipValueEach = tipValue/split;
		
		document.getElementById('tipOutput').innerHTML = tipPercent + "%";
		document.getElementById('splitOutput').innerHTML = split;
		document.getElementById('newBill').innerHTML ="Rs. "+ newBillEach.toFixed(2);
		document.getElementById('newTip').innerHTML ="Rs." +tipValueEach.toFixed(2);
	
	}