export const validateLoginValues = (email, password, isSignUp, name) => {
    if (isSignUp && !name) return "Please enter your full name";
    if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email))
        return "Please enter valid email";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?!.*\s).{8,}$/.test(password))
      return isSignUp ? "Password should contain upper and lower case letters along with at least 1 number and special characters":"Please enter valid password";
};
