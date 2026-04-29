(function () {
  return function () {
    if (!this._is_form) return;

    this.on_create = function () {
      // Declare Reference
      var obj = null;

      if (Form == this.constructor) {
        this.set_name("MainForm");
        this.set_titletext("New Form");
        this._setFormPosition(0, 0, 784, 650);
      }

      // Object(Dataset, ExcelExportObject) Initialize

      // UI Components Initialize
      obj = new Button(
        "btn_emp",
        "absolute",
        "39",
        "130",
        "105",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("1");
      obj.set_text(" 직원관리");
      obj.style.set_image("URL('Images::employee-card_12576283.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_align("center middle");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("none 0,0 white 100,100 black");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_wh",
        "absolute",
        "143",
        "130",
        "105",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("2");
      obj.set_text(" 창고관리");
      obj.style.set_image("URL('Images::warehouse.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_inven",
        "absolute",
        "247",
        "130",
        "142",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("3");
      obj.set_text(" 재고/상품 관리");
      obj.style.set_image("URL('Images::box.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_category",
        "absolute",
        "388",
        "130",
        "105",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("4");
      obj.set_text(" 카테고리");
      obj.style.set_image("URL('Images::catagory.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_order",
        "absolute",
        "492",
        "130",
        "105",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("5");
      obj.set_text(" 고객주문");
      obj.style.set_image("URL('Images::order.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_orderByCat",
        "absolute",
        "596",
        "130",
        "148",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("6");
      obj.set_text(" 카테고리별 주문");
      obj.style.set_image("URL('Images::list.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
      obj.set_cssclass("btn");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static17",
        "absolute",
        "116",
        "0",
        "40",
        "60",
        null,
        null,
        this,
      );
      obj.set_taborder("7");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static00",
        "absolute",
        "0",
        "132",
        "40",
        "60",
        null,
        null,
        this,
      );
      obj.set_taborder("8");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static01",
        "absolute",
        "532",
        "588",
        "40",
        "60",
        null,
        null,
        this,
      );
      obj.set_taborder("9");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static02",
        "absolute",
        "744",
        "114",
        "40",
        "60",
        null,
        null,
        this,
      );
      obj.set_taborder("10");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static03",
        "absolute",
        "40",
        "130",
        "13",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("11");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static04",
        "absolute",
        "129",
        "131",
        "13",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("12");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_border("0 none transparent");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static05",
        "absolute",
        "248",
        "131",
        "13",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("13");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new Static(
        "Static06",
        "absolute",
        "598",
        "131",
        "13",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("14");
      obj.set_text("Static01");
      obj.set_visible("false");
      obj.style.set_background("coral");
      obj.style.set_font("9 Dotum");
      obj.style.set_opacity("30");
      this.addChild(obj.name, obj);

      obj = new ImageViewer(
        "ImageViewer00",
        "absolute",
        "40",
        "59",
        "210",
        "57",
        null,
        null,
        this,
      );
      obj.set_taborder("15");
      obj.style.set_border("1 none #e5e5e5ff");
      obj.set_image("URL('Images::e1.png')");
      this.addChild(obj.name, obj);

      obj = new Button(
        "btn_emp2",
        "absolute",
        "39",
        "170",
        "105",
        "40",
        null,
        null,
        this,
      );
      obj.set_taborder("16");
      obj.set_text(" 직원관리2");
      obj.style.set_image("URL('Images::employee-card_12576283.png')");
      obj.style.set_imagealign("lefttext");
      obj.style.set_bordertype("normal 0 0");
      obj.style.set_align("center middle");
      obj.style.set_font("10 맑은 고딕");
      obj.style.set_gradation("none 0,0 white 100,100 black");
      this.addChild(obj.name, obj);

      // Layout Functions
      //-- Default Layout
      obj = new Layout(
        "default",
        "",
        784,
        650,
        this,
        //-- Layout function
        function (p) {
          p.set_titletext("New Form");
        },
      );
      this.addLayout(obj.name, obj);

      // BindItem Information

      // Remove Reference
      obj = null;
    };

    // User Script
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
        this.getOwnerFrame().set_formurl("Base::BK20260421_EmployeeForm.xfdl");
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

    // Regist UI Components Event
    this.on_initEvent = function () {
      this.addEventHandler("onload", this.MainForm_onload, this);
      this.btn_emp.addEventHandler("onclick", this.btn_emp_onclick, this);
      this.btn_wh.addEventHandler("onclick", this.btn_wh_onclick, this);
      this.btn_inven.addEventHandler("onclick", this.btn_inven_onclick, this);
      this.btn_category.addEventHandler(
        "onclick",
        this.btn_category_onclick,
        this,
      );
      this.btn_order.addEventHandler("onclick", this.btn_order_onclick, this);
      this.btn_orderByCat.addEventHandler(
        "onclick",
        this.btn_orderByCat_onclick,
        this,
      );
      this.btn_emp2.addEventHandler("onclick", this.btn_emp2_onclick, this);
    };
    this.loadCss("MyCss::newcss.css");

    this.loadIncludeScript("MainForm.xfdl", true);
  };
})();
