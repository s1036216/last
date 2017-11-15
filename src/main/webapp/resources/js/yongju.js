var yongju=yongju || {};
yongju.common=(()=>{
   var init=(ctx)=>{
      onCreate();
      yongju.session.init(ctx);
      yongju.index.init();
   };
   var onCreate=()=>{
      setContentView();
   };
   var setContentView=()=>{};
   return {init:init};
})();

yongju.index=(()=>{
   var ctx,img,js;
   var init=()=>{
      js=$$('j');
      img=$$('i');
      ctx=$$('x');
      onCreate();
   };
   var onCreate=()=>{
        setContentView();
   };
   var setContentView=()=>{
        $('<div/>')
        .appendTo('#content')
        .attr('id', 'yj-container')
        .css({'width':'100%','height':'100%'});
        $('<div/>')
        .appendTo('#yj-container')
        .attr('id','yj-content')
        .css({'width':'65%','float': 'left','margin-top':'4%','margin-left':'1.1%'});
        /*google map*/
        $('<div></div>')
        .appendTo('#yj-container')
        .attr('id','gmap')
        .css({'width':'33%','float': 'right','margin-top':'4%','background-color': 'pink','height':'100%'}).text('Google API');
        //float: left;margin-top:4%; height: 100%;
       
    if(sessionStorage.getItem('searchCity') !=null){
	    $.ajax({
	    	url : ctx+'/put/searchCity',
	    	method : 'post',
	    	datType: 'json',
	    	contentType : 'application/json',
	    	data : JSON.stringify({
	    		action : sessionStorage.getItem('searchCity')
	    	}),
	    	success : list=>{
	    		alert('성공');
	    		var row='';
	             $.each(list,(i,j)=>{
	                row +='<div class="hostels" onclick="yongju.test.temp(\''+j.hostSerial+'\')" '
	                	 +'style="float:left;width:290px;height:280px;margin-right:40px;cursor: pointer;">' 
	                    +'<img src="'+j.infoImg+'" style="width:321.58px;height:214.38px"/>'
	                     +'<span >'+j.price+'</span></br>'
	                     +'<span > '+j.residenceName+' </span>'
	                     +'<span > 침대 3개</span></br>'
	                     +'<span><span class="glyphicon glyphicon-star" style="color: #006666"></span>'
	                  +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
	                  +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
	                  +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
	                  +'<span class="glyphicon glyphicon-star" style="color: #006666"></span></span>'
	                     +'</div>';
	             });
	             $('#yj-content').append(row);
	    	},
	    	error : (x,s,m)=>{
	    		alert('통신 에러::'+m);}
	     });
        	 
        }else{
        	   $.ajax({
                   url : ctx+'/put/listimg',
                   method : 'post',
                   dataType:'json',
                   contentType : 'application/json',
                   success : list=>{
                      var row='';
                        $.each(list,(i,j)=>{
                           row +='<div class="hostels" onclick="yongju.test.temp(\''+j.host_serial+'\')" '
                           	 +'style="float:left;width:290px;height:280px;margin-right:40px;cursor: pointer;">' 
                               +'<img src="'+j.info_img+'" style="width:321.58px;height:214.38px"/>'
                                +'<span >'+j.price+'</span></br>'
                                +'<span > '+j.residence_name+' </span>'
                                +'<span > 침대 3개</span></br>'
                               /* +'<span><span class="glyphicon glyphicon-star" style="color: #006666"></span>'
                             +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
                             +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
                             +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
                             +'<span class="glyphicon glyphicon-star" style="color: #006666"></span></span>'*/
                                +'</div>';
                        });
                        $('#yj-content').append(row);
                    }
                });
        }
     
        $('#gmap').load(ctx+'/gmap');
       /* $('#gmap').after('<div/>').attr('id','mapSpace');
        $('#mapSpace').css('height','800px');*/
     
   };
   return {init:init};
})();
yongju.test={
		temp : function(x){
		
			alert(x+' click');
		/*   $('#content').empty(); 
		    $('#airbnbText').remove();
		    	hee.common.init(ctx);*/
		//  location.href= hee.rev.init(x);
		  $.getJSON(hee.rev.init(x));
			
		}
};
yongju.session={
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
var $$= function(x){return yongju.session.getPath(x);};