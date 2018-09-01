// import { title } from "./main-title";
import scss from './style.scss';
import contactScss from './contact.scss';
import impressumScss from './impressum.scss';
import clickButton from "./button.js";
clickButton();

$document.on('click', '#contact-submit', function(event){
    event.preventDefault();
    $.post("form.php", $("#contact").serialize());
  });




