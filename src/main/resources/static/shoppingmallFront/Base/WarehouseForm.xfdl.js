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
                this.set_name("WarehouseForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1062,667);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_country", this);
            obj._setContents("<ColumnInfo><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region2", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location2", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_country2", this);
            obj._setContents("<ColumnInfo><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saved", this);
            obj.set_keystring("S:+warehouseId");
            obj._setContents("<ColumnInfo><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_header", this);
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colName\" type=\"STRING\" size=\"256\"/><Column id=\"cellIndex\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_wExcel", "absolute", "952", "92", "70", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_warehouse", "absolute", "40", "181", "982", "410", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_warehouse");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"127\"/><Column size=\"158\"/><Column size=\"188\"/><Column size=\"282\"/><Column size=\"186\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#c8ebffff;\" text=\"bind:chk\" imagestretch=\"none\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"관리번호\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"지역\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"국가\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"창고위치\"/><Cell col=\"5\" style=\"background:#c8ebffff;\" text=\"창고명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:warehouseId\" editlimit=\"85\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:regionId\" editlimit=\"85\" editlengthunit=\"utf8\" combodataset=\"ds_region2\" combocodecol=\"regionId\" combodatacol=\"regionName\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:countryId\" editlimit=\"85\" editlengthunit=\"utf8\" combodataset=\"ds_country2\" combocodecol=\"countryId\" combodatacol=\"countryName\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:locationId\" editlimit=\"85\" editlengthunit=\"utf8\" combodataset=\"ds_location2\" combocodecol=\"locationId\" combodatacol=\"locationName\" tooltiptext=\"bind:locationName\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:warehouseName\" editlimit=\"85\" editautoselect=\"false\" editacceptsenter=\"false\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Wselect", "absolute", "40", "129", "982", "45", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_location", "absolute", "636", "8", "186", "28", null, null, this.div_Wselect);
            this.div_Wselect.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_location");
            obj.set_codecolumn("locationId");
            obj.set_datacolumn("locationName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_country", "absolute", "347", "8", "186", "28", null, null, this.div_Wselect);
            this.div_Wselect.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_country");
            obj.set_codecolumn("countryId");
            obj.set_datacolumn("countryName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_region", "absolute", "79", "8", "186", "28", null, null, this.div_Wselect);
            this.div_Wselect.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_region");
            obj.set_codecolumn("regionId");
            obj.set_datacolumn("regionName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj.set_type("dropdown");
            obj = new Static("sta_location", "absolute", "576", "8", "69", "28", null, null, this.div_Wselect);
            obj.set_taborder("4");
            obj.set_text("창고위치");
            obj.style.set_font("10 Dotum");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "63.81%", "0", "10", "48", null, null, this.div_Wselect);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("sta_region", "absolute", "45", "8", "28", "28", null, null, this.div_Wselect);
            obj.set_taborder("6");
            obj.set_text("지역");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("sta_country", "absolute", "310", "8", "41", "28", null, null, this.div_Wselect);
            obj.set_taborder("7");
            obj.set_text("국가");
            obj.style.set_font("10 Dotum");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "264", "-2", "45", "48", null, null, this.div_Wselect);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "34.35%", "0", "10", "48", null, null, this.div_Wselect);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_Wselect.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "7.03%", "0", "10", "48", null, null, this.div_Wselect);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_Wselect.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "50.94%", "173", "522", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "50.94%", "121", "522", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wSearch", "absolute", "582", "92", "70", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wInsert", "absolute", "656", "92", "70", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wSave", "absolute", "730", "92", "70", "30", null, null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wDel", "absolute", "804", "92", "70", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wLoc", "absolute", "878", "92", "70", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("위치관리");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1019", "87", "4", "48", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "948", "87", "4", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "874", "88", "4", "48", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "800", "87", "4", "48", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "726", "87", "4", "48", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wReset", "absolute", "543", "92", "35", "30", null, null, this);
            obj.set_taborder("21");
            obj.style.set_image("URL('C:/Users/e1/Pictures/reset3.png')");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "578", "90", "4", "48", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_wsub", "absolute", "40", "94", "140", "28", null, null, this);
            obj.set_taborder("23");
            obj.set_text("▣ 창고 목록");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("warehouse_title", "absolute", "40", "49", "382", "40", null, null, this);
            obj.set_taborder("25");
            obj.set_text("∘ 창고 목록 및 관리");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "43", "79", "92", "20", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "572", "129", "45", "48", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "40", "127", "45", "48", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "215", "40", "59", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1021", "217", "40", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "542", "591", "40", "60", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "176", "0", "40", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "652", "88", "4", "48", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "15", "15", "25", "25", null, null, this);
            obj.set_taborder("36");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 10 10");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 981, 45, this.div_Wselect,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("gainsboro");

            	}
            );
            this.div_Wselect.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1062, 667, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grd_warehouse","","ds_warehouse","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Wselect.cbo_region","value","ds_cond","regionId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Wselect.cbo_country","value","ds_cond","countryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Wselect.cbo_location","value","ds_cond","locationId");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("WarehouseForm.xfdl", function(exports) {
        /*
        화면명 : 창고목록 및 관리
        작성자 : 정상준
        작성일자 : 2026-03-31
        */

        //그리드 편집 중 enter 검색 막기 위해
        this.grd_enter = true;
        // 저장한 아이디들 저장
        this.fv_savedWarehouseId = [];
        this.focusId = "";

        this.fv_exporting = false;
        this.fv_exportCooldown = false;

        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };
        this.WarehouseForm_onload = function(obj,e)
        {

        
            // 검색조건 초기화
            this.ds_cond.setColumn(0, "regionId", "");
            this.ds_cond.setColumn(0, "countryId", "");
            this.ds_cond.setColumn(0, "locationId", "");

            // 조회영역 국가/위치 비활성화
            this.div_Wselect.cbo_country.set_enable(false);
            this.div_Wselect.cbo_location.set_enable(false);
            this.div_Wselect.cbo_region.set_index(0);
            this.div_Wselect.cbo_country.set_index(0);
            this.div_Wselect.cbo_location.set_index(0);
        	
        	// 체크박스 헤더 초기화
            this.grd_warehouse.setCellProperty("head", 0, "text", "0");
            this.fn_setGridCombo();
           

            // 조회용 지역
            this.fn_loadRegion();
            // 그리드용 전체 국가/위치 목록
            this.fn_loadAllCountry2();
            this.fn_loadAllLocation2();

            // 최초 조회
            this.fn_search();
        };

        
        //Enter 검색 

        this.grd_warehouse_onkillfocus = function(obj,e){
        	this.grd_enter = true;
        }
        this.onkeydown = function(obj,e){
        	if(this.grd_enter){
        		if(e.keycode == 13){
        			
        			this.btn_wSearch.setFocus();
        			this.fn_search();
        		}
        	}
        }

        // =====================================================================
        // 그리드 콤보 설정
        // =====================================================================
        this.fn_setGridCombo = function()
        {
            // 지역: 신규행이면 선택 가능
            this.grd_warehouse.setCellProperty(
                "body",
                2,
                "edittype",
                "expr:dataset.getRowType(currow)==2 ? 'combo' : 'none'"
            );

            // 국가: 신규행 + regionId 있을 때만 선택 가능
            this.grd_warehouse.setCellProperty(
                "body",
                3,
                "edittype",
                "expr:(dataset.getRowType(currow)==2 && dataset.getColumn(currow,'regionId')!='') ? 'combo' : 'none'"
            );

            // 위치: 신규행 + countryId 있을 때만 선택 가능
            this.grd_warehouse.setCellProperty(
                "body",
                4,
                "edittype",
                "expr:(dataset.getRowType(currow)==2 && dataset.getColumn(currow,'countryId')!='') ? 'combo' : 'none'"
            );
        };

        // =====================================================================
        // 조회용 지역, 국가, 위치
        // =====================================================================
        this.fn_loadRegion = function()
        {
            this.transaction(
                "getRegionList",
                "http://localhost:8080/regionList",
                "",
                "ds_region=ds_region",
                "",
                "fn_regionCallback"
            );
        };
        this.fn_regionCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            //그리드용 지역 데이터셋
        	this.ds_region2.clearData();
        	this.ds_region2.copyData(this.ds_region);

        	for (var i = 0; i < this.ds_region2.getRowCount(); i++)
        	{
        		if (this.ds_region2.getColumn(i, "regionName") == "-전체-")
        		{
        			this.ds_region2.setColumn(i, "regionName", "-선택-");
        			break;
        		}
        	}

        	this.div_Wselect.cbo_region.set_index(0);
        }
        //국가=====================================================================
        this.fn_loadCountry = function()
        {
            this.transaction(
                "getCountryList",
                "http://localhost:8080/countryList",
                "ds_cond=ds_cond",
                "ds_country=ds_country",
                "",
                "fn_countryCallback"
            );
        };
        this.fn_countryCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }

        	this.div_Wselect.cbo_country.set_enable(true);
        }

        //위치=====================================================================
        this.fn_loadLocation = function()
        {
            this.transaction(
                "getLocationList",
                "http://localhost:8080/locationList",
                "ds_cond=ds_cond",
                "ds_location=ds_location",
                "",
                "fn_locationCallback"
            );
        };
        this.fn_locationCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            
            this.div_Wselect.cbo_location.set_enable(true);
        } 
        // =====================================================================
        // 그리드용 전체 국가, 위치 목록
        // =====================================================================
        this.fn_loadAllCountry2 = function()
        {
            this.transaction(
                "getAllCountryList2",
                "http://localhost:8080/countryListAll",
                "",
                "ds_country2=ds_country2",
                "",
                "fn_country2Callback"
            );
        };
        this.fn_country2Callback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	for (var i = 0; i < this.ds_country2.getRowCount(); i++)
        	{
        		if (this.ds_country2.getColumn(i, "countryName") == "-전체-")
        		{
        			this.ds_country2.setColumn(i, "countryName", "-선택-");
        			break;
        		}
        	}
        }
        // =====================================================================
        this.fn_loadAllLocation2 = function()
        {
            this.transaction(
                "getAllLocationList2",
                "http://localhost:8080/locationListAll",
                "",
                "ds_location2=ds_location2",
                "",
                "fn_location2Callback"
            );
        };
        this.fn_location2Callback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }

        	for (var i = 0; i < this.ds_location2.getRowCount(); i++)
        	{
        		if (this.ds_location2.getColumn(i, "locationName") == "-전체-")
        		{
        			this.ds_location2.setColumn(i, "locationName", "-선택-");
        			break;
        		}
        	}
        }
        // =====================================================================
        // 조회영역 - 지역 변경
        // =====================================================================
        this.div_Wselect.cbo_region_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "regionId", obj.value);
            this.ds_cond.setColumn(0, "countryId", "");
            this.ds_cond.setColumn(0, "locationId", "");

            this.div_Wselect.cbo_country.set_value("");
            this.div_Wselect.cbo_location.set_value("");
            
            this.ds_country.clearData();
            this.ds_location.clearData();
            
            this.div_Wselect.cbo_country.set_index(0);
            this.div_Wselect.cbo_location.set_index(0);

            this.div_Wselect.cbo_country.set_enable(false);
            this.div_Wselect.cbo_location.set_enable(false);

            if (obj.value == "" || obj.value == null) return;
            this.fn_loadCountry();
        };

        // =====================================================================
        // 조회영역 - 국가 변경
        // =====================================================================
        this.div_Wselect.cbo_country_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "countryId", obj.value);
            this.ds_cond.setColumn(0, "locationId", "");

            this.div_Wselect.cbo_location.set_value("");
            
            this.ds_location.clearData();
        	this.div_Wselect.cbo_location.set_index(0);
            this.div_Wselect.cbo_location.set_enable(false);

            if (obj.value == "" || obj.value == null) return;

            this.fn_loadLocation();
        };

        // =====================================================================
        // 조회
        // =====================================================================
        this.btn_wSearch_onclick = function(obj,e)
        {
            this.fn_search();
        };

        this.fn_search = function()
        {	  
            this.transaction(
                "getWarehouseList",
                "http://localhost:8080/warehouses",
                "ds_cond=ds_cond",
                "ds_warehouse=ds_warehouse",
                "",
                "fn_warehouseListCallback"
            );
        };
        this.fn_warehouseListCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	trace("getWarehouseList rowcount=" + this.ds_warehouse.getRowCount());
        	this.grd_warehouse.setCellProperty("head", 0, "text", "0");
        	if(this.focusId){
        		trace("f ===== " + this.focusId);
        		var nRow = this.ds_warehouse.findRow("warehouseId", this.focusId);
        		if (nRow >= 0) {
        			this.ds_warehouse.set_rowposition(nRow);
        		}
            }
            this.focusId = "";

        }
        // =====================================================================
        // 드롭다운 열릴 때 하위콤보 필터
        // =====================================================================
        this.grd_warehouse_ondropdown = function(obj,e)
        {
            var nRow = e.row;
            var sColumnId = nexacro.replaceAll(obj.getCellProperty("body", e.cell, "text"), "bind:", "");

            if (sColumnId == "countryId")
            {
                var sRegionId = this.ds_warehouse.getColumn(nRow, "regionId");

                if (!sRegionId)
                {
                    this.ds_country2.filter("1==0");
                    return;
                }

                this.ds_country2.filter("regionId==" + sRegionId + " || countryName=='-선택-'");
            }
            else if (sColumnId == "locationId")
            {
                var sCountryId = this.ds_warehouse.getColumn(nRow, "countryId");

                if (!sCountryId)
                {
                    this.ds_location2.filter("1==0");
                    return;
                }

                this.ds_location2.filter("countryId=='" + sCountryId + "' || locationName=='-선택-'");
            }
        };

        // =====================================================================
        // 드롭다운 닫힐 때 필터 해제: filter()는 한 번 걸면 데이터셋 자체에 계속 남아 있다.
        // =====================================================================
        this.grd_warehouse_oncloseup = function(obj,e)
        {
            var sColumnId = nexacro.replaceAll(obj.getCellProperty("body", e.cell, "text"), "bind:", "");

            if (sColumnId == "countryId")
            {
                this.ds_country2.filter("");
            }
            else if (sColumnId == "locationId")
            {
                this.ds_location2.filter("");
            }
        };

        // =====================================================================
        // 그리드 데이터 변경 처리
        // =====================================================================
        this.ds_warehouse_oncolumnchanged = function(obj,e)
        {
            this.grd_enter = false;

            // 체크박스 처리
            if (e.columnid == "chk")
            {
                var bAllChecked = true;

                for (var i = 0; i < obj.getRowCount(); i++)
                {
                    if (obj.getColumn(i, "chk") != "1")
                    {
                        bAllChecked = false;
                        break;
                    }
                }

                this.grd_warehouse.setCellProperty("head", 0, "text", bAllChecked ? "1" : "0");
                return;
            }

            // 창고명 입력 시 중복 체크
            if (e.columnid == "warehouseName")
            {
                var sName = obj.getColumn(e.row, "warehouseName");
                if (!sName) return;

                this.ds_warehouse.setColumn(e.row, "chk", "1");
                sName = nexacro.trim(sName).toUpperCase();

                for (var j = 0; j < obj.getRowCount(); j++)
                {
                    if (j == e.row) continue;
                    if (obj.getRowType(j) == 8) continue;

                    var sCompare = obj.getColumn(j, "warehouseName");
                    if (!sCompare) continue;

                    sCompare = nexacro.trim(sCompare).toUpperCase();

                    if (sName == sCompare)
                    {
                        alert("이미 존재하는 창고명입니다.");
                        this.ds_warehouse.set_rowposition(e.row);
                        this.grd_warehouse.setCellPos(this.grd_warehouse.getBindCellIndex("body", "warehouseName"));
                        this.grd_warehouse.showEditor(true);
                        return;
                    }
                }
                return;
            }

            // 신규행만 처리
            if (obj.getRowType(e.row) != 2) return;

            // 지역 변경
            if (e.columnid == "regionId")
            {
                var sRegionId = obj.getColumn(e.row, "regionId");

                // region 바뀌면 하위 전부 초기화
                obj.setColumn(e.row, "countryId", "");
                obj.setColumn(e.row, "countryName", "-선택-");
                obj.setColumn(e.row, "locationId", "");
                obj.setColumn(e.row, "locationName", "-선택-");

                if (!sRegionId)
                {
                    obj.setColumn(e.row, "regionName", "-선택-");
                    return;
                }

                var nRegionRow = this.ds_region2.findRow("regionId", sRegionId);
                if (nRegionRow >= 0)
                {
                    obj.setColumn(e.row, "regionName", this.ds_region2.getColumn(nRegionRow, "regionName"));
                }
                else
                {
                    obj.setColumn(e.row, "regionName", "-선택-");
                }
                return;
            }

            // 국가 변경
            if (e.columnid == "countryId")
            {
                var sCountryId = obj.getColumn(e.row, "countryId");

                // country 바뀌면 location 무조건 초기화
                obj.setColumn(e.row, "locationId", "");
                obj.setColumn(e.row, "locationName", "-선택-");

                if (!sCountryId)
                {
                    obj.setColumn(e.row, "countryName", "-선택-");
                    return;
                }

                var nCountryRow = this.ds_country2.findRow("countryId", sCountryId);
                if (nCountryRow >= 0)
                {
                    obj.setColumn(e.row, "countryName", this.ds_country2.getColumn(nCountryRow, "countryName"));
                }
                else
                {
                    obj.setColumn(e.row, "countryName", "-선택-");
                }
                return;
            }

            // 위치 변경
            if (e.columnid == "locationId")
            {
                var sLocationId = obj.getColumn(e.row, "locationId");

                if (!sLocationId)
                {
                    obj.setColumn(e.row, "locationName", "-선택-");
                    return;
                }

                var nLocationRow = this.ds_location2.findRow("locationId", sLocationId);
                if (nLocationRow >= 0)
                {
                    obj.setColumn(e.row, "locationName", this.ds_location2.getColumn(nLocationRow, "locationName"));
                }
                else
                {
                    obj.setColumn(e.row, "locationName", "-선택-");
                }
                return;
            }
        };

        // =====================================================================
        // 추가
        // =====================================================================
        this.fn_addRow = function()
        {

            if (this.ds_region2.getRowCount() == 0 && this.ds_region.getRowCount() > 0)
            {
                //지역 데이터 복사 
                this.ds_region2.copyData(this.ds_region);
            }

            if (this.ds_region2.getRowCount() == 0)
            {
                alert("지역 목록이 아직 로드되지 않았습니다.");
                return;
            }

            var nRow = this.ds_warehouse.addRow();

            this.ds_warehouse.setColumn(nRow, "chk", "1");
            this.ds_warehouse.setColumn(nRow, "warehouseId", "");
            this.ds_warehouse.setColumn(nRow, "regionId", "");
            this.ds_warehouse.setColumn(nRow, "regionName", "");
            this.ds_warehouse.setColumn(nRow, "countryId", "");
            this.ds_warehouse.setColumn(nRow, "countryName", "");
            this.ds_warehouse.setColumn(nRow, "locationId", "");
            this.ds_warehouse.setColumn(nRow, "locationName", "");
            this.ds_warehouse.setColumn(nRow, "warehouseName", "");

            this.ds_warehouse.set_rowposition(nRow);
            this.grd_warehouse.setCellPos(2);
            this.grd_warehouse.showEditor(true);
        };

        this.btn_wAdd_onclick = function(obj,e)
        {
            this.fn_addRow();
        };

        // =====================================================================
        // 실제 변경 여부 체크
        // =====================================================================
        this.fn_isUpdated = function()
        {
            for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
            {
                var nRowType = this.ds_warehouse.getRowType(i);

                if (nRowType == 2)
                {
                    var sName = this.ds_warehouse.getColumn(i, "warehouseName");
                    if (sName && nexacro.trim(sName) != "")
                    {
                        return true;
                    }
                }

                if (nRowType == 4)
                {
                    // chk만 바뀐 경우 제외
                    var orgChk = this.ds_warehouse.getOrgColumn(i, "chk");
                    var curChk = this.ds_warehouse.getColumn(i, "chk");

                    if (orgChk != curChk)
                    {
                        var bOnlyChkChanged = true;
                        var colList = ["warehouseName", "regionId", "countryId", "locationId"];

                        for (var j = 0; j < colList.length; j++)
                        {
                            var col = colList[j];
                            var orgVal = this.ds_warehouse.getOrgColumn(i, col);
                            var curVal = this.ds_warehouse.getColumn(i, col);

                            if (String(orgVal) != String(curVal))
                            {
                                bOnlyChkChanged = false;
                                break;
                            }
                        }

                        if (bOnlyChkChanged)
                        {
                            continue; // 체크만 변경 → 무시
                        }
                    }

                    return true;
                }

                if (nRowType == 8)
                {
                    return true;
                }
            }

            return false;
        };

        // =====================================================================
        // 저장
        // =====================================================================
        this.fn_save = function()
        {
            for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
            {
                var nRowType = this.ds_warehouse.getRowType(i);

                // 신규/수정행만 검사
                if (nRowType == 2 || nRowType == 4)
                {
                    // 수정행에서 chk만 바뀐 경우는 저장 대상 제외
                    if (nRowType == 4)
                    {
                        var orgChk = this.ds_warehouse.getOrgColumn(i, "chk");
                        var curChk = this.ds_warehouse.getColumn(i, "chk");

                        if (orgChk != curChk)
                        {
                            var bOnlyChkChanged = true;
                            var colList = ["warehouseName", "regionId", "countryId", "locationId"];

                            for (var j = 0; j < colList.length; j++)
                            {
                                var col = colList[j];
                                var orgVal = this.ds_warehouse.getOrgColumn(i, col);
                                var curVal = this.ds_warehouse.getColumn(i, col);

                                if (String(orgVal) != String(curVal))
                                {
                                    bOnlyChkChanged = false;
                                    break;
                                }
                            }

                            if (bOnlyChkChanged)
                            {
                                continue;
                            }
                        }
                    }

                    // 필수값 체크 먼저
                    if (!this.ds_warehouse.getColumn(i, "regionId"))
                    {
                        alert((i + 1) +  "번째 행의 지역을 선택하세요.");
                        this.ds_warehouse.set_rowposition(i);
                        return;
                    }

                    if (!this.ds_warehouse.getColumn(i, "countryId"))
                    {
                        alert((i + 1) +  "번째 국가를 선택하세요.");
                        this.ds_warehouse.set_rowposition(i);
                        return;
                    }

                    if (!this.ds_warehouse.getColumn(i, "locationId"))
                    {
                        alert((i + 1) +  "번째 창고위치를 선택하세요.");
                        this.ds_warehouse.set_rowposition(i);
                        return;
                    }

                    var sWarehouseName = this.ds_warehouse.getColumn(i, "warehouseName");
                    if (!sWarehouseName || nexacro.trim(sWarehouseName) == "")
                    {
                        alert((i + 1) +  "번째 창고명을 입력하세요.");
                        this.ds_warehouse.set_rowposition(i);
                        return;
                    }

                    //마지막에 체크박스 검사
                    if (this.ds_warehouse.getColumn(i, "chk") != "1")
                    {
                        this.ds_warehouse.set_rowposition(i);
                        return;
                    }
                }
            }

            if (!this.fn_isUpdated())
            {
                alert("변경된 내용이 없습니다.");
                return;
            }
            if(!confirm("저장하시겠습니까?")) return;

            this.transaction(
                "saveWarehouse",
                "http://localhost:8080/warehouses/save",
                "ds_warehouse=ds_warehouse:u",
                "ds_saved=ds_saved",
                "",
                "fn_saveCallback"
            );
        };
        this.btn_wSave_onclick = function(obj,e)
        {
            this.fn_save();
        };
        this.fn_saveCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	for(var i=0; i<this.ds_saved.getRowCount(); i++)
        	{
        		trace(this.ds_saved.getColumn(i, "warehouseId"));
        	}
        	this.focusId = this.ds_saved.getColumn(this.ds_saved.getRowCount() - 1, "warehouseId");
        	trace("f ====== " + this.focusId);
        	this.fn_search();
        }
        // =====================================================================
        // 삭제
        // =====================================================================

        //체크박스 체크 여부
        this.fn_dCheckedRow = function()
        {
            for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
            {
                if (this.ds_warehouse.getColumn(i, "chk") == "1")
                {
                    return true;
                }
            }
            return false;
        };
        this.fn_delete = function()
        {
            this.ds_delete.clearData();

            for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
            {
        		//체크박스 1이면 삭제
                if (this.ds_warehouse.getColumn(i, "chk") == "1")
                {
                    var nRow = this.ds_delete.addRow();
                    this.ds_delete.setColumn(nRow, "warehouseId", this.ds_warehouse.getColumn(i, "warehouseId"));
                }
            }
        };

        this.btn_wDelete_onclick = function(obj,e)
        {
        	// 체크된 행 없는 경우
            if (!this.fn_dCheckedRow())
            {
                alert("삭제할 행을 선택하세요.");
                return;
            }
            // 최종 확인
            if (!confirm("선택한 행을 삭제하시겠습니까?"))
            {
                return;
            }

            this.fn_delete();
            
            this.transaction(
                "deleteWarehouse",
                "http://localhost:8080/warehouses/delete",
                "ds_delete=ds_delete",
                "",
                "",
                "fn_deleteCallback"
            );
        };
        // =====================================================================
        // 창고 삭제 콜백
        // =====================================================================
        this.fn_deleteCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            //INVENTORIES에 재고있으면 삭제X
        	if (svcID == "deleteWarehouse" && nErrorCode == -100)
            {
        		this.fn_uncheckDeleteRows();
                alert(sErrorMsg);
                return;
            }

            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            alert("삭제되었습니다.");
            this.fn_removeDeletedRows();
        }   
               
        // 행만 삭제
        this.fn_removeDeletedRows = function()
        {
            for (var i = this.ds_warehouse.getRowCount() - 1; i >= 0; i--)
            {
                var nRowType = this.ds_warehouse.getRowType(i);
                var sChk = this.ds_warehouse.getColumn(i, "chk");
                var sWarehouseId = this.ds_warehouse.getColumn(i, "warehouseId");

                // 1. 신규행은 ID가 없으므로 chk로 바로 삭제
                if (nRowType == 2)
                {
                    if (String(sChk) == "1")
                    {
                        this.ds_warehouse.deleteRow(i);
                    }
                    continue;
                }

                // 2. 기존행은 ds_delete의 warehouseId와 비교해서 삭제
                for (var j = 0; j < this.ds_delete.getRowCount(); j++)
                {
                    if (String(sWarehouseId) == String(this.ds_delete.getColumn(j, "warehouseId")))
                    {
                        this.ds_warehouse.deleteRow(i);
                        break;
                    }
                }
            }

            this.grd_warehouse.setCellProperty("head", 0, "text", "0");
        };

        // 삭제 실패 시 체크 해제
        this.fn_uncheckDeleteRows = function()
        {
            for (var i = 0; i < this.ds_delete.getRowCount(); i++)
            {
                var sDeleteWarehouseId = this.ds_delete.getColumn(i, "warehouseId");

                for (var j = 0; j < this.ds_warehouse.getRowCount(); j++)
                {
                    var sWarehouseId = this.ds_warehouse.getColumn(j, "warehouseId");

                    if (String(sWarehouseId) == String(sDeleteWarehouseId))
                    {
                        this.ds_warehouse.setColumn(j, "chk", "0");
                        break;
                    }
                }
            }

            this.grd_warehouse.setCellProperty("head", 0, "text", "0");
        };
        // =====================================================================
        // 초기화
        // =====================================================================
        this.fn_reset = function()
        {
        	
            this.div_Wselect.cbo_region.set_value("");
            this.div_Wselect.cbo_country.set_value("");
            this.div_Wselect.cbo_location.set_value("");
            
            this.ds_country.clearData();
            this.ds_location.clearData();

            this.div_Wselect.cbo_country.set_enable(false);
            this.div_Wselect.cbo_location.set_enable(false);

            this.ds_cond.clearData();
            
            var nRow = this.ds_cond.addRow();
            
            this.ds_cond.setColumn(nRow, "regionId", "");
            this.ds_cond.setColumn(nRow, "countryId", "");
            this.ds_cond.setColumn(nRow, "locationId", "");
            this.div_Wselect.cbo_region.set_index(0);
        	this.div_Wselect.cbo_country.set_index(0);
        	this.div_Wselect.cbo_location.set_index(0);
        	if (this.fv_savedWarehouseIds && this.fv_savedWarehouseIds.length > 0)
        	{	
        		alert("저장되었습니다.");
        		this.fn_search();
        	}
            
        };

        this.btn_wReset_onclick = function(obj,e)
        {
            this.fn_reset();
        };

        // =====================================================================
        // 헤더 체크박스: 헤더 체크하면 전체 체크 
        // =====================================================================
        this.grd_warehouse_onheadclick = function(obj,e)
        {
            if (e.cell != 0)
            {
                return;
            }
        	
        	//헤더영역, 0번 셀
            var sHeadText = obj.getCellText(-1, 0);
            var sNewValue = (sHeadText == "1") ? "0" : "1";

            obj.setCellProperty("head", 0, "text", sNewValue);

            for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
            {
                this.ds_warehouse.setColumn(i, "chk", sNewValue);
            }
        };

        
        //========================================================================
        //팝업을 여는 함수
        //========================================================================
        this.fn_openWarehousePopup = function()
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(
        		"WarehousePopupForm",
        		100,
        		100,
        		1000,
        		500,
        		null,
        		null
        	);
        	objChildFrame.set_formurl("Base::WarehousePopupForm.xfdl");
        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openalign("center middle");

        	 objChildFrame.showModal(
                this.getOwnerFrame(),
                "",                     // 전달값 없으면 빈 문자열
                this,
                "fn_popupCallback"
            );
        };

        this.fn_popupCallback = function(sPopupId,sReturn)
        {
            trace("popup closed, popupId=" + sPopupId + ", return=" + sReturn);
        	if (!sReturn) return;
            if (sPopupId != "WarehousePopupForm")
            {
                return;
            }
            // 팝업에서 변경 후 닫혔으면 재조회
            this.fn_loadAllLocation2();
            this.fn_search();
        };

        //==================================
        //엑셀 버튼
        //==================================
        this.btn_wExcel_onclick = function(obj,e)
        {
        	if (this.ds_warehouse.getRowCount() <= 0)
            {
                alert("엑셀로 저장할 데이터가 없습니다.");
                return;
            }
            
            // 그리드 헤더 구조와 같은 2줄 헤더 정보를 ds_header에 만든다.
            this.fn_makeExcelHeader();

            var fileName = "Warehouses_" + this.fn_getToday();
            var sheetName = "Sheet1";
            var excelFilePath = "";

            var args = "";
            args += "fileName=" + fileName;
            args += " sheetName=" + sheetName;
            args += " excelFilePath=" + excelFilePath;

            this.transaction(
                "commonExcelCreate",
                "http://localhost:8080/common/excel/create",
                "ds_header=ds_header ds_body=ds_warehouse",
                "ds_result=ds_result",
                args,
                "fn_excelExportCallback"
            );
        };
        this.fn_excelExportCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert("엑셀 생성 실패: " + sErrorMsg);
                return;
            }

            var filePath = this.ds_result.getColumn(0, "FILE_PATH");
            var fileName = this.ds_result.getColumn(0, "FILE_NAME");

            if (!filePath)
            {
                alert("생성된 엑셀 파일 경로가 없습니다.");
                return;
            }

            if (!fileName)
            {
                fileName = "Employees_" + this.fn_getToday();
            }

            if (fileName.toLowerCase().indexOf(".xlsx") < 0)
            {
                fileName += ".xlsx";
            }

            if (application && application._endCommProgress)
            {
                application._endCommProgress();
            }

            var url = "http://localhost:8080/common/excel/download"
                + "?excelFilePath=" + encodeURIComponent(filePath)
                + "&fileName=" + encodeURIComponent(fileName);

            this.fn_excelRuntimeDownload(url, fileName);
        };

        // Runtime 모드에서 저장 위치 선택창을 띄워 파일을 다운로드한다.
        this.fn_excelRuntimeDownload = function(url,fileName)
        {
            // FileDownload 컴포넌트가 없으면 동적으로 생성
            if (!this.FileDownloadExcel)
            {
                var obj = new FileDownload("FileDownloadExcel", "absolute", 0, 0, 1, 1, null, null, this);
                this.addChild("FileDownloadExcel", obj);

                obj.addEventHandler("onsuccess", this.FileDownloadExcel_onsuccess, this);
                obj.addEventHandler("onerror", this.FileDownloadExcel_onerror, this);

                obj.show();
            }

            // 저장창에 기본으로 표시할 파일명
            this.FileDownloadExcel.set_downloadfilename(fileName);

            // 저장창 파일 형식 필터
            this.FileDownloadExcel.set_filefilter("Excel File (*.xlsx)|*.xlsx|All Files (*.*)|*.*|");
            this.FileDownloadExcel.set_filefilterindex(0);

            // Runtime 모드에서는 저장 위치 선택창을 띄운 뒤 다운로드한다.
            var ret = this.FileDownloadExcel.download(url);

            if (!ret)
            {
                return;
            }
        };

        this.FileDownloadExcel_onsuccess = function(obj,e)
        {
            trace("엑셀 다운로드 성공: " + e.targetfullpath);
            alert("저장되었습니다.");
        };

        this.FileDownloadExcel_onerror = function(obj,e)
        {
            alert("엑셀 다운로드 실패: " + e.errormsg);
        };
        // 공통 엑셀 서버로 보낼 헤더 데이터셋 생성
        this.fn_makeExcelHeader = function()
        {
            this.ds_header.clearData();
        	var bodyCellCount = this.grd_warehouse.getCellCount("body");
            var excelCol = 0;

            for (var i = 0; i < bodyCellCount; i++)
            {
                // Grid body cell의 text에서 실제 bind 컬럼명을 가져온다.
                var bodyText = this.grd_warehouse.getCellProperty("body", i, "text");

                var colId = bodyText.substr(5);

                // Grid head cell의 text를 엑셀 헤더명으로 사용한다.
                var headText = this.grd_warehouse.getCellProperty("head", i, "text");

                var row = this.ds_header.addRow();
                this.ds_header.setColumn(row, "row", "1");
                this.ds_header.setColumn(row, "cellIndex", String(excelCol));
                this.ds_header.setColumn(row, "colspan", "1");
                this.ds_header.setColumn(row, "colId", colId);
                this.ds_header.setColumn(row, "colName", headText);
                
                excelCol++;
            }
        };
        // 오늘 날짜 YYYYMMDD_HHMMSS 반환
        this.fn_getToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();
            var H = this.fn_lpad(d.getHours(), 2);
            var M = this.fn_lpad(d.getMinutes(), 2);
            var S = this.fn_lpad(d.getSeconds(), 2);

            mm = (mm < 10 ? "0" : "") + mm;
            dd = (dd < 10 ? "0" : "") + dd;

            return "" + yyyy + mm + dd + "_" + H + M + S;
        };

        this.fn_lpad = function(v,len)
        {
            v = String(v);
            while (v.length < len)
            {
                v = "0" + v;
            }
            return v;
        };

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_warehouse.addEventHandler("oncolumnchanged", this.ds_warehouse_oncolumnchanged, this);
            this.addEventHandler("onload", this.WarehouseForm_onload, this);
            this.addEventHandler("onkeyup", this.onkeydown, this);
            this.btn_wExcel.addEventHandler("onclick", this.btn_wExcel_onclick, this);
            this.grd_warehouse.addEventHandler("ondropdown", this.grd_warehouse_ondropdown, this);
            this.grd_warehouse.addEventHandler("oncloseup", this.grd_warehouse_oncloseup, this);
            this.grd_warehouse.addEventHandler("oncellclick", this.grd_warehouse_oncellclick, this);
            this.grd_warehouse.addEventHandler("onkillfocus", this.grd_warehouse_onkillfocus, this);
            this.grd_warehouse.addEventHandler("onheadclick", this.grd_warehouse_onheadclick, this);
            this.div_Wselect.cbo_country.addEventHandler("onitemchanged", this.div_Wselect.cbo_country_onitemchanged, this);
            this.div_Wselect.cbo_region.addEventHandler("onitemchanged", this.div_Wselect.cbo_region_onitemchanged, this);
            this.div_Wselect.sta_location.addEventHandler("onclick", this.h_date_onclick, this);
            this.div_Wselect.sta_region.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Wselect.sta_country.addEventHandler("onclick", this.h_date_onclick, this);
            this.btn_wSearch.addEventHandler("onclick", this.btn_wSearch_onclick, this);
            this.btn_wInsert.addEventHandler("onclick", this.fn_addRow, this);
            this.btn_wSave.addEventHandler("onclick", this.btn_wSave_onclick, this);
            this.btn_wDel.addEventHandler("onclick", this.btn_wDelete_onclick, this);
            this.btn_wLoc.addEventHandler("onclick", this.fn_openWarehousePopup, this);
            this.btn_wReset.addEventHandler("onclick", this.fn_reset, this);
            this.sta_wsub.addEventHandler("onclick", this.Static00_onclick, this);
            this.warehouse_title.addEventHandler("onclick", this.Static02_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("WarehouseForm.xfdl", true);

       
    };
}
)();
