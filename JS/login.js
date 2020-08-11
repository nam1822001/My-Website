        var CORRECT_USER = 'nam';
        var CORRECT_PASS = '123';

        var inputUsername = document.getElementById('username');
        var inputPassword = document.getElementById('password');

        var formLogin = document.getElementById('form-login');

        if(formLogin.attachEvent){
            formLogin.attachEvent('reset', onFormSubmit);
            }
            else{
                formLogin.addEventListener('reset', onFormSubmit);
        }
        
        function onFormSubmit(e){
            
            var username = inputUsername.value;
            var password = inputPassword.value;
            if(username == CORRECT_USER && password == CORRECT_PASS){
                $('ho').remove();
                

                alert('Chào mừng vợ');


                
               $('main#main').load('PageOfWife.html');
                

               
            }
            else{
                alert('Vợ nhập sai mất rồi hmu hmu');
            }
        }