AFRAME.registerComponent("audiohandler",{
    schema: {
        marker: {type: "string"},
        entity: {type: "string"},
        audio: {type: "string", default: ""}
    },

    update:function(){
        this._marker = document.querySelector(this.data.marker);
        this._entity = document.querySelector(this.data.entity);
        this._audio = document.querySelector(this.data.audio);
    },
    
    tick:function(){
        var _marker = this._marker;
        var _entity = this._entity;
        var _audio = this._audio;

        if (_marker){
            _marker.addEventListener("markerFound", ()=>{
                console.log("Marker Found!");
                _audio.play();
            });

            _marker.addEventListener("markerLost", ()=>{
                console.log("Marker Lost!");
                _audio.pause();
            });
        }
    }
});