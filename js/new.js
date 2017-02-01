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
 function getWeather(){

 $.getJSON('https://ipinfo.io/geo', function(response) {

 var loc = response.loc.split(',');
 var coords = {
 latitude: loc[0],
 longitude: loc[1]
 };
 var url = getURL(coords);
 $.ajax({
 url: url,
 complete: function (response) {
 var json= JSON.parse(response.responseText);
 $('#weather').html('lat =  '+json.coord.lat + '; lon = ' + json.coord.lon);
 },

 });
 return false;
 });

 }

 function getURL(crd){
 return 'http://api.openweathermap.org/data/2.5/weather?lat='+ crd.latitude + '&lon=' + crd.longitude + '&appid=a0859eaca090469533a0e4ea68dd9fdf';
 }
*/

