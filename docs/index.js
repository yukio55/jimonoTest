var lastEvent;

var app = {
    // Application Constructor
    initialize: function() {
        Log.debug("app.initialize");


        window.addEventListener('message', function(event){
            Log.debug("[受信] " + event.data);

            if ( event.data == "initialize-jimono" ){
                Log.debug("initialize-jimono");
                lastEvent = event.source;
                event.source.postMessage("子から初期化完了メッセージ", "*");
            }
        });
    },
};


var UiEventHandler = {
    btn01Click: function(){
        Log.debug("返信 ");
        lastEvent.postMessage("子からの返信", "*");
    }
};


var Log = {
    debug: function(msg) {
        document.form1.logArea.value += msg + "\n";
        document.form1.logArea.scrollTop = document.form1.logArea.scrollHeight;
    }
};


app.initialize();
