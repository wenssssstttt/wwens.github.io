

let myIamge = document.querySelector('img');

myIamge.onclick = function() {
    let mysrc = myIamge.getAttribute('src');
    if(mysrc === 'image/firefox-icon.jfif'){
        myIamge.setAttribute('src','image/firefox2.png');
    } else {
        myIamge.setAttribute('src','image/firefox-icon.jfif');
    }
};

//设置个性化华英信息
//获取新按钮和标题的引用
let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，'+myName;
    }
}

// 初始化代码：在页面初次读取时进行构造
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了' + storeedName;
}

mybutton.onclick = function() {
    setUserName();
}


