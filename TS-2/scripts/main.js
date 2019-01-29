var classlength = document.getElementsByClassName("gp").length;
console.log(document.getElementsByClassName("gp"));
console.log(classlength);

var i = 0;

var cnt;
for (cnt = 0; cnt < classlength; cnt += 1) {
  document.getElementsByClassName("gp")[cnt].onclick = function() {
    console.log(this.id);
    //console.log(this);
    //console.log(this.style.fontStyle);
    //this.style.fontStyle = "normal";
    if (i % 2) {
      var el = document.getElementById(this.id);
      el.style.fontWeight = 'bold';
      el.style.color = 'red';
      el.style.fontSize = '150%';
      //e1.style.fonStyle = "italic";
      console.log(1);
      //e1.style.fontStyle = 'normal';
      document.getElementById(this.id).style.fontStyle = 'italic';
      i++;
    } else {
      var el = document.getElementById(this.id);
      el.style.fontWeight = 'bold';
      el.style.color = 'blue';      el.style.fontSize = '100%';      //e1.style.fontStyle = 'bold';      //console.log(this);
      //e1.style.fontStyle = "italic";      document.getElementById(this.id).style.fontStyle = 'normal';    }
      i++;
          console.log(this.style.fontStyle);
        }
      }
    }
