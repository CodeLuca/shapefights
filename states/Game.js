/**
 * Created by luca on 01/11/14.
 */
BasicGame.Game = function (game) {
};

var pHealth = 100, eHealth = 100;
var pHealthText, eHealthText;
var width = 568, height = 320;
var potato;

BasicGame.Game.prototype = {
    preload: function(){

    },
    create: function(){
        pHealthText = this.add.text(30, 25, 'Your Health: ' + pHealth + '%', {font: "15px Arial"});
        eHealthText = this.add.text(400, 25, 'Enemy Health: ' + eHealth + '%', {font: "15px Arial"});
        // myvar.events.onInputDown.add(listener,this);

        potato = this.add.sprite(width / 2 - 250, height - 50, 'meleebutton');
        potato.scale.setTo(0.5, 0.5);
        potato.inputEnabled = true;
        potato.input.enableDrag(true);
    },
    update: function(){

    }
}