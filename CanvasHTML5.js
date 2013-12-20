//window.onload = function () { 
 var graphCanvas = document.getElementById("graphSpace");
 //alert(graphCanvas.getContext);
    if (graphCanvas && graphCanvas.getContext) {
        context = graphCanvas.getContext("2d");
        var data = new Array();
        // var xval = "20,10,40,30|60,20,10,10|20,10,40,30|10,30,60|20,10,40,30|20,10,40,30|60,20,10,10|20,10,40,30|10,30,60|20,10,40,30||20,10,40,30|5,60,20,10,5|20,10,40,30|10,30,60|20,10,40,30||20,10,40,30";
        // var xval = "20,10,40,30|60,20,10,10|20,10,40,30|10,30,60|20,10,40,30|20,10,40,30|60,20,10,10|20,10,40,30|10,30,60|20,10,40,30|20,10,40,30|5,60,20,10,5|20,10,40,30|10,30,60|20,10,40,30|20,10,40,30";
        var xval = "20,10,40,30|60,20,10,10||20,10,40,30|10,30,60|20,10,40,30|20,10,40,30";
        var xclr = "#00AF52,#92D14F,#00CC33,#DA9695,#DD0000,#DD00cc,#FF00cc,#00CC33,pink,coral,lightgreen,orange,brown,grey,skyblue,purple";
      //var xString = "Japan lllll|India|China|Japan|Pak||India|China|Bangla desh|Sri lanka|Japan||India|Bangla desh|Sri lanka|Japan|India||kak";
       // var xString = "Japan lllll|India|China|Japan|Pak|India|China|Bangla desh|Sri lanka|Japan|India|Bangla desh|Sri lanka|Japan|India|kak";
        var xString = "Japan lllll|India||China|Japan|Pak|India";
        var legends = "";
        var legendsColor = "#00AF52,#92D14F,#00CC33,#DA9695,#DD0000";
        var legendsName = "Strongly Agree||Agree||Slightly Agree||Slightly Disagree||Disagree ||Strongly Disagree";
        var calENPS = "51,52,33,54,45,51,52,33,54,45,51,52,33,54,45,09";
        var heading = "CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration|kakakak";
        //| TEAM: In my environment, collaboration between teams is encouraged|CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration| TEAM: In my environment, collaboration between teams is encouraged|CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration| TEAM: In my environment, collaboration between teams is encouraged|CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration| TEAM: In my environment, collaboration between teams is encouraged||CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration| TEAM: In my environment, collaboration between teams is encouraged";
        //|DEVELOPMENT: I have all the necessary support to manage my development|VISION: I can see a clear link between what is expected of me and the purpose of Schneider Electric|ENERGY: I am willing to give extra effort to help Schneider Electric meet its goals|CARE 1: My immediate manager/supervisor gives me feedback that helps me improve my performance|CARE 2: At Schneider Electric my opinions and thoughts are taken into consideration| TEAM: In my environment, collaboration between teams is encouraged|DEVELOPMENT: I have all the necessary support to manage my development|VISION: I can see a clear link between what is expected of me and the purpose of Schneider Electric|ENERGY: I am willing to give extra effort to help Schneider Electric meet its goals|VISION: I can see a clear link between what is expected of me and the purpose of Schneider Electric|ENERGY: I am willing to give extra effort to help Schneider Electric meet its goals|akak";
   
        var headingText = heading.split("|");
        var legendsfill = legendsColor.split(",");
        var lagendsN = legendsName.split("||");
        var enpsCall = calENPS.split(",");
       // alert(xaxis);
        var bgXI = 100; //Number(xbgXI)
        var bgXEE = 250; // Number(xbgXEE);
        var bgYI1 = graphCanvas.height-2500; // Number(xbgYI);
        var bgYE = 400//Number(xbgYE);
        var bgY = graphCanvas.height-bgYE;
        var bgX = bgXI;
        var bgH = bgY - bgYI1;
        var bgXE = graphCanvas.width - bgXEE;
        var bgW = bgXE - bgXI;
        var changeYaxis = 140;
        var bgYI = changeYaxis-100;                                                                                          //alert(bgW+" kanhaiya " + bgH)
        drawBarChart(context, bgX, bgY-110, bgXE, bgYI);
      //  graphCanvas.addEventListener("mouseover", mouseDown);


    }
    function mouseDown() {
        alert("kanhaiya");
    }
   function drawBarChart(context, bgX, bgY, bgXE, bgYI) {
       context.lineWidth = "1.0";
       //drawLine(context, bgX, bgY, bgXE, bgY)           //X-Axis
     //drawLine(context, bgX, bgY, bgX, bgYI)                //Y-axis
       context.lineWidth = "0.0";
       var xsbl = "%";
       var bValue = true;
       var yaxis = "Man|Men|Pot|Rice|Wht|Man|Men|Pot|Rice|Wht";
       var xmax = 100;
      
       var xdiff = 20;
       
       //var maxval = tString; /// "100";
       //var diff = "10";
       //var clr = "pink,coral,olive,orange,brown,grey,skyblue,purple,orange,gray,violet,olive,darkgreen,qqq,aaa,ppp"
       //var sbl = "%";
       var clA = xclr.split(",")

       init(context, bValue, yaxis, xmax, xdiff, xclr, xsbl)
       drawLegends(context);
       darwLegendsText(context);
   }
   function drawLegends(contextLegend) {
       var num = -15;
       for (var i = 0; i < 6; i++)
        {
        num=num+100;
        contextLegend.beginPath();
        contextLegend.globalAlpha = 1;
        contextLegend.fillStyle = legendsfill[i];
        contextLegend.rect(num, changeYaxis-100, 10, 10);
          contextLegend.fill();
       }
   }
   function darwLegendsText(contextLegends) {
    var num = -100;
    for (var i = 0; i < 6; i++) {
        num = num + 100;
        contextLegends.textAlign = "left";
        contextLegends.font = "11px Georgia";
        contextLegends.globalAlpha = 1;
        contextLegends.fillStyle = "#000000";
        contextLegends.fillText(lagendsN[i], num + 100, changeYaxis - 92);
    }

   }
   function drawLine(contextO, startx, starty, endx, endy) {
        
       contextO.beginPath();
       contextO.moveTo(startx+119, starty);
       contextO.lineTo(endx+119, endy);
       contextO.closePath();
       contextO.stroke();
   }
   function drawRectangle(contextr,con, startx, starty, len, wid, clr, bvalue, sbl) {
       contextr.beginPath();
       contextr.rect(startx, starty, len, wid);
       
       //
       var grd = contextr.createLinearGradient(startx, starty,  startx, starty+20);
       //grd.addColorStop(0, clr);
       grd.addColorStop(0, "#E0E0E0");
       grd.addColorStop(1, clr);
       
       // Fill with gradient
       //ctx.fillStyle = grd;
       //
       contextr.fillStyle = grd;
       contextr.fill();
      
     //  contextr.setMouseover(function () {  });
      
       var pos = len/2+7
       var text = bvalue;
     //  alert(startx );
       contextr.fillStyle = "#000000";
       con.fillText(text + sbl, startx + pos, starty+23);

       var textObj = con.measureText(text);
       contextr.closePath();


   }
  
   function init(context, b, bstr, maxval, d, c, s) {
      
  // var barstr_Arr = xaxis//bstr.split("|");
  // var barval_Arr = data; //alert(barstr_Arr + "  TESTING  " + xaxis)
   var max_val = maxval;
   var _diff = d;
   var clrArr = c.split(",");
   var sbl = s;

   drawBars(context, b);
 
   if (b) {
       createYAxis(context)
   }
   createXAxis(context);
 
  function createYAxis(context) { 
   //var minvalue = 0;
   var diff = 100;
   var n = enpsCall.length;
 
   var sX = bgX;
   var sY =changeYaxis-100 //bgY;

         //-1;    //bg.y;
   var bgheight = bgH;                                          //alert(bgX+" BHBHBHBH" + bgY)
   var gap = (bgheight - 120) / n; 
   // var Val=minvalue;
  // for (var i = 0; i <= n; i++) {
      // drawLine(context, sX - 5, sY, sX, sY)

       // sY = sY + gap;
       // }
   }
   function createXAxis(context) {
    var minvalue = Number(0);
	var max = maxval;
	var diff = Number(_diff);
	var n = max/diff;
	var sX = bgX;
	var sY = bgY;
	var bgwidth = bgW;          
	var gap=(bgwidth-1) / n;
	var Val = Number(minvalue);      // n=5
	
   }
   function drawBars(context, b) {
       var sX = bgX+120;
       var sY = changeYaxis+50//bgY;
       // alert(sX);
       data = xval.split("||");
       var xaxis = xString.split("||");
       var len = enpsCall.length;
      
       var bgheight = bgH
       var bgwidth = bgW-20
       var gap = (bgheight -1) / len;
       var bH = Number(gap - gap / 3);
       
       if (bH > 35) {
           bH = 35;
       };
       //var maxW = bgwidth;
       for (var i = 0; i < data.length; i++) {
           var arr1 = data[i].split("|");
           var str = xaxis[i].split("|");
           if (data.length != 1) {
               drawBars3(context, sY);
               drawBars4(context, sY, i);
           }

           alert("data length "+data.length);
           for (var j = 0; j < arr1.length; j++) {
               drawBars1(context, sY-gap / 2, j);
               drawBars2(context, sY - gap / 2);
               context.textAlign = "right";
               context.font = "12px Arial"
               context.globalAlpha = 1;
               context.fillStyle = "#000000";
               context.fillText(str[j], sX - 5, sY - gap / 2, 200);           //alert("DDDD " + sbl)

               barcreateBlocks(sX, sY, arr1[j], bH, clrArr, bgwidth, max_val, sbl);
               if (data.length != 1) {
                   sY = sY + gap / 2;
               }
               else {
                   drawBars3(context, sY);
                   drawBars4(context, sY, j);
                   sY = sY + gap;
               }


           }
          
          sY = sY + gap;
          
       }
   }
   function drawBars1(context, sy,j) {
       var sX = bgX + 830;
       //var sY = changeYaxis+50//bgY;
       // alert(sX);
       var len = enpsCall.length;
       var bgheight = bgH
       var bgwidth = bgW
       var gap = (bgheight - 1) / len;
       var bH = Number(gap - gap / 3);
       
       if (bH > 35) {
           bH = 35;
       };
       //var maxW = bgwidth;
     //  for (var i = 0; i < len; i++) {
           context.textAlign = "right";
           context.font = "12px Arial"
           context.globalAlpha = 1;
           context.fillText(enpsCall[j] + "%", sX - 5, sy, 200);           //alert("DDDD " + sbl)

          // barcreateBlocks(sX, sY, barval_Arr[i], bH, clrArr, bgwidth, max_val, sbl);
          // sY = sY + gap;

     
      // }
   }
   function drawBars2(context1,sy) {
       var sX = bgX + 830;
     //  var sY = changeYaxis+50//bgY;
       // alert(sX);
       var len = enpsCall.length;
       var bgheight = bgH
       var bgwidth = bgW
       var gap = (bgheight - 1) / len;
       var bH = Number(gap - gap / 3);

       if (bH > 35) {
           bH = 35;
       };
       //var maxW = bgwidth;

      // for (var i = 0; i < len; i++) {
           context1.beginPath();
           context1.fillStyle = "#C4F0FF";
      context1.globalAlpha = 0.5;
           context1.rect(sX -35, sy-15, 35, 25);
           context1.fill();
         
          // sY = sY + gap;

          
      // }
   }
   function drawBars3(context, sy) {
       var sX = bgX + 830;
      // var sY = changeYaxis+300//bgY;
       // alert(sX);
       var len = headingText.length;
       var bgheight = bgH
       var bgwidth = bgW
       var gap = (bgheight - 1) / len;
       var bH = Number(gap - gap / 3);

       if (bH > 35) {
           bH = 35;
       };
       //var maxW = bgwidth;
      // for (var i = 0; i < len; i++) {
           context.textAlign = "right";
           context.fillStyle = "#000000";
           context.globalAlpha = 1;
           context.font = "12px Arial"
           context.fillText("Satisfaction Score", sX+10, sy-100, 200);           //alert("DDDD " + sbl)

           // barcreateBlocks(sX, sY, barval_Arr[i], bH, clrArr, bgwidth, max_val, sbl);
          // sY = sY + gap;

           
      // }
   }
   function drawBars4(context, sy,p) {
       var sX = bgX + 830;
      // var sY = changeYaxis+310//bgY;
      
       
       var len = headingText.length;
       var bgheight = bgH
       var bgwidth = bgW
       var gap = (bgheight - 1) / len;
       var bH = Number(gap - gap / 3);

       //if (bH > 35) {
         //  bH = 35;
     //  };
       //var maxW = bgwidth;
      // for (var i = 0; i < len; i++) {
           context.textAlign = "left";
           context.font = "12px Arial"
           context.fillStyle = "#000000";
           context.globalAlpha = 1;
           context.fillText(headingText[p], sX - 700, sy-90, 600);           //alert("DDDD " + sbl)

           // barcreateBlocks(sX, sY, barval_Arr[i], bH, clrArr, bgwidth, max_val, sbl);
          // sY = sY + gap;


     //  }
   }
   function lineDraw(context0, startx, starty) {
       context0.beginPath();
       context0.moveTo(startx-1, starty-55);
       context0.lineTo(startx-1, starty);
    context0.stroke();
   }
   function barcreateBlocks(SX, SY, Arr, bh, clrArr, bw, mv, sbl) {
       var gp = (bgH - 1) / enpsCall.length;
       var sX = SX ;
       var sY = SY;
       //alert(sY);
       var gaap = gp/2-bh/2;
       var arr = Arr.split(",");
       for (var i = 0; i < arr.length; i++) {
       var barMcX = sX;
       var barMcY = sY - bh;
       var barMcH = bh;
       var barMcW = bw / mv * arr[i];
       if (i == 0) {
           lineDraw(context, barMcX, barMcY);

       }
       drawRectangle(context,context, barMcX, barMcY - gaap, barMcW, barMcH, clrArr[i], arr[i], sbl);
     
       context.fillStyle = 'black'
       
       sX = sX + barMcW;
       } /**/

   }
 }
