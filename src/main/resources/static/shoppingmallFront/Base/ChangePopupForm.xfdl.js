(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("ChangePopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,439,224);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_allProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"minQuantity\" type=\"STRING\" size=\"256\"/><Column id=\"maxQuantity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_category01", "absolute", "119", "145", "300", "30", null, null, this);
            obj.set_taborder("14");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_category02", "absolute", "119", "116", "300", "30", null, null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_category03", "absolute", "119", "174", "300", "30", null, null, this);
            obj.set_taborder("16");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_category", "absolute", "119", "58", "300", "30", null, null, this);
            obj.set_taborder("12");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_category00", "absolute", "119", "87", "300", "30", null, null, this);
            obj.set_taborder("13");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category", "absolute", "20", "58", "100", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("카테고리");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_product", "absolute", "20", "87", "100", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("상품명");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_min", "absolute", "20", "116", "100", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("최소 수량");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_max", "absolute", "20", "145", "100", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("최대 수량");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_quantity", "absolute", "20", "174", "100", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("수량");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "50", "20", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.23%", "50", "300", "8", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "349", "20", "70", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "349", "0", "50", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_change", "absolute", "20", "20", "120", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_text("▣ 일괄 변경");
            obj.style.set_font("12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_category", "absolute", "123", "60", "292", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("categoryId");
            obj.set_datacolumn("categoryName");
            obj.set_displaynulltext("-선택-");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");

            obj = new Combo("cbo_productName", "absolute", "235", "89", "180", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_allProduct");
            obj.set_codecolumn("productId");
            obj.set_datacolumn("productName");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            obj.set_displaynulltext("-선택-");

            obj = new Edit("edt_max", "absolute", "123", "147", "292", "26", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_bordertype("normal 1 1");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("border", "disabled", "1 solid #808080ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productId", "absolute", "123", "89", "108", "26", null, null, this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.style.set_color("#444444ff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            obj.style.setStyleValue("color", "readonly", "black");
            obj.style.setStyleValue("bordertype", "readonly", "normal 1 1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_min", "absolute", "123", "118", "292", "26", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_bordertype("normal 1 1");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("border", "disabled", "1 solid #808080ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "199", "204", "50", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "419", "80", "20", "48", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_quantity", "absolute", "123", "176", "292", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_mask("##,###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 300, 30, this.div_category,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_category.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 300, 30, this.div_category00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_category00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 439, 224, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_min","value","ds_allProduct","minQuantity");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_max","value","ds_allProduct","maxQuantity");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_productId","value","ds_allProduct","productId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_quantity","value","ds_product","quantity");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ChangePopupForm.xfdl", function(exports) {
        /*
        화면명 : 일괄변경 팝업
        작성자 : 정상준
        작성일자 : 2026-04-08
        */
        this.ChangePopupForm_onload = function(obj,e)
        {
        	// 서버에서 카테고리 조회
        	this.cbo_productName.set_enable(false);
            this.fn_categoryList();
            this.fn_allProduct();
        }
        // =====================================================================
        //카테고리 조회
        // =====================================================================
        this.fn_categoryList = function()
        {
            this.transaction(
                "getCategoryList",
                "http://localhost:8080/categoryList",
                "",
                "ds_category=ds_category",
                "",
                "fn_categoryCallback"                       
            );
        };

        this.fn_categoryCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	// 등록 모드: 첫 행 선택
        	//이전 화면에서 첫번째 행을 "-전체-"로 설정해 놓았기 때문에 검증 후 교체
        	if (this.ds_category.getRowCount() > 0 && this.fn_isNull(this.ds_category.getColumn(0, "categoryId")))
        	{
        		this.ds_category.setColumn(0, "categoryName", "-선택-");
        	}else
        	{
        		var nRow = this.ds_category.insertRow(0);
        		this.ds_category.setColumn(nRow, "categoryId", "");
        		this.ds_category.setColumn(nRow, "categoryName", "-선택-");
        	}
        	this.cbo_category.set_index(0);

        }
        // =====================================================================
        //필터 처리위한 상품 전체 
        // =====================================================================
        this.fn_allProduct = function()
        {
        	this.transaction(
                "getAllProductList",
                "http://localhost:8080/product/list",
                "",
                "ds_allProduct=ds_allProduct",
                "",
                "fn_allProductCallback"                       
            );
        };
        this.fn_allProductCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            trace("getRowCount = " + this.ds_allProduct.getRowCount());
        	//이전 화면에서 첫번째 행을 "-전체-"로 설정해 놓았기 때문에 검증 후 교체
        	if (this.ds_allProduct.getRowCount() > 0 && this.fn_isNull(this.ds_allProduct.getColumn(0, "productId")))
        	{
        		this.ds_allProduct.setColumn(0, "productName", "-선택-");
        	}else
        	{
        		var nRow = this.ds_allProduct.insertRow(0);
                this.ds_allProduct.setColumn(nRow, "categoryId", "");
                this.ds_allProduct.setColumn(nRow, "productId", "");
                this.ds_allProduct.setColumn(nRow, "productName", "-선택-");
                this.ds_allProduct.setColumn(nRow, "minQuantity", "");
                this.ds_allProduct.setColumn(nRow, "maxQuantity", "");
        	}
        }
        // =====================================================================
        //상품 카테고리 필터
        // =====================================================================
        this.cbo_category_onitemchanged = function(obj,e)
        {
        	
            var sCategoryId = obj.value;
        	this.cbo_productName.set_enable(false);
        	this.cbo_productName.set_value("");
        	this.edt_productId.set_value("");
        	this.edt_min.set_value("");
        	this.edt_max.set_value("");
            this.ds_allProduct.filter("");

            if (this.fn_isNull(sCategoryId))
            {
                this.ds_allProduct.filter("productName=='-선택-'");
                return;
            }
        	this.cbo_productName.set_enable(true);
            this.ds_allProduct.filter(
                "categoryId=='" + sCategoryId + "' || productName=='-선택-'"
            );
            
        }
        // =====================================================================
        //상품 선택 시 
        // =====================================================================
        this.cbo_productName_onitemchanged = function(obj,e)
        {
        	var nRow = this.ds_allProduct.findRow("productId", e.postvalue);
        	trace(nRow);
            if (nRow < 0)
            {
                this.edt_productId.set_value("");
                this.edt_min.set_value("");
                this.edt_max.set_value("");
                return;
            }
            this.ds_allProduct.set_rowposition(nRow);
            obj.set_index(nRow);
            this.edt_productId.set_value(this.ds_allProduct.getColumn(nRow, "productId"));
            this.edt_min.set_value(this.ds_allProduct.getColumn(nRow, "minQuantity"));
            this.edt_max.set_value(this.ds_allProduct.getColumn(nRow, "maxQuantity"));
            
            trace("obj.value=" + obj.value);
        trace("find string=" + this.ds_allProduct.findRow("productId", obj.value));
        trace("find number=" + this.ds_allProduct.findRow("productId", nexacro.toNumber(obj.value)));
            
        };

        // =====================================================================
        //상품 재고 변경 전 검증
        // =====================================================================
        this.fn_validation = function()
        {
        	
        	if (this.fn_isNull(this.cbo_category.value))
            {
                alert("카테고리를 선택해주세요.");
                this.cbo_category.setFocus();
                return false;
            }
            if (this.fn_isNull(this.cbo_productName.value))
            {
                alert("상품을 선택해주세요.");
                this.cbo_productName.setFocus();
                return false;
            }
            
            var nProductRow = this.ds_allProduct.findRow("productId", this.cbo_productName.value);
            if (nProductRow < 0)
            {
                alert("선택한 상품 정보를 찾을 수 없습니다.");
                this.cbo_productName.setFocus();
                return false;
            }
        	var sQuantity = this.edt_quantity.value;
        	var sMin = this.ds_allProduct.getColumn(nProductRow, "minQuantity");
            var sMax = this.ds_allProduct.getColumn(nProductRow, "maxQuantity");
        	if (this.fn_isNull(sQuantity))
        	{
        		alert("수량을 입력해주세요.");
        		this.edt_quantity.setFocus();
        		return false;
        	}

            var nQuantity = parseInt(sQuantity, 10);
        	if(nQuantity < 0 || nQuantity > 99999999)
        	{	
        		trace(nQuantity);
        		alert("최소 수량과 최대 수량 사이의 값을 입력해주세요.");
        		this.edt_quantity.setFocus();
        		return false;
        	};
        	
            return true;
        	
        }
        // =====================================================================
        //재고 변경 저장
        // =====================================================================
        this.fn_save = function()
        {
        	
        	trace(this.edt_quantity.value);
        	if (!this.fn_validation()) return;
        	
        	var nRow = this.ds_product.rowcount > 0 ? 0 : this.ds_product.addRow();
        	
            this.ds_product.setColumn(nRow, "categoryId", this.cbo_category.value);
            this.ds_product.setColumn(nRow, "productId", this.cbo_productName.value);
            this.ds_product.setColumn(nRow, "productName", this.cbo_productName.text);
            this.ds_product.setColumn(nRow, "quantity", this.edt_quantity.value);

        	this.transaction(
                "updateProductQuantity",
                "http://localhost:8080/product/quantity",
                "ds_product=ds_product",
                "",
                "",
                "fn_productQuantityCallback"                       
            );

        }
        this.fn_productQuantityCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            alert("저장되었습니다.");
            this.close("refresh");
        }
        // =====================================================================
        //util null 공백 처리
        // =====================================================================
        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };

        this.edt_quantity_onchar = function(obj,e)
        {
        	var v = String(e.posttext || "");
            v = nexacro.replaceAll(v, ",", "");
        	// 숫자만 허용
            if (!/^[0-9]*$/.test(v))
            {
                return false;
            }
            // 빈 값 허용
            if (v == "")
            {
                return true;
            }
        	 // 배열 분리 (소수점 대비)
            var arr = v.split(".");
            var intPart = arr[0] || "";

            // 정수부 8자리 제한
            if (intPart.length > 8)
            {
                return false;
            }

            return true;
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ChangePopupForm_onload, this);
            this.sta_quantity.addEventHandler("onclick", this.sta_category03_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.cbo_category.addEventHandler("onitemchanged", this.cbo_category_onitemchanged, this);
            this.cbo_productName.addEventHandler("onitemchanged", this.cbo_productName_onitemchanged, this);
            this.edt_quantity.addEventHandler("onchar", this.edt_quantity_onchar, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("ChangePopupForm.xfdl", true);

       
    };
}
)();
