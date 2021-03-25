class Battery{
    constructor(_energy){
        this.energy=_energy;
    }
    // Thiết lập thông số pin
    // setBattery(int){
    // //     this.energy= int;
    // };
    // Lấy ra trạng thái pin
    getBattery(){
        return this.energy;
    }
    //Giảm dung lương Pin
    decreBattery(){
        this.energy--;
    }
}
