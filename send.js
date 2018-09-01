$document.on('click', '#contact-submit', function(event){
    event.preventDefault();
    $.post("form.php", $("#contact").serialize());
  });

