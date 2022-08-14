
    let cleanFlag = false
    let numMem = 0
    let operMem = ""

    function doOff(){
        res.value = ""
    }
    function doOn(){
        res.value = "0"
    }

    function doCalc(){
        // console.log(numMem)
        // console.log(operMem)
        // console.log(res.value)
        operMem == "+" && (res.value = +numMem + +res.value)
        operMem == "-" && (res.value = +numMem - +res.value)
        operMem == "x" && (res.value *= +numMem)
        // אותה פעולה
        // operMem == "x" && (res.value = +numMem * +res.value)
        operMem == "/" && (res.value = +numMem / +res.value)
        operMem == "%" && (res.value = +numMem % +res.value)
        operMem == "**" && (res.value = numMem ** +res.value)
    }


    // +,-,*,/,%,**
    function doOper(){
        cleanFlag = true
        operMem = event.target.innerText
    }


    function addDigit(){
        if (res.value == "0" || cleanFlag == true) {
            if (cleanFlag == true) {
                numMem = res.value
                // console.log(numMem)
                // console.log(operMem)
            }
            res.value= ""
            cleanFlag = false
        }

        // console.log(event.target)
        res.value += event.target.innerText
        
    }
