$(document).ready(function() {

$.fn.monthCalc = function() {
    var $date = $('.fc-center > h2:first-child');
    var $month = $date.text().split(' ')[0] ;
    var $year = $date.text().split(' ')[1];
    var $hijriYear = $year - 578;
    
    if ($month === "leden"){
        $date.html($month + ' ' + $year + ' / Jumada Al-Awwal ' + ($hijriYear - 1) + ' - Jumada Al-Akhirah ' + ($hijriYear - 1));
    }
    else if ($month === "únor"){
        $date.html($month + ' ' +  $year + ' / Jumada Al-Akhirah ' + ($hijriYear - 1) + ' - Rejab ' + ($hijriYear - 1));
    }
    else if ($month === "březen"){
        $date.html($month + ' ' +  $year + ' / Rajab ' + ($hijriYear - 1) + ' - Shaban ' + ($hijriYear - 1));
    }
    else if ($month === "duben"){
        $date.html($month + ' ' +  $year + ' / Shaban ' + ($hijriYear - 1) + ' - Ramadan ' + ($hijriYear - 1));
    }
    else if ($month === "květen"){
        $date.html($month + ' ' +  $year + ' / Ramadan ' + ($hijriYear - 1) + ' - Dhul Qadah ' + ($hijriYear - 1));
    }
    else if ($month === "červen"){
        $date.html($month + ' ' +  $year + ' / Dhul Qadah ' + ($hijriYear - 1) + ' - Dhul Hijjah ' + ($hijriYear - 1));
    }
    else if ($month === "červenec"){
        $date.html($month + ' ' +  $year + ' / Dhul Hijjah ' + ($hijriYear - 1) + ' - Muharram ' + $hijriYear);
    }
    else if ($month === "srpen"){
        $date.html($month + ' ' +  $year + ' / Muharram ' + $hijriYear  + ' -   Safar ' + $hijriYear);
    }
    else if ($month === "září"){
        $date.html($month + ' ' +  $year + ' / Safar ' + $hijriYear  + ' - Rabi ul Awal ' + $hijriYear);
    } 
    else if ($month === "říjen"){
        $date.html($month + ' ' +  $year + ' / Rabi ul Awal ' + $hijriYear  + ' - Rabi Al-Akhar ' + $hijriYear);
    } 
    else if ($month === "listopad"){
        $date.html($month + ' ' +  $year + ' / Rabi Al-Akhar ' + $hijriYear  + ' - Jumada Al-Awwal ' + $hijriYear);
    } 
    else if ($month === "prosinec"){
        $date.html($month + ' ' +  $year + ' / Jumada Al-Awwal ' + $hijriYear  + ' - Jumada Al-Akhirah ' + $hijriYear);
    } 
}

$.fn.monthCalc();

$(".fc-prev-button").click(function() {
    $.fn.monthCalc();
});

$(".fc-next-button").click(function() {
    $.fn.monthCalc();
});

$(".fc-today-button").click(function() {
    $.fn.monthCalc();
});

});