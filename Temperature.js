let C = +prompt("Nhap do C: ");
function Temperature(c) {
    this.tempC=c;

    this.convertCtoF=function () {
        let F=(9/5)*C+32;
       document.write("Do F la: " +F+ "<br/>");
    }
    this.convertCtoK=function () {
        let K=C+273.15;
       document.write("Do K la: " +K);
    }
}
let ab = new Temperature();
ab.convertCtoF();
ab.convertCtoK();
// document.write(ab.tempC);