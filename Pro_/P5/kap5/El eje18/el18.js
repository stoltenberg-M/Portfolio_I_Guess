let numb = [7,4,5,6,9,1,2,8,3,10]

function rem(numb) {
    while (numb.length>0){
        let max = 0
        for (let i = 1;i<numb.length; i++){
            if (numb[i]>numb[max]){
                max = i
            }
        }
        console.log(numb[max])
        numb.splice(max,1)
    }
}

rem(numb)