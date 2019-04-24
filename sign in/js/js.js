var password = document.getElementById("password"),
    repeatPassword = document.getElementById("repassword");
    
    
    
function changeMe()
     {
    
        
            if(password.value != repeatPassword.value)
            {
                document.getElementById("alert").innerHTML="Passwords must match";
            
                
            }
            else
            {
                document.getElementById("alert").innerHTML=" ";
            }
    }