class DataURL{
    createURL(item,type){
        if(typeof type == "string"){
            const encoder = new TextEncoder()
            type+=";charset=UTF-8"
            const blob = new Blob([encoder.encode(item)],{type: type})
            const reeder = new FileReader()
            reeder.onload = function(){
                console.log(this.result);
            }
            reeder.readAsDataURL(blob)
        }
    }

    readURL(dataURL){
        if(typeof dataURL == "string"){
            async function read(){
                const fecthData = await fetch(dataURL)
                const response = await fecthData.text()
                console.log(response);
            }
            read()
        }
    }
}

const dataURL = new DataURL()