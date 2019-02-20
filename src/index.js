import 'bootstrap';
import './style';


// console.log('home page123475959');

// class Log {
//     constructor () {
//         console.log('error');
//     }
// }
// let log = new Log();

//默认是http://localhost:8080  webpack-dev-server 的服务 -> 需要转为3000端口
let xhr = new XMLHttpRequest();
xhr.open('GET', '/api/user', true);
xhr.onload = function(){
    console.log('-res1---', xhr.response);
};
xhr.send();