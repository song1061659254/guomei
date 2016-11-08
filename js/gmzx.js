//导航轮播
$(document).ready(function(){
    var gmic=$(".gmic");
    var wid=gmic.width();
    console.log(wid)
    var ui_prev=$(".ui-prev")[0];
    var ui_next=$(".ui-next")[0];
    var ick=$(".gmic .ick");

    var now=0;
    var next=0;
    ui_next.onclick=function(){
        next=now+1;
        if(next>=ick.length){
            next=0;
        }

        ick.eq(next).css("left",wid+"px").end().eq(now).animate({left:-wid}).end().eq(next).animate({left:0});
        now=next;
    }
    ui_prev.onclick=function(){
        next=now-1;
        if(next<0){
            next=ick.length-1;
        }

        ick.eq(next).css("left",-wid+"px").end().eq(now).animate({left:wid}).end().eq(next).animate({left:0});
        now=next;
    }
})

// 关闭close
$(document).ready(function(){
    var close=$("#nav .close")[0];
    close.onclick=function() {
      $("#nav").remove()
    }
})

// 搜索轮播
$(document).ready(function(){
    var Rollhd=$(".Rollhd")[0];
    var hdtj=$(".hdscroll .hdtj");   
    // console.log(hdtj)
    var height=$(".Rollhd").height();
    // console.log(height)
    var up=$(".Rollbtn .up")[0];
    var down=$(".Rollbtn .down")[0];

    var t=setInterval(run,2000);
    var now=0;
    var next=0;

    function run(){
        next=now+1;
        if(next>=hdtj.length){
                next=0;
        }
        
        hdtj.eq(next).css("top",height+"px").end().eq(now).animate({top:-height}).end().eq(next).animate({top:0});
        now=next;
    }

    Rollhd.onmouseover=function(){
        clearInterval(t);
    }
    Rollhd.mouseout=function(){
            t=setInterval(run,2000);
    }
    down.onclick=function(){
        next=now-1;
        if(next<0){
            next=hdtj.length-1;
        }

        hdtj.eq(next).css("top",-height+"px").end().eq(now).animate({top:height}).end().eq(next).animate({top:0});
        now=next;
    }
    up.onclick=function(){
        run();
    }

})

//猜你喜欢
$(document).ready(function(){
    var guess=$(".guess")[0];
    var change=$(".change")[0];
    var guess_main=$(".guess_main");
    var kuan=$(".guess").width();
    // console.log(kuan)

    var now=0;
    var next=0;
    var t=setInterval(run1,5000);

    function run1(){
        next=now+1;
        if(next>=guess_main.length){
            next=0;
        }
        guess_main.eq(next).css("left",kuan+"px").end().eq(now).animate({left:-kuan}).end().eq(next).animate({left:0});
        now=next;
    }
    guess.onmouseover=function(){
        clearInterval(t);
    }
    guess.mouseout=function(){
            t=setInterval(run,2000);
    }
    change.onclick=function(){
        run1();
    }

})


// ban
$(document).ready(function(){
    $('.nav-item').hover(function(){
        var index=$(this).index();
        $('.menu').eq(index).css("display","block")
    },function(){
        var index=$(this).index();
        $('.menu').eq(index).css("display","none")
    })
})

