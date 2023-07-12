(function() {
  function ma(h, l) {
      h.prototype = cb(l.prototype);
      h.prototype.constructor = h;
      h.base = l.prototype
  }

  function cb(h) {
      function l() {}
      l.prototype = h;
      return new l
  }

  function Va(h, l, v) {
      "millisecond" === v ? h.setMilliseconds(h.getMilliseconds() + 1 * l) : "second" === v ? h.setSeconds(h.getSeconds() + 1 * l) : "minute" === v ? h.setMinutes(h.getMinutes() + 1 * l) : "hour" === v ? h.setHours(h.getHours() + 1 * l) : "day" === v ? h.setDate(h.getDate() + 1 * l) : "week" === v ? h.setDate(h.getDate() + 7 * l) : "month" === v ? h.setMonth(h.getMonth() + 1 * l) : "year" === v && h.setFullYear(h.getFullYear() +
          1 * l);
      return h
  }

  function Aa(h) { }

  function Pa(h, l) {  }

  function Q(h) {  }
 
  function s(h) {
      return null === h || "undefined" === typeof h
  }

  function Ba(h) {
      h.indexOf || (h.indexOf = db);
      return h
  }

  function Wa(h, l, v) { }

  function O(h, l) {
      var v = [];
      if (v = {
              solid: [],
              shortDash: [3, 1],
              shortDot: [1, 1],
              shortDashDot: [3, 1, 1, 1],
              shortDashDotDot: [3, 1, 1, 1, 1, 1],
              dot: [1, 2],
              dash: [4, 2],
              dashDot: [4, 2, 1, 2],
              longDash: [8,
                  2
              ],
              longDashDot: [8, 2, 1, 2],
              longDashDotDot: [8, 2, 1, 2, 1, 2]
          } [h || "solid"])
          for (var s = 0; s < v.length; s++) v[s] *= l;
      else v = [];
      return v
  }

  function F(h, l, v, w, sa) {
  } 

  function gb(h) { 
  }

  function Ka(h, l, v) {
      if (w && Za) {
          var s = h.getContext("2d");
          La = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
          ja = Qa / La;
          h.width = l * ja;
          h.height = v * ja;
          Qa !== La && (h.style.width = l + "px", h.style.height = v + "px", s.scale(ja, ja))
      } else h.width = l, h.height = v
  }

  function hb(h) {
  }

  function ra(h, l) {
      Fa && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
      var v = document.createElement("canvas");
      v.setAttribute("class", "canvasjs-chart-canvas");
      Ka(v, h, l);
      w || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(v);
      return v
  }

  function U(h, l) { 
  }  

  function ta() { }

  function T(h, l, v, w, y) {
      this._defaultsKey = h;
      this._themeOptionsKey = l;
      this._index = w;
      this.parent = y;
      this._eventListeners = [];
      h = {};
      this.theme && s(this.parent) && s(l) && s(w) ? h = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[l]) && (null === w ? h = this.parent.themeOptions[l] : 0 < this.parent.themeOptions[l].length && (w = Math.min(this.parent.themeOptions[l].length - 1, w), h = this.parent.themeOptions[l][w]));
      this.themeOptions = h;
      this.options = v ? v : {
          _isPlaceholder: !0
      };
      this.setOptions(this.options, h)
  }

  function Ca(h, l, v, s, w) {
      "undefined" ===
      typeof w && (w = 0);
      this._padding = w;
      this._x1 = h;
      this._y1 = l;
      this._x2 = v;
      this._y2 = s;
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
  }

  function ia(h, l) {
      ia.base.constructor.call(this, "TextBlock", null, l, null, null);
      this.ctx = h;
      this._isDirty = !0;
      this._wrappedText = null;
      this._initialize()
  }

  function Sa(h, l) { 
  }

  function Ta() { 
  }

  function Ha(h) { 
  }
  var Fa = !1, 
      w = !!document.createElement("canvas").getContext,
      na = {
          Chart: {
              width: 500,
              height: 400,
              zoomEnabled: !1,
              zoomType: "x",
              backgroundColor: "transparent",
              theme: "light1",
              animationEnabled: !1,
              animationDuration: 1200,
              dataPointWidth: null,
              dataPointMinWidth: null,
              dataPointMaxWidth: null,
              colorSet: "colorSet1",
              culture: "en",
              creditHref: "",
              creditText: "CanvasJS",
              interactivityEnabled: !0,
              exportEnabled: !1,
              exportFileName: "Chart",
              rangeChanging: null,
              rangeChanged: null,
              publicProperties: {
                  title: "readWrite",
                  subtitles: "readWrite",
                  toolbar: "readWrite",
                  toolTip: "readWrite",
                  legend: "readWrite",
                  axisX: "readWrite",
                  axisY: "readWrite",
                  axisX2: "readWrite",
                  axisY2: "readWrite",
                  data: "readWrite",
                  options: "readWrite",
                  bounds: "readOnly",
                  container: "readOnly",
                  selectedColorSet: "readOnly"
              }
          },
          Title: {
              padding: 0,
              text: null,
              verticalAlign: "top",
              horizontalAlign: "center",
              fontSize: 20,
              fontFamily: "Calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: "transparent" ? "transparent" : null,
              margin: 5,
              wrap: !0,
              maxWidth: null,
              dockInsidePlotArea: !1,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Subtitle: {
              padding: 0,
              text: null,
              verticalAlign: "top",
              horizontalAlign: "center",
              fontSize: 14,
              fontFamily: "Calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: "transparent",
              margin: 2,
              wrap: !0,
              maxWidth: null,
              dockInsidePlotArea: !1,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Toolbar: {
              itemBackgroundColor: "white",
              itemBackgroundColorOnHover: "#2196f3",
              buttonBorderColor: "#2196f3",
              buttonBorderThickness: 1,
              fontColor: "black",
              fontColorOnHover: "white",
              publicProperties: {
                  options: "readWrite",
                  chart: "readOnly"
              }
          },
          Legend: {
              name: null,
              verticalAlign: "center",
              horizontalAlign: "right",
              fontSize: 14,
              fontFamily: "calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              cursor: null,
              itemmouseover: null,
              itemmouseout: null,
              itemmousemove: null,
              itemclick: null,
              dockInsidePlotArea: !1,
              reversed: !1,
              backgroundColor: "transparent" ? "transparent" : null,
              borderColor: w ? "transparent" : null,
              borderThickness: 0,
              cornerRadius: 0,
              maxWidth: null,
              maxHeight: null,
              markerMargin: null,
              itemMaxWidth: null,
              itemWidth: null,
              itemWrap: !0,
              itemTextFormatter: null,
              publicProperties: {
                  options: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          ToolTip: {
              enabled: !0,
              shared: !1,
              animationEnabled: !0,
              content: null,
              contentFormatter: null,
              reversed: !1,
              backgroundColor: w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
              borderColor: null,
              borderThickness: 2,
              cornerRadius: 5,
              fontSize: 14,
              fontColor: "black",
              fontFamily: "Calibri, Arial, Georgia, serif;",
              fontWeight: "normal",
              fontStyle: "italic",
              updated: null,
              hidden: null,
              publicProperties: {
                  options: "readWrite",
                  chart: "readOnly"
              }
          },
          Axis: {
              minimum: null,
              maximum: null,
              viewportMinimum: null,
              viewportMaximum: null,
              interval: null,
              intervalType: null,
              reversed: !1,
              logarithmic: !1,
              logarithmBase: 10,
              title: null,
              titleFontColor: "black",
              titleFontSize: 20,
              titleFontFamily: "arial",
              titleFontWeight: "normal",
              titleFontStyle: "normal",
              titleWrap: !0,
              titleMaxWidth: null,
              titleBackgroundColor: w ? "transparent" : null,
              titleBorderColor: w ? "transparent" : null,
              titleBorderThickness: 0,
              titleCornerRadius: 0,
              labelAngle: 0,
              labelFontFamily: "arial",
              labelFontColor: "black",
              labelFontSize: 12,
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelAutoFit: !0,
              labelWrap: !0,
              labelMaxWidth: null,
              labelFormatter: null,
              labelBackgroundColor: w ? "transparent" : null,
              labelBorderColor: w ? "transparent" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelPlacement: "outside",
              labelTextAlign: "left",
              prefix: "",
              suffix: "",
              includeZero: !1,
              tickLength: 5,
              tickColor: "black",
              tickThickness: 1,
              tickPlacement: "outside",
              lineColor: "black",
              lineThickness: 1,
              lineDashType: "solid",
              gridColor: "#A0A0A0",
              gridThickness: 0,
              gridDashType: "solid",
              interlacedColor: w ? "transparent" : null,
              valueFormatString: null,
              margin: 2,
              publicProperties: {
                  options: "readWrite",
                  stripLines: "readWrite",
                  scaleBreaks: "readWrite",
                  crosshair: "readWrite",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          StripLine: {
              value: null,
              startValue: null,
              endValue: null,
              color: "orange",
              opacity: null,
              thickness: 2,
              lineDashType: "solid",
              label: "",
              labelPlacement: "inside",
              labelAlign: "far",
              labelWrap: !0,
              labelMaxWidth: null,
              labelBackgroundColor: null,
              labelBorderColor: w ? "transparent" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelFontFamily: "arial",
              labelFontColor: "orange",
              labelFontSize: 12,
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelFormatter: null,
              showOnTop: !1,
              publicProperties: {
                  options: "readWrite",
                  axis: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          ScaleBreaks: {
              autoCalculate: !1,
              collapsibleThreshold: "25%",
              maxNumberOfAutoBreaks: 2,
              spacing: 8,
              type: "straight",
              color: "#FFFFFF",
              fillOpacity: 0.9,
              lineThickness: 2,
              lineColor: "#E16E6E",
              lineDashType: "solid",
              publicProperties: {
                  options: "readWrite",
                  customBreaks: "readWrite",
                  axis: "readOnly",
                  autoBreaks: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Break: {
              startValue: null,
              endValue: null,
              spacing: 8,
              type: "straight",
              color: "#FFFFFF",
              fillOpacity: 0.9,
              lineThickness: 2,
              lineColor: "#E16E6E",
              lineDashType: "solid",
              publicProperties: {
                  options: "readWrite",
                  scaleBreaks: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          Crosshair: {
              enabled: !1,
              snapToDataPoint: !1,
              color: "grey",
              opacity: null,
              thickness: 2,
              lineDashType: "solid",
              label: "",
              labelWrap: !0,
              labelMaxWidth: null,
              labelBackgroundColor: w ? "grey" : null,
              labelBorderColor: w ? "grey" : null,
              labelBorderThickness: 0,
              labelCornerRadius: 0,
              labelFontFamily: w ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
              labelFontSize: 12,
              labelFontColor: "#fff",
              labelFontWeight: "normal",
              labelFontStyle: "normal",
              labelFormatter: null,
              valueFormatString: null,
              updated: null,
              hidden: null,
              publicProperties: {
                  options: "readWrite",
                  axis: "readOnly",
                  bounds: "readOnly",
                  chart: "readOnly"
              }
          },
          DataSeries: {
              name: null,
              dataPoints: null,
              label: "",
              bevelEnabled: !1,
              highlightEnabled: !0,
              cursor: "default",
              indexLabel: "",
              indexLabelPlacement: "auto",
              indexLabelOrientation: "horizontal",
              indexLabelTextAlign: "left",
              indexLabelFontColor: "black",
              indexLabelFontSize: 12,
              indexLabelFontStyle: "normal",
              indexLabelFontFamily: "Arial",
              indexLabelFontWeight: "normal",
              indexLabelBackgroundColor: null,
              indexLabelLineColor: "gray",
              indexLabelLineThickness: 1,
              indexLabelLineDashType: "solid",
              indexLabelMaxWidth: null,
              indexLabelWrap: !0,
              indexLabelFormatter: null,
              lineThickness: 2,
              lineDashType: "solid",
              connectNullData: !1,
              nullDataLineDashType: "dash",
              color: null,
              lineColor: null,
              risingColor: "white",
              fallingColor: "red",
              fillOpacity: null,
              startAngle: 0,
              radius: null,
              innerRadius: null,
              neckHeight: null,
              neckWidth: null,
              reversed: !1,
              valueRepresents: null,
              linkedDataSeriesIndex: null,
              whiskerThickness: 2,
              whiskerDashType: "solid",
              whiskerColor: null,
              whiskerLength: null,
              stemThickness: 2,
              stemColor: null,
              stemDashType: "solid",
              upperBoxColor: "white",
              lowerBoxColor: "white",
              type: "column",
              xValueType: "number",
              axisXType: "primary",
              axisYType: "primary",
              axisXIndex: 0,
              axisYIndex: 0,
              xValueFormatString: null,
              yValueFormatString: null,
              zValueFormatString: null,
              percentFormatString: null,
              showInLegend: null,
              legendMarkerType: null,
              legendMarkerColor: null,
              legendText: null,
              legendMarkerBorderColor: w ? "transparent" : null,
              legendMarkerBorderThickness: 0,
              markerType: "circle",
              markerColor: null,
              markerSize: null,
              markerBorderColor: w ? "transparent" : null,
              markerBorderThickness: 0,
              mouseover: null,
              mouseout: null,
              mousemove: null,
              click: null,
              toolTipContent: null,
              visible: !0,
              publicProperties: {
                  options: "readWrite",
                  axisX: "readWrite",
                  axisY: "readWrite",
                  chart: "readOnly"
              }
          },
          TextBlock: {
              x: 0,
              y: 0,
              width: null,
              height: null,
              maxWidth: null,
              maxHeight: null,
              padding: 0,
              angle: 0,
              text: "",
              horizontalAlign: "center",
              textAlign: "left",
              fontSize: 12,
              fontFamily: "calibri",
              fontWeight: "normal",
              fontColor: "black",
              fontStyle: "normal",
              borderThickness: 0,
              borderColor: "black",
              cornerRadius: 0,
              backgroundColor: "transparent",
              textBaseline: "top"
          },
          CultureInfo: {
              decimalSeparator: ".",
              digitGroupSeparator: ",",
              zoomText: "Zoom",
              panText: "Pan",
              resetText: "Reset",
              menuText: "More Options",
              saveJPGText: "Save as JPEG",
              savePNGText: "Save as PNG",
              printText: "Print",
              days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              months: "January February March April May June July August September October November December".split(" "),
              shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
          }
      }, 
      y = w ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      Da = w ? "Impact, Charcoal, sans-serif" : "Arial",
      ya = {
          colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
          colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
          colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      },
      L, ca, X, ga, V;
  ca = "#333333";
  X = "#000000";
  L = "#666666";
  V = ga = "#000000";
  var W = 20,
      E = 14,
      Ua = {
          colorSet: "colorSet1",
          backgroundColor: "transparent",
          title: {
              fontFamily: Da,
              fontSize: 32,
              fontColor: ca,
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          },
          subtitles: [{
              fontFamily: Da,
              fontSize: E,
              fontColor: ca,
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          }],
          data: [{
              indexLabelFontFamily: y,
              indexLabelFontSize: E,
              indexLabelFontColor: ca,
              indexLabelFontWeight: "normal",
              indexLabelLineThickness: 1
          }],
          axisX: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: ca,
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: X,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: L,
              tickThickness: 1,
              tickColor: L,
              gridThickness: 0,
              gridColor: L,
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: V,
                  color: ga,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisX2: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: ca,
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: X,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: L,
              tickThickness: 1,
              tickColor: L,
              gridThickness: 0,
              gridColor: L,
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: V,
                  color: ga,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: ca,
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: X,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: L,
              tickThickness: 1,
              tickColor: L,
              gridThickness: 1,
              gridColor: L,
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: V,
                  color: ga,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY2: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: ca,
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: X,
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: L,
              tickThickness: 1,
              tickColor: L,
              gridThickness: 1,
              gridColor: L,
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FF7300",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FF7300",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: V,
                  color: ga,
                  thickness: 1,
                  lineDashType: "dash"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          legend: {
              fontFamily: y,
              fontSize: 14,
              fontColor: ca,
              fontWeight: "bold",
              verticalAlign: "bottom",
              horizontalAlign: "center"
          },
          toolTip: {
              fontFamily: y,
              fontSize: 14,
              fontStyle: "normal",
              cornerRadius: 0,
              borderThickness: 1
          },
          toolbar: {
              itemBackgroundColor: "white",
              itemBackgroundColorOnHover: "#2196f3",
              buttonBorderColor: "#2196f3",
              buttonBorderThickness: 1,
              fontColor: "black",
              fontColorOnHover: "white"
          }
      };
  X = ca = "#F5F5F5";
  L = "#FFFFFF";
  ga = "#40BAF1";
  V = "#F5F5F5";
  var W = 20,
      E = 14,
      $a = {
          colorSet: "colorSet2",
          title: {
              fontFamily: y,
              fontSize: 33,
              fontColor: "#3A3A3A",
              fontWeight: "bold",
              verticalAlign: "top",
              margin: 5
          },
          subtitles: [{
              fontFamily: y,
              fontSize: E,
              fontColor: "#3A3A3A",
              fontWeight: "normal",
              verticalAlign: "top",
              margin: 5
          }],
          data: [{
              indexLabelFontFamily: y,
              indexLabelFontSize: E,
              indexLabelFontColor: "#666666",
              indexLabelFontWeight: "normal",
              indexLabelLineThickness: 1
          }],
          axisX: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: "#BBBBBB",
              tickThickness: 1,
              tickColor: "#BBBBBB",
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisX2: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 1,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                //   lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 0,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          axisY2: [{
              titleFontFamily: y,
              titleFontSize: W,
              titleFontColor: "#666666",
              titleFontWeight: "normal",
              labelFontFamily: y,
              labelFontSize: E,
              labelFontColor: "#666666",
              labelFontWeight: "normal",
              lineThickness: 0,
              lineColor: "#BBBBBB",
              tickColor: "#BBBBBB",
              tickThickness: 1,
              gridThickness: 1,
              gridColor: "#BBBBBB",
              stripLines: [{
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#FFA500",
                  labelFontWeight: "normal",
                  labelBackgroundColor: null,
                  color: "#FFA500",
                  thickness: 1
              }],
              crosshair: {
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: "#EEEEEE",
                  labelFontWeight: "normal",
                  labelBackgroundColor: "black",
                  color: "black",
                  thickness: 1,
                  lineDashType: "dot"
              },
              scaleBreaks: {
                  type: "zigzag",
                  spacing: "2%",
                  lineColor: "#BBBBBB",
                  lineThickness: 1,
                  lineDashType: "solid"
              }
          }],
          legend: {
              fontFamily: y,
              fontSize: 14,
              fontColor: "#3A3A3A",
              fontWeight: "bold",
              verticalAlign: "bottom",
              horizontalAlign: "center"
          },
          toolTip: {
              fontFamily: y,
              fontSize: 14,
              fontStyle: "normal",
              cornerRadius: 0,
              borderThickness: 1
          },
          toolbar: {
              itemBackgroundColor: "white",
              itemBackgroundColorOnHover: "#2196f3",
              buttonBorderColor: "#2196f3",
              buttonBorderThickness: 1,
              fontColor: "black",
              fontColorOnHover: "white"
          }
      };
  X = ca = "#F5F5F5";
  L = "#FFFFFF";
  ga = "#40BAF1";
  V = "#F5F5F5";
  W = 20;
  E = 14;
  L = "#FFFFFF";
  X = ca = "#FAFAFA";
  ga = "#40BAF1";
  V = "#F5F5F5";
  var W = 20,
      E = 14,
      ab = {
          light1: Ua,
          light2: $a,
          dark1: Da,
          dark2: {
              colorSet: "colorSet2",
              backgroundColor: "#32373A",
              title: {
                  fontFamily: y,
                  fontSize: 32,
                  fontColor: ca,
                  fontWeight: "normal",
                  verticalAlign: "top",
                  margin: 5
              },
              subtitles: [{
                  fontFamily: y,
                  fontSize: E,
                  fontColor: ca,
                  fontWeight: "normal",
                  verticalAlign: "top",
                  margin: 5
              }],
              toolbar: {
                  itemBackgroundColor: "#666666",
                  itemBackgroundColorOnHover: "#FF7372",
                  buttonBorderColor: "#FF7372",
                  buttonBorderThickness: 1,
                  fontColor: "#F5F5F5",
                  fontColorOnHover: "#F5F5F5"
              },
              data: [{
                  indexLabelFontFamily: y,
                  indexLabelFontSize: E,
                  indexLabelFontColor: X,
                  indexLabelFontWeight: "normal",
                  indexLabelLineThickness: 1
              }],
              axisX: [{
                  titleFontFamily: y,
                  titleFontSize: W,
                  titleFontColor: X,
                  titleFontWeight: "normal",
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: X,
                  labelFontWeight: "normal",
                  lineThickness: 1,
                  lineColor: L,
                  tickThickness: 1,
                  tickColor: L,
                  gridThickness: 0,
                  gridColor: L,
                  stripLines: [{
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#FF7300",
                      labelFontWeight: "normal",
                      labelBackgroundColor: null,
                      color: "#FF7300",
                      thickness: 1
                  }],
                  crosshair: {
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#000000",
                      labelFontWeight: "normal",
                      labelBackgroundColor: V,
                      color: ga,
                      thickness: 1,
                      lineDashType: "dash"
                  },
                  scaleBreaks: {
                      type: "zigzag",
                      spacing: "2%",
                      lineColor: "#777777",
                      lineThickness: 1,
                      lineDashType: "solid",
                      color: "#111111"
                  }
              }],
              axisX2: [{
                  titleFontFamily: y,
                  titleFontSize: W,
                  titleFontColor: X,
                  titleFontWeight: "normal",
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: X,
                  labelFontWeight: "normal",
                  lineThickness: 1,
                  lineColor: L,
                  tickThickness: 1,
                  tickColor: L,
                  gridThickness: 0,
                  gridColor: L,
                  stripLines: [{
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#FF7300",
                      labelFontWeight: "normal",
                      labelBackgroundColor: null,
                      color: "#FF7300",
                      thickness: 1
                  }],
                  crosshair: {
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#000000",
                      labelFontWeight: "normal",
                      labelBackgroundColor: V,
                      color: ga,
                      thickness: 1,
                      lineDashType: "dash"
                  },
                  scaleBreaks: {
                      type: "zigzag",
                      spacing: "2%",
                      lineColor: "#777777",
                      lineThickness: 1,
                      lineDashType: "solid",
                      color: "#111111"
                  }
              }],
              axisY: [{
                  titleFontFamily: y,
                  titleFontSize: W,
                  titleFontColor: X,
                  titleFontWeight: "normal",
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: X,
                  labelFontWeight: "normal",
                  lineThickness: 0,
                  lineColor: L,
                  tickThickness: 1,
                  tickColor: L,
                  gridThickness: 1,
                  gridColor: L,
                  stripLines: [{
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#FF7300",
                      labelFontWeight: "normal",
                      labelBackgroundColor: null,
                      color: "#FF7300",
                      thickness: 1
                  }],
                  crosshair: {
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#000000",
                      labelFontWeight: "normal",
                      labelBackgroundColor: V,
                      color: ga,
                      thickness: 1,
                      lineDashType: "dash"
                  },
                  scaleBreaks: {
                      type: "zigzag",
                      spacing: "2%",
                      lineColor: "#777777",
                      lineThickness: 1,
                      lineDashType: "solid",
                      color: "#111111"
                  }
              }],
              axisY2: [{
                  titleFontFamily: y,
                  titleFontSize: W,
                  titleFontColor: X,
                  titleFontWeight: "normal",
                  labelFontFamily: y,
                  labelFontSize: E,
                  labelFontColor: X,
                  labelFontWeight: "normal",
                  lineThickness: 0,
                  lineColor: L,
                  tickThickness: 1,
                  tickColor: L,
                  gridThickness: 1,
                  gridColor: L,
                  stripLines: [{
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#FF7300",
                      labelFontWeight: "normal",
                      labelBackgroundColor: null,
                      color: "#FF7300",
                      thickness: 1
                  }],
                  crosshair: {
                      labelFontFamily: y,
                      labelFontSize: E,
                      labelFontColor: "#000000",
                      labelFontWeight: "normal",
                      labelBackgroundColor: V,
                      color: ga,
                      thickness: 1,
                      lineDashType: "dash"
                  },
                  scaleBreaks: {
                      type: "zigzag",
                      spacing: "2%",
                      lineColor: "#777777",
                      lineThickness: 1,
                      lineDashType: "solid",
                      color: "#111111"
                  }
              }],
              legend: {
                  fontFamily: y,
                  fontSize: 14,
                  fontColor: ca,
                  fontWeight: "bold",
                  verticalAlign: "bottom",
                  horizontalAlign: "center"
              },
              toolTip: {
                  fontFamily: y,
                  fontSize: 14,
                  fontStyle: "normal",
                  cornerRadius: 0,
                  borderThickness: 1,
                  fontColor: X,
                  backgroundColor: "rgba(0, 0, 0, .7)"
              }
          },
          theme1: Ua,
          theme2: $a,
          theme3: Ua
      },
      S = {
          numberDuration: 1,
          yearDuration: 314496E5,
          monthDuration: 2592E6,
          weekDuration: 6048E5,
          dayDuration: 864E5,
          hourDuration: 36E5,
          minuteDuration: 6E4,
          secondDuration: 1E3,
          millisecondDuration: 1,
          dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      Xa = {},
      ua = null,
      kb = function() {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
      },
      wa = function(h) {
          h.width = 1;
          h.height =
              1;
          h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1)
      },
      lb = function(h, l, v) {
          l = Math.min(this.width, this.height);
          return Math.max("theme4" === this.theme ? 0 : 300 <= l ? 12 : 11, Math.round(l * (h / 400)))
      },          
      Za = !0,
      Qa = window.devicePixelRatio || 1,
      La = 1,
      ja = Za ? Qa / La : 1
  T.prototype.setOptions = function(h, l) {
      if (na[this._defaultsKey]) {
          var s = na[this._defaultsKey],
              w;
          for (w in s) "publicProperties" !== w && s.hasOwnProperty(w) && (this[w] = h && w in h ? h[w] : l && w in l ? l[w] : s[w])
      } else Fa && window.console && console.log("defaults not set")
  };
  T.prototype.set = function(h, l, s) { 
  };
  T.prototype.addTo = function(h, l, s, w) {
    
  };
  T.prototype.createUserOptions = function(h) { 
  };
  T.prototype.remove = function(h) { 
  };
  T.prototype.updateOption = function(h) { 
  };
  T.prototype.trackChanges = function(h) { 
  };
  T.prototype.isBeingTracked = function(h) { 
  };
  T.prototype.hasOptionChanged = function(h) { 
  };
  T.prototype.addEventListener = function(h, l, s) { 
  };
  T.prototype.removeEventListener = function(h, l) { 
  };
  T.prototype.removeAllEventListeners = function() { 
  };
  T.prototype.dispatchEvent = function(h, l, s) { 
  };

  Ca.prototype.getFreeSpace =
      function() {
          return {
              x1: this._x1 + this._leftOccupied,
              y1: this._y1 + this._topOccupied,
              x2: this._x2 - this._rightOccupied,
              y2: this._y2 - this._bottomOccupied,
              width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
              height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
          }
      };
      
  ma(ia, T);
  ia.prototype._initialize = function() {};
  ia.prototype.render = function(h) { };
  ia.prototype.setText = function(h) {

  };
  ia.prototype.measureText = function() {
      this._lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
      if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
      this._wrapText(this.ctx);
      this._isDirty = !1;
      return {
          width: this.width,
          height: this.height
      }
  };

  ia.prototype._wrapText = function() { };
  
  var Na = {
  };
  "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Na : "function" === typeof define && define.amd ? define([], function() {
      return Na
  }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Na);
  y = Na.Chart = function() {
      
      function l(a, d, c) {
          d = d || {};
          s(c) ?
              (this.predefinedThemes = ab, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = s(d.theme) || s(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
          l.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
          var b = this;
          this._containerId = a;
          this._objectsInitialized = !1;
          this.overlaidCanvasCtx =
              this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = !1;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = !1;
          this.canvasPool = new Ta;
          this.allDOMEventHandlers = [];
          this.panEnabled = !1;
          this._defaultCursor = "default";
          this.plotArea = {
              canvas: null,
              ctx: null,
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              width: 0,
              height: 0
          };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ?
          (this.container.innerHTML = "", d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class",
                  "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", w || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ra(a, d), this._preRenderCanvas = ra(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect =
              "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), w ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ra(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas),
                  this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ra(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"),
                  this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new ga(this), this.windowResizeHandler = F(window, "resize", function() {
                  b._updateSize() && b.render()
              }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), U(this._toolBar, {
                  position: "absolute",
                  right: "1px",
                  top: "1px"
              }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                  x1: 0,
                  y1: 0,
                  x2: this.width,
                  y2: this.height
              }, F(this.overlaidCanvas,
                  "click",
                  function(a) {
                      b._mouseEventHandler(a)
                  }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mousemove", function(a) {
                  b._mouseEventHandler(a)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mouseup", function(a) {
                  b._mouseEventHandler(a)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mousedown", function(a) {
                  b._mouseEventHandler(a);
                  ta(b._dropdownMenu)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mouseout", function(a) {
                  b._mouseEventHandler(a)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ?
                  "MSPointerDown" : "touchstart",
                  function(a) {
                      b._touchEventHandler(a)
                  }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                  b._touchEventHandler(a)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                  b._touchEventHandler(a)
              }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                      b._touchEventHandler(a)
                  },
                  this.allDOMEventHandlers), this.toolTip = new Z(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                  axisX: [],
                  axisX2: [],
                  axisY: [],
                  axisY2: []
              })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
      }

      function E(a, d) {
          E.base.constructor.call(this, "Legend", "legend", d, null,
              a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = {
              x1: null,
              y1: null,
              x2: null,
              y2: null
          };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize
      }

      function L(a, d, c, b) {
          L.base.constructor.call(this,
              "DataSeries", "data", d, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = {
              id: b,
              objectType: "dataSeries",
              dataSeriesIndex: c
          };
          a = d.dataPoints ? d.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = !0;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity =
              0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
      }

      function x(a, d, c, b, e, f) {
          x.base.constructor.call(this, "Axis", d, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = {
              min: Infinity,
              max: -Infinity,
              viewPortMin: Infinity,
              viewPortMax: -Infinity,
              minDiff: Infinity
          };
          this.isOptionsInArray = !0;
          "axisX" === e ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", s(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", s(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType =
              null)) : "left" === f || "bottom" === f ? (this.optionsName = "axisY", s(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", s(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" ===
          typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = f;
          this.lineCoordinates = {
              x1: null,
              y1: null,
              x2: null,
              y2: null,
              width: null
          };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new X(this.chart,
              this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
              for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new M(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new ca(this.chart, this.options.crosshair, this));
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum =
              void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) ||
              null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum")
      }
 
      function Z(a, d) {
          Z.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX =
              NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize()
      }

      function ga(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ra(this.chart.width, this.chart.height);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = []
      }

      function V(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null
      }
      ma(l, T); 
      l.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ?
              ya[this.colorSet] : ya.colorSet1);
          this.updateOption("backgroundColor");
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this._cultureInfo = new Ha(this.options.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && w;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar =
              new Sa(this, this.options.toolbar);
          if (this.options.zoomEnabled || this.panEnabled) {
              if (this._zoomButton) U(this._zoomButton, {
                  borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                  backgroundColor: a.toolbar.itemBackgroundColor,
                  color: a.toolbar.fontColor
              }), pa(this, this._zoomButton, "zoom");
              else {
                  var d = !1;
                  ta(this._zoomButton = document.createElement("button"));
                  pa(this, this._zoomButton, "pan");
                  this._toolBar.appendChild(this._zoomButton);
                  this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness +
                      "px solid " + this.toolbar.buttonBorderColor;
                  F(this._zoomButton, "touchstart", function(a) {
                      d = !0
                  }, this.allDOMEventHandlers);
                  F(this._zoomButton, "click", function() {
                      a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, pa(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, pa(a, a._zoomButton, "pan"));
                      a.render()
                  }, this.allDOMEventHandlers);
                  F(this._zoomButton, "mousemove", function() {
                      d ? d = !1 : (U(a._zoomButton, {
                          backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                          color: a.toolbar.fontColorOnHover,
                          transition: "0.4s",
                          WebkitTransition: "0.4s"
                      }), 0 >= navigator.userAgent.search("MSIE") && U(a._zoomButton.childNodes[0], {
                          WebkitFilter: "invert(100%)",
                          filter: "invert(100%)"
                      }))
                  }, this.allDOMEventHandlers);
                  F(this._zoomButton, "mouseout", function() {
                      d || (U(a._zoomButton, {
                          backgroundColor: a.toolbar.itemBackgroundColor,
                          color: a.toolbar.fontColor,
                          transition: "0.4s",
                          WebkitTransition: "0.4s"
                      }), 0 >= navigator.userAgent.search("MSIE") && U(a._zoomButton.childNodes[0], {
                          WebkitFilter: "invert(0%)",
                          filter: "invert(0%)"
                      }))
                  }, this.allDOMEventHandlers)
              }
              this._resetButton ?
                  (U(this._resetButton, {
                      borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                      backgroundColor: a.toolbar.itemBackgroundColor,
                      color: a.toolbar.fontColor
                  }), this._resetButton.title = this._cultureInfo.resetText) : (d = !1, ta(this._resetButton = document.createElement("button")), pa(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton),
                      F(this._resetButton, "touchstart", function(a) {
                          d = !0
                      }, this.allDOMEventHandlers), F(this._resetButton, "click", function() {
                          a.toolTip.hide();
                          a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", {
                              chart: a,
                              toolTip: a.toolTip
                          }, a.toolTip);
                          a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, pa(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                          if (a.sessionVariables.axisX)
                              for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum =
                                  null, a.sessionVariables.axisX[b].newViewportMaximum = null;
                          if (a.sessionVariables.axisX2)
                              for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                          if (a.sessionVariables.axisY)
                              for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                          if (a.sessionVariables.axisY2)
                              for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum =
                                  null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
                          a.resetOverlayedCanvas();
                          0 >= navigator.userAgent.search("MSIE") && U(a._resetButton.childNodes[0], {
                              WebkitFilter: "invert(0%)",
                              filter: "invert(0%)"
                          });
                          ta(a._zoomButton, a._resetButton);
                          a.stockChart && (a.stockChart._rangeEventParameter = {
                              stockChart: a.stockChart,
                              source: "chart",
                              index: a.stockChart.charts.indexOf(a),
                              minimum: null,
                              maximum: null
                          });
                          a._dispatchRangeEvent("rangeChanging", "reset");
                          a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging",
                              a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                          a.render();
                          a.syncCharts && a.syncCharts(null, null);
                          a._dispatchRangeEvent("rangeChanged", "reset");
                          a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart))
                      }, this.allDOMEventHandlers), F(this._resetButton, "mousemove", function() {
                          d || (U(a._resetButton, {
                              backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                              color: a.toolbar.fontColorOnHover,
                              transition: "0.4s",
                              WebkitTransition: "0.4s"
                          }), 0 >= navigator.userAgent.search("MSIE") && U(a._resetButton.childNodes[0], {
                              WebkitFilter: "invert(100%)",
                              filter: "invert(100%)"
                          }))
                      }, this.allDOMEventHandlers), F(this._resetButton, "mouseout", function() {
                          d || (U(a._resetButton, {
                              backgroundColor: a.toolbar.itemBackgroundColor,
                              color: a.toolbar.fontColor,
                              transition: "0.4s",
                              WebkitTransition: "0.4s"
                          }), 0 >= navigator.userAgent.search("MSIE") && U(a._resetButton.childNodes[0], {
                              WebkitFilter: "invert(0%)",
                              filter: "invert(0%)"
                          }))
                      }, this.allDOMEventHandlers),
                      this.overlaidCanvas.style.cursor = a._defaultCursor);
              this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ja(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))
          } else this.panEnabled = this.zoomEnabled = !1;
          gb(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? pa(a, a._zoomButton, "zoom") : pa(a, a._zoomButton, "pan"),
              a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && pa(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
      };
      l.prototype._updateSize = function() {
      };
      l.prototype._initialize = function() {
          this.isNavigator = s(this.parent) || s(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ?
              !1 : !0;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new V(this);
          this.removeAllEventListeners();
          this.disableToolTip = !1;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = w && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager &&
              this._eventManager.reset();
          this.plotInfo = {
              axisPlacement: null,
              plotTypes: []
          };
          this.layoutManager = new Ca(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0,
              d = null;
          if (this.options.data) {
              for (var c = 0; c < this.options.data.length; c++)
                  if (a++, !this.options.data[c].type || 0 <= l._supportedChartTypes.indexOf(this.options.data[c].type)) {
                      var b = new L(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                      "error" === b.type && (b.linkedDataSeriesIndex = s(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                      null === b.name && (b.name = "DataSeries " + a);
                      null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]],
                          b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                      null === b.markerSize && (("line" === b.type || "stepLine" ===
                          b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                      "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                          return a.x
                      }) && b.dataPoints.sort(h) : b.dataPoints.sort(h));
                      this.data.push(b);
                      var e = b.axisPlacement,
                          d = d || e,
                          f;
                      "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ?
                          f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type +
                          '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart');
                      if (f && window.console) {
                          window.console.log(f);
                          return
                      }
                  } for (c = 0; c < this.data.length; c++) {
                  if ("none" == d && "error" === this.data[c].type && window.console) {
                      window.console.log('You cannot combine "' + b.type + '" with error chart');
                      return
                  }
                  "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex])
              }
          }
          this._objectsInitialized = !0;
          this._plotAreaElements = []
      };
      l._supportedChartTypes = Ba("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
      l.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
              if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                  if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                      if (this.options.axisY && 0 < this.options.axisY.length) {
                          if (!this.axisY.length)
                              for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new x(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" ===
                                  this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new x(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                          this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                          this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                      } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new x(this, "axisY", this.options.axisY,
                          0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new x(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
                  if ("secondary" === this.data[d].axisYType)
                      if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                          if (!this.axisY2.length)
                              for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new x(this, "axisY2", this.options.axisY2[c], c,
                                  "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new x(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                          this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                          this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                      } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] =
                          new x(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new x(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
                  if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                      if (this.options.axisX && 0 < this.options.axisX.length) {
                          if (!this.axisX.length)
                              for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] =
                                  new x(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new x(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                          this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                          this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                      } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ?
                          this._axes.push(this.axisX[0] = new x(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new x(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
                  if ("secondary" === this.data[d].axisXType)
                      if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                          if (!this.axisX2.length)
                              for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] =
                                  new x(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new x(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                          this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                          this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                      } else this.axisX2.length || ("normal" ===
                          this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new x(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new x(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d])
              } if (this.axisY) {
              for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
              for (c = 0; c < this.axisY.length - 1; c++) "undefined" ===
                  typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10)
          }
          if (this.axisY2) {
              for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
              for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10)
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
              0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
              for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
              for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
              "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = !1;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
              for (d = 0; d < this._axes.length; d++)
                  if (!s(this._axes[d].viewportMinimum) || !s(this._axes[d].viewportMaximum)) {
                      c = !0;
                      break
                  } c ? (Ja(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness +
              "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (ta(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
          ;
          this._processData();
          this.options.title && (this.title = new xa(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
              for (d = 0; d < this.options.subtitles.length; d++) c = new Ga(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new E(this, this.options.legend);
          for (d = 0; d < this.data.length; d++)(this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type ||
              "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (d = 0; d < this._axes.length; d++)
              if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
                  w ? (this._breaksCanvas = ra(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                  break
              } this._preRenderCanvas = ra(this.width, this.height);
          this._preRenderCtx =
              this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || x.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
      };
      l.prototype.renderElements = function() {
          var a = this._plotAreaElements;
          this.title && !this.title.dockInsidePlotArea && this.title.render();
          for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
          this.legend.dockInsidePlotArea ||
              this.legend.render();
          if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) x.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
          else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
          else return;
          for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
          var c = [];
          if (this.animatedRender) {
              var b = ra(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
          }
          hb(this);
          var a = this.ctx.miterLimit,
              e;
          this.ctx.miterLimit =
              3;
          w && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
          for (d = 0; d < this.plotInfo.plotTypes.length; d++)
              for (var f = this.plotInfo.plotTypes[d], m = 0; m < f.plotUnits.length; m++) {
                  var u = f.plotUnits[m],
                      C = null;
                  u.targetCanvas && wa(u.targetCanvas);
                  u.targetCanvas = null;
                  this.animatedRender && (u.targetCanvas = ra(this.width, this.height), u.targetCanvasCtx = u.targetCanvas.getContext("2d"), e = u.targetCanvasCtx.miterLimit, u.targetCanvasCtx.miterLimit = 3);
                  "line" === u.type ? C = this.renderLine(u) : "stepLine" === u.type ? C = this.renderStepLine(u) : "spline" === u.type ? C = this.renderSpline(u) : "column" === u.type ? C = this.renderColumn(u) : "bar" === u.type ? C = this.renderBar(u) : "area" === u.type ? C = this.renderArea(u) : "stepArea" === u.type ? C = this.renderStepArea(u) :
                      "splineArea" === u.type ? C = this.renderSplineArea(u) : "stackedColumn" === u.type ? C = this.renderStackedColumn(u) : "stackedColumn100" === u.type ? C = this.renderStackedColumn100(u) : "stackedBar" === u.type ? C = this.renderStackedBar(u) : "stackedBar100" === u.type ? C = this.renderStackedBar100(u) : "stackedArea" === u.type ? C = this.renderStackedArea(u) : "stackedArea100" === u.type ? C = this.renderStackedArea100(u) : "bubble" === u.type ? C = C = this.renderBubble(u) : "scatter" === u.type ? C = this.renderScatter(u) : "pie" === u.type ? this.renderPie(u) : "doughnut" ===
                      u.type ? this.renderPie(u) : "funnel" === u.type ? C = this.renderFunnel(u) : "pyramid" === u.type ? C = this.renderFunnel(u) : "candlestick" === u.type ? C = this.renderCandlestick(u) : "ohlc" === u.type ? C = this.renderCandlestick(u) : "rangeColumn" === u.type ? C = this.renderRangeColumn(u) : "error" === u.type ? C = this.renderError(u) : "rangeBar" === u.type ? C = this.renderRangeBar(u) : "rangeArea" === u.type ? C = this.renderRangeArea(u) : "rangeSplineArea" === u.type ? C = this.renderRangeSplineArea(u) : "waterfall" === u.type ? C = this.renderWaterfall(u) : "boxAndWhisker" ===
                      u.type && (C = this.renderBoxAndWhisker(u));
                  for (var k = 0; k < u.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[k]]);
                  this.animatedRender && (u.targetCanvasCtx.miterLimit = e, C && c.push(C))
              }
          this.ctx.miterLimit = a;
          this.animatedRender && this._breaksCanvasCtx && c.push({
              source: this._breaksCanvasCtx,
              dest: this.plotArea.ctx,
              animationCallback: J.fadeInAnimation,
              easingFunction: J.easing.easeInQuad,
              animationBase: 0,
              startTimePercent: 0.7
          });
          this.animatedRender && 0 < this._indexLabels.length &&
              (e = ra(this.width, this.height).getContext("2d"), c.push(this.renderIndexLabels(e)));
          var n = this;
          if (0 < c.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, function(a) {
              n.ctx.clearRect(0, 0, n.width, n.height);
              n.ctx.drawImage(b, 0, 0, Math.floor(n.width * ja), Math.floor(n.height * ja), 0, 0, n.width, n.height);
              for (var e = 0; e < c.length; e++) C = c[e], 1 > a && "undefined" !== typeof C.startTimePercent ? a >= C.startTimePercent && C.animationCallback(C.easingFunction(a - C.startTimePercent, 0, 1, 1 - C.startTimePercent), C) :
                  C.animationCallback(C.easingFunction(a, 0, 1, 1), C);
              n.dispatchEvent("dataAnimationIterationEnd", {
                  chart: n
              })
          }, function() {
              c = [];
              for (var a = 0; a < n.plotInfo.plotTypes.length; a++)
                  for (var e = n.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) {
                      var f = e.plotUnits[d];
                      f.targetCanvas && wa(f.targetCanvas);
                      f.targetCanvas = null
                  }
              b = null;
              n.disableToolTip = !1;
              n.dispatchEvent("dataAnimationEnd", {
                  chart: n
              })
          });
          else {
              if (n._breaksCanvas)
                  if (w) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
                  else
                      for (k = 0; k < n._axes.length; k++) n._axes[k].createMask();
              0 < n._indexLabels.length && n.renderIndexLabels();
              n.dispatchEvent("dataAnimationIterationEnd", {
                  chart: n
              });
              n.dispatchEvent("dataAnimationEnd", {
                  chart: n
              })
          }
          this.attachPlotAreaEventHandlers();
          this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ta(this._zoomButton, this._resetButton);
          this.toolTip._updateToolTip();
          this.renderCount++;
          Fa && (n = this, setTimeout(function() {
              var a = document.getElementById("ghostCanvasCopy");
              a && (Ka(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas,
                  0, 0))
          }, 2E3));
          this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
          for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx)
      };
      l.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && wa(this._preRenderCanvas)
      };
      l.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({
              context: this,
              chart: this,
              mousedown: this._plotAreaMouseDown,
              mouseup: this._plotAreaMouseUp,
              mousemove: this._plotAreaMouseMove,
              cursor: this.panEnabled ? "move" : "default",
              capture: !0,
              bounds: this.plotArea
          })
      };
      l.prototype.categoriseDataSeries = function() {
          for (var a = "", d = 0; d < this.data.length; d++)
              if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= l._supportedChartTypes.indexOf(a.type)) {
                  for (var c = null, b = !1, e = null, f = !1, m = 0; m < this.plotInfo.plotTypes.length; m++)
                      if (this.plotInfo.plotTypes[m].type === a.type) {
                          b = !0;
                          c = this.plotInfo.plotTypes[m];
                          break
                      } b || (c = {
                      type: a.type,
                      totalDataSeries: 0,
                      plotUnits: []
                  }, this.plotInfo.plotTypes.push(c));
                  for (m = 0; m < c.plotUnits.length; m++)
                      if (c.plotUnits[m].axisYType === a.axisYType && c.plotUnits[m].axisXType === a.axisXType && c.plotUnits[m].axisYIndex === a.axisYIndex && c.plotUnits[m].axisXIndex === a.axisXIndex) {
                          f = !0;
                          e = c.plotUnits[m];
                          break
                      } f || (e = {
                      type: a.type,
                      previousDataSeriesCount: 0,
                      index: c.plotUnits.length,
                      plotType: c,
                      axisXType: a.axisXType,
                      axisYType: a.axisYType,
                      axisYIndex: a.axisYIndex,
                      axisXIndex: a.axisXIndex,
                      axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex &&
                          a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                      axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                      dataSeriesIndexes: [],
                      yTotals: [],
                      yAbsTotals: []
                  }, c.plotUnits.push(e));
                  c.totalDataSeries++;
                  e.dataSeriesIndexes.push(d);
                  a.plotUnit = e
              } for (d = 0; d < this.plotInfo.plotTypes.length; d++)
              for (c = this.plotInfo.plotTypes[d],
                  m = a = 0; m < c.plotUnits.length; m++) c.plotUnits[m].previousDataSeriesCount = a, a += c.plotUnits[m].dataSeriesIndexes.length
      };
      l.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
              var d = this.data[a];
              if (d.dataPoints)
                  for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId
          }
      };
      l.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
              for (var d = this.plotInfo.plotTypes[a],
                      c = 0; c < d.plotUnits.length; c++) {
                  var b = d.plotUnits[c];
                  "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" ===
                      b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b)
              }
          this.calculateAutoBreaks()
      };
      l.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
              for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, m = 0; m < a.dataSeriesIndexes.length; m++) {
                  var u = this.data[a.dataSeriesIndexes[m]],
                      C = 0,
                      k = !1,
                      n = !1,
                      p;
                  if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                      g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum :
                      a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                  if (u.dataPoints[C].x && u.dataPoints[C].x.getTime || "dateTime" === u.xValueType) f = !0;
                  for (C = 0; C < u.dataPoints.length; C++) {
                      "undefined" === typeof u.dataPoints[C].x && (u.dataPoints[C].x = C + (a.axisX.logarithmic ? 1 : 0));
                      u.dataPoints[C].x.getTime ? (f = !0, b = u.dataPoints[C].x.getTime()) : b = u.dataPoints[C].x;
                      e = u.dataPoints[C].y;
                      b < c.min && (c.min = b);
                      b > c.max && (c.max = b);
                      e < d.min && "number" === typeof e && (d.min = e);
                      e > d.max && "number" === typeof e && (d.max = e);
                      if (0 <
                          C) {
                          if (a.axisX.logarithmic) {
                              var r = b / u.dataPoints[C - 1].x;
                              1 > r && (r = 1 / r);
                              c.minDiff > r && 1 !== r && (c.minDiff = r)
                          } else r = b - u.dataPoints[C - 1].x, 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r);
                          null !== e && null !== u.dataPoints[C - 1].y && (a.axisY.logarithmic ? (r = e / u.dataPoints[C - 1].y, 1 > r && (r = 1 / r), d.minDiff > r && 1 !== r && (d.minDiff = r)) : (r = e - u.dataPoints[C - 1].y, 0 > r && (r *= -1), d.minDiff > r && 0 !== r && (d.minDiff = r)))
                      }
                      if (b < q && !k) null !== e && (p = b);
                      else {
                          if (!k && (k = !0, 0 < C)) {
                              C -= 2;
                              continue
                          }
                          if (b > g && !n) n = !0;
                          else if (b > g && n) continue;
                          u.dataPoints[C].label &&
                              (a.axisX.labels[b] = u.dataPoints[C].label);
                          b < c.viewPortMin && (c.viewPortMin = b);
                          b > c.viewPortMax && (c.viewPortMax = b);
                          null === e ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e))
                      }
                  }
                  u.axisX.valueType = u.xValueType = f ? "dateTime" : "number"
              }
      };
 
      l.prototype.calculateAutoBreaks = function() {
      }; 
 
      l.prototype.getAutoFontSize = lb;
      l.prototype.resetOverlayedCanvas =
          function() {
              this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
          };
      l.prototype.clearCanvas = kb;
      l.prototype.attachEvent = function(a) {
          this._events.push(a)
      };
      l.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !w && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
              var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
              if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                  var c = this.axisY[0];
                  a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
                  a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
                  a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
                  a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2;
                  a.width = a.x2 - a.x1;
                  a.height = a.y2 - a.y1
              }
              this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ?
                  d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
          } else d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
          w || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Ca(a.x1, a.y1, a.x2, a.y2, 2)
      };
      l.prototype.renderLine = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx,
              c = w ? this._preRenderCtx :
              d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
              var b = this._eventManager.ghostCtx;
              c.save();
              var e = this.plotArea;
              c.beginPath();
              c.rect(e.x1, e.y1, e.width, e.height);
              c.clip();
              for (var f = [], m, u = 0; u < a.dataSeriesIndexes.length; u++) {
                  var C = a.dataSeriesIndexes[u],
                      k = this.data[C];
                  c.lineWidth = k.lineThickness;
                  var n = k.dataPoints,
                      p = "solid";
                  if (c.setLineDash) {
                      var q = O(k.nullDataLineDashType, k.lineThickness),
                          p = k.lineDashType,
                          g = O(p, k.lineThickness);
                      c.setLineDash(g)
                  }
                  var r = k.id;
                  this._eventManager.objectMap[r] = {
                      objectType: "dataSeries",
                      dataSeriesIndex: C
                  };
                  // r = Q(r);

                  b.strokeStyle = r;
                  b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                  var r = k._colorSet,
                      h = r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0];
                  c.strokeStyle = r;
                  var l = !0,
                      t = 0,
                      s, z;
                  c.beginPath();
                  if (0 < n.length) {
                      for (var A = !1, t = 0; t < n.length; t++)
                          if (s = n[t].x.getTime ? n[t].x.getTime() : n[t].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !A)))
                              if ("number" !== typeof n[t].y) 0 < t && !(k.connectNullData || A || l) && (c.stroke(), w && b.stroke()), A = !0;
                              else {
                                  s = a.axisX.convertValueToPixel(s);
                                  z = a.axisY.convertValueToPixel(n[t].y);
                                  var v = k.dataPointIds[t];
                                  this._eventManager.objectMap[v] = {
                                      id: v,
                                      objectType: "dataPoint",
                                      dataSeriesIndex: C,
                                      dataPointIndex: t,
                                      x1: s,
                                      y1: z
                                  };
                                  l || A ? (!l && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(m.x, m.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(s, z), w && b.lineTo(s, z)) : (c.beginPath(), c.moveTo(s, z), w && (b.beginPath(),
                                      b.moveTo(s, z))), A = l = !1) : (c.lineTo(s, z), w && b.lineTo(s, z), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(s, z), w && (b.stroke(), b.beginPath(), b.moveTo(s, z))));
                                  m = {
                                      x: s,
                                      y: z
                                  };
                                  t < n.length - 1 && (h !== (n[t].lineColor || r) || p !== (n[t].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(s, z), h = n[t].lineColor || r, c.strokeStyle = h, c.setLineDash && (n[t].lineDashType ? (p = n[t].lineDashType, c.setLineDash(O(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g))));
                                  if (0 !== n[t].markerSize && (0 < n[t].markerSize || 0 < k.markerSize)) {
                                      var D =
                                          k.getMarkerProperties(t, s, z, c);
                                      f.push(D);
                                      // v = Q(v);
                                      w && f.push({
                                          x: s,
                                          y: z,
                                          ctx: b,
                                          type: D.type,
                                          size: D.size,
                                          // color: v,
                                          // borderColor: v,
                                          borderThickness: D.borderThickness
                                      })
                                  }(n[t].indexLabel || k.indexLabel || n[t].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                      chartType: "line",
                                      dataPoint: n[t],
                                      dataSeries: k,
                                      point: {
                                          x: s,
                                          y: z
                                      },
                                      direction: 0 > n[t].y === a.axisY.reversed ? 1 : -1,
                                      color: r
                                  })
                              } c.stroke();
                      w && b.stroke()
                  }
              }
              $.drawMarkers(f);
              w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation =
                  "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
              c.restore();
              c.beginPath();
              return {
                  source: d,
                  dest: this.plotArea.ctx,
                  animationCallback: J.xClipAnimation,
                  easingFunction: J.easing.linear,
                  animationBase: 0
              }
          }
      };
      l.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                  window.setTimeout(a, 1E3 / 60)
              }
      }(); 
      ma(E, T);
      E.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea :
              this.chart,
              d = a.layoutManager.getFreeSpace(),
              c = null,
              b = 0,
              e = 0,
              f = 0,
              m = 0,
              h = this.markerMargin = this.chart.options.legend && !s(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var l = [],
              k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign) this.orientation = "horizontal", c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, m = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height;
          else if ("center" === this.verticalAlign) {
              this.orientation =
                  "vertical";
              if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) c = this.horizontalAlign;
              f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
              m = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height
          }
          this.errorMarkerColor = [];
          for (var n = 0; n < this.dataSeries.length; n++) {
              var p = this.dataSeries[n];
              if (p.dataPoints && p.dataPoints.length)
                  if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                      var q = p.legendMarkerType = p.legendMarkerType ?
                          p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : L.getDefaultLegendMarker(p._linkedSeries.type) : L.getDefaultLegendMarker(p.type) : p.markerType,
                          g = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                              chart: this.chart,
                              legend: this.options,
                              dataSeries: p,
                              dataPoint: null
                          }) : p.name,
                          r = p.legendMarkerColor = p.legendMarkerColor ?
                          p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? s(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0],
                          v = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0,
                          w = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor,
                          t = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * v)) : 0;
                      "error" === p.type && this.errorMarkerColor.push(r);
                      g = this.chart.replaceKeywordsWithValue(g,
                          p.dataPoints[0], p, n);
                      q = {
                          markerType: q,
                          markerColor: r,
                          text: g,
                          textBlock: null,
                          chartType: p.type,
                          markerSize: v,
                          lineColor: p._colorSet[0],
                          dataSeriesIndex: p.index,
                          dataPointIndex: null,
                          markerBorderColor: w,
                          markerBorderThickness: t
                      };
                      l.push(q)
                  } else
                      for (var x = 0; x < p.dataPoints.length; x++) {
                          var z = p.dataPoints[x],
                              q = z.legendMarkerType ? z.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : L.getDefaultLegendMarker(p.type),
                              g = z.legendText ? z.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                  chart: this.chart,
                                  legend: this.options,
                                  dataSeries: p,
                                  dataPoint: z
                              }) : z.name ? z.name : "DataPoint: " + (x + 1),
                              r = z.legendMarkerColor ? z.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : z.color ? z.color : p.color ? p.color : p._colorSet[x % p._colorSet.length],
                              v = 0.75 * this.lineHeight,
                              w = z.legendMarkerBorderColor ? z.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : z.markerBorderColor ? z.markerBorderColor : p.markerBorderColor,
                              t = z.legendMarkerBorderThickness ? z.legendMarkerBorderThickness : p.legendMarkerBorderThickness ?
                              p.legendMarkerBorderThickness : z.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * v)) : 0,
                              g = this.chart.replaceKeywordsWithValue(g, z, p, x),
                              q = {
                                  markerType: q,
                                  markerColor: r,
                                  text: g,
                                  textBlock: null,
                                  chartType: p.type,
                                  markerSize: v,
                                  dataSeriesIndex: n,
                                  dataPointIndex: x,
                                  markerBorderColor: w,
                                  markerBorderThickness: t
                              };
                          (z.showInLegend || p.showInLegend && !1 !== z.showInLegend) && l.push(q)
                      }
          }!0 === this.reversed && l.reverse();
          if (0 < l.length) {
              p = null;
              r = g = z = x = 0;
              z = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth,
                  this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f;
              v = 0 === v ? 0.75 * this.lineHeight : v;
              z -= v + h;
              for (n = 0; n < l.length; n++) {
                  q = l[n];
                  w = z;
                  if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) w -= 2 * 0.1 * this.lineHeight;
                  if (!(0 >= m || "undefined" === typeof m || 0 >= w || "undefined" === typeof w)) {
                      if ("horizontal" === this.orientation) {
                          q.textBlock = new ia(this.ctx, {
                              x: 0,
                              y: 0,
                              maxWidth: w,
                              maxHeight: this.itemWrap ? m : this.lineHeight,
                              angle: 0,
                              text: q.text,
                              horizontalAlign: "left",
                              fontSize: this.fontSize,
                              fontFamily: this.fontFamily,
                              fontWeight: this.fontWeight,
                              fontColor: this.fontColor,
                              fontStyle: this.fontStyle,
                              textBaseline: "middle"
                          });
                          q.textBlock.measureText();
                          null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                          if (!p || p.width + Math.round(q.textBlock.width + v + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" ===
                                  q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) p = {
                              items: [],
                              width: 0
                          }, k.push(p), this.height += g, g = 0;
                          g = Math.max(g, q.textBlock.height)
                      } else q.textBlock = new ia(this.ctx, {
                          x: 0,
                          y: 0,
                          maxWidth: z,
                          maxHeight: !0 === this.itemWrap ? m : 1.5 * this.fontSize,
                          angle: 0,
                          text: q.text,
                          horizontalAlign: "left",
                          fontSize: this.fontSize,
                          fontFamily: this.fontFamily,
                          fontWeight: this.fontWeight,
                          fontColor: this.fontColor,
                          fontStyle: this.fontStyle,
                          textBaseline: "middle"
                      }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width =
                          this.itemWidth - (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < m - this.lineHeight ? (p = {
                          items: [],
                          width: 0
                      }, k.push(p)) : (p = k[x], x = (x + 1) % k.length), this.height += q.textBlock.height;
                      q.textBlock.x = p.width;
                      q.textBlock.y = 0;
                      p.width += Math.round(q.textBlock.width + v + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                      p.items.push(q);
                      this.width = Math.max(p.width,
                          this.width);
                      r = q.textBlock.width + (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                  }
              }
              this.itemWidth = r;
              this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + g;
              this.height = Math.min(m, this.height);
              this.width = Math.min(f, this.width)
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ?
              d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
          this.items = l;
          for (n = 0; n < this.items.length; n++) q = l[n], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = {
              id: q.id,
              objectType: "legendItem",
              legendItemIndex: n,
              dataSeriesIndex: q.dataSeriesIndex,
              dataPointIndex: q.dataPointIndex
          };
          this.markerSize = v;
          this.rows = k;
          0 < l.length && a.layoutManager.registerSpace(c, {
              width: this.width + 2 + 2,
              height: this.height + 5 + 5
          });
          this.bounds = {
              x1: e,
              y1: b,
              x2: e + this.width,
              y2: b + this.height
          }
      };
      E.prototype.render = function() {
          var a = this.bounds.x1,
              d = this.bounds.y1,
              c = this.markerMargin,
              b = this.maxWidth,
              e = this.maxHeight,
              f = this.markerSize,
              m = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor,
              this.borderColor);
          for (var h = 0, l = 0; l < m.length; l++) {
              for (var k = m[l], n = 0, p = 0; p < k.items.length; p++) {
                  var q = k.items[p],
                      g = q.textBlock.x + a + (0 === p ? 0.2 * f : this.horizontalSpacing),
                      r = d + h,
                      s = g;
                  this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
                  this.ctx.clip();
                  if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight /
                      8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, r + this.lineHeight / 2), this.ctx.lineTo(g + 0.85 * this.lineHeight, r + this.lineHeight / 2), this.ctx.stroke(), s -= 0.1 * this.lineHeight;
                  if ("error" === q.chartType) {
                      this.ctx.strokeStyle = this.errorMarkerColor[0];
                      this.ctx.lineWidth = f / 8;
                      this.ctx.beginPath();
                      var v = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                          t = r + 0.15 * this.lineHeight,
                          w = 0.7 * this.lineHeight,
                          z = w + 0.02 * this.lineHeight;
                      this.ctx.moveTo(v, t);
                      this.ctx.lineTo(v + w, t);
                      this.ctx.stroke();
                      this.ctx.beginPath();
                      this.ctx.moveTo(v + w / 2, t);
                      this.ctx.lineTo(v + w / 2, t + z);
                      this.ctx.stroke();
                      this.ctx.beginPath();
                      this.ctx.moveTo(v, t + z);
                      this.ctx.lineTo(v + w, t + z);
                      this.ctx.stroke();
                      this.errorMarkerColor.shift()
                  }
                  $.drawMarker(g + f / 2, r + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
                  q.textBlock.x = g + c + f;
                  if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x +=
                      0.1 * this.lineHeight;
                  q.textBlock.y = Math.round(r + this.lineHeight / 2);
                  q.textBlock.render(!0);
                  this.ctx.restore();
                  n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height;
                  this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                  g = Q(q.id);
                  this.ghostCtx.fillStyle = g;
                  this.ghostCtx.beginPath();
                  this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height);
                  q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s;
                  q.y1 = this.chart._eventManager.objectMap[q.id].y1 =
                      q.textBlock.y - this.lineHeight / 2;
                  q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                  q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
              }
              h += n
          }
      };
      ma(L, T);
      L.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" ===
              a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null
      }; 
      L.prototype.getMarkerProperties = function(a, d, c, b) {
          var e = this.dataPoints,
              f = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
              m = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
              h = s(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness,
              l = e[a].markerType ? e[a].markerType : this.markerType;
          a = s(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return {
              x: d,
              y: c,
              ctx: b,
              type: l,
              size: a,
              color: f,
              borderColor: m,
              borderThickness: h
          }
      };
      ma(x, T); 
      x.prototype.createLabels = function() {
          var a, d, c = 0,
              b = 0,
              e, f = 0,
              m = 0,
              b = 0,
              b = this.interval,
              h = 0,
              l, k = 0.6 * this.chart.height,
              n;
          a = !1;
          var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
              q = p.length ? s(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
              e = this.viewportMaximum;
              if (this.labels) {
                  a = Math.ceil(b);
                  for (var b = Math.ceil(this.intervalStartPosition), g = !1, c = b; c < this.viewportMaximum; c +=
                      a)
                      if (this.labels[c]) g = !0;
                      else {
                          g = !1;
                          break
                      } g && (this.interval = a, this.intervalStartPosition = b)
              }
              if (this.logarithmic && !this.equidistantInterval)
                  for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, g = q; b < this.logLabelValues.length; b++)
                      if (c = this.logLabelValues[b], c < this.viewportMinimum) b++;
                      else {
                          for (; g < p.length && c > p[g].endValue; g++);
                          a = g < p.length && c >= p[g].startValue && c <= p[g].endValue;
                          n = c;
                          a || (a = this.labelFormatter ? this.labelFormatter({
                              chart: this.chart,
                              axis: this.options,
                              value: n,
                              label: this.labels[n] ? this.labels[n] : null
                          }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : da(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                              x: 0,
                              y: 0,
                              maxWidth: f,
                              maxHeight: m,
                              angle: this.labelAngle,
                              text: this.prefix + a + this.suffix,
                              backgroundColor: this.labelBackgroundColor,
                              borderColor: this.labelBorderColor,
                              cornerRadius: this.labelCornerRadius,
                              textAlign: this.labelTextAlign,
                              fontSize: this.labelFontSize,
                              fontFamily: this.labelFontFamily,
                              fontWeight: this.labelFontWeight,
                              fontColor: this.labelFontColor,
                              fontStyle: this.labelFontStyle,
                              textBaseline: "middle",
                              borderThickness: 0
                          }), this._labels.push({
                              position: n,
                              textBlock: a,
                              effectiveHeight: null
                          }))
                      } g = q;
              for (c = this.intervalStartPosition; c <= e; c = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
                  for (; g < p.length && c > p[g].endValue; g++);
                  a = g < p.length && c >= p[g].startValue &&
                      c <= p[g].endValue;
                  n = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.options,
                      value: n,
                      label: this.labels[n] ? this.labels[n] : null
                  }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : da(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                      x: 0,
                      y: 0,
                      maxWidth: f,
                      maxHeight: m,
                      angle: this.labelAngle,
                      text: this.prefix + a + this.suffix,
                      textAlign: this.labelTextAlign,
                      backgroundColor: this.labelBackgroundColor,
                      borderColor: this.labelBorderColor,
                      borderThickness: this.labelBorderThickness,
                      cornerRadius: this.labelCornerRadius,
                      fontSize: this.labelFontSize,
                      fontFamily: this.labelFontFamily,
                      fontWeight: this.labelFontWeight,
                      fontColor: this.labelFontColor,
                      fontStyle: this.labelFontStyle,
                      textBaseline: "middle"
                  }), this._labels.push({
                      position: n,
                      textBlock: a,
                      effectiveHeight: null
                  }))
              }
          } else
              for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Va(new Date(this.viewportMaximum), this.interval, this.intervalType), g = q, c = this.intervalStartPosition; c <
                  e; Va(c, b, this.intervalType)) {
                  for (a = c.getTime(); g < p.length && a > p[g].endValue; g++);
                  n = a;
                  a = g < p.length && a >= p[g].startValue && a <= p[g].endValue;
                  a || (a = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.options,
                      value: new Date(n),
                      label: this.labels[n] ? this.labels[n] : null
                  }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : za(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                      x: 0,
                      y: 0,
                      maxWidth: f,
                      backgroundColor: this.labelBackgroundColor,
                      borderColor: this.labelBorderColor,
                      borderThickness: this.labelBorderThickness,
                      cornerRadius: this.labelCornerRadius,
                      maxHeight: m,
                      angle: this.labelAngle,
                      text: this.prefix + a + this.suffix,
                      textAlign: this.labelTextAlign,
                      fontSize: this.labelFontSize,
                      fontFamily: this.labelFontFamily,
                      fontWeight: this.labelFontWeight,
                      fontColor: this.labelFontColor,
                      fontStyle: this.labelFontStyle,
                      textBaseline: "middle"
                  }), this._labels.push({
                      position: n,
                      textBlock: a,
                      effectiveHeight: null,
                      breaksLabelType: void 0
                  }))
              }
          if ("bottom" === this._position || "top" === this._position) h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ?
              this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled ||
              (m = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position) h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ?
              Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), m = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
              a = this._labels[b].textBlock;
              a.maxWidth = f;
              a.maxHeight = m;
              var r = a.measureText();
              l = r.height
          }
          e = [];
          q = p = 0;
          if (this.labelAutoFit ||
              this.options.labelAutoFit)
              if (s(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                  if (f = 0.9 * h >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                      this.sessionVariables.labelFontSize = this.labelFontSize;
                      this.sessionVariables.labelMaxWidth = f;
                      this.sessionVariables.labelMaxHeight = m;
                      this.sessionVariables.labelAngle =
                          this.labelAngle;
                      this.sessionVariables.labelWrap = this.labelWrap;
                      for (c = 0; c < this._labels.length; c++)
                          if (!this._labels[c].breaksLabelType) {
                              a = this._labels[c].textBlock;
                              for (var v, g = a.text.split(" "), b = 0; b < g.length; b++) n = g[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n), n.width > q && (v = c, q = n.width)
                          } c = 0;
                      for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                          if (!this._labels[c].breaksLabelType) {
                              a = this._labels[c].textBlock;
                              r = a.measureText();
                              for (g = c + 1; g < this._labels.length; g++)
                                  if (!this._labels[g].breaksLabelType) {
                                      d = this._labels[g].textBlock;
                                      d = d.measureText();
                                      break
                                  } e.push(a.height);
                              this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                              Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                              Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                              b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (m - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                              if (s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                  if (this.sessionVariables.labelMaxHeight =
                                      0 === this.labelAngle ? m : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = (k - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !s(this.options.labelWrap)) this.labelWrap ? s(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), this.sessionVariables.labelWrap = this.labelWrap, d && r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap =
                                      this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : s(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelMaxWidth = f, d && r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth >
                                      f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelWrap = this.labelWrap);
                                  else {
                                      if (s(this.options.labelWrap))
                                          if (!s(this.options.labelMaxWidth)) this.options.labelMaxWidth < f ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight =
                                              m);
                                          else if (!s(d))
                                          if (b = r.width + d.width >> 0, g = this.labelFontSize, q < f) b - 2 * f > p && (p = b - 2 * f, b >= 2 * f && b < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * f && b < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = g) : b >= 2.8 *
                                              f && b < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, q), this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * f && b < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize =
                                                  this.labelFontSize) : b > 3.6 * f && b < 5 * f ? (s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : b > 5 * f && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = g, this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelAngle =
                                                  this.labelAngle));
                                          else if (v === c && (0 === v && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > p || v === this._labels.length - 1 && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > p || 0 < v && v < this._labels.length - 1 && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > p && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > p)) p = 0 === v ? q + this._labels[v + 1].textBlock.measureText().width - 2 * f : q + this._labels[v - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ?
                                          g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                                      else if (0 === p)
                                          for (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), r = a.measureText(), b < this._labels.length - 1 && (g = b + 1, d = this._labels[g].textBlock, d.maxWidth =
                                              this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), d = d.measureText(), r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                  }
                              else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? m : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = 0 != this.labelAngle ? (k - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) :
                                  f, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, s(this.options.labelWrap)) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = m) : (this.sessionVariables.labelAngle = this.labelAngle,
                                  this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = b < 0.9 * h ? 0.9 * h : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n) : (s(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight =
                                  m)
                          } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                  } else
                      for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ?
                          this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle,
                          a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = m : this.sessionVariables.labelMaxHeight, a.measureText();
          else if ("left" === this._position || "right" === this._position)
              if (f = s(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, m = "undefined" === typeof this.options.labelWrap ||
                  this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                  this.sessionVariables.labelFontSize = this.labelFontSize;
                  this.sessionVariables.labelMaxWidth = f;
                  this.sessionVariables.labelMaxHeight = m;
                  this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                  this.sessionVariables.labelWrap = this.labelWrap;
                  for (c = 0; c < this._labels.length; c++)
                      if (!this._labels[c].breaksLabelType) {
                          a = this._labels[c].textBlock;
                          r = a.measureText();
                          for (g = c + 1; g < this._labels.length; g++)
                              if (!this._labels[g].breaksLabelType) {
                                  d = this._labels[g].textBlock;
                                  d = d.measureText();
                                  break
                              } e.push(a.height);
                          this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                          b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (m - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                          Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                          Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                          s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ?
                              s(this.options.labelWrap) ? s(this.options.labelWrap) && (s(this.options.labelMaxWidth) ? s(d) || (h = r.height + d.height >> 0, h - 2 * m > q && (q = h - 2 * m, h >= 2 * m && h < 2.4 * m ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : h >= 2.4 * m && h < 2.8 * m ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize =
                                          this.labelFontSize, this.sessionVariables.labelWrap = !0) : h >= 2.8 * m && h < 3.2 * m ? (this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h >= 3.2 * m &&
                                      h < 3.6 * m ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : h > 3.6 * m && h < 10 * m ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelAngle =
                                          s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h > 10 * m && h < 50 * m && (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) :
                                  (this.sessionVariables.labelMaxHeight = m, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = m) : (this.sessionVariables.labelAngle = this.labelAngle,
                                  this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((b - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), m), s(this.options.labelWrap)) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth =
                                  this.options.labelMaxWidth ? this.options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? m : b, s(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? m : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = f) : (this.sessionVariables.labelMaxHeight = m, s(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                  this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                      } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
              } else
                  for (c = 0; c < this._labels.length; c++) a =
                      this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ?
                      this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = m : this.sessionVariables.labelMaxHeight, a.measureText();
          for (c = 0; c < this.stripLines.length; c++) {
              var f = this.stripLines[c],
                  x;
              if ("outside" ===
                  f.labelPlacement) {
                  m = this.sessionVariables.labelMaxWidth;
                  if ("bottom" === this._position || "top" === this._position) s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = f.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                  if ("left" === this._position || "right" === this._position) s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight :
                      this.sessionVariables.stripLineLabelMaxHeight = x = f.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                  s(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE")
              } else m = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = s(f.options.labelWrap) || f.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, s(f.labelBackgroundColor) && (s(f.startValue) && 0 !== f.startValue ? f.labelBackgroundColor =
                  w ? "transparent" : null : f.labelBackgroundColor = "#EEEEEE");
              a = new ia(this.ctx, {
                  x: 0,
                  y: 0,
                  backgroundColor: f.labelBackgroundColor,
                  borderColor: f.labelBorderColor,
                  borderThickness: f.labelBorderThickness,
                  cornerRadius: f.labelCornerRadius,
                  maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : m,
                  maxHeight: x,
                  angle: this.labelAngle,
                  text: f.labelFormatter ? f.labelFormatter({
                      chart: this.chart,
                      axis: this,
                      stripLine: f
                  }) : f.label,
                  textAlign: this.labelTextAlign,
                  fontSize: "outside" === f.labelPlacement ? f.options.labelFontSize ? f.labelFontSize :
                      this.labelFontSize : f.labelFontSize,
                  fontFamily: "outside" === f.labelPlacement ? f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                  fontWeight: "outside" === f.labelPlacement ? f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight : f.labelFontWeight,
                  fontColor: f.labelFontColor || f.color,
                  fontStyle: "outside" === f.labelPlacement ? f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight : f.labelFontStyle,
                  textBaseline: "middle"
              });
              this._stripLineLabels.push({
                  position: f.value,
                  textBlock: a,
                  effectiveHeight: null,
                  stripLine: f
              })
          }
      };
      x.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0,
              d = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
              this.createLabels();
              if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                  for (d = 0; d < this._labels.length; d++) {
                      var b = this._labels[d].textBlock,
                          e = b.measureText(),
                          f = 0,
                          f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) +
                          (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                      a < f && (a = f);
                      this._labels[d].effectiveWidth = f
                  }
              for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, e = b.measureText(), f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height -
                  b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[d].effectiveWidth = f)
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
      };
      x.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var d, c = 0,
              b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
              this.createLabels();
              if ("inside" != this.labelPlacement || "inside" === this.labelPlacement &&
                  0 < this._index)
                  for (c = 0; c < this._labels.length; c++) {
                      d = this._labels[c].textBlock;
                      var e = d.measureText(),
                          f = 0,
                          f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                      a < f && (a = f);
                      this._labels[c].effectiveHeight = f
                  }
              for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <=
                  this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, e = d.measureText(), f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[c].effectiveHeight = f)
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
      };
      x.setLayout = function(a, d, c, b, e, f) {
          var m, h, l, k, n = a[0] ? a[0].chart : d[0].chart,
              p = n.isNavigator ?
              0 : 10,
              q = n._axes;
          if (a && 0 < a.length)
              for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
          if (d && 0 < d.length)
              for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
          if (c && 0 < c.length)
              for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
          if (b && 0 < b.length)
              for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
          for (g = 0; g < q.length; g++)
              if (q[g] && q[g].scaleBreaks && q[g].scaleBreaks._appliedBreaks.length)
                  for (var r = q[g].scaleBreaks._appliedBreaks, v = 0; v < r.length && !(r[v].startValue > q[g].viewportMaximum); v++) r[v].endValue <
                      q[g].viewportMinimum || (s(q[g].scaleBreaks.firstBreakIndex) && (q[g].scaleBreaks.firstBreakIndex = v), r[v].startValue >= q[g].viewPortMinimum && (q[g].scaleBreaks.lastBreakIndex = v));
          for (var w = v = 0, t = 0, x = 0, z = 0, A = 0, y = 0, D, E, F = h = 0, I, J, L, r = I = J = L = !1, g = 0; g < q.length; g++) q[g] && q[g].title && (q[g]._titleTextBlock = new ia(q[g].ctx, {
              text: q[g].title,
              horizontalAlign: "center",
              fontSize: q[g].titleFontSize,
              fontFamily: q[g].titleFontFamily,
              fontWeight: q[g].titleFontWeight,
              fontColor: q[g].titleFontColor,
              fontStyle: q[g].titleFontStyle,
              borderColor: q[g].titleBorderColor,
              borderThickness: q[g].titleBorderThickness,
              backgroundColor: q[g].titleBackgroundColor,
              cornerRadius: q[g].titleCornerRadius,
              textBaseline: "top"
          }));
          for (g = 0; g < q.length; g++)
              if (q[g].title) switch (q[g]._position) {
                  case "left":
                      q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                      q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                      q[g]._titleTextBlock.angle = -90;
                      break;
                  case "right":
                      q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                      q[g]._titleTextBlock.maxHeight =
                          q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                      q[g]._titleTextBlock.angle = 90;
                      break;
                  default:
                      q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.width, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.height : 1.5 * q[g].titleFontSize, q[g]._titleTextBlock.angle = 0
              }
          if ("normal" === e) {
              for (var x = [], z = [], A = [], y = [], N = [], O = [], M = [], Q = []; 4 > v;) {
                  var G = 0,
                      X = 0,
                      S = 0,
                      U = 0,
                      V = e = 0,
                      K = 0,
                      Z = 0,
                      T = 0,
                      W = 0,
                      P = 0,
                      $ = 0;
                  if (c && 0 < c.length)
                      for (A = [], g = P = 0; g < c.length; g++) A.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), P += A[g],
                          K += c[g] && !n.isNavigator ? c[g].margin : 0;
                  else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                  M.push(A);
                  if (b && 0 < b.length)
                      for (y = [], g = $ = 0; g < b.length; g++) y.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), $ += y[g], Z += b[g] ? b[g].margin : 0;
                  else y.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                  Q.push(y);
                  m = Math.round(f.x1 + P + K);
                  l = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z);
                  if (a && 0 < a.length)
                      for (x = [], g = T = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width =
                          Math.abs(l - m), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), x.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), T += x[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                  else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                  N.push(x);
                  if (d && 0 < d.length)
                      for (z = [], g = W = 0; g < d.length; g++) d[g] && (d[g].lineCoordinates = {}), d[g].lineCoordinates.width = Math.abs(l - m), d[g].title && (d[g]._titleTextBlock.maxWidth =
                          0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width), z.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)), W += z[g], V += d[g] && !n.isNavigator ? d[g].margin : 0;
                  else z.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                  O.push(z);
                  if (a && 0 < a.length)
                      for (g = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = m, l = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), a[g]._labels && 1 < a[g]._labels.length && (h = k = 0, k = a[g]._labels[1], h = "dateTime" ===
                          a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1], w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), t = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), !a[g] || (!a[g].labelAutoFit || s(D) || s(E) || n.isNavigator || n.stockChart) || (h = 0, 0 < a[g].labelAngle ?
                          E + t > l && (h += 0 < a[g].labelAngle ? E + t - l - $ : 0) : 0 > a[g].labelAngle ? D - w < m && D - w < a[g].viewportMinimum && (F = m - (K + a[g].tickLength + A + D - w + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (E + t > l && (h = E + t / 2 - l - $), D - w < m && D - w < a[g].viewportMinimum && (F = m - K - a[g].tickLength - A - D + w / 2)), a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < h ? l -= h : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < F ? m += F : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum ===
                          a[g].minimum && 0 === a[g].labelAngle && (0 < F && (m += F), 0 < h && (l -= h))), n.panEnabled ? T = s(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = T : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = T, h = Math.round(f.y2 - T - e + G), k = Math.round(f.y2), a[g].lineCoordinates.x2 = l, a[g].lineCoordinates.width = l - m, a[g].lineCoordinates.y1 = h, a[g].lineCoordinates.y2 = h + a[g].lineThickness / 2, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[g].lineCoordinates.y1 + x[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height :
                          0) - ("inside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = {
                          x1: m,
                          y1: h,
                          x2: l,
                          y2: k - (T + e - x[g] - G),
                          width: l - m
                      }, a[g].bounds.height = a[g].bounds.y2 - a[g].bounds.y1), G += x[g] + a[g].margin;
                  if (d && 0 < d.length)
                      for (g = 0; g < d.length; g++) d[g].lineCoordinates.x1 = Math.round(f.x1 + P + K), d[g].lineCoordinates.x2 = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), d[g].lineCoordinates.width = Math.abs(l - m), d[g]._labels && 1 < d[g]._labels.length && (k = d[g]._labels[1],
                              h = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length - 2] : d[g]._labels[d[g]._labels.length - 1], w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), t = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), n.panEnabled ? W = s(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height =
                          W : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = W, h = Math.round(f.y1), k = d[g].lineCoordinates.y1 = h + W + V - X, d[g].lineCoordinates.y2 = h, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[g - 1].bounds.y1 - z[g] + (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0)), d[g].bounds = {
                              x1: m,
                              y1: h + (W + V - z[g] - X),
                              x2: l,
                              y2: k,
                              width: l - m
                          }, d[g].bounds.height = d[g].bounds.y2 - d[g].bounds.y1, X += z[g] + d[g].margin;
                  if (c && 0 < c.length)
                      for (g = 0; g < c.length; g++) K = n.isNavigator ? 0 : 10, c[g] && (m = Math.round(a[0] ? a[0].lineCoordinates.x1 :
                          d[0].lineCoordinates.x1), K = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : p, h = Math.round(f.y1 + W + V < Math.max(K, p) ? Math.max(K, p) : f.y1 + W + V), l = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), K = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : p, k = Math.round(f.y2 - T - e - K), c[g].lineCoordinates = {
                          x1: m - S,
                          y1: h,
                          x2: l - S,
                          y2: k,
                          height: Math.abs(k - h)
                      }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[g].lineCoordinates.x1 -
                          (A[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0)) + ("outside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = {
                          x1: m - (A[g] + S),
                          y1: h,
                          x2: l - S,
                          y2: k,
                          height: k - h
                      }, c[g].bounds.width = c[g].bounds.x2 - c[g].bounds.x1, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), S += A[g] + c[g].margin);
                  if (b && 0 < b.length)
                      for (g = 0; g < b.length; g++) b[g] &&
                          (m = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), l = Math.round(m), K = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, h = Math.round(f.y1 + W + V < Math.max(K, p) ? Math.max(K, p) : f.y1 + W + V), K = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, k = Math.round(f.y2 - (T + e + K)), b[g].lineCoordinates = {
                              x1: m + U,
                              y1: h,
                              x2: m + U,
                              y2: k,
                              height: Math.abs(k - h)
                          }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[g].lineCoordinates.x1 +
                              (y[g] - (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)) - ("outside" === b[g].tickPlacement ? b[g].tickLength : 0) - 2, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = {
                              x1: m + U,
                              y1: h,
                              x2: l + (y[g] + U),
                              y2: k,
                              height: k - h
                          }, b[g].bounds.width = b[g].bounds.x2 - b[g].bounds.x1, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height), U += y[g] + b[g].margin);
                  if (a && 0 < a.length)
                      for (g = 0; g < a.length; g++) a[g] &&
                          (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (D = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, m = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position, m = a[g].getApparentDifference(a[g].viewportMinimum, m), E = a[g].logarithmic ?
                              (1 < m ? Math.log(m) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < m ? m * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
                  if (d && 0 < d.length)
                      for (g = 0; g < d.length; g++) d[g].calculateValueToPixelConversionParameters(), d[g].calculateBreaksSizeInValues(), d[g]._labels && 1 < d[g]._labels.length && (D = (d[g].logarithmic ? Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position -
                          d[g].viewportMinimum) * Math.abs(d[g].conversionParameters.pixelPerUnit) + d[g].lineCoordinates.x1, m = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position, m = d[g].getApparentDifference(d[g].viewportMinimum, m), E = d[g].logarithmic ? (1 < m ? Math.log(m) / d[g].conversionParameters.lnLogarithmBase * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1 : (0 < m ? m * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1);
                  for (g = 0; g < q.length; g++) "axisY" === q[g].type &&
                      (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                  if (0 < v) {
                      if (a && 0 < a.length)
                          for (g = 0; g < a.length; g++) r = N[v - 1][g] === N[v][g] ? !0 : !1;
                      else r = !0;
                      if (d && 0 < d.length)
                          for (g = 0; g < d.length; g++) I = O[v - 1][g] === O[v][g] ? !0 : !1;
                      else I = !0;
                      if (c && 0 < c.length)
                          for (g = 0; g < c.length; g++) J = M[v - 1][g] === M[v][g] ? !0 : !1;
                      else J = !0;
                      if (b && 0 < b.length)
                          for (g = 0; g < b.length; g++) L = Q[v - 1][g] === Q[v][g] ? !0 : !1;
                      else L = !0
                  }
                  if (r && I && J && L) break;
                  v++
              }
              if (a && 0 < a.length)
                  for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(),
                      a[g].calculateBreaksInPixels();
              if (d && 0 < d.length)
                  for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels();
              if (c && 0 < c.length)
                  for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
              if (b && 0 < b.length)
                  for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels()
          } else {
              p = [];
              D = [];
              F = [];
              w = [];
              E = [];
              t = [];
              N = [];
              for (O = []; 4 > v;) {
                  T = U = S = Z = K = V = e = Q = M = G = W = 0;
                  if (a && 0 < a.length)
                      for (F = [], g = U = 0; g < a.length; g++) F.push(Math.ceil(a[g] ?
                          a[g].createLabelsAndCalculateWidth() : 0)), U += F[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                  else F.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                  N.push(F);
                  if (d && 0 < d.length)
                      for (w = [], g = T = 0; g < d.length; g++) w.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), T += w[g], V += d[g] ? d[g].margin : 0;
                  else w.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                  O.push(w);
                  if (c && 0 < c.length)
                      for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, m = Math.round(f.x1 + U + e), l = Math.round(f.x2 - T - V > n.width - 10 ?
                          n.width - 10 : f.x2 - T - V), c[g].labelAutoFit && !s(x) && (0 < !a.length && (m = 0 > c[g].labelAngle ? Math.max(m, x) : 0 === c[g].labelAngle ? Math.max(m, x / 2) : m), 0 < !d.length && (l = 0 < c[g].labelAngle ? l - z / 2 : 0 === c[g].labelAngle ? l - z / 2 : l)), c[g].lineCoordinates.x1 = m, c[g].lineCoordinates.x2 = l, c[g].lineCoordinates.width = Math.abs(l - m), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                  if (b && 0 < b.length)
                      for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, m = Math.round(f.x1 + U + e), l = Math.round(f.x2 - T - V > b[g].chart.width - 10 ? b[g].chart.width - 10 : f.x2 - T - V), b[g] && b[g].labelAutoFit && !s(A) && (0 < !a.length && (m = 0 < b[g].labelAngle ? Math.max(m, A) : 0 === b[g].labelAngle ? Math.max(m, A / 2) : m), 0 < !d.length && (l -= y / 2)), b[g].lineCoordinates.x1 = m, b[g].lineCoordinates.x2 = l, b[g].lineCoordinates.width = Math.abs(l - m), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                  if (c && 0 < c.length)
                      for (p = [], g = S = 0; g < c.length; g++) p.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), S += p[g] + c[g].margin, K += c[g].margin;
                  else p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                  E.push(p);
                  if (b && 0 < b.length)
                      for (D = [], g = 0; g < b.length; g++) D.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), Z += b[g].margin;
                  else D.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                  t.push(D);
                  if (c && 0 < c.length)
                      for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (k = c[g]._labels[0], h = c[g]._labels[c[g]._labels.length -
                          1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), z = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                  if (b && 0 < b.length)
                      for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (k = b[g]._labels[0], h = b[g]._labels[b[g]._labels.length - 1], A = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) +
                          (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), y = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                  if (n.panEnabled)
                      for (g = 0; g < c.length; g++) p[g] = s(n.sessionVariables.axisY.height) ? n.sessionVariables.axisY.height = p[g] : n.sessionVariables.axisY.height;
                  else
                      for (g = 0; g < c.length; g++) n.sessionVariables.axisY.height = p[g];
                  if (c && 0 < c.length)
                      for (g = c.length -
                          1; 0 <= g; g--) h = Math.round(f.y2), k = Math.round(f.y2 > c[g].chart.height ? c[g].chart.height : f.y2), c[g].lineCoordinates.y1 = h - (p[g] + c[g].margin + W), c[g].lineCoordinates.y2 = h - (p[g] + c[g].margin + W), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + p[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - ("inside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = {
                          x1: m,
                          y1: h - (p[g] + W + c[g].margin),
                          x2: l,
                          y2: k -
                              (W + c[g].margin),
                          width: l - m,
                          height: p[g]
                      }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), W += p[g] + c[g].margin;
                  if (b && 0 < b.length)
                      for (g = b.length - 1; 0 <= g; g--) b[g] && (h = Math.round(f.y1), k = Math.round(f.y1 + (D[g] + b[g].margin + G)), b[g].lineCoordinates.y1 = k, b[g].lineCoordinates.y2 = k, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = k - D[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)),
                          b[g].bounds = {
                              x1: m,
                              y1: h + (b[g].margin + G),
                              x2: l,
                              y2: k,
                              width: l - m
                          }, b[g].bounds.height = b[g].bounds.y2 - b[g].bounds.y1, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), G += D[g] + b[g].margin);
                  if (a && 0 < a.length)
                      for (g = 0; g < a.length; g++) {
                          K = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0;
                          m = Math.round(f.x1 + e);
                          h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ?
                              Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1;
                          l = Math.round(f.x1 + U + e);
                          k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - S) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2;
                          if (c && 0 < c.length)
                              for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (l = 0 > c[K].labelAngle ? Math.max(l, x) : 0 === c[K].labelAngle ? Math.max(l, x / 2) : l, m = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? l - U : m);
                          if (b && 0 < b.length)
                              for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit &&
                                  (l = b[K].lineCoordinates.x1, m = l - U);
                          a[g].lineCoordinates = {
                              x1: l - M,
                              y1: h,
                              x2: l - M,
                              y2: k,
                              height: Math.abs(k - h)
                          };
                          "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (F[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + ("outside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                          a[g].bounds = {
                              x1: l - (F[g] + M),
                              y1: h,
                              x2: l - M,
                              y2: k,
                              height: k - h
                          };
                          a[g].bounds.width = a[g].bounds.x2 - a[g].bounds.x1;
                          a[g].title && (a[g]._titleTextBlock.maxWidth =
                              0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                          a[g].calculateValueToPixelConversionParameters();
                          a[g].calculateBreaksSizeInValues();
                          M += F[g] + a[g].margin
                      }
                  if (d && 0 < d.length)
                      for (g = 0; g < d.length; g++) {
                          K = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0;
                          m = Math.round(f.x1 - e);
                          h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1;
                          l = Math.round(f.x2 -
                              T - V);
                          k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - S) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2;
                          if (c && 0 < c.length)
                              for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (l = 0 > c[K].labelAngle ? Math.max(l, x) : 0 === c[K].labelAngle ? Math.max(l, x / 2) : l, m = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? l - T : m);
                          if (b && 0 < b.length)
                              for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (l = b[K].lineCoordinates.x2, m = l - T);
                          d[g].lineCoordinates = {
                              x1: l + Q,
                              y1: h,
                              x2: l + Q,
                              y2: k,
                              height: Math.abs(k - h)
                          };
                          "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (w[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - ("outside" === d[g].tickPlacement ? d[g].tickLength : 0), d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2);
                          d[g].bounds = {
                              x1: d[g].lineCoordinates.x1,
                              y1: h,
                              x2: l + w[g] + Q,
                              y2: k,
                              width: l - m,
                              height: k - h
                          };
                          d[g].bounds.width = d[g].bounds.x2 - d[g].bounds.x1;
                          d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth <
                              d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height);
                          d[g].calculateValueToPixelConversionParameters();
                          d[g].calculateBreaksSizeInValues();
                          Q += w[g] + d[g].margin
                      }
                  for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                  if (0 < v) {
                      if (a && 0 < a.length)
                          for (g = 0; g < a.length; g++) r = N[v - 1][g] === N[v][g] ? !0 : !1;
                      else r = !0;
                      if (d && 0 < d.length)
                          for (g = 0; g < d.length; g++) I = O[v - 1][g] === O[v][g] ? !0 : !1;
                      else I = !0;
                      if (c && 0 < c.length)
                          for (g = 0; g <
                              c.length; g++) J = E[v - 1][g] === E[v][g] ? !0 : !1;
                      else J = !0;
                      if (b && 0 < b.length)
                          for (g = 0; g < b.length; g++) L = t[v - 1][g] === t[v][g] ? !0 : !1;
                      else L = !0
                  }
                  if (r && I && J && L) break;
                  v++
              }
              if (c && 0 < c.length)
                  for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
              if (b && 0 < b.length)
                  for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
              if (a && 0 < a.length)
                  for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
              if (d &&
                  0 < d.length)
                  for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels()
          }
      };
      x.render = function(a, d, c, b, e) {
          var f = a[0] ? a[0].chart : d[0].chart;
          e = f.ctx;
          f.alignVerticalAxes && f.alignVerticalAxes();
          e.save();
          e.beginPath();
          a && a.length && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[a.length - 1].bounds.y2);
          d && d.length && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.y2);
          e.clip();
          if (a && 0 < a.length)
              for (var m = 0; m < a.length; m++) a[m].renderLabelsTicksAndTitle();
          if (d &&
              0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderLabelsTicksAndTitle();
          e.restore();
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderLabelsTicksAndTitle();
          f.preparePlotArea();
          f = f.plotArea;
          e.save();
          e.beginPath();
          e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
          e.clip();
          if (a && 0 < a.length)
              for (m = 0; m < a.length; m++) a[m].renderStripLinesOfThicknessType("value");
          if (d && 0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
              for (m = 0; m < a.length; m++) a[m].renderInterlacedColors();
          if (d && 0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderInterlacedColors();
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderInterlacedColors();
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderInterlacedColors();
          e.restore();
          if (a && 0 < a.length)
              for (m = 0; m < a.length; m++) a[m].renderGrid(),
                  w && (a[m].createMask(), a[m].renderBreaksBackground());
          if (d && 0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderGrid(), w && (d[m].createMask(), d[m].renderBreaksBackground());
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderGrid(), w && (c[m].createMask(), c[m].renderBreaksBackground());
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderGrid(), w && (b[m].createMask(), b[m].renderBreaksBackground());
          if (a && 0 < a.length)
              for (m = 0; m < a.length; m++) a[m].renderAxisLine();
          if (d && 0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderAxisLine();
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderAxisLine();
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderAxisLine();
          if (a && 0 < a.length)
              for (m = 0; m < a.length; m++) a[m].renderStripLinesOfThicknessType("pixel");
          if (d && 0 < d.length)
              for (m = 0; m < d.length; m++) d[m].renderStripLinesOfThicknessType("pixel");
          if (c && 0 < c.length)
              for (m = 0; m < c.length; m++) c[m].renderStripLinesOfThicknessType("pixel");
          if (b && 0 < b.length)
              for (m = 0; m < b.length; m++) b[m].renderStripLinesOfThicknessType("pixel")
      };
      x.prototype.calculateStripLinesThicknessInValues =
          function() {
              for (var a = 0; a < this.stripLines.length; a++)
                  if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                      var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                          c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                          d = this.getApparentDifference(d, c);
                      this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) /
                          Math.log(d)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2;
                      this.stripLines[a].thickness = d;
                      this.stripLines[a]._thicknessType = "value"
                  }
          };
      x.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ?
                  this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !s(this.scaleBreaks.options.spacing), e, f = 0; f < d.length; f++) e = b || !s(d[f].options.spacing), d[f].spacing = Ra(d[f].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / c), this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size))
      };
      x.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
              var a =
                  this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
              a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
              for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++) a[d].endValue < this.conversionParameters.minimum || (s(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum &&
                  (a[d].endPixel = this.convertValueToPixel(a[d].endValue)))
          }
      };
      x.prototype.renderLabelsTicksAndTitle = function() {
          var a = this,
              d = !1,
              c = 0,
              b = 0,
              e = 1,
              f = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
              if ("bottom" === this._position || "top" === this._position)
                  if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                      for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, m, h = this.viewportMaximum, l = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length -
                              1; 0 <= k; k--) {
                          p = this._labels[k];
                          if (p.position < this.viewportMinimum) break;
                          p.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(h / p.position) * l / e) || (c.push(p), h = p.position, m = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                      }
                      this._labels = c
                  } else {
                      for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (m = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height *
                          Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += m);
                      c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0)
                  } if ("left" === this._position || "right" === this._position)
                  if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                      for (var c = [], n, h = this.viewportMaximum, l = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                          p = this._labels[k];
                          if (p.position < this.viewportMinimum) break;
                          p.position > this.viewportMaximum || !(k === this._labels.length - 1 || n < Math.log(h / p.position) *
                              l) || (c.push(p), h = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                      }
                      this._labels = c
                  } else {
                      for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += n);
                      b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0)
                  }
          }
          this.logarithmic && (!this.equidistantInterval &&
              this.labelAutoFit) && this._labels.sort(function(a, b) {
              return a.position - b.position
          });
          var k = 0,
              p, q;
          if ("bottom" === this._position) {
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y <<
                  0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width *
                  Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd",
                  function() {
                      for (k = 0; k < a._labels.length; k++)
                          if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                              a.ctx.lineWidth = a.tickThickness;
                              a.ctx.strokeStyle = a.tickColor;
                              var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                              a.ctx.save();
                              a.ctx.beginPath();
                              a.ctx.moveTo(b, q.y << 0);
                              a.ctx.lineTo(b, q.y - a.tickLength << 0);
                              a.ctx.stroke();
                              a.ctx.restore()
                          }
                  }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
                  this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("top" === this._position) {
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                  this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 <
                  this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) +
                      ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (k = 0; k < a._labels.length; k++)
                      if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                          a.ctx.lineWidth = a.tickThickness;
                          a.ctx.strokeStyle =
                              a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(b, q.y << 0);
                          a.ctx.lineTo(b, q.y + a.tickLength << 0);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("left" === this._position) {
              for (k =
                  0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y =
                  q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                  ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (k = 0; k < a._labels.length; k++)
                      if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                          a.ctx.lineWidth =
                              a.tickThickness;
                          a.ctx.strokeStyle = a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(q.x << 0, b);
                          a.ctx.lineTo(q.x + a.tickLength << 0, b);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          } else if ("right" ===
              this._position) {
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ?
                  (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                      ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
              "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                  for (k = 0; k < a._labels.length; k++)
                      if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position),
                              a.tickThickness)) {
                          a.ctx.lineWidth = a.tickThickness;
                          a.ctx.strokeStyle = a.tickColor;
                          var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                          a.ctx.save();
                          a.ctx.beginPath();
                          a.ctx.moveTo(q.x << 0, b);
                          a.ctx.lineTo(q.x - a.tickLength << 0, b);
                          a.ctx.stroke();
                          a.ctx.restore()
                      }
              }, this);
              this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
          }
          f =
              0;
          if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
              for (k = 0; k < a._labels.length; k++) p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || d && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(!0), a.ctx.restore())
          }, this);
          else
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || d && 0 !== f++ % 2 && this.labelAutoFit) || p.textBlock.render(!0)
      };
      x.prototype.renderInterlacedColors =
          function() {
              var a = this.chart.plotArea.ctx,
                  d, c, b = this.chart.plotArea,
                  e = 0;
              d = !0;
              if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                  for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = !1) :
                      d = !0;
              else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                  for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = !1) : d = !0;
              a.beginPath()
          };
      x.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines &&
              0 < this.stripLines.length && a) {
              for (var d = this, c, b = 0, e = 0, f = !1, m = !1, h = [], l = [], m = !1, b = 0; b < this.stripLines.length; b++) {
                  var k = this.stripLines[b];
                  k._thicknessType === a && ("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum || s(k.value) || isNaN(this.range)) || "value" === a && (k.startValue <= this.viewportMinimum && k.endValue <= this.viewportMinimum || k.startValue >= this.viewportMaximum && k.endValue >= this.viewportMaximum || s(k.startValue) || s(k.endValue) || isNaN(this.range)) || h.push(k))
              }
              for (b = 0; b < this._stripLineLabels.length; b++)
                  if (k =
                      this.stripLines[b], c = this._stripLineLabels[b], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
                      a = this.getPixelCoordinatesOnAxis(c.position);
                      if ("outside" === c.stripLine.labelPlacement)
                          if (k && (this.ctx.strokeStyle = k.color, "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position) {
                              var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                              this.ctx.beginPath();
                              this.ctx.moveTo(n, a.y << 0);
                              this.ctx.lineTo(n, a.y + this.tickLength << 0);
                              this.ctx.stroke();
                              0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                          } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width /
                                  2, a.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x <<
                                  0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" ===
                              this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                      else c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, s(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ?
                          "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth :
                          this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, s(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                              this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ?
                          s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width -
                          3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize /
                          2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                      c.textBlock.x = a.x;
                      c.textBlock.y = a.y;
                      l.push(c)
                  } if (!m) {
                  m = !1;
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                  this.ctx.clip();
                  for (b = 0; b < h.length; b++) k =
                      h[b], k.showOnTop ? f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                          this.ctx.save();
                          this.ctx.beginPath();
                          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                          this.ctx.clip();
                          for (e = 0; e < h.length; e++) k = h[e], k.showOnTop && k.render();
                          this.ctx.restore()
                      }, k)) : k.render();
                  for (b = 0; b < l.length; b++) c = l[b], c.stripLine.showOnTop ? m || (m = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                      for (e = 0; e < l.length; e++) c =
                          l[e], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(!0), d.ctx.restore())
                  }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                  this.ctx.restore();
                  m = !0
              }
              if (m)
                  for (m = !1, b = 0; b < l.length; b++) c = l[b], "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0)
          }
      };
      x.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas &&
              (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
      };
      x.prototype.createMask = function() {
          if (this.scaleBreaks &&
              0 < this.scaleBreaks._appliedBreaks.length) {
              var a = this.scaleBreaks._appliedBreaks;
              w ? (this.maskCanvas = ra(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
              this.maskCtx.save();
              this.maskCtx.beginPath();
              this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.maskCtx.clip();
              for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum ||
                  (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
              this.maskCtx.restore()
          }
      };
      x.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
              var a = this.chart.ctx;
              a.save();
              var d, c = this.chart.plotArea;
              a.lineWidth = this.gridThickness;
              a.strokeStyle = this.gridColor;
              a.setLineDash && a.setLineDash(O(this.gridDashType, this.gridThickness));
              if ("bottom" === this._position || "top" === this._position)
                  for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum ||
                      this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
              else if ("left" === this._position || "right" === this._position)
                  for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d =
                      1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
              a.restore()
          }
      };
      x.prototype.renderAxisLine = function() {
          var a = this.chart.ctx,
              d = w ? this.chart._preRenderCtx : a,
              c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
              b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
              e, f;
          d.save();
          if ("bottom" === this._position || "top" === this._position) {
              if (this.lineThickness) {
                  this.reversed ? (e = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, f = this.lineCoordinates.x2);
                  d.lineWidth = this.lineThickness;
                  d.strokeStyle = this.lineColor ? this.lineColor : "black";
                  d.setLineDash && d.setLineDash(O(this.lineDashType, this.lineThickness));
                  var m = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                  d.beginPath();
                  if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                      if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                      else
                          for (var h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(e,
                              m), d.lineTo(this.scaleBreaks._appliedBreaks[h].startPixel + c, m), e = this.scaleBreaks._appliedBreaks[h].endPixel + b;
                  e && (d.moveTo(e, m), d.lineTo(f, m));
                  d.stroke()
              }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, f = this.lineCoordinates.y1);
              d.lineWidth = this.lineThickness;
              d.strokeStyle = this.lineColor;
              d.setLineDash && d.setLineDash(O(this.lineDashType, this.lineThickness));
              m = 1 === this.lineThickness %
                  2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
              d.beginPath();
              if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                  if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                  else
                      for (h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(m, e), d.lineTo(m, this.scaleBreaks._appliedBreaks[h].startPixel + b), e = this.scaleBreaks._appliedBreaks[h].endPixel + c;
              e && (d.moveTo(m, e), d.lineTo(m, f));
              d.stroke()
          }
          w &&
              (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(0, 0, this.chart.width, this.chart.height));
          d.restore()
      };
      x.prototype.getPixelCoordinatesOnAxis = function(a) {
          var d = {};
          if ("bottom" === this._position || "top" === this._position) d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position) d.y =
              this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
          return d
      };
      x.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a) return null;
          var d = 0,
              c = 0,
              b, d = !0,
              e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
              c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
              a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
              if (c <= this.conversionParameters.reference === ("left" === this._position ||
                      "right" === this._position) !== this.reversed)
                  for (c = 0; c < e.length; c++) {
                      if (!(e[c].endValue < this.conversionParameters.minimum))
                          if (d)
                              if (e[c].startValue < this.conversionParameters.minimum) {
                                  if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                                      a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                      break
                                  } else a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) /
                                      Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                                  d = !1
                              } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                          b /= e[c].startValue / this.conversionParameters.minimum;
                          if (b < e[c].size) {
                              a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                              break
                          } else a *= e[c].endValue / e[c].startValue / e[c].size;
                          b /= e[c].size;
                          d = !1
                      } else break;
                      else if (b > e[c].startValue / e[c -
                              1].endValue) {
                          b /= e[c].startValue / e[c - 1].endValue;
                          if (b < e[c].size) {
                              a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                              break
                          } else a *= e[c].endValue / e[c].startValue / e[c].size;
                          b /= e[c].size
                      } else break
                  } else
                      for (c = e.length - 1; 0 <= c; c--)
                          if (!(e[c].startValue > this.conversionParameters.minimum))
                              if (d)
                                  if (e[c].endValue > this.conversionParameters.minimum) {
                                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) >
                                          e[c].startValue) {
                                          a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                          break
                                      } else a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                                      d = !1
                                  } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                  b /= e[c].endValue / this.conversionParameters.minimum;
                  if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break
                  } else a /= e[c].endValue / e[c].startValue / e[c].size;
                  b *= e[c].size;
                  d = !1
              } else break;
              else if (b < e[c].endValue / e[c + 1].startValue) {
                  b /= e[c].endValue / e[c + 1].startValue;
                  if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break
                  } else a /= e[c].endValue / e[c].startValue / e[c].size;
                  b *= e[c].size
              } else break;
              d = a * this.viewportMinimum
          } else {
              a = b = (c - this.conversionParameters.reference) /
                  this.conversionParameters.pixelPerUnit;
              if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                  for (c = 0; c < e.length; c++) {
                      if (!(e[c].endValue < this.conversionParameters.minimum))
                          if (d)
                              if (e[c].startValue < this.conversionParameters.minimum) {
                                  if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                                      a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                                      break
                                  } else a += e[c].endValue - this.conversionParameters.minimum -
                                      e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                                  d = !1
                              } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                          b -= e[c].startValue - this.conversionParameters.minimum;
                          if (b < e[c].size) {
                              a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                              break
                          } else a += e[c].endValue - e[c].startValue - e[c].size;
                          b -= e[c].size;
                          d = !1
                      } else break;
                      else if (b > e[c].startValue - e[c -
                              1].endValue) {
                          b -= e[c].startValue - e[c - 1].endValue;
                          if (b < e[c].size) {
                              a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                              break
                          } else a += e[c].endValue - e[c].startValue - e[c].size;
                          b -= e[c].size
                      } else break
                  } else
                      for (c = e.length - 1; 0 <= c; c--)
                          if (!(e[c].startValue > this.conversionParameters.minimum))
                              if (d)
                                  if (e[c].endValue > this.conversionParameters.minimum)
                                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                                          a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) /
                                              e[c].size;
                                          break
                                      } else a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = !1;
              else if (b < e[c].endValue - this.conversionParameters.minimum) {
                  b -= e[c].endValue - this.conversionParameters.minimum;
                  if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break
                  } else a -= e[c].endValue - e[c].startValue -
                      e[c].size;
                  b += e[c].size;
                  d = !1
              } else break;
              else if (b < e[c].endValue - e[c + 1].startValue) {
                  b -= e[c].endValue - e[c + 1].startValue;
                  if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break
                  } else a -= e[c].endValue - e[c].startValue - e[c].size;
                  b += e[c].size
              } else break;
              d = this.conversionParameters.minimum + a
          }
          return d
      };
      x.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference +
              this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
      };
      x.prototype.getApparentDifference = function(a, d, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
              c = s(c) ? d / a : c;
              for (var f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * e[f].startValue * e[f].size : a >= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)) : a <= e[f].startValue && d <= e[f].endValue ? c = c / d * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)) : !b && (a > e[f].startValue && d < e[f].endValue) &&
                  (c = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))))
          } else
              for (c = s(c) ? Math.abs(d - a) : c, f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + e[f].startValue + e[f].size : a > e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + a + e[f].size * (e[f].endValue - a) / (e[f].endValue - e[f].startValue) : a <= e[f].startValue && d < e[f].endValue ? c = c - d + e[f].startValue + e[f].size * (d - e[f].startValue) / (e[f].endValue - e[f].startValue) : !b && (a > e[f].startValue &&
                  d < e[f].endValue) && (c = a + e[f].size * (d - a) / (e[f].endValue - e[f].startValue)));
          return c
      };
      x.prototype.setViewPortRange = function(a, d) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d)
      };
      x.prototype.calculateValueToPixelConversionParameters =
          function(a) {
              a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
              var d = {
                      pixelPerUnit: null,
                      minimum: null,
                      reference: null
                  },
                  c = this.lineCoordinates.width,
                  b = this.lineCoordinates.height,
                  c = "bottom" === this._position || "top" === this._position ? c : b,
                  b = Math.abs(this.range);
              if (this.logarithmic)
                  for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue &&
                      this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue /
                          this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
              else
                  for (e = 0; e < a.length && !(this.viewportMaximum <
                          a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ?
                      c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum -
                      a[e].startValue) / (a[e].endValue - a[e].startValue)));
              d.minimum = this.viewportMinimum;
              d.maximum = this.viewportMaximum;
              d.range = b;
              if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
              if ("left" === this._position || "right" === this._position) this.logarithmic ?
                  (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
              this.conversionParameters = d
          };
      x.prototype.calculateAxisParameters = function() {
          if (this.logarithmic) this.calculateLogarithmicAxisParameters();
          else {
              var a = this.chart.layoutManager.getFreeSpace(),
                  d = !1,
                  c = !1;
              "bottom" === this._position || "top" === this._position ? (this.maxWidth =
                  a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
              var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                  b = 4;
              "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
              var a = Math.max(b, Math.floor(this.maxWidth / a)),
                  e, f, h, b = 0;
              !s(this.options.viewportMinimum) && (!s(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
              if (s(this.options.viewportMinimum) && !s(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
              else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
              if (s(this.options.viewportMaximum) && !s(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
              else if (null === this.viewportMaximum ||
                  isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
              if (this.scaleBreaks)
                  for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                      if ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!s(this.sessionVariables.newViewportMaximum) &&
                              this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                          this.scaleBreaks._appliedBreaks.splice(b, 1);
                          break
                      } if ("axisX" === this.type) {
                  if (this.dataSeries && 0 < this.dataSeries.length)
                      for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                  e = null !== this.viewportMinimum ?
                      this.viewportMinimum : this.dataInfo.viewPortMin;
                  f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                  0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b);
                  Infinity !== this.dataInfo.minDiff ? h = this.dataInfo.minDiff : 1 < f - e ? h = 0.5 * Math.abs(f - e) : (h = 1, c && (d = !0))
              } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) ||
                  isFinite(f) ? isFinite(e) ? isFinite(f) || (f = e) : e = f : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -=
                      b)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
              b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0);
              if ("axisX" === this.type && c) {
                  this.valueType =
                      "dateTime";
                  this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") :
                      b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * S.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * S.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * S.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * S.secondDuration) <= a ? (this.interval = 10,
                          this.intervalType = "second") : b / (15 * S.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * S.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * S.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * S.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * S.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * S.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * S.minuteDuration) <= a ? (this.interval =
                          10, this.intervalType = "minute") : b / (15 * S.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * S.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * S.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * S.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * S.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * S.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * S.hourDuration) <= a ? (this.interval = 6, this.intervalType =
                          "hour") : b / (1 * S.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * S.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * S.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * S.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * S.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * S.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * S.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * S.monthDuration) <= a ? (this.interval =
                          2, this.intervalType = "month") : b / (3 * S.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * S.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * S.yearDuration) <= a ? 1 : b / (2 * S.yearDuration) <= a ? 2 : b / (4 * S.yearDuration) <= a ? 4 : Math.floor(x.getNiceNumber(b / (a - 1), !0) / S.yearDuration), this.intervalType = "year"));
                  if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - h / 2;
                  if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                      f + h / 2;
                  d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString =
                      "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                  this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
              } else {
                  this.intervalType = "number";
                  b = x.getNiceNumber(b, !1);
                  this.interval = this.options && 0 < this.options.interval ? this.options.interval : x.getNiceNumber(b / (a - 1), !0);
                  if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval;
                  if (null === this.viewportMaximum ||
                      isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + h / 2 : Math.ceil(f / this.interval) * this.interval;
                  0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = x.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
              }
              if (null === this.minimum || null === this.maximum)
                  if ("axisX" === this.type ? (e =
                          null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(f) ? 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)),
                          5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -= b)) : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.minimum ||
                          isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)), Math.abs(this.getApparentDifference(e, f, null, !0)), "axisX" === this.type && c) {
                      this.valueType = "dateTime";
                      if (null === this.minimum || isNaN(this.minimum)) this.minimum = e - h / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                      if (null === this.maximum || isNaN(this.maximum)) this.maximum =
                          f + h / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)
                  } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)),
                      null === this.maximum && (this.maximum = "axisX" === this.type ? f + h / 2 : Math.ceil(f / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
              s(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
              s(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
              this.range = this.viewportMaximum - this.viewportMinimum;
              this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
              this.valueFormatString || (this.valueFormatString = x.generateValueFormatString(this.range, 2))
          }
      };
      x.generateValueFormatString = function(a, d) {
          var c = "#,##0.",
              b = d;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) /
              Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
          for (var e = 0; e < b; e++) c += "#";
          return c
      };
      x.getNiceExponent = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10),
              b = a / Math.pow(10, c),
              b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
      };
      x.getNiceNumber = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10),
              b = a / Math.pow(10, c),
              b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
      };
      x.prototype.getLabelStartPoint = function() {
          var a = S[this.intervalType + "Duration"] * this.interval,
              a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
              if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
              else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() ||
                  0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0),
                  a.setSeconds(0), a.setMilliseconds(0)
          } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
          } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0),
              a.setSeconds(0), a.setMilliseconds(0));
          return a
      };
      ma(Z, T);
      Z.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
              this.container = document.createElement("div");
              this.container.setAttribute("class", "canvasjs-chart-tooltip");
              this.container.style.position = "absolute";
              this.container.style.height = "auto";
              this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
              this.container.style.zIndex = "1000";
              this.container.style.pointerEvents = "none";
              this.container.style.display = "none";
              var a = document.createElement("div");
              a.style.width = "auto";
              a.style.height = "auto";
              a.style.minWidth = "50px";
              a.style.lineHeight = "normal";
              a.style.margin = "0px 0px 0px 0px";
              a.style.padding = "5px";
              a.style.fontFamily = "Calibri, Arial, Georgia, serif";
              a.style.fontWeight = "normal";
              a.style.fontStyle = w ? "italic" : "normal";
              a.style.fontSize = "14px";
              a.style.color = "#000000";
              a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
              a.style.textAlign = "left";
              a.style.border = "2px solid gray";
              a.style.background = w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
              a.style.textIndent = "0px";
              a.style.whiteSpace = "nowrap";
              a.style.borderRadius = "2px";
              a.style.MozUserSelect = "none";
              a.style.WebkitUserSelect = "none";
              a.style.msUserSelect = "none";
              a.style.userSelect = "none";
              w || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
              a.innerText = "Sample Tooltip";
              this.container.appendChild(a);
              this.contentDiv = this.container.firstChild;
              this.container.style.borderRadius = this.contentDiv.style.borderRadius;
              this.chart._canvasJSContainer.appendChild(this.container)
          }
      };
      Z.prototype.mouseMoveHandler = function(a, d) {
          this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated ||
              (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
      };
      Z.prototype._updateToolTip = function(a, d, c) {
          c = "undefined" === typeof c ? !0 : c;
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
              if ("undefined" === typeof a || "undefined" === typeof d) {
                  if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                  a = this._prevX;
                  d = this._prevY
              } else this._prevX = a, this._prevY = d;
              var b = null,
                  e = null,
                  f = [],
                  h = 0;
              if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                  var l = [];
                  if (this.chart.axisX)
                      for (var v = 0; v < this.chart.axisX.length; v++) {
                          for (var h = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[v].convertPixelToValue({
                                  y: d
                              }) : this.chart.axisX[v].convertPixelToValue({
                                  x: a
                              }), k = null, b = 0; b < this.chart.axisX[v].dataSeries.length; b++)(k = this.chart.axisX[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[v].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l.push(k));
                          k = null
                      }
                  if (this.chart.axisX2)
                      for (v = 0; v < this.chart.axisX2.length; v++) {
                          h =
                              "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[v].convertPixelToValue({
                                  y: d
                              }) : this.chart.axisX2[v].convertPixelToValue({
                                  x: a
                              });
                          k = null;
                          for (b = 0; b < this.chart.axisX2[v].dataSeries.length; b++)(k = this.chart.axisX2[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[v].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l.push(k));
                          k = null
                      }
                  if (0 === l.length) return;
                  l.sort(function(a, b) {
                      return a.distance - b.distance
                  });
                  c = l[0];
                  for (b = 0; b < l.length; b++) l[b].dataPoint.x.valueOf() ===
                      c.dataPoint.x.valueOf() && f.push(l[b]);
                  l = null
              } else {
                  if (b = this.chart.getDataPointAtXY(a, d, c)) this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
                  else if (w)
                      if (b = Ya(a, d, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                          b = this.chart._eventManager.objectMap[b];
                          if ("legendItem" === b.objectType) return;
                          this.currentSeriesIndex = b.dataSeriesIndex;
                          this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1
                      } else this.currentDataPointIndex = -1;
                  else this.currentDataPointIndex = -1;
                  if (0 <= this.currentSeriesIndex) {
                      e = this.chart.data[this.currentSeriesIndex];
                      k = {};
                      if (0 <= this.currentDataPointIndex) b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - h), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                      else {
                          if (!this.enabled || "line" !==
                              e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                          h = e.axisX.convertPixelToValue({
                              x: a
                          });
                          k = e.getDataPointAtX(h, c);
                          s(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint)
                      }
                      if (!s(k) && !s(k.dataPoint) && !s(k.dataPoint.y))
                          if (k.dataSeries.axisY)
                              if (0 < k.dataPoint.y.length) {
                                  for (b =
                                      c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                                  c < k.dataPoint.y.length && c > -k.dataPoint.y.length && f.push(k)
                              } else "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && f.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && f.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size /
                                  2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && f.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && f.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >=
                                  k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && f.push(k);
                      else f.push(k)
                  }
              }
              if (0 < f.length) {
                  if (this.highlightObjects(f), this.enabled) {
                      c = "";
                      c = this.getToolTipInnerHTML({
                          entries: f
                      });
                      if (null !== c) {
                          this.contentDiv.innerHTML = c;
                          if (this.isToolTipDefinedInData && s(this.options.content) && s(this.options.contentFormatter))
                              for (h = this.contentDiv.getElementsByTagName("span"), b = 0; b < h.length; b++) h[b] && (h[b].style.color = h[b].getAttribute("data-color"));
                          h = !1;
                          "none" === this.container.style.display &&
                              (h = !0, this.container.style.display = "block");
                          try {
                              this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" ===
                                  f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ?
                                  f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "0px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ?
                                  this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal"
                          } catch (n) {}
                          "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" ===
                              f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                          0 > a && (a += this.container.clientWidth + 20);
                          a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                          d = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !==
                              f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : d : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                          d = -d + 10;
                          0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                          this.fixMozTransitionDelay(a, d);
                          !this.animationEnabled || h ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                          this.positionLeft = a;
                          this.positionBottom = d;
                          this.container.style.left = a + "px";
                          this.container.style.bottom = d + "px"
                      } else this.hide(!1), this.enabled && this.dispatchEvent("hidden", {
                          chart: this.chart,
                          toolTip: this
                      }, this);
                      d = [];
                      for (b = 0; b < f.length; b++) d.push({
                          xValue: f[b].dataPoint.x,
                          dataPoint: f[b].dataPoint,
                          dataSeries: f[b].dataSeries,
                          dataPointIndex: f[b].index,
                          dataSeriesIndex: f[b].dataSeries._index
                      });
                      d = {
                          chart: this.chart,
                          toolTip: this.options,
                          content: c,
                          entries: d
                      };
                      this._entries = f;
                      this.dispatchEvent("updated", d, this)
                  }
              } else this.hide(), this.enabled && this.dispatchEvent("hidden", {
                  chart: this.chart,
                  toolTip: this
              }, this)
          }
      };
      Z.prototype.highlightObjects = function(a) {
          var d = this.chart.overlaidCanvasCtx;
          if (s(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height),
              this.chart.clearedOverlayedCanvas = "toolTip";
          d.save();
          var c = this.chart.plotArea,
              b = 0;
          d.beginPath();
          d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          d.clip();
          for (c = 0; c < a.length; c++) {
              var e = a[c];
              if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                  var b = this.chart.data[e.dataSeriesIndex],
                      f = b.dataPoints[e.dataPointIndex],
                      h = e.dataPointIndex;
                  !1 === f.highlightEnabled || !0 !== b.highlightEnabled && !0 !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type ||
                      "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), $.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = b.getMarkerProperties(h, e.x1, e.y2, this.chart.overlaidCanvasCtx),
                          f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), $.drawMarkers([f]))) : "bubble" === b.type ? (f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color = "white", f.borderColor = "white", d.globalAlpha = 0.3, $.drawMarkers([f]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type ||
                      "rangeColumn" === b.type || "waterfall" === b.type ? ea(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === b.type || "doughnut" === b.type ? null : "funnel" === b.type || "pyramid" === b.type ? na(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)),
                          d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), ea(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3,
                          e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), ea(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 +
                              e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle =
                          e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && y(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
              }
          }
          d.restore();
          d.globalAlpha = 1;
          d.beginPath()
      };
      Z.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var d = null,
              c = null,
              b = null,
              e = 0,
              f = "";
          this.isToolTipDefinedInData = !0;
          for (var h = 0; h < a.length; h++)
              if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) {
                  this.isToolTipDefinedInData = !1;
                  break
              } if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
              chart: this.chart,
              toolTip: this.options,
              entries: a
          }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
              for (var l = null, s = "", h = 0; h < a.length; h++) {
                  c = a[h].dataSeries;
                  b = a[h].dataPoint;
                  e = a[h].index;
                  f = "";
                  if (0 === h && this.isToolTipDefinedInData && !this.content) {
                      this.chart.axisX && 0 < this.chart.axisX.length ? s += "undefined" !==
                          typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (s += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                      s += "</br>";
                      if (!c.visible) continue;
                      s = this.chart.replaceKeywordsWithValue(s, b, c, e)
                  }
                  null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" ===
                      c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += l != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" +
                          (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", l = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += l != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" ===
                      c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += l != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" ===
                      c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += l != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === c.type &&
                      (this.chart.axisX && 1 < this.chart.axisX.length && (f += l != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                      null === d && (d = ""), c.visible && (!0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(f, b, c, e) + d, h < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(f, b, c, e), h < a.length - 1 && (d += "</br>"))))
              }
              null !== d && (d = s + d)
          } else {
              c = a[0].dataSeries;
              b = a[0].dataPoint;
              e = a[0].index;
              if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
              "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type ||
                  "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ?
                  f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ?
                      "" : "'{color}'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" ===
                  c.type || "ohlc" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content &&
                      "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
              null === d && (d = "");
              d += this.chart.replaceKeywordsWithValue(f,
                  b, c, e)
          }
          return d
      };
      Z.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
              var a = this.getContainerTransition(this.containerTransitionDuration);
              this.container.style.WebkitTransition = a;
              this.container.style.MsTransition = a;
              this.container.style.transition = a;
              this.container.style.MozTransition = this.mozContainerTransition
          }
      };
      Z.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "",
              this.container.style.MsTransition = "", this.container.style.transition = "")
      };
      Z.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
      };
      Z.prototype.show = function(a, d, c) {
          this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c)
      };
      Z.prototype.showAtIndex = function(a, d) {};
      Z.prototype.showAtX = function(a, d) {
          if (!this.enabled) return !1;
          this.chart.clearedOverlayedCanvas = null;
          var c, b, e, f = [];
          e = !1;
          d = !s(d) && 0 <= d && d < this.chart.data.length ? d : 0;
          if (this.shared)
              for (var h = 0; h < this.chart.data.length; h++) c = this.chart.data[h], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !s(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
          else c = this.chart.data[d], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !s(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
          if (0 < f.length) {
              for (h = 0; h < f.length; h++)
                  if (b = f[h], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum &&
                      b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                      e = !1;
                      break
                  } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum) e = !0;
              else {
                  e = !1;
                  break
              }
              if (e) return this.hide(), !1;
              this.highlightObjects(f);
              this._entries = f;
              h = "";
              h = this.getToolTipInnerHTML({
                  entries: f
              });
              if (null !== h) {
                  this.contentDiv.innerHTML = h;
                  if (this.isToolTipDefinedInData && s(this.options.content) &&
                      s(this.options.contentFormatter))
                      for (b = this.contentDiv.getElementsByTagName("span"), h = 0; h < b.length; h++) b[h] && (b[h].style.color = b[h].getAttribute("data-color"));
                  h = !1;
                  "none" === this.container.style.display && (h = !0, this.container.style.display = "block");
                  try {
                      this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor =
                          this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "0px", this.container.style.borderRadius =
                          this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal"
                  } catch (l) {}
                  "pie" === f[0].dataSeries.type || "doughnut" ===
                      f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) - this.container.clientWidth << 0 : f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
                  0 > c && (c += this.container.clientWidth + 20);
                  c + this.container.clientWidth >
                      Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  f = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" ===
                      f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                  f = -f + 10;
                  0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(c, f);
                  !this.animationEnabled || h ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.container.style.left = c + "px";
                  this.container.style.bottom =
                      f + "px"
              } else return this.hide(!1), !1
          } else return this.hide(), !1;
          return !0
      };
      Z.prototype.fixMozTransitionDelay = function(a, d) {
          if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
          else {
              var c = parseFloat(this.container.style.left),
                  c = isNaN(c) ? 0 : c,
                  b = parseFloat(this.container.style.bottom),
                  b = isNaN(b) ? 0 : b;
              10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
          }
      };
      Z.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
      };
      ga.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          w && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
      };
      ga.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId
      };
      ga.prototype.mouseEventHandler = function(a) {
          if ("mousemove" ===
              a.type || "click" === a.type) {
              var d = [],
                  c = Ma(a),
                  b = null;
              if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
                  if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                      var e = this.chart.data[b.dataSeriesIndex],
                          f = e.dataPoints[b.dataPointIndex],
                          h = b.dataPointIndex;
                      b.eventParameter = {
                          x: c.x,
                          y: c.y,
                          dataPoint: f,
                          dataSeries: e.options,
                          dataPointIndex: h,
                          dataSeriesIndex: e.index,
                          chart: this.chart
                      };
                      b.eventContext = {
                          context: f,
                          userContext: f,
                          mouseover: "mouseover",
                          mousemove: "mousemove",
                          mouseout: "mouseout",
                          click: "click"
                      };
                      d.push(b);
                      b = this.objectMap[e.id];
                      b.eventParameter = {
                          x: c.x,
                          y: c.y,
                          dataPoint: f,
                          dataSeries: e.options,
                          dataPointIndex: h,
                          dataSeriesIndex: e.index,
                          chart: this.chart
                      };
                      b.eventContext = {
                          context: e,
                          userContext: e.options,
                          mouseover: "mouseover",
                          mousemove: "mousemove",
                          mouseout: "mouseout",
                          click: "click"
                      };
                      d.push(this.objectMap[e.id])
                  } else "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                      x: c.x,
                      y: c.y,
                      dataSeries: e.options,
                      dataPoint: f,
                      dataPointIndex: b.dataPointIndex,
                      dataSeriesIndex: b.dataSeriesIndex,
                      chart: this.chart
                  }, b.eventContext = {
                      context: this.chart.legend,
                      userContext: this.chart.legend.options,
                      mouseover: "itemmouseover",
                      mousemove: "itemmousemove",
                      mouseout: "itemmouseout",
                      click: "itemclick"
                  }, d.push(b));
              e = [];
              for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                  f = !0;
                  for (b = 0; b < d.length; b++)
                      if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                          f = !1;
                          break
                      } f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c])
              }
              this.mouseoveredObjectMaps =
                  e;
              for (c = 0; c < d.length; c++) {
                  e = !1;
                  for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                      if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                          e = !0;
                          break
                      } e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
                  "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a)
              }
          }
      };
      ga.prototype.fireEvent = function(a, d, c) {
          if (a && d) {
              var b = a.eventParameter,
                  e = a.eventContext,
                  f = a.eventContext.userContext;
              f && (e && f[e[d]]) && f[e[d]].call(f, b);
              "mouseout" !== d ? f.cursor && f.cursor !==
                  c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
              "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
              "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b)
          }
      };
      V.prototype.animate = function(a,
          d, c, b, e) {
          var f = this;
          this.chart.isAnimating = !0;
          e = e || J.easing.linear;
          c && this.animations.push({
              startTime: (new Date).getTime() + (a ? a : 0),
              duration: d,
              animationCallback: c,
              onComplete: b
          });
          for (a = []; 0 < this.animations.length;)
              if (d = this.animations.shift(), c = (new Date).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete) d.onComplete();
          this.animations = a;
          0 < this.animations.length ?
              this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                  f.animate.call(f)
              }) : this.chart.isAnimating = !1
      };
      V.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = !1
      };
      var J = {
              yScaleAnimation: function(a, d) {
                  if (0 !== a) {
                      var c = d.dest,
                          b = d.source.canvas,
                          e = d.animationBase;
                      c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ja, a * c.canvas.height /
                          ja)
                  }
              },
              xScaleAnimation: function(a, d) {
                  if (0 !== a) {
                      var c = d.dest,
                          b = d.source.canvas,
                          e = d.animationBase;
                      c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ja, c.canvas.height / ja)
                  }
              },
              xClipAnimation: function(a, d) {
                  if (0 !== a) {
                      var c = d.dest,
                          b = d.source.canvas;
                      c.save();
                      0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ja, b.height / ja);
                      c.restore()
                  }
              },
              fadeInAnimation: function(a, d) {
                  if (0 !== a) {
                      var c = d.dest,
                          b = d.source.canvas;
                      c.save();
                      c.globalAlpha = a;
                      c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ja, c.canvas.height /
                          ja);
                      c.restore()
                  }
              },
              easing: {
                  linear: function(a, d, c, b) {
                      return c * a / b + d
                  },
                  easeOutQuad: function(a, d, c, b) {
                      return -c * (a /= b) * (a - 2) + d
                  },
                  easeOutQuart: function(a, d, c, b) {
                      return -c * ((a = a / b - 1) * a * a * a - 1) + d
                  },
                  easeInQuad: function(a, d, c, b) {
                      return c * (a /= b) * a + d
                  },
                  easeInQuart: function(a, d, c, b) {
                      return c * (a /= b) * a * a * a + d
                  }
              }
          },
          $ = {
              drawMarker: function(a, d, c, b, e, f, h, l) {
                  if (c) {
                      var s = 1;
                      c.fillStyle = f ? f : "#000000";
                      c.strokeStyle = h ? h : "#000000";
                      c.lineWidth = l ? l : 0;
                      c.setLineDash && c.setLineDash(O("solid", l));
                      "circle" === b ? (c.moveTo(a, d), c.beginPath(),
                          c.arc(a, d, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), l && (h ? c.stroke() : (s = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = s))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), l && (h ? c.stroke() : (s = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = s))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), f && c.fill(), l && (h ? c.stroke() : (s = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle =
                          "black", c.stroke(), c.globalAlpha = s)), c.beginPath()) : "cross" === b && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke())
                  }
              },
              drawMarkers: function(a) {
                  for (var d = 0; d < a.length; d++) {
                      var c = a[d];
                      $.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness)
                  }
              }
          };
      return l
  }();
})();
