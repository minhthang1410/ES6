let title = 'cybersoft';

{
    let title = 'cybersoft1';
    console.log('scope', title);
}

console.log(title);

// var: hoạt động trên tất cả scope
// let: hoạt động trên từng scope

const tieuDe = 'cybersoft';

// const giá trị k bị gán lại (dừng cho các biến config hệ thống như domain, trên token,... hoặc funtion)

//ES5: function đại diện cho hàm, phương thức, lớp đối tượng
var showMessage = function(mess){
    alert(mess);
}

const test = function(){
    return 'ok';
}

//ES6

var showMessageArr = (mess) => {alert(mess)};

const testArr = () => 'ok';

const getApi = urlName => 'https://cybersoft.vn/api/' + urlName;

getApi('themHocVien');

//Ngữ cảnh con trỏ this

let hocVien = {
    hoTen: 'Nguyễn Văn A',
    lop: 'FE39',
    layThongTinHocVien: function(){
        var hienThiThongTin = () => {
            console.log('họ tên: ' + this.hoTen)
            console.log('lớp: ' + this.lop)
        }
        hienThiThongTin();
    }
}

hocVien.layThongTinHocVien();