const emailFormulario = document.getElementById('emailForm');

    emailFormulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;

      if (email === '') {
        document.getElementById('mensagemErro').innerText = 'Valid email required';
        
      } else {
        document.getElementById('mensagemErro').innerText = '';
        window.location.href = 'http://127.0.0.1:5501/index2.html';
      }
    });


    function checkEmail(email) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,}$/.test(email);
    }

   