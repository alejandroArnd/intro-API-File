const fileInput = document.getElementById('fileInput');
const divImgs = document.getElementById('divImgs');

let exampleFile;

fileInput.addEventListener('change', function(event) {
  exampleFile = event.target.files[0];
});

function createFile() {
  const file = new File(['sample', '\n', 'NotASample'], 'SampleFileName.txt', {
    type: 'text/plain'
  });
  console.log(file);

  // Slicing the image in two pieces
  const filePart1 = file.slice(0, 3, 'text/plain');
  const filePart2 = file.slice(3, 6, 'SampleText');
  console.log(filePart1);
  console.log(filePart2);

  // Transforming File to text
  file.text().then(console.log);
}

function showFiles(input) {
  const fileList = input.files;
  for (const file of fileList) {
    console.log(
      'Nombre del Archivo ' +
        file.name +
        ' Tamaño del archivo ' +
        file.size +
        ' bytes Ultima modificación ' +
        file.lastModifiedDate +
        ' Tipo MIME ' +
        file.type
    );
    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = function() {
        const dataURL = reader.result;
        const img = document.createElement('img');
        img.src = dataURL;
        img.style.width = '500px';
        divImgs.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }
}

/* 
    DOCUMENTATION:

    https://developer.mozilla.org/en-US/docs/Web/API/File
    https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    https://developer.mozilla.org/en-US/docs/Web/API/FileList
*/