//banner轮播
$(document).ready(function(){
        var flag=true;
        var n=0;
        var next=0;
        var width=$('.slide-tu').width();
        console.log(width)
        function tu(){
            if(!flag){
                return false;
            }
            flag=false;
            next=n+1;
            if(next>=$('.slide-tu .slide-ul').length){
                next=0;
            };
            $('.slide-tab .lis').removeClass("lis-first").eq(next).addClass("lis-first");
            // $('.slide-tu .slide-ul').eq(next).css("")
            $('.slide-tu .slide-ul').eq(next).css("left",width).end().eq(n).animate({left:-width},2000).end().eq(next).animate({left:0},2000,function(){
                flag=true;
            });
            n=next;
        }
        var t=setInterval(tu,2000);
        // 鼠标效果
        $('.slide-tu').mouseover(function(){
            clearInterval(t);
        }).mouseout(function(){
            t=setInterval(tu,2000);
        });
        // 左方向键
        $('.slide-tu .bannerLeft').click(function(){
            next=n-1;
            if(!flag){
                return false;
            }
            flag=false;
            if(next>=$('.slide-tu .slide-ul').length){
                next=0;
            };
            $('.slide-tab .lis').removeClass("lis-first").eq(next).addClass("lis-first")
            $('.slide-tu .slide-ul').eq(next).css("left",-width).end().eq(n).animate({left:width},2000).end().eq(next).animate({left:0},2000,function(){
                flag=true;
            });
            n=next;
        })
        // 右方向键
        $('.slide-tu .bannerRight').click(function(){
            tu();
        })
        // 按钮
       var index=$(".slide-tab .lis").index();

         $(".slide-tab .lis").hover(function(){
             var index=$(this).index();
             if(index>n){
                if(!flag){
                return;
             }
             flag=false;
             $(".slide-tu .slide-ul").eq(index).css("left",width)
             $(".slide-tu .slide-ul").eq(n).animate({left:-width},1000);
             $(".slide-tu .slide-ul").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             }else if(index<n){
                if(!flag){
                return;
             };
             flag=false;
                $(".slide-tu .slide-ul").eq(index).css("left",-width)
             $(".slide-tu .slide-ul").eq(n).animate({left:width},1000);
             $(".slide-tu .slide-ul").eq(index).animate({left:0},1000,function(){
                flag=true;
             })
             };
            $(".slide-tab .lis").removeClass("lis-first").eq(index).addClass("lis-first")
            n=index;
            next=index;
        })

        // 按钮选项
           
        var  nth=$(".lis-first .nth");
        console.log(nth)
        var  tp=$(".slide-ul .tp");
        console.log(tp)

        nth.on('mouseover','i',function(){
            var aa=$(this).index();
            console.log(aa)
            nth.find("i").removeClass("index");
            nth.find("i").eq(aa).addClass("index");

            tp.find("li").removeClass("first");
            tp.find("li").eq(aa).addClass("first");
        })

})
// jQuery.extend({
//         lunbo:function(obj,img){
//             obj.hover(function(){
//                 var index=$(this).index();
//                 obj.removeClass("index").eq(index).addClass("index");
//                 img.css("display","none").eq(index).css("display","block");
//             },function(){
//                 var index=$(this).index();
//                 obj.removeClass("index").eq(index).addClass("index");
//                 img.css("display","none").eq(index).css("display","block");
//             })
//         }
// })


//楼层跳转
$(document).ready(function(){
    var cheight=document.documentElement.clientHeight;
    var cwidth=document.documentElement.clientWidth;
    var floor=$('.floor');
    var floor_lis=$('.etitle');
    var floor_nav=$('.floor-nav')[0];
    var nheight;
    var zsj=$(".zsj");
    var now;
    var flag=true;
    var flag2=true;
    for(var i=0;i<floor.length;i++){
        floor[i].h=floor[i].offsetTop;
    }
    window.onscroll=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var top=obj.scrollTop;
        if(top>=floor[0].h-300){
            floor_nav.style.display='block';
            nheight=floor_nav.offsetHeight;
            floor_nav.style.top=(cheight-nheight)/2+'px';
            if(flag==true){
                flag=false;
            }flag=true;
        }
        if(top<floor[0].h-300){
            floor_nav.style.display='none';
            if(flag2==true){
                flag2=false;
            }flag2=true;
        }
        // 出现对应的颜色
        for(var i=0;i<floor.length;i++){
            if(top>=floor[i].h-200){
                for(var j=0;j<floor_lis.length;j++){
                    // floor_lis[j].style.color='#625351';
                    floor_lis.eq(j).css("color","#625351")
                    zsj.eq(j).css("display","none")
                }
                // floor_lis[i].style.color='#C81576'
                floor_lis.eq(i).css("color","#C81623")
                zsj.eq(i).css("display","block")
                now=i;
            }
        }

        // 点击返回对应的楼层
        for(var i=0;i<floor_lis.length;i++){
            floor_lis[i].index=i;

            floor_lis[i].onclick=function(){

                // animate(document.body,{scrollTop:floor[this.index].h});
                $('html,body').animate({scrollTop:floor[this.index].h});
                now=this.index;
            }
            floor_lis[i].onmouseover=function(){
                if(this.index==now){
                    return;
                }
                this.style.color='#c81623'
            }
            floor_lis[i].onmouseout=function(){
                if(this.index==now){
                    return;
                }

                this.style.color='#625351'
                
            }
        }
    }
})



