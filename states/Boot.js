var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {
    preload: function () {
        this.stage.backgroundColor = "#E6E6E6";
        this.load.image('bar', 'assets/loadbar.png');
    },

    create: function () {
    	this.scale.pageAlignHorizontally = true;
       	this.scale.pageAlignVertically = true;
      	this.add.sprite(0,0,'');
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};
