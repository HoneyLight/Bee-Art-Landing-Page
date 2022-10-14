let btnRegister = $("#btnRegister"),
btnSubmit = $("#btnSubmit")
formModal = $(".formModal")
Fname = $("#Fname")
Lname = $("#Lname")
Ename = $("#Ename")
phoneNo = $("#phoneNo")
errorLabel = $("#errorLabel")

formModal.hide()
btnRegister.on("click", function(){
    formModal.show()
})
btnSubmit.on("click", function(){
    formModal.hide()
})
