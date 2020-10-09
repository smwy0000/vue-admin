// 过滤特殊字符
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

// 验证邮箱
export function validateEmail(value){
    let reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return !reg.test(value) ? true : false;
}

// 验证密码
export function validatePass(value){
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    return !reg.test(value) ? true : false;
}

// 验证验证码
export function validatecode(value){
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}

  /**
   * 没有使用defaul时，可以同时声明多个export
   * 文件import需要花括号
   */