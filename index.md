<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Calculator</title>
        <link rel="stylesheet" href="css/style.css" />
    </head>

    <body>
 
        <div class="container">
            
            <div class="box">
                <div class="input-display" id="input-display">x</div>
                <div class="output-display" id="output-display">x</div>
            </div>

            <div class="button-section">
                <input type="button" class="buttons" class="numberinput" id="one" value="1" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="two" value="2" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="three" value="3" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="four" value="4" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="five" value="5" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="six" value="6" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="seven" value="7" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="eight" value="8" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="nine" value="9" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" class="numberinput" id="zero" value="0" onclick="numberinputfunction(this)">
                <input type="button" class="buttons" id="plus" value="+" onclick="operandinputfunction(this)">
                <input type="button" class="buttons" id="minus" value="-" onclick="operandinputfunction(this)">
                <input type="button" class="buttons" id="multiply" value="x" onclick="operandinputfunction(this)">
                <input type="button" class="buttons" id="division" value="/" onclick="operandinputfunction(this)">
                <input type="button" class="buttons" id="clear" value="C" onclick="clearmemory()">
                <input type="button" class="buttons" id="equals" value="=" onclick="evalfunction()">
            </div>
        </div>
    </body>

    <script type="text/javascript" src="scripts.js"></script>
    
</html>