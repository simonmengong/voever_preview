function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/*function login(){
    var email_username = document.getElementById('loginemail');
    var password = document.getElementById('loginpassword');
    var error = document.getElementById('loginerror');
    var http, params, url;
    if(email_username.value!=='' && password.value!==''){
        if (validateEmail(email_username.value)){
            http = new XMLHttpRequest();
            //var params = 'orem=ipsum&name=binny';
            params = 'email={}&password={}'.format(email_username.value, password.value);
            url = 'login2/';
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function () {
                //Call a function when the state changes.
                if ((http.readyState === 4) && (http.status === 200)) {
                    var r = JSON.parse(http.responseText);
                    if (r === 1){
                        location.href = '/';
                    }
                    else{
                        error.innerHTML = 'Invalid email or password';
                    }
                }
            };
            http.send(params);
        }
        else{
            http = new XMLHttpRequest();
            //var params = 'orem=ipsum&name=binny';
            params = 'username={}&password={}'.format(email_username.value, password.value);
            url = 'login2/';
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function () {
                //Call a function when the state changes.
                if ((http.readyState === 4) && (http.status === 200)) {
                    var r = JSON.parse(http.responseText);
                    if (r === 1){
                        location.href = '/';
                    }
                    else{
                        error.innerHTML = 'Invalid username or password';
                    }
                }
            };
            http.send(params);
        }
    }
    else {
        error.innerHTML = 'Fill all the fields'
    }
}
*/
function reset_error() {
    document.getElementById('loginerror').innerHTML = '';
}

