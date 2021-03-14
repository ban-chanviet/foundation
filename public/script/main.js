let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    document.getElementById('hideNh').style.display = 'none';
    // if (!document.getElementsByClassName('active')) {
    //     document.getElementById('hideNh').style.display = '';
    // }
    if (!mainNav.classList.contains('active')) {
        document.getElementById('hideNh').style.display = 'unset';

    }
    if (document.getElementById('onlyHome')) {
        document.getElementById('hideNh').style.display = 'none';

    }

});