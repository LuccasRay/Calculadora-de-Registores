function pegarDados(){

          let fx01 = document.getElementById("f1").value;
          let fx02 = document.getElementById("f2").value;
          let fx03 = document.getElementById("f3").value;
          let fx04 = document.getElementById("f4").value;

          let conc = parseFloat(fx01 + fx02);
          let multfx = conc * fx03;
          let tole1 = multfx * fx04;
          let tole2 = multfx - tole1;
          let tole3 = multfx + tole1;
          
          document.getElementById("result").innerHTML = multfx + " ohms com tolerância mínima de " + tole2 + " ohms e máxima " + tole3 + " Ohms ";
}