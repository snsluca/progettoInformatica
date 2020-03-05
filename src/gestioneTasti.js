document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var vaiDx;
var vaiSx;
var vaiSu;
var vaiGiu;
var timeout = null;
var premuto=false;

function keyDownHandler(e) {
	switch (e.key) {
		case "d":
			vaiDx = true;
			break;
		case "a":
			vaiSx = true;
			break;
		case "s":
			vaiGiu = true;
			break;
		case "w":
			vaiSu = true;
			break;
		/*
		case "ArrowRight":
			vaiDx = true;
			break;
		case "Right":
			vaiDx = true;
			break;
		case "ArrowLeft":
			vaiSx = true;
			break;
		case "Left":
			vaiSx = true;
			break;*/
	}
}

function keyUpHandler(e) {
    switch (e.key) {
        case "d":
            vaiDx = false;
            break;
        case "a":
            vaiSx = false;
            break;
        case "s":
            vaiGiu = false;
            break;
        case "w":
            vaiSu = false;
            break;
		/*
        case "ArrowRight":
            vaiDx = false;
            break;
        case "Right":
            vaiDx = false;
            break;
        case "ArrowLeft":
            vaiSx = false;
            break;
        case "Left":
            vaiSx = false;
            break;*/
    }
}