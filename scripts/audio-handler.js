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
        this.trigger = false;
        this._audio.pause();
    },
    
    tick:function(){
        var _marker = this._marker;
        var _entity = this._entity;
        var _audio = this._audio;

        if (_marker){
            if (!this.trigger) {
                _marker.addEventListener("markerFound", ()=>{
                    _audio.play();
                    this.trigger = true;
                });
            }
            else {
                _marker.addEventListener("markerLost", ()=>{
                    _audio.pause();
                    this.trigger = false;
                });
            }

        }
    }
});