class FlashLamp{
    constructor(battery_obj){
        this.battery=battery_obj;
        this.status=false;
        // khai bác các object con mà FlashLamp quản lý
    }
    getBatterry(){
        return this.battery.getBattery()
    }
    onOffLampe(){
        this.status=!this.status;
        this.battery.decreBattery()
        // thiết lập giá trị để hiện thì không cần trả về, sẽ sử dụng một phương thức khác để lấy giá trị

    }
    getStatus(){
        return this.status;
        //lấy giá trị trả về cho việc tính toán
    }
    notifyStatus(){
        if (this.getStatus()){
            alert('Đèn đang được bật')
        }else alert ('Đèn đã tắt')

    }

}