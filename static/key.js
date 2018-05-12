class Key{
    constructor(){
        this.pressed = {};
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onKeyDown(event){
        this.pressed[event.keyCode] = true;
    }

    onKeyUp(event){
        delete this.pressed[event.keyCode];
    }

    isPressed(key){
        return (this.pressed[key]);
    }
}