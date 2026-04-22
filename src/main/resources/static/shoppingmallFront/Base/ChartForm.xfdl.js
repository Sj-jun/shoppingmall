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
                this.set_name("ChartForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,840,566);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"customerName\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("web_chart", "absolute", "21", "147", "800", "400", null, null, this);
            obj.set_taborder("0");
            obj.set_url("http://localhost:8080/chart/chart.html?v=4");
            this.addChild(obj.name, obj);

            obj = new Static("title_chart", "absolute", "19", "17", "382", "40", null, null, this);
            obj.set_taborder("1");
            obj.set_text("∘ 월별 주문량 현황 차트");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_year", "absolute", "21", "94", "799", "41", null, null, this);
            obj.set_taborder("2");
            obj.style.set_border("1 solid lightskyblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "8.33%", "92", "10", "48", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.62%", "90", "20", "48", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "58.45%", "92", "20", "48", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "8", "84", "74", "10", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_order", "absolute", "20", "53", "118", "46", null, null, this);
            obj.set_taborder("11");
            obj.set_text("▣ 주문 현황");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "48", "74", "20", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "127", "20", "60", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "820", "122", "20", "60", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0.83%", "137", "981", "8", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_year", "absolute", "44", "91", "28", "46", null, null, this);
            obj.set_taborder("20");
            obj.set_text("연도");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "408", "546", "40", "20", null, null, this);
            obj.set_taborder("21");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "283", "0", "45", "20", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Spin("sp_year", "absolute", "81", "101", "152", "26", null, null, this);
            obj.set_taborder("23");
            obj.set_value("0");
            obj.set_max("3000");
            obj.set_increment("1");
            obj.set_min("1800");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 799, 41, this.div_year,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_border("1 solid lightskyblue");

            	}
            );
            this.div_year.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 840, 566, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","sp_year","value","ds_cond","year");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","web_chart","","ds_chart","quantity");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ChartForm.xfdl", function(exports) {
        this.fv_customerName = "";

        //주문 수량을 배열에 담는다.
        this.mQuantity = [];
        this.fv_chartLoaded = false;
        this.fv_chartDataReady = false;
        //================================================
        //폼 온로드
        //================================================
        this.ChartForm_onload = function(obj,e)
        {

            //고객 정보 
            this.fv_customerName = this.parent.customerName || "";
            this.ds_cond.setColumn(0,"year", this.fn_getToday());
            this.ds_cond.setColumn(0, "customerName", this.fv_customerName);
            
            this.fn_monthOrder();
        };
        this.fn_getToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();

            return yyyy;
        };
        //================================================
        //연도와 고객명으로 주문수량을 불러온다.
        //================================================
        this.fn_monthOrder = function()
        {
        	this.transaction(
                "mothOrder",
                "http://localhost:8080/orders/monthly",
                "ds_cond=ds_cond",
                "ds_chart=ds_chart",
                "",
                "fn_monthOrderCallback"
            );
        }
        this.fn_monthOrderCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }
            for(var i=0; i<this.ds_chart.getRowCount(); i++)
            {
        		trace("월= " + this.ds_chart.getColumn(i, "month") + " 수량= " + this.ds_chart.getColumn(i, "quantity"));
            }
            trace("web onloadcompleted 실행");
            trace("rowcount = " + this.ds_chart.getRowCount());
        	for(var i=0; i<this.ds_chart.getRowCount(); i++){
        		this.mQuantity.push(this.ds_chart.getColumn(i, "quantity"));
        		trace("배열 = " + this.mQuantity[i]);
        	}
        	this.fv_chartDataReady = true;
        	this.fn_drawChart();
        }
        //================================================
        //차트를 그리는 함수
        //================================================
        this.fn_drawChart = function()
        {
            var chartData = {
                labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                datasets: [
                    {
                        label: "월별 주문 수량",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,1)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: this.mQuantity
                    }
                ]
              
            };

        
            var chartOptions = {
                responsive: true,
                barValueSpacing: 20,
                barDatasetSpacing: 1,
             
        		maintainAspectRatio: false,
                
            };

            this.web_chart.callMethod("drawChart", "bar", chartData, chartOptions);
        };
        this.web_chart_onloadcompleted = function(obj,e)
        {
        	this.fv_chartLoaded = true;
        	trace("차트 로드");
        	this.fn_tryDrawChart();
        };

        this.fn_tryDrawChart = function()
        {
            if (!this.fv_chartLoaded) return;
            if (!this.fv_chartDataReady) return;

            this.fn_drawChart();
        };
        this.sp_year_onchanged = function(obj,e)
        {
        	this.mQuantity = [];
        	this.fv_chartDataReady = false;
        	this.ds_cond.setColumn(0,"year", this.sp_year.value);
        	this.fn_monthOrder();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ChartForm_onload, this);
            this.web_chart.addEventHandler("onloadcompleted", this.web_chart_onloadcompleted, this);
            this.title_chart.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.sta_year.addEventHandler("onclick", this.sta_year_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static05_onclick, this);
            this.sp_year.addEventHandler("onchanged", this.sp_year_onchanged, this);

        };

        this.loadIncludeScript("ChartForm.xfdl", true);

       
    };
}
)();
