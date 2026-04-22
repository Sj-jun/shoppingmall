//CSS=btn.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#45a049ff","","","0","0","0","0","true");
    this._addCss(".btn_search", "background", obj, ["hover"]);

    obj = new nexacro.Style_background("#388e3cff","","","0","0","0","0","true");
    this._addCss(".btn_search", "background", obj, ["pressed"]);

    obj = null;
    
//[add theme images]
  };
})();
