<!DOCTYPE html>
<html>
<body>

<h2>Anshul's JavaScript </h2>

<p id="demo">Changable Code.</p>
<p id="next">This can also be changed.</p>

<button type="button" onclick="myFunction()">Change It!</button>
<button type="button" onclick="funcTwo()">Change this also!!</button> 
<button type="button" onclick="document.write(5+6)">AddtwoNumber</button>
<button type="window.print()"> window print button</button>
<script>

function myFunction() {
  document.getElementById("demo").innerHTML = "You changed me!!.";
}

function funcTwo(){
	document.getElementById("next").innerHTML = 5+9;
    
}

</script>

</body>
</html> 

//reference: W3Schoold.com
