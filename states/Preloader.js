BasicGame.Preloader = function (game) {
    this.random = null;
};

BasicGame.Preloader.prototype = {

    preload: function () {
        this.add.sprite(0,0,'');
        var preloadBar = this.add.image(70, 150, 'bar');
        this.load.setPreloadSprite(preloadBar);
        this.load.image('meleebutton', 'assets/melee.png');
        this.load.image('image', 'assets/image.png');
        this.load.image('bg', 'assets/bg.png');
        this.load.image('emelee', 'assets/emelee.png');
    },

    create: function () {
        this.add.sprite(0,0,'');
        this.state.start('Game'); 
    },

    update: function () {

    }

}