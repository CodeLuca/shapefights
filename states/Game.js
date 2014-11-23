/**
 * Created by luca on 01/11/14.
 */
BasicGame.Game = function (game) {
    this.timer = null;
    this.texty = null;
};

var pHealth = 100, eHealth = 100, gold = 100;
var pHealthText, eHealthText, goldText;
var width = 568, height = 320;
var potato, epotato, p;
var meleebutton;
var pMeleeAlive = []
var emeleeAlive = []
var highscore = 0;
var enable = false;
var startTime, time;

BasicGame.Game.prototype = {
    preload: function(){
        this.add.sprite(0,0,'');
    },
    create: function(){
        this.add.sprite(0, 0, 'bg');
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.add.sprite(0,0,'');
        pHealthText = this.add.text(30, 20, 'Your Health: ' + pHealth + '%', {font: "15px Arial"});
        goldText = this.add.text(30, 37, 'Your Gold: ' + gold, {font: "15px Arial"});
        eHealthText = this.add.text(320, 25, 'Enemy Health: ' + eHealth + '%', {font: "15px Arial"});
        this.texty = this.add.text(30, 200, 'Not enough gold', {font: "15px Arial"});

        meleebutton = this.add.sprite(175, 19, 'image');
        meleebutton.scale.setTo(0.75, 0.75);
        meleebutton.inputEnabled = true;
        this.physics.arcade.enable(meleebutton);
        meleebutton.body.collideWorldBounds = true;
        meleebutton.events.onInputDown.add(this.clickMelee,this);
        this.timer = this.time.events.loop(700, this.createEnemyMelee, this);
},

    update: function(){
        for(var i = 0; i < pMeleeAlive.length; ++i){
            // console.log(i.toString() + "" + pMeleeAlive[i].assigned);
            if(pMeleeAlive[i].assigned == null){
            pMeleeAlive[i].sprite.x += 1;
            //     var distance = [];
            //     for(var x = 0; x < emeleeAlive.length; ++x){
            //         var xDis = emeleeAlive[x].x - pMeleeAlive[i].sprite.x;
            //         if(xDis < 0)
            //             xDis = xDis * -1;

            //         var yDis = emeleeAlive[x].y - pMeleeAlive[i].sprite.y;
            //         if(yDis < 0)
            //             yDis = yDis * -1;
                    
            //         distance[x] = yDis + xDis;
            //     }
            //     var min = Math.min.apply(Math, distance);
            //     for(var g = 0; g < distance.length; distance++){
            //         if(min == distance[g]){
                        pMeleeAlive[i].assigned = emeleeAlive[0];
            //         }
            //     }
            }
            else {
                if(pMeleeAlive[i].sprite.x < pMeleeAlive[i].assigned.x){
                    pMeleeAlive[i].sprite.x += 3;
                }
                if(pMeleeAlive[i].sprite.x > pMeleeAlive[i].assigned.x){
                    pMeleeAlive[i].sprite.x -= 3;
                }
                if(pMeleeAlive[i].sprite.y < pMeleeAlive[i].assigned.y){
                    pMeleeAlive[i].sprite.y += 3;
                }
                if(pMeleeAlive[i].sprite.y > pMeleeAlive[i].assigned.y){
                    pMeleeAlive[i].sprite.y -= 3;
                }   
            }
        }
        if(gold < 10){
            meleebutton.alpha = 0.5;
        } else {
            meleebutton.alpha = 1;
            this.texty.text = "";
        }
    },

    collide: function(){
        this.state.start('Game');
    },

    clickMelee: function(){
        if(gold < 10){
            return;
        }
        var newSprite = this.add.sprite(1 * 10, 100, 'meleebutton');
        newSprite.scale.setTo(0.4, 0.4);

        var newSpriteObject = new Object;
        newSpriteObject.sprite = newSprite;
        newSpriteObject.assigned = null;
                var distance = [];
                for(var x = 0; x < emeleeAlive.length; ++x){
                    var xDis = emeleeAlive[x].x - newSpriteObject.sprite.x;
                    if(xDis < 0)
                        xDis = xDis * -1;

                    var yDis = emeleeAlive[x].y - newSpriteObject.sprite.y;
                    if(yDis < 0)
                        yDis = yDis * -1;
                    
                    distance[x] = yDis + xDis;
                }
                var min = Math.min.apply(Math, distance);
                for(var g = 0; g < distance.length; distance++){
                        newSpriteObject.assigned = emeleeAlive[0];
                }
            
        pMeleeAlive.push(newSpriteObject);
        gold -= 10;
        goldText.text = "Your Gold: " + gold.toString();
    },
    createEnemyMelee: function(){
        var neweSprite = this.add.sprite(310, 100, 'emelee');
        this.physics.arcade.enable(neweSprite);
        neweSprite.body.velocity.x = -40;
        neweSprite.scale.setTo(0.4, 0.4);
        emeleeAlive.push(neweSprite);        
    }
}