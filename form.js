function data(event){
    event.preventDefault()
    var name=document.getElementById ("name").value;
    var email=document.getElementById("email").value;
    var rollNo=document.getElementById("rollno").value;
    var password=document.getElementById ("password").value;
    if(name ==="" || email === "" || rollNo === "" || password === "")
    {
        alert("All fields are mondatory");
        return false;
    }if(password.length>10 || password.length<10)
    {
        alert("password should be 10 characters");
        return false;
    }
    if(isNaN(password))
    {
        alert("password should be numerical");
        return false;
    }
    else
    {
        window.location.href = "abc.html";
        true;
    }
}