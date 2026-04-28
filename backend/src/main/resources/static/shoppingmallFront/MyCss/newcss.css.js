//CSS=newcss.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("black");
    this._addCss("Button", "color", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#e6e6e6ff","");
    this._addCss("Button", "border", obj, ["normal"]);

    obj = new nexacro.Style_shadow("0px 0px 0px rgba(0,0,0,0.0)");
    this._addCss("Button", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("-2px");
    this._addCss("Button", "margin-top", obj, ["mouseover"]);

    obj = new nexacro.Style_shadow("outer 0,0 4px gray");
    this._addCss("Button", "shadow", obj, ["mouseover"]);

    obj = new nexacro.Style_shadow("outer 0,0 2px gray");
    this._addCss("Button", "shadow", obj, ["pushed"]);

    obj = new nexacro.Style_value("65");
    this._addCss("Button", "opacity", obj, ["pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
