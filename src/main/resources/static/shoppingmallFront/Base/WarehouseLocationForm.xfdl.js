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
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"postal_code\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Grid("grd_location", "absolute", "3", "216", "970", "400", null, null, this);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"236\"/><Column size=\"288\"/><Column size=\"248\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#c8ebffff;\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"주\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"도시명\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"우편번호\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"창고위치\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond", "absolute", "19", "140", "970", "45", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "56.19%", "-2", "45", "48", null, null, this.div_cond);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "65.44%", "0", "10", "48", null, null, this.div_cond);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "28.34%", "-2", "45", "48", null, null, this.div_cond);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "36.49%", "0", "10", "48", null, null, this.div_cond);
            obj.set_taborder("21");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0.2%", "0", null, "48", "94.5%", null, this.div_cond);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "8.56%", "0", "10", "48", null, null, this.div_cond);
            obj.set_taborder("23");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Combo("cbo_region", "absolute", "93", "8", "182", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_region");
            obj.set_codecolumn("regionId");
            obj.set_datacolumn("regionName");
            obj = new Combo("cbo_country", "absolute", "364", "8", "182", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_text("Combo01");
            obj.set_innerdataset("@ds_country");
            obj.set_codecolumn("countryId");
            obj.set_datacolumn("countryName");
            obj = new Static("sta_region", "absolute", "57", "8", "28", "28", null, null, this.div_cond);
            obj.set_taborder("26");
            obj.set_text("지역");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("sta_country", "absolute", "325", "8", "28", "28", null, null, this.div_cond);
            obj.set_taborder("27");
            obj.set_text("국가");
            this.div_cond.addChild(obj.name, obj);

            obj = new Button("btn_plus", "absolute", "941", "188", "22", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("+");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_minus", "absolute", "967", "188", "22", "22", null, null, this);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.style.set_color("red");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "845", "104", "70", "28", null, null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "919", "104", "70", "28", null, null, this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "45.61%", "132", "522", "8", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "915", "87", "4", "48", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "841", "87", "4", "48", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 981, 45, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("gainsboro");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("WarehouseLocationForm.xfdl", function(exports) {

        this.WarehouseLocationForm_onload = function(obj,e){
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_cond.cbo_region.addEventHandler("onitemchanged", this.div_Wselect_Combo00_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("WarehouseLocationForm.xfdl", true);

       
    };
}
)();
