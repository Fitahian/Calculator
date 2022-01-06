(function () {
    let result = ''
    let current = '0'
    let aff1 = document.getElementById('show-1')
    let aff2 = document.getElementById('show-2')
    let signPass, resPass = false

    function clearScreen() {
        result = ''
        current = '0'
        render()
    }

    function del() {
        if(current.length <= 1)
            current = '0'
        else current = current.slice(0, current.length - 1)
        render()
    }

    function render() {
        aff1.innerHTML = result
        aff2.innerHTML = current
    }

    function add(item) {
        if((item == '0' || item == '00') && current == '0')
            item = ''

        if((/[.0-9]/.test(item))) {
            if(item == '.' && (resPass == true || signPass == true)) {
                resPass = false
                signPass = false
            }

            if(resPass == true) {
                current = ''
                resPass = false
            }

            if(current == '0' && item != '.') current = item
            else current += item

            signPass = false
            render()
        }

        else if(item != ''){
            if(signPass) {
                result = result.slice(0, result.length - 1)
                result += item
            }

            else result += current + ' ' + item
            resPass = true
            signPass = true
            render()
        }
    }

    function getResult() {
        if(!signPass) {
            resPass = true
            result += ' ' + current
            current = eval(result)
            render()
            result = ''
        }
    }
})()