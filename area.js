module.exports = {
    

    getArea: function() {
        if (lati.length == 2) {
            if (!isNaN(lati[0]) && !isNaN(lati[1])) {
                if (lati[0] >= 0 && lati[1] >= 0) {
                    var res = lati[0] * lati[1]
                    return fetch(res)
                }
            }
        }

        return fetch(-1)
    }

}