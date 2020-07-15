import { TowerType } from "../model/Tower"

export const SPRITE_SIZE = 40
export const MAP_HEIGHT = SPRITE_SIZE * 10
export const MAP_WIDHT = SPRITE_SIZE * 10

export const TILE_NOT_BUILDABLE = 'purple'
export const TILE_START = 'aqua'
export const TILE_END = 'red'
export const TILE_DEFAULT = 'sandybrown'

interface Wave {
    count: number,
    types: string[]
}

interface MapConfig {
    tiles: number[][],
    type: string[],
    waves: Wave[]
}

export class MapsTiles {
    
    getBattleMap(): MapConfig {
        return {
            type: [TowerType.Type1, TowerType.Type2, TowerType.Type3],
            waves: [

            ],
            tiles: [
                [1,0,5,5,5,0,5,5,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,0,5,0,5,0,5,0,5,0],
                [5,5,5,0,5,5,5,0,5,3],
            ]
        }
    }
}