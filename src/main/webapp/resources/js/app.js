/*hayun  병하기전*/
var app =app ||{};
app.common=(function(){
	var init=x=>{		
		
		app.session.init(x);		
		app.main.init();
	};
	return{init:init};
})();

app.loginRequire=(function(){
	var init =function(){};
	return {init:init};
	
})();

app.main=(()=>{
	var $navbar, $navbar2, $content, img, js,temp,footer, ctx;
	var init=()=>{	
	
		ctx = $$('x');
		img = $$('i');
		js = $$('j');
		$navbar=$('#navbar');
		temp=js + '/template.js';
		bongki = js + '/bongki.js';
		onCreate();
	};
	

	var onCreate=()=>{
		$.getScript(temp,()=>{
	
	         $('body').html(compUI.div('container'));
	         $('#container').append(compUI.div('navbar')).css('mim-width','800px');
	         
	        
	         if(sessionStorage.getItem('smemberid')==null){
	        	
	         $('#navbar').append(main.navbar2());
	         }else{
	        
	         $('#navbar').append(main.navbar());
	         };
	        
	         $('#navbar').append(main.navbarTxt());
	        
			$('#mainLogobox').after('<nav/>',{'id':'mainNabMenu'});
			/* 프로필가기mainProfile */
			 $('#mainProfile').click(e=>{
			   
			    	//$('#navbar').append(main.navbar());
					$('#navbar').html(app.navbar.init()).css({'padding-top':'10px','margin-bottom':'5%'});
					  $('#airbnbText').remove();
			    	$('#content').empty();
			    	$('#footer').html(main.footer()).css({'margin-top': '55%'});
					   chobongki.profile.init();
			    });
			
			 $('#mainOut').click(e=>{
	            
	                $('#content').empty();
	                $('#navbar').html(app.navbar.init());//.css({'padding-top':'10px','margin-bottom':'5%'});
	                sessionStorage.clear();
	                app.common.init(ctx);
	             });
			 
		    $('#mainHelp').click(e=>{
		    	
		    });
	
		    $('#mainLogin').attr({'data-toggle':'modal', 'data-target':"#myModal111"}).click(e=>{		    	
		  
		    	 chobongki.common.init(ctx);
		    });
		    
		    $('#mainJoin').click(e=>{
	        
	              $('body').html(cho.join());
	                chobongki.index.init(ctx); 
	          });
		    
		    // mainHost,...
		    $('#mainHost').click(e=>{
		    
		    	$('#navbar').html(app.navbar.init()).css({'padding-top':'10px','margin-bottom':'5%'});
		    	 $('#airbnbText').remove();
		    	 $('#content').empty();
			    $('body').css({'background-color':'#FAFAFA'});
			    hee.common.init(ctx);
			    hee.register.init();
		    });
		    
		    $('#mainAdmin').click(e=>{
		    
		    	$('body').empty();
		    	$('#content').remove();
		    	jw.common.init(ctx);
		    });
		    
		    $('#mainSearch').click(e=>{
		    	$('#mainSearch').tooltip();
		    	var _searchCity =$('#searchCity').val();
		    	if(_searchCity == null){
		    		$('#airbnbText').empty();
		    		$('#content').empty();
		    		 yongju.common.init(ctx);
		    	}else{
		    		 sessionStorage.setItem('searchCity',_searchCity);
				    	$('#airbnbText').empty();
			    		$('#content').empty();
			    		 yongju.common.init(ctx);
		    	}
			 
		    });
		  
		    $('#navbar').after(compUI.div('content'));
		  
		    $('#content').addClass('hy-content').css({'height':'100%','width':'100%'});
		 
		    $('#content').append(mainPG.lookup());
		  
		    $('#content').append(mainPG.hostels());		    
		 
		    $('#content').append(mainPG.top3());
		 
		    $('#roomsSeeAll').append(compUI.btn('roomsSeeAllBtn','button'));
		   
		    $('#lookupHostel').click(e=>{
		    	
		    	$('#navbar').html(app.navbar.init());
		    	$('#mainLogobox').append(mainPG.searchInput());//mainPG.searchInput
		    	$('#airbnbText').remove();
		    	$('#content').empty();
		    	sessionStorage .removeItem('data');
		    	yongju.common.init(ctx);
		    });
		    
		    $('#roomsSeeAllBtn').css({'background-color':'transparent','border-color':'transparent'}).text('전체보기 >').click(e=>{
		    
		    	$('#navbar').html(app.navbar.init());//.css({'padding-top':'10px','margin-bottom':'5%'});
		    	$('#mainLogobox').after(mainPG.searchInput());
		    	$('#airbnbText').remove();
		    	$('#content').empty();
		    	sessionStorage .removeItem('data');
		    	yongju.common.init(ctx);
		    });
		    
		    /* 인기있는 숙소 each */
		    /* top3숙소 */
		    var roomarr=
		    	[{a:'파리',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg'},
		    	{a:'마이애미',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg'},
		    	{a:'도쿄',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg'},
		    	{a:'케이프타운',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/0e2e4ace-7f04-4895-b7c6-482c99e69908.jpg'},
		    	{a:'런던',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/ebbb24af-52d6-490c-89e9-16cc560140e8.jpg'},
		    	{a:'서울',d:'https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/0c79a1b5-333a-421b-b9e3-effb8b9b9958.jpg'}
		    	
		    	];
		    
		    var rommbanner='';
		    $.each(roomarr,(i,j)=>{
		    	// rooms
		    	rommbanner+='<div style="float:left;width:16%;">'
		    	+'  <img src="'+j.d+'" style="width: 170px;" /><br>'
		    	+'<span style="padding: 8px; font-size:1.3em; font-weight:600; color:#484848;">'+j.a+'</span>'
		    	+'</div>';
		    				    
		    });
		    
		    $('#rooms').html(rommbanner);
		  
		    //backup
/*		    $('#tophos').click(e=>{
		    	alert('ghtmxzkdfjal');
		    });*/
		    
/*		    $.ajax({
		    	url :ctx+'/put/listhostels',
		    	method : 'post',
		    	datType: 'json',
		    	contentType : 'application/json',
		    	success : list=>{
		    		 var hostelbanner='';
		    		 $.each(list,(i,j)=>{
		    			 hostelbanner+='<div class="hy-slide"><a id="'+j.hostSerial+'" onclick="app.selectHost.temp(\''+j.hostSerial+'\')" style="margin-left:0px; text-decoration: none;cursor: pointer;" target="_blank" >'
				 		    	//+'<div style="background-image : url('+j.info_img+')" ></div>'
		    				    +'  <img src="'+j.infoImg+'" style="height: 300px;width:600px; " alt="" />'
				 		    	+'  <div><span style="padding: 8px;font-size:15px; font-weight:600; color:#484848;">₩'+j.price+'</span>'
				 		    	+'<span style="padding: 8px;font-size:12px; font-weight:600; color:#484848;" id="findHost">'+j.residenceName+'</span><br/><span style="padding: 8px;"></span>'
				 		    	+'<span style="padding: 8px;">별점</span>'
				 		    	+'</div>'
				 		    	+'</a>'
				 		    	+'</div>';
		 		    });
		    		 $('#hostels').html(hostelbanner);
		    	},
		    	error : (x,s,m)=>{
		    		alert('통신 에러::'+m);}
		    });*/
		   
		    $.getJSON(ctx+'/put/listhostels',list=>{
		   	
		    		
		    		var jy_slider='';
		    		$.each(list,(i,j)=>{
		    			jy_slider +='<div class="carousel-cell" id="'
		    				+j.hostSerial
		    				+'" onclick="app.selectHost.temp(\''+j.hostSerial+'\')">'
			    			+'		<img class="carousel-img" src="'+j.infoImg+'" />'
			    			+'  </div>'
			    			+'</div>'
			    			;
		 		    });
		    	
		    		$('#jy-flickity').append(jy_slider);
		    		
				    $('.main-carousel').flickity({
				    	  cellAlign: 'center',
				    	  autoPlay: 1500
				    	});
				   
		    	});
		   
		    	
		  
		    

		    $('#hostPic').click(e=>{
		    	
		    });
			
		    /* 숙소 */
		    
		    // hostels
		    var hostelarr=[{'a':'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'},
		    			   {'a':'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'},
				    	   {'a':'₩33,797',b:'Villa Amonteera, Luxury with Fa...',c:'아파트 · 침대3개',d:img+'/hostelpic1.png',e:'별점'}];
		   
		    
			/* jw-footer */
		 
			$('#container').after(main.footer());
		
	         
		});
			
		

		
   /* 인기있는 호스텔 */
	var top3='<!-- top3 -->'
    +'<div id="top3" style="position: relative; width:90%">'
              +'<div style="margin-left: 16%;">'
                   +'<span style="width: 64%;">'
                   +'<h3 style="font-weight:bold; color=484848;">인기있는 숙소</h3>'
                   +'</span>'
                   +'<button class="hy-seeAllBtn" >전체보기<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 10px; width: 10px; fill: currentcolor;"><path fill-rule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"></path></svg></button>'
             +'</div>'
              +'<table  style="width: 500px; margin: 0 16% 6% 16%">'
                   +'<tr id="hostelList">'

                   +'</tr>'
                +'</table>'
          +'</div>';
	

	};
	
	
	
		return{init:init};
	})();
app.selectHost={
		
		temp:function(x){
		
			 $.getJSON(hee.rev.init(x));
			 $('#airbnbText').remove();
		}
};
var mainPG={lookup:()=>{return '<div id="lookup" style="width:90%;  height:200px; margin:3% 9%">'
	 +'  <div id="around" style="width:70%; margin-left:10%;">'
	 +' <h3 style="font-weight: bold;font-size: xx-large;color: #434343;margin-bottom: -2px;">에어비앤비 둘러보기</h3>'
	 +'</div>'
	 +'<br/>'
	+'	 <div style="width:70%; height:150px; margin-left:10%;">'
	+'<a id="lookupHostel" style="text-decoration:none; cursor: pointer; z-index:900;">'
	+'  <div id="box1" style="float:left; width:22%; height:50%; border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;">'
	+'     <div id="Imagebox1" style="float:left; width:40%; height:100%; background-image:url(https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'     <div id="textbox1" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px;">'
	+'           숙소'
	+'        </span>'
	+'     </div>'
	+'  </div>'
	+'</a>'
	+'  <div id="box2" style="margin-left:20px; float:left; width:22%; height:50%;' 
	+'     border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;">'
	+'     <div id="Imagebox2" style="float:left; width:40%; height:100%;'
	+'     background-image:url(https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'<a style="text-decoration: none;" title="미구현 기능입니다.">'
	+'     <div id="textbox2" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px; width: 100%">'
	+'        트립'
	+'        </span>'
	+'     </div>'
	+'</a>'
	+'  </div>'
	+'  <div id="box3" style="margin-left:20px; float:left; width:22%; height:50%;' 
	+'     border: 1px solid #EAEAEA; box-shadow:3px 3px 8px #EAEAEA; display: inline-block;;">'
	+'     <div id="Imagebox3" style="float:left; width:40%; height:100%;'
	+'     background-image:url(https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg);'
	+'     background-size: cover;">'
	+'     </div>'
	+'<a style="text-decoration: none;" title="미구현 기능입니다.">'
	+'     <div id="textbox3" style="float:left; width:30%; height:100%; margin-top: 10%; margin-left:5%;">'
	+'        <span style="font-size:17px;">'
	+'           음식'
	+'        </span>'
	+'     </div>'
	+'</a>'
	+'  </div>'
	+' </div>'
	+'</div>'
	+'<div  class="modal fade" id="myModal111" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
    +'<div class="modal-dialog"><br/>'
    +'       <div class="modal-content">'
        +'         <div class="modal-header" style="margin-left: 14%;">'
        +'         <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>'
        +'         <div class="modal-title" id="myModalLabel" style="width: 50%;">'
        +'            <div style="width: 30px; display: inline-block;">'
        +'            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:2em;width:2em;display:block;fill:#FF5A5F;" data-reactid="25">'
        +'            <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" data-reactid="26"></path>'
        +'            </svg>'
        +'<br/><div>' 
    +'<br/>'
    +'<br/>'
    +' <div id="logincenter"> '
    +' <form class="cho_form" action="" method="post"> '
    +'   <div id="container_cho"> '
    +'   <div id="facebookDiv"> '// 페이스북
    +'<div class="fb-login-button" data-width="350" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>'
    +'   </div> '
    +'<hr/>'
    +'<div id="email">' // 이메일
    +'   </div> '
    +'<div id="pass">'  // 비밀번호

    +'   </div> '
    +' <input  type="checkbox" name="" value=""> 비밀번호저장'
    +'<br/>'
    +'<labal style="color:green"> 전화번호 사용.비밀번호가 생각나지않으세요? </labal> '
    +'   <div id="loginDiv"> '// 로그인

    +'   </div> '
    +'<hr/>'
    +'   </div> '
    +'   <div id="container_cho" > '
    
    +'   <p>에어비엔비 계정이 없으세요?  </p>'
    +'   <div id="joinDiv"> '// 회원가입
    +'  </div></div> '
     +' </form> '
    +' </div></div></div></div></div></div></div> '
    +'<div  class="modal fade"  id="myModal222" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
    +'<div class="modal-dialog"><br/>'
    +'       <div class="modal-content">'
        +'         <div class="modal-header" style="margin-left: 14%;">'
        +'         <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>'
        +'         <div class="modal-title" id="myModalLabel" style="width: 50%;">'
        +'            <div style="width: 30px; display: inline-block;">'
        +'            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:2em;width:2em;display:block;fill:#FF5A5F;" data-reactid="25">'
        +'               <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" data-reactid="26"></path>'
        +'            </svg>'
        +'<br/>'
     +' <div id="logincenter"> '
     +' <form class="cho_form" action="" method="post"> '
     +'   <div id="container_cho"> '
     +'<div style="text-align:center">'
     +'<label style="margin: 0 auto;">페이스북 또는 구글로 회원 가입하세요. </label> '
     +'</div>'
     +'<hr/>'
     +'<div id="joinaddBtn1">' // 회원가입
     +'</div>'
     +'<div id="joinaddBtn2">' // 회원가입
     +'</div>'
     +'<div id="joinaddBtn3">' // 회원가입
     +'</div>'
     +'<div id="joinaddBtn4">' // 회원가입
     +'</div>'
     +'<br/>'
     +'<label style="margin: 0 auto;">생년월일</label> '
     +'<abbr title="회원 가입을 하시려면 만 18세 이상이어야합니다.생일은 다른 회원에게는 공개되지 않습니다">?</abbr>'
     +'<br/>'
     +'<br/>'
     +'<div style="" >'
     +'<select class="cho_select" id="month" name="color">'
     +'<option value="1">1월</option>'
     +'<option value="2">2월</option>'
     +'<option value="3">3월</option>'
     +'<option value="4">4월</option>'
     +'<option value="5">5월</option>'
     +'<option value="6">6월</option>'
     +'<option value="7">7월</option>'
     +'<option value="8">8월</option>'
     +'<option value="9">9월</option>'
     +'<option value="10">10월</option>'
     +'<option value="11">11월</option>'
     +'<option value="12">12월</option>'
     +'  </select> &nbsp&nbsp'
     +'<select class="cho_select" id="day" name="color">'
     +'<option value="1">1일</option>'
     +'<option value="2">2일</option>'
     +'<option value="3">3일</option>'
     +'<option value="4">4일</option>'
     +'<option value="5">5일</option>'
     +'<option value="6">6일</option>'
     +'<option value="7">7일</option>'
     +'<option value="8">8일</option>'
     +'<option value="9">9일</option>'
     +'<option value="10">10일</option>'
     +'<option value="11">11일</option> '
     +'<option value="11">12일</option> '
     +'<option value="11">13일</option> '
     +'<option value="11">14일</option> '
     +'<option value="11">15일</option> '
     +'<option value="11">16일</option> '
     +'<option value="11">17일</option> '
     +'<option value="11">18일</option> '
     +'<option value="11">19일</option> '
     +'<option value="11">20일</option> '
     +'<option value="11">21일</option> '
     +'<option value="11">22일</option> '
     +'<option value="11">23일</option> '
     +'<option value="11">24일</option> '
     +'<option value="11">25일</option> '
     +'<option value="11">26일</option> '
     +'<option value="27">27일</option> '
     +'<option value="28">28일</option> '
     +'<option value="29">29일</option> '
     +'<option value="30">30일</option> '
     +'<option value="31">31일</option> '
     +'  </select >&nbsp&nbsp&nbsp&nbsp'
     +'<select class="cho_select" id="year" name="color">'
     +'<option value="1">1970년</option>'
     +'<option value="2">1971년</option>'
     +'<option value="3">1972년</option>'
     +'<option value="4">1973년</option>'
     +'<option value="5">1974년</option>'
     +'<option value="6">1975년</option>'
     +'<option value="7">1976년</option>'
     +'<option value="8">1977년</option>'
     +'<option value="9">1978년</option>'
     +'<option value="10">1979년</option>'
     +'<option value="11">1980년</option> '
     +'<option value="11">1981년</option> '
     +'<option value="11">1982년</option> '
     +'<option value="11">1983년</option> '
     +'<option value="11">1984년</option> '
     +'<option value="11">1985년</option> '
     +'<option value="11">1986년</option> '
     +'<option value="11">1987년</option> '
     +'<option value="11">1988년</option> '
     +'<option value="11">1989년</option> '
     +'<option value="11">1990년</option> '
     +'<option value="11">1991년</option> '
     +'<option value="11">1992년</option> '
     +'<option value="11">1993년</option> '
     +'<option value="11">1994년</option> '
     +'<option value="11">1995년</option> '
     +'<option value="27">1996년</option> '
     +'<option value="28">1997년</option> '
     +'<option value="29">1998년</option> '
     +'<option value="30">1999년</option> '
     +'<option value="31">2000년</option> '
     +'  </select>'
     +'</div>'
     +'<br/>'
     +' <input type="checkbox" name="" value="" > 에이비앤비와 에어비앤비 파트너의 마케팅 및 정책 관련 소식을 수신하고 싶습니다.'
     +'<br/>'
     +'<br/>'
     +'<p style="color:gray; "><h5>회원 가입 또는 계속하기를 클릭하면 에어비앤비의 서비스 약관,결제 서비스약관,개인정보 보호정책,차별 금지 정책에 동의하는것입니다.</h5></p> '
     +'<div id="addjoin">'
     +'</div>'
     +'<hr/>'
     +'<label style="color:black">이미 에어비앤비 계정이 있나요? </labal> '
     +'<div id="addlogin">'
     +'</div>'
     +'   </labal></div> '
      +' </form> '
     +' </div></div></div></div></div></div></div>';},
	top3 :()=>{return '<div style="width: 70%; margin: -7% 17.5%;">'
	+'	<div  style="width: 50%;position: relative;">'
	+'<span><h3 style="font-weight: bold;font-size: xx-large;color: #434343;margin:0 0px 26px 9px">인기 여행지</h3></span>'
	+'<span id="roomsSeeAll" style="position: absolute;right: 10%; top: 0;">'
	+'</span></div>'
	+'<div id="rooms" >'
	+'</div>'
    +'  </div>';
	},
	hostels:()=>{return '<div style="width: 80%; height:400px; margin: 6% 18%; position:relative;">'
		+'	<div  style="width: 90%;position: relative;">'
		+'<span><h3 style="font-weight: bold;font-size: xx-large;color: #434343;margin-bottom: -2px;">숙소</h3></span>'
		+'<span id="roomsSeeAll" style="position: absolute;right: 10%; top: 0;">'
		// +'<button style="background-color: transparent;border-color:
		// transparent;">전체보기></button>'
		+'</span></div>'
		+'<div style="width:100%;margin: 43px 40px 9px -131px;"><div id="jy-flickity" class="main-carousel"></div></div>'
		/*+'<div id="hy-hostelsSlide">'
		+'<div id="hostels" class="hy-hostelsSlide-wrapper" style="maring-left:10px;">'
		+'</div>'
		+'</div>'*/
	    +'  </div>';},
	  searchInput : ()=>{return '<div style="width: 30%;">'
	       +' <div class="inner-addon left-addon" style="position: relative;">'
	       +'    <i class="glyphicon glyphicon-search"></i>'
	       +'    <input id="searchCity" type="text" class="form-control" aria-describedby="sizing-addon1" placeholder="&quot;서울&quot; 에 가보는건 어떠세요?">'
	       +'    <button id="mainSearch" type="submit" class="hy-air-mainSearchBtn">'
	       +'     검색'
	       +'    </button>'
	       +' </div>'
	       +' </div>';}
};



/* navbar */
app.navbar=(function(){
	var js,temp,ctx;
	var init=()=>{		
		ctx = $$('x');
		img = $$('i');
		js = $$('j');
		temp=js + '/template.js';
		onCreate();
	};
	var onCreate=function(){
		
		$.getScript(temp,()=>{
			main.navbar();
			$('#mainLogobox').after('<nav/>',{'id':'mainNabMenu'});
			/* 프로필가기mainProfile */
			 $('#mainProfile').click(e=>{
			    	
					$('#navbar').html(main.navbar()).css({'padding-top':'10px','margin-bottom':'5%'});
					 $('#airbnbText').remove();
			    	$('#content').empty();
			    	$('#footer').html(main.footer()).css({'margin-top': '55%'});
					   chobongki.profile.init();
			    });
			
			
		  
		    $('#mainJoin').attr({'data-toggle':'modal', 'data-target':"#myModal222"}).click(e=>{
		    	
				   chobongki.common.init();
		    });
		    $('#mainLogin').attr({'data-toggle':'modal', 'data-target':"#myModal111"}).click(e=>{		    	
		    	
		    			   chobongki.common.init(ctx);
		    });
		    $('#mainJoin').click(e=>{
	             
	              $('body').html(cho.join());
	                chobongki.index.init(); 
	          });
			 $('#mainOut').click(e=>{
	                
	                $('#content').empty();
	                $('#navbar').html(app.navbar.init());//.css({'padding-top':'10px','margin-bottom':'5%'});
	                sessionStorage.clear();
	                app.common.init(ctx);
	             });
			 
		    // mainHost,...
		    $('#mainHost').click(e=>{
		    	
		    	
		    	 $('#content').empty();
		    	 $('#airbnbText').remove();
			    $('body').css({'background-color':'#FAFAFA'});
			    hee.common.init(ctx);
			    hee.register.init();
		    });
		    
		    $('#mainAdmin').click(e=>{
		    	
		    	$('body').empty();
		    	$('#content').remove();
		    	jw.common.init(ctx);
		    });
		    
		    $('#mainLogobox').click(e=>{
		    	sessionStorage.removeItem('searchCity');
		    	app.common.init(ctx);
		    }); 
		});
	};
	return {init: init}
})();


/* session */
app.session=
   {
      init : (x)=>{
    	
            sessionStorage.setItem('x',x);
            sessionStorage.setItem('j',x+'/resources/js');
            sessionStorage.setItem('c',x+'/resources/css');
            sessionStorage.setItem('i',x+'/resources/img');
              },
      getPath : (x)=>{
            return sessionStorage.getItem(x);
        }
   };

var $$= function(x){return app.session.getPath(x);};
