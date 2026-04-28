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
                this.set_name("InvenPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,640,325);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inven", this);
            obj._setContents("<ColumnInfo><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"ogQuantity\" type=\"STRING\" size=\"256\"/><Column id=\"ogWarehouseId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_warehouse", "absolute", "119", "87", "500", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_product", "absolute", "119", "118", "500", "32", null, null, this);
            obj.set_taborder("19");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_category", "absolute", "119", "56", "500", "32", null, null, this);
            obj.set_taborder("20");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_price", "absolute", "119", "149", "500", "32", null, null, this);
            obj.set_taborder("17");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_description", "absolute", "119", "180", "500", "125", null, null, this);
            obj.set_taborder("18");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category", "absolute", "20", "56", "100", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_text("카테고리");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productId", "absolute", "20", "118", "100", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_text("상품관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_description", "absolute", "20", "180", "100", "125", null, null, this);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_price", "absolute", "279", "149", "100", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("가격");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9.53%", "48", "522", "8", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productName", "absolute", "279", "118", "100", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품명");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_quantity", "absolute", "20", "149", "100", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_text("수량");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_category", "absolute", "123", "59", "153", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");

            obj = new Combo("cbo_warehouse", "absolute", "123", "90", "153", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_warehouse");
            obj.set_codecolumn("warehouseId");
            obj.set_datacolumn("warehouseName");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");

            obj = new Static("sta_warehouse", "absolute", "20", "87", "100", "32", null, null, this);
            obj.set_taborder("22");
            obj.set_text("창고");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_region", "absolute", "279", "90", "110", "26", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_country", "absolute", "392", "90", "110", "26", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_location", "absolute", "505", "90", "110", "26", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_padding("5 5 5 5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productId", "absolute", "123", "121", "153", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productName", "absolute", "382", "121", "233", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_description", "absolute", "123", "183", "492", "119", null, null, this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.setStyleValue("padding", "disabled", "5 5 5 5");
            obj.style.setStyleValue("align", "disabled", "left top");
            obj.style.setStyleValue("border", "readonly", "1 solid #808080ff");
            obj.style.setStyleValue("padding", "readonly", "5 5 5 5");
            obj.style.setStyleValue("align", "readonly", "left top");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "86", "0", "522", "20", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", "477", "19", "70", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_text("수정");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_index", "absolute", "549", "19", "70", "30", null, null, this);
            obj.set_taborder("25");
            obj.set_text("목록");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "546", "9", "4", "48", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "102", "20", "50", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_inven", "absolute", "20", "14", "145", "38", null, null, this);
            obj.set_taborder("28");
            obj.set_text("▣ 재고 수정");
            obj.style.set_font("12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "619", "122", "20", "50", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "94", "305", "522", "20", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_price", "absolute", "382", "152", "153", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_mask("#,###,###.##");
            obj.style.set_background("#fbf8f1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_padding("5 5 5 5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_quantity", "absolute", "123", "152", "153", "26", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_padding("5 5 5 5");
            obj.set_mask("##,###,###");
            obj.set_autoskip("false");
            obj.set_clipmode("includespace");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "615", "217", "3", "50", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "120", "69", "3", "150", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "276", "83", "3", "100", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "379", "122", "3", "50", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "615", "90", "3", "50", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "502", "70", "3", "50", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "389", "68", "3", "50", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 32, this.div_warehouse,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_warehouse.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 32, this.div_product,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_product.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 32, this.div_category,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_category.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 640, 325, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cbo_category","value","ds_inven","categoryName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_region","value","ds_inven","regionName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_country","value","ds_inven","countryName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_location","value","ds_inven","locationName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_productId","value","ds_inven","productId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_productName","value","ds_inven","productName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_description","value","ds_inven","description");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cbo_warehouse","value","ds_inven","warehouseId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_price","value","ds_inven","price");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_quantity","value","ds_inven","quantity");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("InvenPopupForm.xfdl", function(exports) {
        /*
        화면명 : 재고 수정
        작성자 : 정상준
        작성일자 : 2026-04-09
        */

        // 수정 시 사용할 상품, 창고번호
        this.fv_productId = "";
        this.fv_warehouseId = "";

        this.InvenPopupForm_onload = function(obj,e)
        {
            this.fv_warehouseId = this.parent.warehouseId || "";
            this.fv_productId = this.parent.productId || "";
        	
        	var nRow = this.ds_cond.insertRow(0);
        	this.ds_cond.setColumn(nRow, "productId", this.fv_productId);
        	this.ds_cond.setColumn(nRow, "warehouseId", this.fv_warehouseId);
        	trace("상품번호: " + this.ds_cond.getColumn(0, "productId"));
        	
        	this.transaction(
                "getInventory",
                "http://localhost:8080/inventory",
                "ds_cond=ds_cond",
                "ds_inven=ds_inven",
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
            };
            if (this.ds_origin.getRowCount() == 0)
        	{
        		this.ds_origin.addRow();
        	};
            this.ds_origin.setColumn(0, "ogQuantity", this.ds_inven.getColumn(0, "quantity"));
            this.ds_origin.setColumn(0, "ogWarehouseId", this.ds_inven.getColumn(0, "warehouseId"));
            this.fn_warehouse();
        }
        this.fn_warehouse = function()
        {
        	this.transaction(
                "getInventory",
                "http://localhost:8080/warehouses",
                "",
                "ds_warehouse=ds_warehouse",
                "",
                "fn_warehouseCallback"                       
            );
        };
        this.fn_warehouseCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            var nRow = this.ds_warehouse.insertRow(0);
        	this.ds_warehouse.setColumn(nRow, "warehouseId", "");
        	this.ds_warehouse.setColumn(nRow, "warehouseName", "-선택-");
        }
        this.cbo_warehouse_onitemchanged = function(obj,e)
        {
            var sWarehouse = obj.value;
            trace("sWarehouse = " + sWarehouse);

            var nWarehouseRow = this.ds_warehouse.findRow("warehouseId", sWarehouse);

            if (nWarehouseRow < 0)
            {
                return;
            }

            if (this.ds_inven.getRowCount() == 0)
            {
                this.ds_inven.addRow();
            }

            this.ds_inven.setColumn(0, "warehouseId", sWarehouse);
            this.ds_inven.setColumn(0, "warehouseName", this.ds_warehouse.getColumn(nWarehouseRow, "warehouseName"));
            this.ds_inven.setColumn(0, "regionId", this.ds_warehouse.getColumn(nWarehouseRow, "regionId"));
            this.ds_inven.setColumn(0, "countryId", this.ds_warehouse.getColumn(nWarehouseRow, "countryId"));
            this.ds_inven.setColumn(0, "locationId", this.ds_warehouse.getColumn(nWarehouseRow, "locationId"));
            this.ds_inven.setColumn(0, "regionName", this.ds_warehouse.getColumn(nWarehouseRow, "regionName"));
            this.ds_inven.setColumn(0, "countryName", this.ds_warehouse.getColumn(nWarehouseRow, "countryName"));
            this.ds_inven.setColumn(0, "locationName", this.ds_warehouse.getColumn(nWarehouseRow, "locationName"));

            trace("warehouseName = " + this.ds_inven.getColumn(0, "warehouseName"));
            trace("regionId = " + this.ds_inven.getColumn(0, "regionId"));
            trace("countryId = " + this.ds_inven.getColumn(0, "countryId"));
            trace("locationId = " + this.ds_inven.getColumn(0, "locationId"));
        };
        // =====================================================================
        //util null 공백 처리
        // =====================================================================
        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };
        this.fn_validation = function()
        {
        	
        	if (this.fn_isNull(this.cbo_warehouse.value))
            {
                alert("창고를 선택해주세요.");
                this.cbo_warehouse.setFocus();
                return false;
            }
            if (this.fn_isNull(this.edt_quantity.value))
            {
                alert("수량을 입력해주세요.");
                this.edt_quantity.setFocus();
                return false;
            }
            
            var nQuantity = parseInt(this.edt_quantity.value, 10);
        	if(nQuantity < 0 || nQuantity > 99999999)
        	{	
        		trace(nQuantity);
        		alert("0과 99999999 사이의 값을 입력해주세요.");
        		this.edt_quantity.setFocus();
        		return false;
        	};
        	
            return true;
        	
        };

        //변경 여부 확인 ("변경된 값이 없습니다.")
        this.fn_isChanged = function()
        {
            	

        	if (this.ds_inven.getColumn(0, "warehouseId") != this.ds_origin.getColumn(0, "ogWarehouseId")
        		|| this.ds_inven.getColumn(0, "quantity")!= this.ds_origin.getColumn(0, "ogQuantity"))
        	{
        		return true;
        	}
            

            return false;
        };
        this.fn_update = function(sForceUpdate)
        {
            var sArgs = "";
            if (!this.fn_isChanged())
            {
                alert("변경된 값이 없습니다.");
                return;
            }
        	if(!confirm("수정하시겠습니까?"))
        	{
        		return;
        	}
            if (sForceUpdate == "Y")
            {
                sArgs = "forceUpdate=Y";
            }

            this.transaction(
                "updateWarehouseQuantity",
                "http://localhost:8080/inventory/quantity",
                "ds_inven=ds_inven ds_origin=ds_origin",
                "",
                sArgs,
                "fn_inventoryQuantityCallback"
            );
        };

        this.btn_update_onclick = function(obj,e)
        {
            if (!this.fn_validation()) return;
            this.fn_update("");
        };
        this.fv_needRefresh = false;
        this.fn_inventoryQuantityCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode == -200)
            {
                if (confirm(sErrorMsg))
                {
                    this.fn_update("Y");
                }
                return;
            }

            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }

            alert("저장되었습니다.");
            this.fv_needRefresh = true;
        };

        this.InvenPopupForm__close = function(obj,e)
        {
        	
            if (this.fv_needRefresh)
            {
        		trace("보내는 id" + this.ds_inven.getColumn(0, "warehouseId"));
                this.close(String(this.ds_inven.getColumn(0, "warehouseId")));
            }
        };

        //목록 버튼 클릭
        this.btn_index_onclick = function(obj,e)
        {
        	if(!confirm("변경사항이 저장되지 않습니다.\n목록으로 이동하시겠습니까?"))
        		return;
        	this.close();
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
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.InvenPopupForm_onload, this);
            this.addEventHandler("onclose", this.InvenPopupForm__close, this);
            this.sta_productId.addEventHandler("onclick", this.div_product_Static01_onclick, this);
            this.sta_productName.addEventHandler("onclick", this.div_product_Static01_onclick, this);
            this.sta_quantity.addEventHandler("onclick", this.div_product_Static01_onclick, this);
            this.cbo_warehouse.addEventHandler("onitemchanged", this.cbo_warehouse_onitemchanged, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_index.addEventHandler("onclick", this.btn_index_onclick, this);
            this.edt_quantity.addEventHandler("onchar", this.edt_quantity_onchar, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("InvenPopupForm.xfdl", true);

       
    };
}
)();
