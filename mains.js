let battery1 =new Battery(80)
let Lamp1=new FlashLamp(battery1);
document.write('Thông số của đèn là '+ Lamp1.getBatterry());
// battery1.decreBattery();
// document.write('Thông số của đèn là '+ Lamp1.getBatterry());

function onLamp(){
    //alert('vao function');
    // if (!Lamp1.getStatus()){
        Lamp1.onOffLampe();
        Lamp1.notifyStatus();
    // }
    console.log('Thông số của đèn là '+ Lamp1.getBatterry());
}