$(document).ready(function(){
//楼层轮播
   var fashion=$(".shang");
    for(var i=0;i<fashion.length;i++){
        lunBo(fashion.eq(i));
    }  
    function lunBo(fashion){
           var pics=fashion.find(".lunbotu");
            var cirs=fashion.find(".lis1");
            var fashion_left=fashion.find(".ban_left");
            var fashion_right=fashion.find(".ban_right");
            var n1=0;
            var next1=0;
            var fashion_width=fashion.width();
            var t1=setInterval(move1,2000);
                function move1(){
                next1=n1+1;
                if(next1>=pics.length){
                    next1=0;
                }
                pics.eq(next1).css({left:fashion_width});
                pics.eq(n1).animate({left:-fashion_width},1);
                pics.eq(next1).animate({left:0},1);
                for(var i=0;i<cirs.length;i++){
                    cirs.eq(i).css({background:"#3E3E3E"});
                }
                cirs.eq(next1).css({background:"#B61B1F"});
                n1=next1;
            }
            
            fashion.mouseover(function(){
                fashion_left.css("display","block");
                fashion_right.css("display","block");
                clearInterval(t1);
            });
            fashion.mouseout(function(){
                fashion_left.css("display","none");
                fashion_right.css("display","none");
                t1=setInterval(move1,2000);
            });
            fashion_left.click(function(){
                next1=n1-1;
                if(next1<0){
                    next1=pics.length-1;
                }
                pics.eq(next1).css({left:-fashion_width});
                pics.eq(n1).animate({left:fashion_width},1);
                pics.eq(next1).animate({left:0},1);
                for(var i=0;i<cirs.length;i++){
                    cirs.eq(i).css({background:"#3E3E3E"});
                }
                cirs.eq(next1).css({background:"#B61B1F"});
                n1=next1;
            })
            fashion_right.click(function(){
                move1();
            });
             for(var i=0;i<cirs.length;i++){
                cirs.eq(i).attr({index:i});
                cirs.eq(i).mouseover(function(){
                    if(n1<$(this).attr("index")){
                       pics.eq($(this).attr("index")).css({left:fashion_width});
                       pics.eq(n1).animate({left:-fashion_width},1);
                       pics.eq($(this).attr("index")).animate({left:0},1);
                       for(var i=0;i<cirs.length;i++){
                         cirs.eq(i).css({background:"#3E3E3E"});
                       }
                       $(this).css({background:"#B61B1F"});
                       n1=$(this).attr("index");    
                    }else if(n1>$(this).attr("index")){
                        pics.eq($(this).attr("index")).css({left:-fashion_width});
                        pics.eq(n1).animate({left:fashion_width},1);
                        pics.eq($(this).attr("index")).animate({left:0},1);
                        for(var i=0;i<cirs.length;i++){
                         cirs.eq(i).css({background:"#3E3E3E"});
                       }
                       $(this).css({background:"#B61B1F"});
                       n1=$(this).attr("index");
                    }
                });
            }
     }  


//楼层选项
    var F1=$(".floor-f1");
    var F1box=$(".F1");
    var hi=F1box.find(".hidden-1");
    xuXa(F1,hi);
    function xuXa(F,hi){
        var seek=F.find(".tab-item");

        var n=0;
        for(var i=0;i<seek.length;i++){
        seek.eq(i).attr({index:i}); 
        seek.eq(i).mouseover(function(){
            for(var j=0;j<hi.length;j++){
                hi.eq(j).css("display","none");
                seek.eq(j).removeClass("tab-selected");
                seek.eq(j).find("a").css("color","#666");
            }
            hi.eq($(this).attr("index")).css("display","block");
            $(this).addClass("tab-selected");
            $(this).find("a").css("color","#fff");
            n=$(this).attr("index");
        });
     }
   }

    var F2=$(".floor-f2");
    var F2box=$(".F2");
    var hi2=F2box.find(".hidden-1");
    xuXa(F2,hi2);

    var F3=$(".floor-f3");
    var F3box=$(".F3");
    var hi3=F3box.find(".hidden-1");
    xuXa(F3,hi3);

    var F4=$(".floor-f4");
    var F4box=$(".F4");
    var hi4=F4box.find(".hidden-1");
    xuXa(F4,hi4);

    var F5=$(".floor-f5");
    var F5box=$(".F5");
    var hi5=F5box.find(".hidden-1");
    xuXa(F5,hi5);

    var F6=$(".floor-f6");
    var F6box=$(".F6");
    var hi6=F6box.find(".hidden-1");
    xuXa(F6,hi6);

    var F7=$(".floor-f7");
    var F7box=$(".F7");
    var hi7=F7box.find(".hidden-1");
    xuXa(F7,hi7);

    var F8=$(".floor-f8");
    var F8box=$(".F8");
    var hi8=F8box.find(".hidden-1");
    xuXa(F8,hi8);

    var F9=$(".floor-f9");
    var F9box=$(".F9");
    var hi9=F9box.find(".hidden-1");
    xuXa(F9,hi9);


    var dian1=F1box.find(".dianji");
    dianji(F1,hi,dian1,F1box);
    var dian2=F2box.find(".dianji");
    dianji(F2,hi2,dian2,F2box);
    var dian3=F3box.find(".dianji");
    dianji(F3,hi3,dian3,F3box);
    var dian4=F4box.find(".dianji");
    dianji(F4,hi4,dian4,F4box);
    var dian5=F5box.find(".dianji");
    dianji(F5,hi5,dian5,F5box);
    var dian6=F6box.find(".dianji");
    dianji(F6,hi6,dian6,F6box);
    var dian7=F7box.find(".dianji");
    dianji(F7,hi7,dian7,F7box);
    var dian8=F8box.find(".dianji");
    dianji(F8,hi8,dian8,F8box);
    var dian9=F9box.find(".dianji");
    dianji(F9,hi9,dian9,F9box);

    function dianji(F,hi,dian,box){
        box.mouseover(function(){
            dian.css("display","block");
        });
        box.mouseout(function(){
            dian.css("display","none");
        });
        var seek=F.find(".tab-item");
        var n=0;
        dian.click(function(){
            n++;
            if(n>=7){
                n=0;
            }
            for(var j=0;j<hi.length;j++){
                hi.eq(j).css("display","none");
                seek.eq(j).removeClass("tab-selected");
                seek.eq(j).find("a").css("color","#666");
            }
            hi.eq(n).css("display","block");
            seek.eq(n).addClass("tab-selected");
            seek.eq(n).find("a").css("color","#fff");
        });

    }  
})  


