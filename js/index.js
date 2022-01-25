$(function(){

  $("a[href*=#]:not([href=#])").click(function(){
  
    var target = $($(this).attr("href")).offset().top;

    target -= 70;

    $("html, body").animate({scrollTop : target}, 500);

    return false;
  });
});

$(".info").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});

//スクロールした際の動きを関数でまとめる
function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
	var contentsTop = Math.round($('#concept').offset().top);	//要素までの高さを四捨五入した値で取得
	var contentsH = $('#concept').outerHeight(true);	//要素の高さを取得
    
    //2つ目の出現範囲の指定※任意
	//var contentsTop2 = Math.round($('#area-5').offset().top);	//要素までの高さを取得
	//var contentsH2 = $('#area-5').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop){
		$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		$("#page-top").removeClass("DownMove");   //DownMoveを削除
		$(".hide-btn").removeClass("hide-btn");	  //hide-btnを削除
	}//2つ目の出現範囲に入ったかどうかをチェック※任意
   // else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
		//$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		//$("#page-top").removeClass("DownMove");   //DownMoveを削除
	//}//それ以外は
    else{
        if(!$(".hide-btn").length){				//サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
		$("#page-top").addClass("DownMove");  //DownMoveをクラス追加
		$("#page-top").removeClass("UpMove"); //UpMoveを削除	
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});