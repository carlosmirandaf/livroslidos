document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function() {
        var textDiv = this.parentElement;
        textDiv.style.display = (textDiv.style.display === 'none' ? 'block' : 'none');
    });
});

document.getElementById('link1').addEventListener('click', function() {
    var antaresText = document.getElementById('antaresText');
    antaresText.style.display = (antaresText.style.display === 'none' ? 'block' : 'none');
});

document.getElementById('link2').addEventListener('click', function() {
    var ilusoesText = document.getElementById('ilusoesText');
    ilusoesText.style.display = (ilusoesText.style.display === 'none' ? 'block' : 'none');
});

// Adicione mais listeners para cada link, se necessário
