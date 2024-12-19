document.addEventListener("DOMContentLoaded", ()=>{
    signUpButton.addEventListener("click",async ()=>{
        if (!username.value||!fullName.value||!password.value){
            output.innerText = "fill out all three input"
            return
        }
        const result = await signUp(
            username.value,
            fullName.value,
            password.value
        );
        if("Conflict" === result){
            output.innerText = "Username already taken.";
            return;
        }
        //SUCCESS
        window.location.href = "login.html";
    });//end click
}); //end loaded