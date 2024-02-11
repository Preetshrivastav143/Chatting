function sendotp() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(Math.random()* 10000);

    let emailbody = <h2> Your OTP is </h2>${otp_val}
    Email.send({
        SecureToken : "9858b11c-5c3e-4cd1-9b1b-02ab9745b443",
        To : email.value,
        From : "pk9690123472@gmail.com",
        Subject : "Email OTP  ",
        Body : emailbody,
    }).then(
      message => {
        if (message === "Ok") {
            alert ("OTP sent to your email" + email.value);

            otpverify.computedStyleMap.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp_btn');

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert("Email Verified");

                }
                else {
                    alert("wrong OTP");
                }
            })
        }
      }
    );
}