function wave(){
    var tentacleParts = $(".tentacleRoot .tentaclePart");
    for(let i=0;i<tentacleParts.length;i++){
        setTimeout(() => {
            console.log(i);
            $(tentacleParts[i]).css('transform',"translate(-10%, -30%")
            
        }, i*35);
    }

}

function wave2(){
    var tentacleParts = $(".tentacleRoot .tentaclePart");
    for(let i=0;i<tentacleParts.length;i++){
        setTimeout(() => {
            console.log(i);
            $(tentacleParts[i]).css('transform',"translate(30%, 0%")
            
        }, i*35);
    }

}

function wave3(){
    var tentacleParts = $(".tentacleRoot2 .tentaclePart");
    for(let i=0;i<tentacleParts.length;i++){
        setTimeout(() => {
            console.log(i);
            $(tentacleParts[i]).css('transform',"translate(10%, -30%")
            
        }, i*35);
    }

}

function wave4(){
    var tentacleParts = $(".tentacleRoot2 .tentaclePart");
    for(let i=0;i<tentacleParts.length;i++){
        setTimeout(() => {
            console.log(i);
            $(tentacleParts[i]).css('transform',"translate(-30%, 0%")
            
        }, i*35);
    }

}

setInterval(() => {
    wave();
    wave3()
    setTimeout(() => {
        wave2()
        wave4()
        
    },200);
    
}, 600);
