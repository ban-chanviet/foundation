let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    document.getElementById('hideNh').classList.toggle('hideImg')
});


$("form").on("change", ".file-upload-field", function() {
    $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    // console.log($(this).val())
    let checker = $(this).val().split('.').pop();
    const acceptedMimeType = ['pdf', 'doc', 'docx'];
    console.log(checker)
    if (!acceptedMimeType.includes(checker)) {
        alert('vui lòng chỉ chọn file .pdf, .doc hoặc .docx!');
        $(this).parent(".file-upload-wrapper").attr("data-text", '');

    } else
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));



});


// let box1 = document.getElementById('1')
// let box2 = document.getElementById('2')
// let box3 = document.getElementById('3')

// let size = {
//     box1: {
//         width: box1.clientWidth,
//         height: box1.clientHeight
//     },
//     box2: {
//         width: box2.clientWidth,
//         height: box2.clientHeight
//     },
//     box3: {
//         width: box3.clientWidth,
//         height: box3.clientHeight
//     }
// }
// let justify = [size.box1.width + 30, size.box2.width + 30]
// box2.style.left = justify[0];
// box3.style.left = justify[1] + justify[0];
// console.log(size)