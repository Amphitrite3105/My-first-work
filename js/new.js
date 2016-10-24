/**
 * Created by Nastya on 18.06.2016.
 */

function convert(form){
    system_from = parseInt(form.system_from.value);
    system_to = parseInt(form.system_to.value);
    num = parseInt(form.num.value, system_from);
    result = num.toString(system_to);
    form.result.value = result;
    var countOfOnes = count(result);
    form.ones.value = countOfOnes;
}

function count(binNumber){
    var maxLengthOfOnes = 0;
    var tempLengthOfOnes = 0;
    var chainStart = false;
    for(i = 1; i < binNumber.length; i++){
        if(binNumber[i] == 1 && binNumber[i-1] == 0){
            chainStart = true;
            tempLengthOfOnes = 1;
        }
        else if(chainStart && binNumber[i] == 1){
            tempLengthOfOnes ++;
        }
        else if(binNumber[i] == 0 && chainStart){
            if(maxLengthOfOnes < tempLengthOfOnes){
                maxLengthOfOnes = tempLengthOfOnes;
            }
            tempLengthOfOnes = 0;
            chainStart = false;
        }
    }
    return maxLengthOfOnes;
}

/*
var number;
do{
    number = prompt('Введите число от 1 до 1000', 1);
    if(number < 1 || number > 1000){
        do{
            number = prompt('Неверный диапазон. Введите число от 1 до 1000', 1);
        }while((number < 1 || number > 1000) && number != null);
    } else {
        do {
            number = prompt('Это не число. Введите число от 1 до 1000', 1);
        }while((number < 1 || number > 1000) && number != null);
    }
}while((number < 1 || number > 1000) && number != null);

var system;
do{
    system = prompt('В какую систему исчесления хотите перевети?', 2);
} while((system < 2 || system > 36) && system != null);

var num = parseInt(number);
var sys = parseInt(system);
var numNew = parseInt(num, 10);
var result = numNew.toString(sys);
alert('Ваше новое число ' + result);
alert('Всего цифр ' + result.length);
*/