function signup(){
      var ss = document.getElementById('slidesignup');
      var fl = document.getElementById('formlogin');
      var imgdesc = document.getElementById('imgdesc');
      var sb = document.getElementById('sb');
      fl.style.display = "none";
      imgdesc.classList.add("translated");
      ss.classList.add("slidesignup2");
      sb.style.display = "none";
    }

    function login(){
      var ss = document.getElementById('slidesignup');
      var fl = document.getElementById('formlogin');
      var imgdesc = document.getElementById('imgdesc');
      var sb = document.getElementById('sb');
      ss.classList.remove("slidesignup2");
      imgdesc.classList.remove('translated');
      sb.style.display = 'block';
      fl.style.display = 'block';
    }

    function signupmob(){
      var fs = document.getElementById('formsignupmob');
      var fl = document.getElementById('formloginmob');
      fl.style.display = "none";
      fs.style.display = "block";
    }

    function loginmob(){
      var fs = document.getElementById('formsignupmob');
      var fl = document.getElementById('formloginmob');
      fs.style.display = "none";
      fl.style.display = "block";
    }

    function user1_input(){
        var ui = document.getElementById("login-user-input1");
        var ui2 = document.getElementById("login-user-input2");
        ui2.value = ui.value;
    }

    function user2_input(){
        var ui = document.getElementById("login-user-input1");
        var ui2 = document.getElementById("login-user-input2");
        ui.value = ui2.value;
    }

    function pwd1_input(){
        var pi = document.getElementById("login-pwd-input1");
        var pi2 = document.getElementById("login-pwd-input2");
        var pd = document.getElementById("login-pwd-div1");
        var pd2 = document.getElementById("login-pwd-div2");
        pi2.value = pi.value;
        if(pd.classList.contains("has-danger")){
            pd.classList.remove("has-danger");
        }
        if(pi.classList.contains("form-control-danger")){
            pi.classList.remove("form-control-danger");
        }
        if(pd2.classList.contains("has-danger")){
            pd2.classList.remove("has-danger");
        }
        if(pi2.classList.contains("form-control-danger")){
            pi2.classList.remove("form-control-danger");
        }
    }

    function pwd2_input(){
        var pi = document.getElementById("login-pwd-input1");
        var pi2 = document.getElementById("login-pwd-input2");
        var pd = document.getElementById("login-pwd-div1");
        var pd2 = document.getElementById("login-pwd-div2");
        pi.value = pi2.value;
        if(pd.classList.contains("has-danger")){
            pd.classList.remove("has-danger");
        }
        if(pi.classList.contains("form-control-danger")){
            pi.classList.remove("form-control-danger");
        }
        if(pd2.classList.contains("has-danger")){
            pd2.classList.remove("has-danger");
        }
        if(pi2.classList.contains("form-control-danger")){
            pi2.classList.remove("form-control-danger");
        }
    }

    function login_pressed(){
        var ud = document.getElementById("login-user-div1");
        var ud2 = document.getElementById("login-user-div2");
        var ui = document.getElementById("login-user-input1");
        var ui2 = document.getElementById("login-user-input2");
        var pi = document.getElementById("login-pwd-input1");
        var pi2 = document.getElementById("login-pwd-input2");
        var pd = document.getElementById("login-pwd-div1");
        var pd2 = document.getElementById("login-pwd-div2");
        if(ui.value!=='' && pi.value!==''){
            if (validateEmail(ui.value)){
                http = new XMLHttpRequest();
                //var params = 'orem=ipsum&name=binny';
                params = 'email={}&password={}'.format(ui.value, encodeURIComponent(pi.value));
                url = 'login2/';
                http.open('POST', url, true);

                //Send the proper header information along with the request
                http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                http.onreadystatechange = function () {
                    //Call a function when the state changes.
                    if ((http.readyState === 4) && (http.status === 200)) {
                        var r = JSON.parse(http.responseText);
                        if (r === 1){
                            location.href = '/';
                        }
                        else{
                            pd.classList.add("has-danger");
                            pi.classList.add("form-control-danger");
                            pd2.classList.add("has-danger");
                            pi2.classList.add("form-control-danger");
                        }
                    }
                };
                http.send(params);
            }
            else{
                http = new XMLHttpRequest();
                //var params = 'orem=ipsum&name=binny';
                params = 'username={}&password={}'.format(ui.value, pi.value);
                url = 'login2/';
                http.open('POST', url, true);

                //Send the proper header information along with the request
                http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                http.onreadystatechange = function () {
                    //Call a function when the state changes.
                    if ((http.readyState === 4) && (http.status === 200)) {
                        var r = JSON.parse(http.responseText);
                        if (r === 1){
                            location.href = '/';
                        }
                        else{
                            pd.classList.add("has-danger");
                            pi.classList.add("form-control-danger");
                            pd2.classList.add("has-danger");
                            pi2.classList.add("form-control-danger");
                        }
                    }
                };
                http.send(params);
            }
        }
    }

    String.prototype.format = function () {
        var i = 0, args = arguments;
        return this.replace(/{}/g, function () {
            return typeof args[i] !== 'undefined' ? args[i++] : '';
        });
    };

    function su_email1_input(){
        var ei = document.getElementById("signup-email-input1");
        var ei2 = document.getElementById("signup-email-input2");
        ei2.value = ei.value;
        check_email();
    }

    function su_email2_input(){
        var ei = document.getElementById("signup-email-input1");
        var ei2 = document.getElementById("signup-email-input2");
        ei.value = ei2.value;
        check_email();
    }

    function su_user1_input(){
        var ui = document.getElementById("signup-username-input1");
        var ui2 = document.getElementById("signup-username-input2");
        ui2.value = ui.value;
        check_username();
    }

    function su_user2_input(){
        var ui = document.getElementById("signup-username-input1");
        var ui2 = document.getElementById("signup-username-input2");
        ui.value = ui2.value;
        check_username();
    }

    function su_pwd1_input(){
        var pi = document.getElementById("signup-pwd-input1");
        var pi2 = document.getElementById("signup-pwd-input2");
        var pd = document.getElementById("signup-pwd-div1");
        var pd2 = document.getElementById("signup-pwd-div2");
        pi2.value = pi.value;
        check_pwd();
    }

    function su_pwd2_input(){
        var pi = document.getElementById("signup-pwd-input1");
        var pi2 = document.getElementById("signup-pwd-input2");
        var pd = document.getElementById("signup-pwd-div1");
        var pd2 = document.getElementById("signup-pwd-div2");
        pi.value = pi2.value;
        check_pwd();
    }

    function su_cpwd1_input(){
        var pi = document.getElementById("signup-pwd-input1");
        var pi2 = document.getElementById("signup-pwd-input2");
        var pd = document.getElementById("signup-pwd-div1");
        var pd2 = document.getElementById("signup-pwd-div2");
        pi2.value = pi.value;
        confirm_pwd();
    }

    function su_cpwd2_input(){
        var pi = document.getElementById("signup-pwd-input1");
        var pi2 = document.getElementById("signup-pwd-input2");
        var pd = document.getElementById("signup-pwd-div1");
        var pd2 = document.getElementById("signup-pwd-div2");
        pi.value = pi2.value;
        confirm_pwd();
    }

