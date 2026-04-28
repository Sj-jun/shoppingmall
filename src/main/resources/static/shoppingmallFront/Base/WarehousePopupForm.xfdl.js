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
                this.set_name("WarehouseLocationForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1009,552);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"postalCode\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"city\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_country", this);
            obj._setContents("<ColumnInfo><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location2", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"postalCode\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"city\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_location", "absolute", "19", "131", "970", "400", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_location");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"167\"/><Column size=\"204\"/><Column size=\"227\"/><Column size=\"324\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#c8ebffff;\" text=\"bind:chk\" imagestretch=\"none\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"주\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"도시명\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"우편번호\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"창고위치\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:state\" editlimit=\"85\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:city\" editlimit=\"85\" editlengthunit=\"utf8\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:postalCode\" editlimit=\"85\" editlengthunit=\"utf8\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:locationName\" editlimit=\"85\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond", "absolute", "19", "56", "970", "45", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "261", "-2", "45", "48", null, null, this.div_cond);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "33.92%", "0", "10", "48", null, null, this.div_cond);
            obj.set_taborder("21");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "45", "45", null, null, this.div_cond);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "6.8%", "0", "10", "48", null, null, this.div_cond);
            obj.set_taborder("23");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Combo("cbo_region", "absolute", "76", "8", "186", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_region");
            obj.set_codecolumn("regionId");
            obj.set_datacolumn("regionName");
            obj.set_displaynulltext("-선택-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_country", "absolute", "339", "8", "186", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo01");
            obj.set_innerdataset("@ds_country");
            obj.set_codecolumn("countryId");
            obj.set_datacolumn("countryName");
            obj.set_displaynulltext("-선택-");
            obj.style.set_align("center middle");
            obj = new Static("sta_region", "absolute", "44", "8", "28", "28", null, null, this.div_cond);
            obj.set_taborder("26");
            obj.set_text("지역");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("sta_country", "absolute", "305", "8", "28", "28", null, null, this.div_cond);
            obj.set_taborder("27");
            obj.set_text("국가");
            this.div_cond.addChild(obj.name, obj);

            obj = new Button("btn_plus", "absolute", "941", "105", "22", "22", null, null, this);
            obj.set_taborder("2");
            obj.style.set_font("bold 10 Dotum");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btn_minus", "absolute", "967", "105", "22", "22", null, null, this);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.style.set_color("red");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "847", "20", "70", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "919", "20", "70", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "45.59%", "48", "522", "8", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "916", "3", "4", "48", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "841", "3", "4", "48", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "17", "15", "360", "40", null, null, this);
            obj.set_taborder("10");
            obj.set_text("▣ 창고위치 관리");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1.88%", "48", "522", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "45.89%", "100", "522", "5", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "46.68%", "127", "522", "5", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "989", "144", "20", "48", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "240", "20", "48", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "856", "0", "153", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "864", "531", "153", "20", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 981, 45, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("gainsboro");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1009, 552, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_cond.cbo_region","value","ds_cond","regionId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_cond.cbo_country","value","ds_cond","countryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","grd_location","","ds_location","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("WarehousePopupForm.xfdl", function(exports) {
        /*
        화면명 : 창고위치 관리 팝업
        작성자 : 정상준
        작성일자 : 2026-04-02
        */

        //그리드 편집 중 enter 검색 막기 위해
        this.grd_enter = true;
        this.focusId = "";
        this.WarehouseLocationForm_onload = function(obj,e)
        {
        	
        	// 검색조건 row 보장
            if (this.ds_cond.getRowCount() == 0)
            {
                this.ds_cond.addRow();
            }

            // 검색조건 초기화
            this.ds_cond.setColumn(0, "regionId", null);
            this.ds_cond.setColumn(0, "countryId", "");

            // 조회영역 국가/위치 비활성화
            this.div_cond.cbo_country.set_enable(false);
            this.div_cond.cbo_region.set_index(0);
            this.div_cond.cbo_country.set_index(0);
            this.fn_initCheckbox();

            // 조회용 지역
            this.fn_loadRegion();
        }

        this.grd_location_onkillfocus = function(obj,e){
        	this.grd_enter = true;
        }
        this.onkeydown = function(obj,e){
        	if(this.grd_enter){
        		if(e.keycode == 13){
        			this.btn_search_onclick();
        		}
        	}
        }
        // =====================================================================
        // 체크박스 헤더 초기화
        // =====================================================================
        this.fn_initCheckbox = function()
        {
            this.grd_location.setCellProperty("head", 0, "text", "0");
        };

        // =====================================================================
        // 조회용 지역
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
        	if (this.ds_region.getRowCount() > 0 && this.fn_isNull(this.ds_region.getColumn(0, "regionId")))
        	{
        		this.ds_region.setColumn(0, "regionName", "-선택-");
        	}
        	else
        	{
        		var nRow = this.ds_region.insertRow(0);
        		this.ds_region.setColumn(nRow, "regionId", null);
        		this.ds_region.setColumn(nRow, "regionName", "-선택-");
        	}
        	this.div_cond.cbo_region.set_index(0);
        }
        // =====================================================================
        // 조회용 국가
        // =====================================================================
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
        	if (this.ds_country.getRowCount() > 0 && this.fn_isNull(this.ds_country.getColumn(0, "countryId")))
        	{
        		this.ds_country.setColumn(0, "countryName", "-선택-");
        	}
        	else
        	{
        		var nRow = this.ds_country.insertRow(0);
        		this.ds_country.setColumn(nRow, "countryId", "");
        		this.ds_country.setColumn(nRow, "countryName", "-선택-");
        	}
        	this.div_cond.cbo_country.set_index(0);
        	this.div_cond.cbo_country.set_enable(true);
        }
        // =====================================================================
        // 조회영역 - 지역 변경
        // =====================================================================
        this.div_cond.cbo_region_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "regionId", obj.value);
            this.ds_cond.setColumn(0, "countryId", "");
        	
            this.ds_country.clearData();
        	this.div_cond.cbo_country.set_index(0);
            this.div_cond.cbo_country.set_enable(false);
            

            if (obj.value == "" || obj.value == null)
            {
                return;
            }

            this.fn_loadCountry();
        };

        // =====================================================================
        // 조회영역 - 국가 변경
        // =====================================================================
        this.div_cond.cbo_country_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "countryId", obj.value);
            
            if (obj.value == "" || obj.value == null)
            {
                return;
            }
        };

        // =====================================================================
        // 조회
        // =====================================================================
        this.btn_search_onclick = function(obj,e)
        {
            var regionId  = this.ds_cond.getColumn(0, "regionId");
            var countryId = this.ds_cond.getColumn(0, "countryId");

            if (this.fn_isNull(regionId) || this.fn_isNull(countryId))
            {
                alert("검색조건이 없습니다!");
                return;
            }

            this.fn_search();
        };

        this.fn_search = function()
        {
        	this.transaction(
                "getLocationList",
                "http://localhost:8080/locationList",
                "ds_cond=ds_cond",
                "ds_location=ds_location",
                "",
                "fn_locationCallback"
            );
        }
        this.fn_locationCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }	
        	if (this.ds_location.getRowCount() > 0)
        	{
        		var sLocationId = this.ds_location.getColumn(0, "locationId");
        		var sLocationName = this.ds_location.getColumn(0, "locationName");
        		

        		if ((sLocationId == null || sLocationId == "") &&
        			(sLocationName == null || sLocationName == "" || sLocationName == "-전체-"))
        		{
        			this.ds_location.deleteRow(0);
        		}
        	}
        	if(this.focusId){
        		trace("f ===== " + this.focusId);
        		var nRow = this.ds_location.findRow("locationId", this.focusId);
        		if (nRow >= 0) {
        			this.ds_location.set_rowposition(nRow);
        		}
            }
        }
        // =====================================================================
        // 그리드 데이터 변경 처리
        // =====================================================================
        this.ds_location_oncolumnchanged = function(obj,e)
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

                this.grd_location.setCellProperty("head", 0, "text", bAllChecked ? "1" : "0");
                return;
            }
            
            this.ds_location.setColumn(e.row, "chk", "1");
        }

        // =====================================================================
        // 체크박스 전체 변경
        // =====================================================================
        this.grd_location_onheadclick = function(obj,e)
        {
            if (e.cell != 0)
            {
                return;
            }

            var sHeadText = obj.getCellText(-1, 0);
            var sNewValue = (sHeadText == "1") ? "0" : "1";

            
             obj.setCellProperty("head", 0, "text", sNewValue);

            for (var i = 0; i < this.ds_location.getRowCount(); i++)
            {
                this.ds_location.setColumn(i, "chk", sNewValue);
            }
        };

        // =====================================================================
        // 추가 
        // =====================================================================
        this.btn_plus_onclick = function(obj,e)
        {
        	var regionId  = this.ds_cond.getColumn(0, "regionId");
            var countryId = this.ds_cond.getColumn(0, "countryId");

            if (this.fn_isNull(regionId) || this.fn_isNull(countryId))
            {
                alert("검색조건이 없습니다!");
                return;
            }
            this.fn_plus();
        };
        this.fn_plus = function()
        {
        	var nRow = this.ds_location.addRow();

            this.ds_location.setColumn(nRow, "chk", "1");
            this.ds_location.setColumn(nRow, "locationId", "");
            this.ds_location.setColumn(nRow, "address", "");
            this.ds_location.setColumn(nRow, "postalCode", "");
            this.ds_location.setColumn(nRow, "state", "");
            this.ds_location.setColumn(nRow, "countryId", this.ds_cond.getColumn(0, "countryId"));
            this.ds_location.setColumn(nRow, "city", "");
            this.ds_location.setColumn(nRow, "locationName", "");

            this.ds_location.set_rowposition(nRow);
            this.grd_location.setCellPos(1);
            this.grd_location.showEditor(true);
        };
        // =====================================================================
        // 실제 변경 여부 체크
        // =====================================================================
        this.fn_isUpdated = function()
        {
        	//필수값 체크
            for (var i = 0; i < this.ds_location.getRowCount(); i++)
            {
                var nRowType = this.ds_location.getRowType(i);
        		
        		if (nRowType == 2)
                {
                    
        			return true;
                
                }
                
                if (nRowType == 4)
                {
                    //chk만 바뀐 경우 제외
                    var orgChk = this.ds_location.getOrgColumn(i, "chk");
                    var curChk = this.ds_location.getColumn(i, "chk");

                    // chk만 변경된 경우 skip
                    if (orgChk != curChk)
                    {
                        var bOnlyChkChanged = true;

                        var colList = ["state", "city", "postalCode", "locationName"];

                        for (var j = 0; j < colList.length; j++)
                        {
                            var col = colList[j];

                            var orgVal = this.ds_location.getOrgColumn(i, col);
                            var curVal = this.ds_location.getColumn(i, col);

                            if (String(orgVal) != String(curVal))
                            {
                                bOnlyChkChanged = false;
                                break;
                            }
                        }

                        if (bOnlyChkChanged)
                        {
                            continue; //체크만 변경 → 무시
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

            for (var i = 0; i < this.ds_location.getRowCount(); i++)
            {
                var nRowType = this.ds_location.getRowType(i);

                if (nRowType == 2 || nRowType == 4)
                {
                    if (!this.ds_location.getColumn(i, "city"))
                    {
                        alert((i + 1) + "번 행의 도시명을 입력하세요.");
                        this.ds_location.set_rowposition(i);
                        return;
                    }

                    if (!this.ds_location.getColumn(i, "postalCode"))
                    {
                        alert((i + 1) + "번 행의 우편번호를 입력하세요.");
                        this.ds_location.set_rowposition(i);
                        return;
                    }

                    if (!this.ds_location.getColumn(i, "locationName"))
                    {
                        alert((i + 1) + "번 행의 창고위치를 입력하세요.");
                        this.ds_location.set_rowposition(i);
                        return;
                    }
                    // 마지막에 체크박스 검사
                    if (this.ds_location.getColumn(i, "chk") != "1")
                    {
                        this.ds_location.set_rowposition(i);
                        return;
                    }
                }
            }
            //변경 여부 체
            if (!this.fn_isUpdated())
        	{
                alert("변경된 내용이 없습니다.");
                return;
            }

            this.transaction(
                "saveLocation",
                "http://localhost:8080/locations/save",
                "ds_location=ds_location:u",
                "ds_location2=ds_location2",
                "",
                "fn_saveCallback"
            );
        };
        this.fn_saveCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }	
        	alert("저장");	
        	this.focusId = this.ds_location2.getColumn(this.ds_location2.getRowCount() - 1, "locationId");
        	trace("f ====== " + this.focusId);
        	this.fn_search();
        }
        // =====================================================================
        // 삭제
        // =====================================================================

        //체크박스 체크 여부
        this.fn_dCheckedRow = function()
        {
            for (var i = 0; i < this.ds_location.getRowCount(); i++)
            {
                if (this.ds_location.getColumn(i, "chk") == "1")
                {
                    return true;
                }
            }
            return false;
        };
        this.fn_minus = function()
        {
            this.ds_delete.clearData();

            for (var i = 0; i < this.ds_location.getRowCount(); i++)
            {
        		//체크박스 1이면 삭제
                if (this.ds_location.getColumn(i, "chk") == "1")
                {
                    var nRow = this.ds_delete.addRow();
                    this.ds_delete.setColumn(nRow, "locationId", this.ds_location.getColumn(i, "locationId"));
                }
            }
        };

        this.btn_minus_onclick = function(obj,e)
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

            this.fn_minus();

            this.transaction(
                "deleteLocation",
                "http://localhost:8080/locations/delete",
                "ds_delete=ds_delete",
                "",
                "",
                "fn_deleteCallback"
            );
        };

        // 행만 삭제
        this.fn_removeDeletedRows = function()
        {
            for (var i = this.ds_location.getRowCount() - 1; i >= 0; i--)
            {
                var nRowType = this.ds_location.getRowType(i);
                var sChk = this.ds_location.getColumn(i, "chk");
                var sLocationId = this.ds_location.getColumn(i, "locationId");

                // 신규행은 ID가 없으므로 chk 기준으로 바로 삭제
                if (nRowType == 2)
                {
                    if (String(sChk) == "1")
                    {
                        this.ds_location.deleteRow(i);
                    }
                    continue;
                }

                // 기존행은 ds_delete의 locationId와 비교해서 삭제
                for (var j = 0; j < this.ds_delete.getRowCount(); j++)
                {
                    if (String(sLocationId) == String(this.ds_delete.getColumn(j, "locationId")))
                    {
                        this.ds_location.deleteRow(i);
                        break;
                    }
                }
            }

            this.grd_location.setCellProperty("head", 0, "text", "0");
        };

        // 삭제 실패 시 체크 해제
        this.fn_uncheckDeleteRows = function()
        {
            for (var i = 0; i < this.ds_delete.getRowCount(); i++)
            {
                var sDeleteLocationId = this.ds_delete.getColumn(i, "locationId");

                for (var j = 0; j < this.ds_location.getRowCount(); j++)
                {
                    var sLocationId = this.ds_location.getColumn(j, "locationId");

                    if (String(sLocationId) == String(sDeleteLocationId))
                    {
                        this.ds_location.setColumn(j, "chk", "0");
                        break;
                    }
                }
            }

            this.grd_warehouse.setCellProperty("head", 0, "text", "0");
        };
        // 창고 삭제 콜백
        this.fn_deleteCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            //창고 있으면 삭제X
        	if (svcID == "deleteLocation" && nErrorCode == -100)
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
        	if (nErrorCode >= 0)
        	{
        		alert("삭제되었습니다.");
        		this.fn_removeDeletedRows();
        		return;
        	}
        }
        // =====================================================================
        //util null 공백 처리
        // =====================================================================
        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };
        	

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_location.addEventHandler("oncolumnchanged", this.ds_location_oncolumnchanged, this);
            this.ds_location2.addEventHandler("oncolumnchanged", this.ds_location_oncolumnchanged, this);
            this.addEventHandler("onload", this.WarehouseLocationForm_onload, this);
            this.addEventHandler("onkeyup", this.onkeydown, this);
            this.grd_location.addEventHandler("onkillfocus", this.grd_location_onkillfocus, this);
            this.grd_location.addEventHandler("onheadclick", this.grd_location_onheadclick, this);
            this.div_cond.cbo_region.addEventHandler("onitemchanged", this.div_cond.cbo_region_onitemchanged, this);
            this.div_cond.cbo_country.addEventHandler("onitemchanged", this.div_cond.cbo_country_onitemchanged, this);
            this.btn_plus.addEventHandler("onclick", this.btn_plus_onclick, this);
            this.btn_minus.addEventHandler("onclick", this.btn_minus_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static00_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("WarehousePopupForm.xfdl", true);

       
    };
}
)();
