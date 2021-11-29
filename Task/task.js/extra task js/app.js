let task1 = prompt('1 ci nəticənizi daxil edin')
let task2 = prompt('2- ci nəticənizi daxil edin')
let netice = task1/2 + task2/2
if(task1*1 == task1 && task2*1 == task2){
    if(netice < 70 ){
        alert('İmtahandan keçə bilmədiniz')
    }
    if(90 > netice){
        alert('İmtahandan uğurla keçdiniz')
    }
    if(netice > 90){
        alert('siz qızıl tələbəsiniz')
    }
}