function check_email(){
    var ei = document.getElementById('signup-email-input1');
    var ed = document.getElementById('signup-email-div1');
    var ei2 = document.getElementById('signup-email-input2');
    var ed2 = document.getElementById('signup-email-div2');
    if(ed.classList.contains("has-danger")){
        ed.classList.remove("has-danger");
    }
    if(ei.classList.contains("form-control-danger")){
        ei.classList.remove("form-control-danger");
    }
    if(ed2.classList.contains("has-danger")){
        ed2.classList.remove("has-danger");
    }
    if(ei2.classList.contains("form-control-danger")){
        ei2.classList.remove("form-control-danger");
    }
    if(ed.classList.contains("has-success")){
        ed.classList.remove("has-success");
    }
    if(ei.classList.contains("form-control-success")){
        ei.classList.remove("form-control-success");
    }
    if(ed2.classList.contains("has-success")){
        ed2.classList.remove("has-success");
    }
    if(ei2.classList.contains("form-control-success")){
        ei2.classList.remove("form-control-success");
    }
    if(validateEmail(ei.value)){
        var http = new XMLHttpRequest();
        //var params = 'orem=ipsum&name=binny';
        var params = 'email={}'.format(ei.value);
        var url = 'check_email_available/';
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
            //Call a function when the state changes.
            if ((http.readyState === 4) && (http.status === 200)) {
                var r = JSON.parse(http.responseText);
                if (r === 1){
                    ed.classList.add("has-success");
                    ei.classList.add("form-control-success");
                    ed2.classList.add("has-success");
                    ei2.classList.add("form-control-success");
                }
                else{
                    ed.classList.add("has-danger");
                    ei.classList.add("form-control-danger");
                    ed2.classList.add("has-danger");
                    ei2.classList.add("form-control-danger");
                }
            }
        };
        http.send(params);
    }
    else{
        ed.classList.add("has-danger");
        ei.classList.add("form-control-danger");
        ed2.classList.add("has-danger");
        ei2.classList.add("form-control-danger");
    }
}

function check_username(){
    var ui = document.getElementById('signup-username-input1');
    var ud = document.getElementById('signup-username-div1');
    var ui2 = document.getElementById('signup-username-input2');
    var ud2 = document.getElementById('signup-username-div2');
    if(ud.classList.contains("has-danger")){
        ud.classList.remove("has-danger");
    }
    if(ui.classList.contains("form-control-danger")){
        ui.classList.remove("form-control-danger");
    }
    if(ud2.classList.contains("has-danger")){
        ud2.classList.remove("has-danger");
    }
    if(ui2.classList.contains("form-control-danger")){
        ui2.classList.remove("form-control-danger");
    }
    if(ud.classList.contains("has-success")){
        ud.classList.remove("has-success");
    }
    if(ui.classList.contains("form-control-success")){
        ui.classList.remove("form-control-success");
    }
    if(ud2.classList.contains("has-success")){
        ud2.classList.remove("has-success");
    }
    if(ui2.classList.contains("form-control-success")){
        ui2.classList.remove("form-control-success");
    }
    if(ui.value !== '' && encodeURIComponent(ui.value) === ui.value){
        var http = new XMLHttpRequest();
        //var params = 'orem=ipsum&name=binny';
        var params = 'username={}'.format(ui.value);
        var url = 'check_username_available/';
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
            //Call a function when the state changes.
            if ((http.readyState === 4) && (http.status === 200)) {
                var r = JSON.parse(http.responseText);
                if (r === 1){
                    ud.classList.add("has-success");
                    ui.classList.add("form-control-success");
                    ud2.classList.add("has-success");
                    ui2.classList.add("form-control-success");
                }
                else{
                    ud.classList.add("has-danger");
                    ui.classList.add("form-control-danger");
                    ud2.classList.add("has-danger");
                    ui2.classList.add("form-control-danger");
                }
            }
        };
        http.send(params);
    }
    else{
        ud.classList.add("has-danger");
        ui.classList.add("form-control-danger");
        ud2.classList.add("has-danger");
        ui2.classList.add("form-control-danger");
    }
}

