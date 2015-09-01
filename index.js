var prompt=require('prompt-sync').prompt;

var totalQuestions=15;
var correct=0;
var startTime= new Date();
console.log('What is your name?');
var name=prompt();
console.log('Are you ready for my badass quiz?')
var ready = prompt().toLowerCase();
if (ready==='yes'){
	console.log();
	console.log('Okay '+name+' here is question 1: Let us start with the basic setup. When creating files for your html page, what is the tag after the . on your main html file?');
	console.log();
	var question1=prompt().toLowerCase();
	if (question1==='html'){
		console.log('Great answer!');
		correct=correct+1;
	}
	else {
		console.log('Sorry '+name+' that is not correct. The correct answer was html');
	}
	console.log();
	console.log('Question 2: Is <div> an opening tag or a closing tag?');
	console.log();
	var question2=prompt().toLowerCase();
	if (question2==='opening'){
		console.log('Great Job! Looks like you know your stuff.')
		correct=correct+1;
	}
	else{
		console.log('ooo, not so much');
	}
	console.log();
	console.log('Let us delve a little deeper. Question 3: Does a <div> tag have a display of block or inline?');
	console.log();
	var question3=prompt().toLowerCase();
	if (question3==='block'){
		console.log('That one was a little trickier, good work.')
		correct=correct+1;
	}
	else{
		console.log('Sorry, no, but you will get it on the next one.')
	}
	console.log();
	console.log('Here is question 4: What is the correct way to call a class in css... ');
	console.log('a. .className');
	console.log('b. #className');
	console.log('c. $className');
	console.log();
	var question4=prompt().toLowerCase();
	if (question4==='a'){
		console.log('Rightio!');
		correct=correct+1;
	}
	else{
		console.log('Sorry, it was a');
	}
	console.log();
	console.log('Do not give up now! We are almost a third of the way there.');
	console.log();
	console.log('Question 5: Which one is not right?');
	console.log('a. <div></div>');
	console.log('b. <img></img>');
	console.log('c. <p></p>');
	console.log('d. <a href"#"></a>');
	console.log();
	var question5=prompt().toLowerCase();
	if (question5==='b'){
		console.log('You got it!!!');
		correct=correct+1;
	}
	else{
		console.log('The correct answer was b. The <img> tag does not need a closing </img>');
	}
	console.log();
	console.log('Question 6: Which tag sets the background color for your whole page?');
	console.log('a. The uppermost <div> tag');
	console.log('b. The <body> tag');
	console.log('c. You can not set it for a whole page at once');
	console.log();
	var question6=prompt().toLowerCase();
	if (question6==='b'){
		console.log('good choice '+name);
		correct=correct+1;
	}
	else{
		console.log('WA Wa wa. answer was b');
	}
	console.log();
	console.log('Question 7: Put these in order of specificity with commas inbetween.')
	console.log('class, id, tag, style.');
	console.log();
	var question7=prompt().toLowerCase();
	if (question7==='style, id, class, tag'){
		console.log('Wow! Great Job!');
		correct=correct+1;
	}
	else{
		console.log('The proper order is: style, id, class, tag');
		console.log('Do not be so hard on yourself, you will get the next one');
	}
	console.log();
	console.log('Question 8: Which of these produces the largest text? h1, or h6');
	console.log();
	var question8=prompt().toLowerCase();
	if (question8==='h1'){
		console.log('you know your stuff!');
		correct=correct+1;
	}
	else{
		console.log('h1 is the largest heading.');
	}
	console.log();
	console.log('Question 9: Which tag is commonly used to target specific lines of code or characters to style independently of its specified class or tag?');
	console.log('a. <section>');
	console.log('b. <tr>');
	console.log('c. <div>');
	console.log('d. <span>');
	console.log();
	var question9=prompt().toLowerCase();
	if (question9==='d'){
		console.log('Riiiiiiight');
		correct=correct+1;
	}
	else{
		console.log('nope, it is d');
	}
	console.log();
	console.log('Question 10: What is your favorite flavor of jello?');
	console.log();
	var question10=prompt();
	if (!parseInt(question10)){
		console.log('How original, '+question10+' is everyones favorite');
		correct=correct+1;
	}
	else{
		console.log('That is not a flavor of jello. You are an idiot, but i will give you credit anyway.');
		correct=correct+1;
	}
	console.log();
	console.log('That was easy. Now you are in the last 3rd of the test, take a breather and let us continue');
	console.log();
	console.log('Question 11: In the css below, what is the value for the left margin?');
	console.log('margin: 3em 2em;');
	console.log();
	var question11=prompt().toLowerCase();
	if (question11==='2em'){
		console.log('YEAH!!! YOU ROCK!!!');
		correct=correct+1;
	}
	else{
		console.log('SOO CLOSE! But the answer is 2em');
	}
	console.log();
	console.log('Question 12: How do you add a comment in javascript?');
	console.log();
	var question12=prompt();
	if (question12==='//'){
		console.log('WooHoo!! Yaah!');
		correct=correct+1;
	}
	else{
		console.log('for JavaScript, you use a // at the beginning of the line.');
	}
	console.log();
	console.log('Question 13: Which is correct in css?');
	console.log('a. margin: center;');
	console.log('b. margin: auto;');
	console.log('c. margin: none;');
	console.log('d. margin; auto;');
	console.log();
	var question13=prompt().toLowerCase();
	if (question13==='b'){
		console.log('You REALLY know your shit!');
		correct=correct+1;
	}
	else if (question13==='d'){
		console.log('Beware of the semi-colon');
	}
	else{
		console.log('Nope. Sorry');
	}
	console.log();
	console.log('Nearing The End!! Your percentage so far is '+((correct/13)*100)+'%. Try to raise that before we finish!');
	console.log();
	console.log('Question 14: What is the correct css syntax to change font?');
	console.log();
	var question14=prompt();
	if (question14==='font-family'||question14==='font-family:'){
		console.log('That is GGGGRRRRRREEEEEEAAAAAAAATTT!');
		correct=correct+1;
	}
	else{
		console.log('Sorry ' +name+', I would have accepted font-family or font-family;');
	}
	console.log();
	console.log('LAST QUESTION!!');
	console.log();
	console.log('Question 15: What is (\'23\'+(5*2))/10');
	console.log();
	var question15=prompt();
	if (question15==='231'){
		console.log('Great work. That one was a mind meld.');
		correct=correct+1;
	}
	else{
		console.log('Not quite. First you do 5*2 which is 10. When you add 10 to \'23\'(which is a string) you get 2310. Devide by 10 and it gives you 231');
	}

	console.log();
	var endTime=new Date();
	var time=(endTime-startTime)/1000;
	if (time<60){
		console.log('Thanks for taking my quiz! '+name+', you got '+correct+' out of '+totalQuestions+' correct. That is '+((correct/totalQuestions)*100)+'%. And it only took you '+time.toFixed(2)+' seconds!');
	}
	else {
		console.log('Thanks for taking my quiz! '+name+', you got '+correct+' out of '+totalQuestions+' correct. That is '+((correct/totalQuestions)*100)+'%. And it only took you '+(time/60).toFixed(2)+' minutes!');
	}
}
else{
	console.log();
	console.log('get out of here')
}
