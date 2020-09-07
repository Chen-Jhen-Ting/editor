window.addEventListener('DOMContentLoaded',()=>{
  // md 上傳
  var fileUploader = document.getElementById("fileUploader");
  var fileReader = new FileReader();

  fileUploader.addEventListener("change", (e)=>{
    console.log(this.files.toString())
    if (this.files) {
      text = fileReader.readAsText(this.files[0]);
      console.log(text)
    }

  })




  var myCodeMirror //使mycodemirror變成變數
  var contentArea = document.querySelector('#sourceTA')
  let editorConfig = {
    mode: "markdown",
    lint: true,
    lineNumbers: true,
    theme: 'abcdef',
    lineWrapping: true,
    autoRefresh: true,
    value: ""
  }
  myCodeMirror = CodeMirror(contentArea, editorConfig);
  // 把 codemirror 的編輯器塞到 contentArea 裡面，格式要求就依照 editorConfig


  // 產出 md to HTML 
  function mdToHTML() {
  var text = myCodeMirror.getValue(),
      target = document.getElementById('targetDiv'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);
      target.innerHTML = html;
  }
  setInterval(mdToHTML,100)
})