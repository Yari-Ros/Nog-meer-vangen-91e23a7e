function gooiButton() {
    try {
        bal.gooi();
    } catch (error) {
        document.getElementById("error").innerHTML="GOZER, FOUT!";
    }
    
}

function vangButton() {
    try {
        bal.vang();
    } catch (error) {
        document.getElementById("error").innerHTML="GOZER, FOUT!";
    }
}

function resetButton() {
    try {        
        bal.reset();
    } catch (error) {
        document.getElementById("error").innerHTML="GOZER, FOUT!";
    }
}


var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function () {
        if (this.balPositie !== "midden") {
            throw Error("DAS FOUT MAFKEES. OELEWAPPER. DRIEDUBBEL PANNEKOEKSAUS.")
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    }
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}

// try {
    
// } catch (error) {
//     document.getElementById("error").innerHTML="GOZER, FOUT!";
// }
