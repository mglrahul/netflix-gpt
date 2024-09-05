export const formValidation = (fullName, email, password, type) => {
    const isNameValid = type === "signUp" && /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/.test(fullName)
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordValid = /^[A-Za-z0-9]\w{7,14}$/.test(password)
    console.log("formValidation-1", fullName, email, password)
    console.log("formValidation-2", isEmailValid, isPasswordValid, isNameValid)
    
    if(type === "signUp" && !isNameValid){
        return "Name is In valid"
    }else if(!isEmailValid){
        return "Email id is In valid"
    }else if(!isPasswordValid){
        return "Password is In valid"
    } 

    return null;
}