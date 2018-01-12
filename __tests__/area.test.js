var lati = []
var lettere = ['a', 'b']
var negativi = []
negativi.push(-1)
negativi.push(-2)

function getArea() {
    if (lati.length == 2) {
       
       if(!isNaN(lati[0]) && !isNaN(lati[1])){
       		if (lati [0] >=0 && lati[1]>= 0){
	    		var res = lati[0] * lati[1]
	            return res
	        }
    	}
    }
    return -1
}

//test di getIndexConsegna con Loop Coverage

test('Test di getArea con nessun parametro.' , () => {
    expect(getArea()).toBe(-1);
});

test('Test di getArea con solo il primo parametro.' , () => {
	lati.push(5)
    expect(getArea()).toBe(-1);
});

test('Test di getArea con entrambi i parametri.', () => {
	lati.push(2)
    expect(getArea()).toBe(10);
});

test('Test di getArea con tre parametri.' , () => {
	lati.push('6')
    expect(getArea()).toBe(-1);
});

test('Test di getArea con lettere come parametri.' , () => {
	lati = lettere
    expect(getArea()).toBe(-1);
});

test('Test di getArea con numeri negativi come parametri.' , () => {
	lati = negativi
	console.log(negativi[0])
	console.log(negativi[1])
	console.log(lati[0])
	console.log(lati[1])

    expect(getArea()).toBe(-1);
});
