AFRAME.registerComponent("audiohandler",{
    schema: {
        marker: {type: "string"},
        entity: {type: "string"},
        //audio: {type: "string", default: ""}
    },

    update:function(){
        const _marker = document.querySelector(this.data.marker);
        const _entity = document.querySelector(this.data.entity);

        if (_marker){
            _marker.addEventListener("markerFound", ()=>{
                console.log("Marker Found!")
                console.log(_marker);
                console.log(_entity);
            });
        }
    }
});