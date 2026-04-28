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
                this.set_name("ExeluploadForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1010,475);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"regionName\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"지역\" type=\"STRING\" size=\"256\"/><Column id=\"국가\" type=\"STRING\" size=\"256\"/><Column id=\"창고위치\" type=\"STRING\" size=\"256\"/><Column id=\"창고명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_warehouse", "absolute", "20", "56", "970", "400", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_warehouse");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"241\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"지역\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"국가\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"창고위치\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"창고명\"/></Band><Band id=\"body\"><Cell style=\"padding:5 5 5 5;\" text=\"bind:regionName\" editlimit=\"85\" editscrollbar=\"autovert\" editlengthunit=\"utf8\"/><Cell col=\"1\" style=\"padding:5 5 5 5;\" text=\"bind:countryName\" editlimit=\"85\" editscrollbar=\"autovert\" editlengthunit=\"utf8\"/><Cell col=\"2\" style=\"padding:5 5 5 5;\" text=\"bind:locationName\" editlimit=\"85\" editscrollbar=\"autovert\" editlengthunit=\"utf8\"/><Cell col=\"3\" style=\"padding:5 5 5 5;\" text=\"bind:warehouseName\" editlimit=\"85\" editscrollbar=\"autovert\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "921", "18", "70", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dawn", "absolute", "757", "18", "90", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("양식 다운로드");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "45.54%", "48", "522", "8", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "846", "9", "4", "48", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "918", "13", "4", "48", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload", "absolute", "849", "18", "70", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "86", "20", "48", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "990", "94", "20", "48", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "488", "455", "108", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "736", "0", "108", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "19", "11", "360", "40", null, null, this);
            obj.set_taborder("11");
            obj.set_text("▣ 엑셀 업로드");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1010, 475, this,
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ExceluploadForm.xfdl", function(exports) {
        /*
        화면명 : 엑셀 양식다운/임포트 화면 
        작성자 : 정상준
        작성일자 : 2026-04-23
        */
        //===========================================================================
        //엑셀에 그리드 양식 익스포트 
        //===========================================================================
        this.btn_dawn_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject("Export00", this);
        	var fileName = "WarehousesExcel_" + this.fn_getToday();
        	this.exportObj.set_exporturl("svcurl::XExportImport.do");
        	this.exportObj.set_exportfilename(fileName);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.clearExportItems(nexacro.ExportItemTypes.GRID);

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_warehouse, "Sheet1!A1" );
        	// 이벤트 연결
            this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
            this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);
            
        	var nCount = this.exportObj.exportData();
        	trace("Export00: " + nCount);
        	
        }
        this.Export00_onsuccess = function(obj,e)
        {
        	this.fn_removeCookie();
        };

        //=======================================================================
        // localStorage와 application의 쿠키 삭제 (안하면 Get 요청에서 오류)
        //=======================================================================
        this.fn_removeCookie = function(){
        	nexacro._removeCookie("JSESSIONID");
            nexacro._setCookie("JSESSIONID", "", -1);

            application.JSESSIONID = "";
            application._cookie_variables = [];
            application._secure_cookie_variables = [];

            nexacro._setLocalStorage("_cookie_variables", [], "array");
            nexacro._setLocalStorage("_secure_cookie_variables", [], "array");
        }
        this.Export00_onerror = function(obj,e)
        {
        	this.fn_removeCookie();
        	trace("Import00_onerror");	
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

        //=====================================================================
        //엑셀 임포트
        //=====================================================================
        this.btn_upload_onclick = function(obj,e)
        {
        	this.importObj = new ExcelImportObject("Import00", this);
        	
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.set_importurl("svcurl::XExportImport.do");
        	
        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	
        	this.importObj.importData(
                "",
                "[Command=getsheetdata;Output=output1;Head=Sheet1!A1:D1;Body=Sheet1!A2:D100]",
                "ds_excel=output1"
            );
        	
        }

        
        this.Import00_onsuccess = function(obj,e)
        {
        	trace("_cookie_variables = " + nexacro._getLocalStorage("_cookie_variables", []));
        	trace("Import00_onsuccess");
        	nexacro._setLocalStorage("_cookie_variables", "");
        	
        	this.ds_warehouse.clearData();
        	
            for (var i = 0; i < this.ds_excel.getRowCount(); i++)
            {
                var regionName = this.fn_excelTrim(this.ds_excel.getColumn(i, "지역"));
                var countryName = this.fn_excelTrim(this.ds_excel.getColumn(i, "국가"));
                var locationName = this.fn_excelTrim(this.ds_excel.getColumn(i, "창고위치"));
                var warehouseName = this.fn_excelTrim(this.ds_excel.getColumn(i, "창고명"));
        		//=====================================================================
        		//엑셀 내용이 없는 행은 표현 안함 
        		//=====================================================================
                if (regionName == "" && countryName == "" && locationName == "" && warehouseName == "")
                {
                    continue;
                }
        		//=====================================================================
        		//ds_warehouse에 받아온 엑셀 데이터 복사
        		//=====================================================================
                var nRow = this.ds_warehouse.addRow();

                this.ds_warehouse.setColumn(nRow, "regionName", regionName);
                this.ds_warehouse.setColumn(nRow, "countryName", countryName);
                this.ds_warehouse.setColumn(nRow, "locationName", locationName);
                this.ds_warehouse.setColumn(nRow, "warehouseName", warehouseName);
            }
        }
        this.fn_excelTrim = function(v)
        {
            if (v == null)
            {
                return "";
            }

            return nexacro.trim(String(v));
        };
        this.Import00_onerror = function(obj,e)
        {
        	nexacro._setLocalStorage("_cookie_variables", "");
        	trace("Import00_onerror");	
        }
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.ds_warehouse.getRowCount() < 1){
        		alert("저장할 내용이 없습니다.")
        		return;
        	}
        	for (var i = 0; i < this.ds_warehouse.getRowCount(); i++)
        	{
        		var sWarehouseName = this.ds_warehouse.getColumn(i, "warehouseName");
        		var nLen = sWarehouseName.length;

        		if(nLen > 85){
        			alert((i + 1) + "행 창고명이 85자 초과입니다.");
        			this.ds_warehouse.set_rowposition(i);
        			this.grd_warehouse.setCellPos(this.grd_warehouse.getBindCellIndex("body", "warehouseName"));
        			this.grd_warehouse.showEditor(true);
        			return;
        		}
        	}
        	if(confirm("그리드에 내용을 적용하시겠습니까? \n(조건에 맞지 않는 데이터는 빈칸 처리됩니다.)")){
        	
        		this.close(this.ds_warehouse.saveXML());
        	
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_warehouse.addEventHandler("oncolumnchanged", this.ds_warehouse_oncolumnchanged, this);
            this.addEventHandler("onload", this.ExceluploadForm_onload, this);
            this.addEventHandler("onclose", this.ExeluploadForm_onclose, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_dawn.addEventHandler("onclick", this.btn_dawn_onclick, this);
            this.btn_upload.addEventHandler("onclick", this.btn_upload_onclick, this);

        };

        this.loadIncludeScript("ExceluploadForm.xfdl", true);

       
    };
}
)();
