function setupFileInputButton(buttonId, inputId) {
    let button = document.getElementById(buttonId);
    let input = document.getElementById(inputId);

    button.addEventListener('click', function() {
        input.click();
    });

    input.addEventListener('change', function() {
        let selectedFile = input.files[0];
        checkFileType(selectedFile);
    });

    function checkFileType(file) {
        let allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'audio/mpeg', 'audio/ogg', 'audio/wav', 'video/mp4', 'video/mpeg', 'video/ogg', 'video/webm', 'application/zip' ,];

      
        if (allowedTypes.includes(file.type)) {
            alert('Тип файлу: ' + file.type); 
        } else {
            alert('Файл недопустимий'); 
        }
    }
}


setupFileInputButton('chooseFileButton', 'fileInput');
