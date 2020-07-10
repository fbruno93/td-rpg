export const SPRITE_SIZE = 40
export const MAP_HEIGHT = SPRITE_SIZE * 10
export const MAP_WIDHT = SPRITE_SIZE * 10

export const TILE_NOT_BUILDABLE = 'purple'
export const TILE_START = 'aqua'
export const TILE_END = 'red'
export const TILE_DEFAULT = 'sandybrown'

export class MapsTiles {
    
    getBattleMap() {
        return [
            [1,5,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,3],
        ]
    }
}