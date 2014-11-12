BasicGame.Preloader = function (game) {
    this.random = null;
};

BasicGame.Preloader.prototype = {

    preload: function () {
        var preloadBar = this.add.image(70, 150, 'bar');
        this.load.setPreloadSprite(preloadBar);
        this.load.image('meleebutton', 'assets/melee.png');
    },

    create: function () {
        this.state.start('Game'); 
    },

    update: function () {

    }

}