//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

var johnScore= 80;
var nickScore= 45;

var passingScore= 51;

if (johnScore>=passingScore && nickScore>=passingScore){
    console.log('Both Students have Passed the exam')
}
else if(johnScore>= passingScore || nickScore>=passingScore){
    console.log('One Student Passed')
} else {
    console.log('Both Failed')
}