function check_pwd() {
    var pi = document.getElementById('signup-pwd-input1');
    var pd = document.getElementById('signup-pwd-div1');
    var pi2 = document.getElementById('signup-pwd-input2');
    var pd2 = document.getElementById('signup-pwd-div2');
    var cpi = document.getElementById('signup-cpwd-input1');
    if(pd.classList.contains("has-danger")){
        pd.classList.remove("has-danger");
    }
    if(pi.classList.contains("form-control-danger")){
        pi.classList.remove("form-control-danger");
    }
    if(pd2.classList.contains("has-danger")){
        pd2.classList.remove("has-danger");
    }
    if(pi2.classList.contains("form-control-danger")){
        pi2.classList.remove("form-control-danger");
    }
    if(pd.classList.contains("has-success")){
        pd.classList.remove("has-success");
    }
    if(pi.classList.contains("form-control-success")){
        pi.classList.remove("form-control-success");
    }
    if(pd2.classList.contains("has-success")){
        pd2.classList.remove("has-success");
    }
    if(pi2.classList.contains("form-control-success")){
        pi2.classList.remove("form-control-success");
    }
    if(pi.value.length >= 4){
        pd.classList.add("has-success");
        pi.classList.add("form-control-success");
        pd2.classList.add("has-success");
        pi2.classList.add("form-control-success");
    }
    if (cpi.value !== ""){
        confirm_pwd();
    }
}

function confirm_pwd() {
    var pi = document.getElementById('signup-pwd-input1');
    var cpi = document.getElementById('signup-cpwd-input1');
    var cpd = document.getElementById('signup-cpwd-div1');
    var cpi2 = document.getElementById('signup-cpwd-input2');
    var cpd2 = document.getElementById('signup-cpwd-div2');
    if(cpd.classList.contains("has-danger")){
        cpd.classList.remove("has-danger");
    }
    if(cpi.classList.contains("form-control-danger")){
        cpi.classList.remove("form-control-danger");
    }
    if(cpd2.classList.contains("has-danger")){
        cpd2.classList.remove("has-danger");
    }
    if(cpi2.classList.contains("form-control-danger")){
        cpi2.classList.remove("form-control-danger");
    }
    if(cpd.classList.contains("has-success")){
        cpd.classList.remove("has-success");
    }
    if(cpi.classList.contains("form-control-success")){
        cpi.classList.remove("form-control-success");
    }
    if(cpd2.classList.contains("has-success")){
        cpd2.classList.remove("has-success");
    }
    if(cpi2.classList.contains("form-control-success")){
        cpi2.classList.remove("form-control-success");
    }
    if(pi.value === cpi.value){
        cpd.classList.add("has-success");
        cpi.classList.add("form-control-success");
        cpd2.classList.add("has-success");
        cpi2.classList.add("form-control-success");
    }
    else{
        cpd.classList.add("has-danger");
        cpi.classList.add("form-control-danger");
        cpd2.classList.add("has-danger");
        cpi2.classList.add("form-control-danger");
    }
}

function signup_pressed() {
    var ei = document.getElementById('signup-email-input1');
    var ui = document.getElementById('signup-username-input1');
    var pi = document.getElementById('signup-pwd-input1');
    var cpi = document.getElementById('signup-cpwd-input1');
    if (ei.value !== '' && ui.value !== '' && pi.value !== '') {
        check_email();
        check_username();
        confirm_pwd();
        if (ei.classList.contains("has-success") && ui.classList.contains("has-success") && cpi.classList.contains("has-success")) {
            var http = new XMLHttpRequest();
            //var params = 'orem=ipsum&name=binny';
            var params = 'email={}&username={}&password={}'.format(ei.value, ui.value, encodeURIComponent(pi.value));
            var url = 'sign_up/';
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function () {
                //Call a function when the state changes.
                if ((http.readyState === 4) && (http.status === 200)) {
                    location.href = '/';
                }
            };
            http.send(params);
        }
    }
    else{
        check_email();
        check_username();
        confirm_pwd();
    }
}
