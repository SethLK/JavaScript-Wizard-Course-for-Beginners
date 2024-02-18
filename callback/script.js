const demo = document.querySelector(".demo")

function doCallBack(callback){
    setTimeout(() => {
        const result = "Hello there"
        callback(result)
    }, 3000);

    // 3000 stand for 3 sec
}

function main(result){
    demo.textContent = result
}

doCallBack(main)