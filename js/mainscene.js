import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene{
    constructor() {
        super("MainScene");
    }

    preload() {
        var Grid = new Class({

            Extends: Shape,
        
            Mixins: [
                GridRender
            ],
        
            initialize:
        
            function Grid (scene, x, y, width, height, cellWidth, cellHeight, fillColor, fillAlpha, outlineFillColor, outlineFillAlpha)
            {
                 x = 0; 
                 y = 0; 
                 width = 640; 
                 height = 640; 
                 cellWidth = 16; 
                 cellHeight = 16;
        
                 Shape.call(this, scene, 'Grid', null);
        
                 this.cellWidth = cellWidth;
        
                 this.cellHeight = cellHeight;
        
                 this.showCells = true;
    
                 this.outlineFillColor = 0;
    
                 this.outlineFillAlpha = 0;
        
                 this.showOutline = false;
        
                
                 this.showAltCells = true;
                 this.fillColor = 0xff0000;
        
                 this.altFillColor=0xffffff;
        
                 this.altFillAlpha;
        
                 this.setPosition(x, y);
                 this.setSize(width, height);
        
                 this.setFillStyle(fillColor, fillAlpha);
        
                if (outlineFillColor !== undefined)
                {
                    this.setOutlineStyle(outlineFillColor, outlineFillAlpha);
                }
        
                this.updateDisplayOrigin();
            },
        
    
        
        });
        
        module.exports = Grid;
    }

    create() {
        this.snake = new Snake(this);
    }

    update(time) {
        this.snake.update(time);
    }
}