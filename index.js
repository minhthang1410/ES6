// let title = 'cybersoft';

// {
//     let title = 'cybersoft1';
//     console.log('scope', title);
// }

// console.log(title);

// // var: hoạt động trên tất cả scope
// // let: hoạt động trên từng scope

// const tieuDe = 'cybersoft';

// // const giá trị k bị gán lại (dừng cho các biến config hệ thống như domain, trên token,... hoặc funtion)

// //ES5: function đại diện cho hàm, phương thức, lớp đối tượng
// var showMessage = function(mess){
//     alert(mess);
// }

// const test = function(){
//     return 'ok';
// }

// //ES6

// var showMessageArr = (mess) => {alert(mess)};

// const testArr = () => 'ok';

// const getApi = urlName => 'https://cybersoft.vn/api/' + urlName;

// getApi('themHocVien');

// //Ngữ cảnh con trỏ this

// let hocVien = {
//     hoTen: 'Nguyễn Văn A',
//     lop: 'FE39',
//     layThongTinHocVien: function(){
//         var hienThiThongTin = () => {
//             console.log('họ tên: ' + this.hoTen)
//             console.log('lớp: ' + this.lop)
//         }
//         hienThiThongTin();
//     }
// }

// hocVien.layThongTinHocVien();

//ES5
let sv = {
    ma: 'sv01',
    ten: 'nguyen van a',
    lop: 'fe39',
    thongTinCaNhan: {
        diaChi: 'vo van tan',
        tuoi: 19
    },
    xuatThongTinCaNhan: () => {
        console.log('Họ tên: ' + sv.ten);
        console.log('Lớp: ' + sv.lop);
        console.log('Tuổi: ' + sv.thongTinCaNhan.tuoi);
    }
}
// let ma = sv.ma;
// let ten = sv.ten;
// let tuoi = sv.thongTinCaNhan.tuoi;

//ES6
let { ma, ten, thongTinCaNhan, xuatThongTinCaNhan } = sv;

xuatThongTinCaNhan();

let hocSinh = [
    1,
    'trần văn b',
    function () {
        console.log('mã', hocSinh[0]);
        console.log('tên', hocSinh[1]);
    }
]

let [maHS,hoTenHS,xuatThongTinHocSinh] = hocSinh;

xuatThongTinHocSinh();


let getInfo = (ten = "Thắng", lop = "FE39") => {
    console.log(ten, lop)
}

getInfo('Minh', 'fe44');

let key = 'maSV';
let value = 'sv001';
let lop = 'fe39';

let hocVien = {
    [key]: value,
    lop
}

console.log(hocVien);

//Thể hiện mảng dưới dạng object
let obMangHocVien = {
    '1asasd':     {ma:1, ten: 'A'},
    '12hajsd12':     {ma:2, ten: 'B'},
    'qưdnkasd21123':     {ma:3, ten: 'C'}
}

// for in duyệt mảng dưới dạng object
for(let key in obMangHocVien){
    console.log('học viên object', obMangHocVien[key]);
}

var mangHV = [
    {ma:1, ten: 'A'},
    {ma:2, ten: 'B'},
    {ma:3, ten: 'C'},
]

//ES5
for (let i = 0; i < mangHV.length; i++){
    let hv = mangHV[i];
    console.log('học viên', hv);
}

//ES6 for ... in
for(let index in mangHV){
    let hocVien = mangHV[index];
    console.log('học viên ' + (Number(index) + 1) , hocVien);
}

// for ... of: mỗi lần duyệt trả về 1 đối tượng trong mảng

for(let hocVien of mangHV){
    console.log('học viên', hocVien)
}

//khai báo lớp đổi tượng

var LopHoc = function(maLop,tenLop){
    this.maLop = maLop;
    this.tenLop = tenLop;
}

let lop2 = new LopHoc('FE39', 'FrontEnd39');

//ES6 
class LopHoc_es6{
    maLop;
    tenLop;
    constructor(maLop,tenLop){
        this.maLop = maLop;
        this.tenLop = tenLop;
    }
    xuatThongTinLopHoc(){
        console.log('mã lớp', this.maLop);
        console.log('tên lớp', this.tenLop);
    }
}

let lopHoc = new LopHoc_es6('fe40','frontend40');
lopHoc.xuatThongTinLopHoc();

// Kế thừa trong es6

class NhanVien{
    ma;
    ten;
    namSinh;
    constructor(ma, ten, namSinh){
    
    }
}

class QuanTriVien extends NhanVien{
    constructor(ma, ten, namSinh, danhMucChucNang){
        super(ma, ten, namSinh);// khi kế thừa có tham số bắt buộc constructor phải có hàm super()
    }
}

var quanTriVien = new QuanTriVien(1, 'nguyễn văn C', 1998, ['chức năng a']);