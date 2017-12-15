;(function () {
    'use strict';

    var editorView = document.querySelector('.editor-view'),
    	editorField = document.querySelector('.editor-field');

    	editorField.hidden = true;

    	document.addEventListener('keydown', editorInit);

    	function editorInit(event){

    		console.log(event.keyCode);

    		if(event.keyCode == 69 && event.ctrlKey && editorField.hidden){
    			event.preventDefault();
    			editorView.hidden = true;
    			editorField.hidden = false;
    			editorField.value = editorView.innerHTML.trim();
    			editorField.focus();
    		}
    		if(event.keyCode == 83 && event.ctrlKey && !editorField.hidden){
    			event.preventDefault();
    			editorView.hidden = false;
    			editorField.hidden = true;
    			editorView.innerHTML = editorField.value;
    		}
    		if(event.keyCode == 27 && !editorField.hidden){
    			event.preventDefault();
    			editorView.hidden = false;
    			editorField.hidden = true;
    		}
    	}

})();