//右边固定
$(document).ready(function(){

//返回顶部
            
        $(window).scroll(function(){  
                //当点击跳转链接后，回到页面顶部位置  
                var backup=$(".gd_xia .backup")[0];
                backup.onclick=function(){  
                    $('body,html').animate({scrollTop:0},1000);  
                } 
        });
//其他按钮
    var gwcar=$(".gm-aside .cart")[0];
    // console.log(gwcar);
    var neirong=$(".gm-aside .neirong");
    // console.log(neirong);

    gwcar.onclick=function(){
            neirong.css("display","block");     
    }

        // gwcar.click(function(){
        //     if(neirong.style.display=="none"){
        //        neirong.style.display="block";
        //     }else{
        //         neirong.style.display="none";
        //     }
        // })
        // 
        // console.log(neirong[0]);
        // //点击其他地方关闭
        // document.onclick=function() {
        //     neirong[0].style.display="none";
        // }

    var fanhui=$(".gm-aside .fanhui")[0];
    fanhui.onclick=function(){
        neirong.remove()
    }

    function fangzhi(gezi,tan){


            gezi.onmouseover=function(){
                tan.style.display='block'
            }
            gezi.onmouseout=function(){
                tan.style.display='none'
            }


    }
    var gezi1=$(".gd_xia .gezi")[0];
    var tan1=$(".gd_xia .tan")[0]
    fangzhi(gezi1,tan1)

    var gezi2=$(".gd_xia .gezi")[1];
    var tan2=$(".gd_xia .tan")[1]
    fangzhi(gezi2,tan2)

    var gezi3=$(".gd_xia .gezi")[2];
    var tan3=$(".gd_xia .tan")[2]
    fangzhi(gezi3,tan3)

    var gezi4=$(".gd_xia .gezi")[3];
    var tan4=$(".gd_xia .tan")[3]
    fangzhi(gezi4,tan4)

})

       