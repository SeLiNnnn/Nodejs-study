$(function(){
    $(document).click(() => {
        alert(1)
        $.post("http://localhost:3000/postDateShow", {name : 'selin',age : 21}, (msg) => {
            console.log(msg)
        })
    })
})