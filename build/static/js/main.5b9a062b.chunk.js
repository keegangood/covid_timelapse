(this.webpackJsonpcovid_timelapse=this.webpackJsonpcovid_timelapse||[]).push([[0],{117:function(e,t){},175:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));a(8);var n=a(4),r=a(151),i=function(){var t=Object(n.useMemo)((function(){return function(){var t=new Worker(e,void 0),a=Object(r.b)(t);return{workerApi:a,cleanup:function(){a[r.a](),t.terminate()}}}()}),[]);return Object(n.useEffect)((function(){var e=t.cleanup;return function(){e()}}),[t]),t}}).call(this,a(218))},209:function(e,t,a){},210:function(e,t,a){},212:function(e,t){},218:function(e,t,a){e.exports=a.p+"static/js/0.1de77cc8.chunk.worker.js"},222:function(e,t,a){"use strict";a.r(t);var n,r=a(4),i=a.n(r),c=a(126),o=a.n(c),u=(a(209),a(1)),d=a(8),s=(a(210),a(41)),l=a.n(s),f=a(0),b=a(11),D=a.n(b),j=a(21),v=a(115),m=a(272),O=a(275),Y=a(169),p=a.n(Y);l.a.extend(p.a);var g=Object(v.b)("covidData/getCSVData",function(){var e=Object(j.a)(D.a.mark((function e(t,a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,Object(m.a)("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports"+"/".concat(t,".csv"),O.a);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),h=Object(v.c)({name:"covidData",initialState:{loadingStatus:"PENDING",startDate:"01-22-2020",endDate:l()().subtract(1,"day").format("MM-DD-YYYY"),viewDate:"01-22-2020",rawData:[],dataChunks:[]},reducers:{addDatum:function(e,t){e.data=Object(u.a)(Object(u.a)({},e.data),{},Object(f.a)({},t.payload.date,t.payload.data))},addDataChunk:function(e,t){console.log("chunk length at add",t.payload),e.dataChunks=e.dataChunks.concat([t.payload])},setViewDate:function(e,t){e=Object(u.a)(Object(u.a)({},e),{},{viewDate:t.payload})},setLoadingStatus:function(e,t){e.loadingStatus=t.payload}},extraReducers:(n={},Object(f.a)(n,g.pending,(function(e,t){e.loadingStatus="PENDING",e.rawData=null})),Object(f.a)(n,g.rejected,(function(e,t){})),Object(f.a)(n,g.fulfilled,(function(e,t){})),n)}),y=h.actions,M=(y.addDatum,y.setViewDate,y.addDataChunk),C=h.reducer,w=a(114),S=a(174),x=a.n(S);l.a.extend(x.a);var k=a(269),_=a(279),E=a(280),A=a(175),N=a(23),P=a(283),L=a(271),R=a(278),T=a(268),F=a(261),z=a(270),I=a(185),V=a(276),B=a(273),G=a(178),K=a.n(G),W=a(179),H=a.n(W),q=a(16),J=function(e){e.percentToEndDate;var t=e.onChange,a=e.viewDate,n=e.dateCount,i=e.totalDays,c=e.isPlaying,o=e.toggleIsPlaying,u=e.setViewDate,d=(Object(r.useRef)(),Object(F.a)("div")({background:"rgba(50, 50, 50, .5)",position:"absolute",zIndex:1,top:"10px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"})),s=Object(F.a)("div")({display:"flex",alignItems:"center",width:"60%",justifyContent:"center"}),f=Object(z.a)({root:{width:"100%",marginBottom:0,marginTop:"15px"},valueLabel:{background:"#eaeaea","& span":{color:"#000",fontSize:".8rem"}},markLabel:{color:"#eaeaea",fontSize:".8rem"}})(V.a),b=Object(I.a)({overrides:{root:{width:"100%"},valueLabel:{background:"#eaeaea","& span":{color:"#000"}},markLabel:{color:"#eaeaea",fontSize:".6rem"}}}),D=Object(r.useRef)(),j=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){if(j.current=0,c){D.current=requestAnimationFrame((function e(a){if(!j.current||a-j.current>=150){t(++n);var r=l()("01-22-2020","MM-DD-YYYY").add(n,"days").format("MM-DD-YYYY");u(r),j.current=a}D.current=requestAnimationFrame(e)}))}return function(){return D.current&&cancelAnimationFrame(D.current)}}),[c]),Object(r.useEffect)((function(){c&&n>=i-1&&(o(),cancelAnimationFrame(D.current))}),[n,i,c]),Object(q.jsxs)(d,{children:[Object(q.jsx)(s,{children:Object(q.jsx)(f,{size:"small",theme:b,sx:{color:"info.main"},min:0,max:i,valueLabelDisplay:"on",valueLabelFormat:a,value:n,marks:[{value:0,label:"January 22, 2020"},{value:.25*i},{value:.5*i},{value:.75*i},{value:i,label:l()().subtract(1,"day").format("MMMM DD, YYYY")}],onChange:function(e,a){t(a);var r=l()("01-22-2020","MM-DD-YYYY").add(n,"days").format("MM-DD-YYYY");console.log(a,r),u(r)}})}),Object(q.jsx)(B.a,{onClick:function(){setTimeout((function(){c&&cancelAnimationFrame(D.current),o()}),10)},children:c?Object(q.jsx)(H.a,{color:"info",sx:{fontSize:"2rem","&:hover":{cursor:"pointer"}}}):Object(q.jsx)(K.a,{color:"info",sx:{fontSize:"2rem","&:hover":{cursor:"pointer"}}})})]})};var U=function(){var e=Object(w.b)(),t=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAPBOX_ACCESS_TOKEN,Object(w.c)((function(e){return e.covidData}))),a=(t.startDate,t.dataChunks),n=Object(r.useState)({longitude:-96.4247,latitude:10.51073}),i=Object(d.a)(n,2),c=i[0],o=(i[1],Object(r.useState)({dateCount:0,totalDays:l()().subtract(1,"day").diff(l()("01-22-2020","MM-DD-YYYY"),"days"),startDate:"01-22-2020",endDate:l()().subtract(1,"day").format("MM-DD-YYYY"),lastLoadedDate:l()("01-22-2020","MM-DD-YYYY").add(200,"days").format("MM-DD-YYYY"),viewDate:"01-22-2020",isPlaying:!1})),s=Object(d.a)(o,2),f=s[0],b=s[1],D=Object(A.a)(),j=D.workerApi,v=(D.cleanup,function(e){var t;t=a.length<2?l()(e,"MM-DD-YYYY").add(200,"days"):l()(e,"MM-DD-YYYY").add(100,"days");var n=l()().subtract(1,"day");return t.isAfter(n)&&(t=n),t}),m=function(t){var a=function(e,t){for(var a=[],n=l()(e,"MM-DD-YYYY");n.isSameOrBefore(t);)a.push(n.format("MM-DD-YYYY")),n=n.add(1,"day");return a}(t,v(t)),n=[];a.map((function(t){n.push(e(g(t)))})),Promise.all(n).then((function(e){return j.scrubData(e).then((function(e){return e})).catch((function(e){return console.log("err",e)}))})).then((function(t){e(M({data:t,dateRange:a}))})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){m("01-22-2020")}),[]),Object(r.useEffect)((function(){var e,t,a=l()(f.lastLoadedDate,"MM-DD-YYYY").diff(l()(f.viewDate,"MM-DD-YYYY"),"days");t=a<0?f.viewDate:f.lastLoadedDate;var n=(e=v(t).subtract(1,"day")).isSame(l()().subtract(1,"day")),r=l()().subtract(1,"day").diff(l()(e,"MM-DD-YYYY"),"days");if(Math.abs(a)<190&&r>=1){if(m(f.lastLoadedDate),n)return;a>0&&b((function(t){return Object(u.a)(Object(u.a)({},t),{},{lastLoadedDate:e.format("MM-DD-YYYY")})}))}}),[f.viewDate,f.lastLoadedDate,a]);var O=Object(r.useCallback)((function(e){b((function(t){return Object(u.a)(Object(u.a)({},t),{},{dateCount:e||t.dateCount++})}))}),[]),Y=Object(r.useCallback)((function(e){b((function(t){return Object(u.a)(Object(u.a)({},t),{},{viewDate:e})}))}),[]),p=Object(r.useCallback)((function(){setTimeout((function(){b((function(e){return Object(u.a)(Object(u.a)({},e),{},{isPlaying:!e.isPlaying})}))}),10)}),[]),h={longitude:c.longitude,latitude:c.latitude,zoom:-.5,pitch:0,bearing:0},y=Object(r.useMemo)((function(){return[new R.a({id:"earth-sphere",data:[0],mesh:new T.a({radius:63e5,nlat:18,nlong:36}),coordinateSystem:N.a.CARTESIAN,getPosition:[0,0,0],getColor:[20,20,255]}),new L.a({id:"earth-land",data:"https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson",stroked:!1,filled:!0,getFillColor:[20,85,20]})]}),[]),C=Object(r.useMemo)((function(){return a.map((function(e,t){var a=e.data.filter((function(e){return e[0].date===f.viewDate})),n=e.dateRange.includes(f.viewDate);return new _.a({id:"confirmed-cases-".concat(t),data:a[0],diskResolution:12,pickable:!0,extruded:!0,elevationScale:1,visible:n,getFillColor:function(e){return[255,255-e.confirmed/2/255,0]},filled:!0,radius:1e3,coverage:100,getFilterValue:function(e){return[null!==e.confirmed&&e.confirmed>0?.5:10]},filterRange:[[0,1]],extensions:[new E.a({filterSize:1})],getPosition:function(e){if(void 0!==e.coordinates)return[e.coordinates.longitude,e.coordinates.latitude]},getElevation:function(e){return e.confirmed}})}))}),[f.viewDate]);return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("div",{className:"App",children:a.length>0&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(J,{dateCount:f.dateCount,totalDays:f.totalDays,onChange:O,viewDate:f.viewDate,toggleIsPlaying:p,isPlaying:f.isPlaying,setViewDate:Y}),Object(q.jsx)(k.a,{initialViewState:h,controller:!0,layers:[y,C],views:new P.a,parameters:{clearColor:[0,0,0,1]},getTooltip:function(e){var t=e.object;if(t){var a="";return[{title:"Date",fieldName:"date"},{title:"Country/Region",fieldName:"countryRegion"},{title:"Province/State",fieldName:"provinceState"},{title:"County",fieldName:"county"},{title:"Confirmed",fieldName:"confirmed"},{title:"Deaths",fieldName:"deaths"}].forEach((function(e){t[e.fieldName]&&(a+="<div>".concat(e.title,": ").concat(t[e.fieldName],"</div>")),"county"===e.fieldName&&(a+="<br/>")})),{html:a,style:{textAlign:"left",borderRadius:"5px",padding:"15px"}}}},useDevicePixels:!1,preventStyleDiffing:!0})]})})})},X=Object(v.a)({reducer:{covidData:C},middleware:function(e){return e({serializableCheck:!1})},devTools:{stateSanitizer:function(e){return e.covidData.dataChunks?Object(u.a)(Object(u.a)({},e.covidData),{},{dataChunks:"<<LONG_BLOB>>"}):e.covidData},actionSanitizer:function(e){return"ADD_DATA_CHUNK"===e.type&&e.data?Object(u.a)(Object(u.a)({},e),{},{data:"<<LONG_BLOB>>"}):e}}});o.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(w.a,{store:X,children:Object(q.jsx)(U,{})})}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.5b9a062b.chunk.js.map