let nameOfStdnt = document.getElementById("nameip")
let ageOfStdnt = document.getElementById('ageip')
let gradeOfStdnt = document.getElementById('grdip')
let tdOne = document.getElementById('tdone')
let tdTwo = document.getElementById('tdtwo')
let tdThree = document.getElementById('tdthree')
let count = 0;
let coudnt = 0;


function dlt(id) {
    console.log('id', id)
    let trow = document.getElementById(`s${id}`)
    console.log(trow)
    trow.remove();
}


let addDetails = function () {
    let trow = document.getElementsByClassName(`s1`)
    let stdntnm = nameOfStdnt.value;
    let stdntage = ageOfStdnt.value;
    let stdntgrd = gradeOfStdnt.value;


    let pushObject = {
        namee: stdntnm,
        agee: stdntage,
        grdee: stdntgrd
    }


    if (stdntnm && stdntage && stdntgrd) {

        let table = document.getElementById('myTable');
        count += 1;
        ;
        let row = `<tr id="s${count}">
            <td>${pushObject.namee}</td>
            <td>${pushObject.agee}</td>
            <td>${pushObject.grdee}</td>
            <td><button id="${count}" class="buttn" onclick="dlt(this.id)">remove</button></td>
            </tr>`
        table.innerHTML += row;
    }

    else {
        alert('please fill compelete details')
    }

    nameOfStdnt.value = "";
    ageOfStdnt.value = "";
    gradeOfStdnt.value = "";

}


