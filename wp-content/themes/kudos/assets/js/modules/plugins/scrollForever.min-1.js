!function(a){a.fn.scrollForever=function(b){var c={placeholder:0,dir:"left",container:"ul",inner:"li",speed:1e3,delayTime:0,continuous:!0,num:1},d=a.extend({},c,b),e=d.placeholder,f=d.dir,g=d.speed;d.Time;var i=d.num,j=d.delayTime;return this.each(function(){function s(){q=h.outerWidth(),r=h.outerHeight(),d.continuous?"left"==f?(l=q*k,c.css("width",2*l),p&&(h.clone().appendTo(c),p=!1)):"top"==f&&(l=r*k,c.css("height",2*l),p&&(h.clone().appendTo(c),p=!1)):"left"==f?(e=0!=e?e:q*i,l=q*(k+1),c.css("width",l)):"top"==f&&(e=0!=e?e:r*i,l=r*(k+1),c.css("height",l))}function t(){d.continuous?"left"==f?(m=b.scrollLeft(),m>=l?b.scrollLeft(0):b.scrollLeft(m+1)):"top"==f&&(m=b.scrollTop(),m>=l?b.scrollTop(0):b.scrollTop(m+1)):"left"==f?c.animate({marginLeft:"-"+e},g,function(){c.css({marginLeft:0}).find(d.inner+":lt("+i+")").appendTo(c)}):"top"==f&&c.animate({marginTop:"-"+e},g,function(){c.css({marginTop:0}).find(d.inner+":lt("+i+")").appendTo(c)})}var l,m,n,o,q,r,b=a(this),c=b.find(d.container),h=c.find(d.inner),k=h.length,p=!0;a(window).on("resize",function(){clearTimeout(o),o=setTimeout(s,250)}),s();var u=1==d.continuous?20:2e3;j=0==j?u:j,n=setInterval(t,j),b.hover(function(){clearInterval(n)},function(){n=setInterval(t,j)})})}}(jQuery);