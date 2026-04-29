(function () {
  return function () {
    if (!this._is_form) return;

    this.on_create = function () {
      var obj = null;

      if (Form == this.constructor) {
        this.set_name("MainForm");
        this.set_titletext("New Form");
        this._setFormPosition(0, 0, 784, 650);
      }

      obj = new Button("btn_wh", "absolute", "137", "75", "105", "40", null, null, this);
      obj.set_taborder("2");
      obj.set_text(" 창고관리");
      obj.style.set_image("URL('Images::warehouse.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button("btn_inven", "absolute", "241", "75", "142", "40", null, null, this);
      obj.set_taborder("3");
      obj.set_text(" 재고/상품 관리");
      obj.style.set_image("URL('Images::box.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button("btn_category", "absolute", "382", "75", "105", "40", null, null, this);
      obj.set_taborder("4");
      obj.set_text(" 카테고리");
      obj.style.set_image("URL('Images::catagory.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button("btn_order", "absolute", "486", "75", "105", "40", null, null, this);
      obj.set_taborder("5");
      obj.set_text(" 고객주문");
      obj.style.set_image("URL('Images::order.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button("btn_orderByCat", "absolute", "590", "75", "148", "40", null, null, this);
      obj.set_taborder("6");
      obj.set_text(" 카테고리별 주문");
      obj.style.set_image("URL('Images::list.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      obj.set_cssclass("btn");
      this.addChild(obj.name, obj);

      obj = new Static("Static00", "absolute", "0", "68", "40", "60", null, null, this);
      obj.set_taborder("8");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static01", "absolute", "532", "588", "40", "60", null, null, this);
      obj.set_taborder("9");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static02", "absolute", "744", "114", "40", "60", null, null, this);
      obj.set_taborder("10");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static03", "absolute", "34", "75", "13", "40", null, null, this);
      obj.set_taborder("11");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static04", "absolute", "123", "76", "13", "40", null, null, this);
      obj.set_taborder("12");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_border("0 none transparent");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static05", "absolute", "242", "76", "13", "40", null, null, this);
      obj.set_taborder("13");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static("Static06", "absolute", "592", "76", "13", "40", null, null, this);
      obj.set_taborder("14");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new ImageViewer("ImageViewer00", "absolute", "34", "4", "210", "57", null, null, this);
      obj.set_taborder("15");
      obj.style.set_border("1 none #e5e5e5ff");
      obj.set_image("URL('Images::e1.png')");
      this.addChild(obj.name, obj);

      obj = new Button("btn_emp2", "absolute", "33", "75", "105", "40", null, null, this);
      obj.set_taborder("16");
      obj.set_text(" 직원관리");
      obj.style.set_image("URL('Images::employee-card_12576283.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_align("center middle");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("none 0,0 white 100,100 black");
      this.addChild(obj.name, obj);

      obj = new Static("Static07", "absolute", "132", "0", "40", "20", null, null, this);
      obj.set_taborder("17");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Tab("Tab00", "absolute", "10.84%", "159", null, "269", "35.59%", null, this);
      obj.set_taborder("18");
      obj.set_tabindex("0");
      obj.set_scrollbars("autoboth");
      this.addChild(obj.name, obj);
      obj = new Tabpage("tabpage1", this.Tab00);
      obj.set_text("tabpage1");
      this.Tab00.addChild(obj.name, obj);
      obj = new Div("Div00", "absolute", "17.94%", "51", null, "182", "34.45%", null, this.Tab00.tabpage1);
      obj.set_taborder("0");
      obj.set_text("Div00");
      obj.set_url("Base::BK20260421_EmployeeForm.xfdl");
      this.Tab00.tabpage1.addChild(obj.name, obj);
      obj = new Layout("default", "", 418, 245, this.Tab00.tabpage1, function (p) {});
      this.Tab00.tabpage1.addLayout(obj.name, obj);

      obj = new Tabpage("tabpage2", this.Tab00);
      obj.set_text("tabpage2");
      this.Tab00.addChild(obj.name, obj);

      obj = new Layout("default", "", 784, 650, this, function (p) {
        p.set_titletext("New Form");
      });
      this.addLayout(obj.name, obj);

      obj = null;
    };

    this.registerScript("MainForm.xfdl", function (exports) {
      /*
      화면명 : 메인 메뉴 이동 화면
      작성자 : 정상준
      작성일자 : 2026-04-10
      */
      this.btn_emp_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::EmployeeForm.xfdl");
      };

      this.btn_emp2_onclick = function (obj, e) {
        this.Tab00.tabpage1.Div00.set_url("Base::BK20260421_EmployeeForm.xfdl");
      };

      this.btn_wh_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::WarehouseForm.xfdl");
      };

      this.btn_inven_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::InventoriesForm.xfdl");
      };

      this.btn_category_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::CategoryForm.xfdl");
      };

      this.btn_order_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::OrderForm.xfdl");
      };

      this.btn_orderByCat_onclick = function (obj, e) {
        this.getOwnerFrame().set_formurl("Base::OrderByCategoryForm.xfdl");
      };
    });

    this.on_initEvent = function () {
      this.addEventHandler("onload", this.MainForm_onload, this);
      this.btn_wh.addEventHandler("onclick", this.btn_wh_onclick, this);
      this.btn_inven.addEventHandler("onclick", this.btn_inven_onclick, this);
      this.btn_category.addEventHandler("onclick", this.btn_category_onclick, this);
      this.btn_order.addEventHandler("onclick", this.btn_order_onclick, this);
      this.btn_orderByCat.addEventHandler("onclick", this.btn_orderByCat_onclick, this);
      this.btn_emp2.addEventHandler("onclick", this.btn_emp2_onclick, this);
    };

    this.loadCss("MyCss::newcss.css");
    this.loadIncludeScript("MainForm.xfdl", true);
  };
})();
