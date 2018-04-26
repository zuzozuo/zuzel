document.addEventListener("DOMContentLoaded", function(event) {
    const canvas = document.getElementById("canvas");
    let canvasContext = canvas.getContext("2d");
    let startLine = canvas.getContext("2d");


    //--------------------------------

    function createBoard(){
        canvasContext.fillStyle="#87db34";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.lineWidth = 2;
        canvasContext.beginPath();
        canvasContext.fillStyle="#DBD78A"
        canvasContext.arc(220,canvas.height/2,200,0.5*Math.PI,1.5*Math.PI)
        canvasContext.stroke();
        canvasContext.arc(canvas.width - 220, canvas.height/2,200,1.5*Math.PI,0.5*Math.PI)
        canvasContext.closePath();
        canvasContext.fill();
        canvasContext.stroke();        

        canvasContext.beginPath();
        canvasContext.arc(220,canvas.height/2,100,0.5*Math.PI,1.5*Math.PI)
        canvasContext.stroke();
        canvasContext.arc(canvas.width-220,canvas.height/2,100,1.5*Math.PI,0.5*Math.PI)
        canvasContext.closePath();
        canvasContext.stroke();
        canvasContext.fillStyle = "#87db34"
        canvasContext.fill();

        startLine.beginPath();
        startLine.moveTo(canvas.width/2 +100, 500);
        startLine.lineTo(canvas.width/2  + 100, 400);
        startLine.stroke();

    }

//-----------------------------------
    createBoard();

  });