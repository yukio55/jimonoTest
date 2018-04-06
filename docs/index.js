var parent;

var appY55 = {
    initialize: function() {
        Log.debug("app.initialize");


        window.addEventListener('message', function(event){
            Log.debug("[受信] " + event.data);

            if ( event.data == "initialize-jimono" ){
                Log.debug("initialize-jimono");
                parent = event.source;
                event.source.postMessage("子から初期化完了メッセージ", "*");
            }
        });
    },
};

var UiEventHandlerY55 = {
    btn01Click: function(){
        Log.debug("印刷");
        parent.postMessage("jimonoPrint", "*");
    },

    btn02Click: function(){
        Log.debug("サブウィンドウ起動");        
        window.open("subwindow.html","sub test",null);
    }
};

var Log = {
    debug: function(msg) {
        document.form1.logArea.value += msg + "\n";
        document.form1.logArea.scrollTop = document.form1.logArea.scrollHeight;
    }
};


appY55.initialize();
