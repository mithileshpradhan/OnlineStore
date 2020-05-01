const signup = (req,res) => {
    return res.send("Signup");
}
const signin = (req,res) => {
    return res.send("Signin");
}
const signout = (req,res) => {
    return res.send("Signout");
}

exports.signup = signup;
exports.signin = signin;
exports.signout = signout;