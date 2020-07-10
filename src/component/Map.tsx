import React from "react";
import { MapsTiles } from "../config/constant";
import { 
    SPRITE_SIZE,
    TILE_DEFAULT,
    TILE_END,
    TILE_NOT_BUILDABLE,
    TILE_START
} from "../config/constant"
/** @todo Uncomment when merge will be executed */
// import { TowerType } from "../model/Tower";

/** Tile click Callback type */
type onTileClickCallback = (param: MapTileState) => void
/** Common member for MapTile state and props */
interface MapTileBase {
    /** x on map */
    x: number
    /** y on map */
    y: number
    /** type tile */
    type?: number
}
/** MapTile property definition */
interface MapTileProps extends MapTileBase {
    /** click callback */
    onTileClick?: onTileClickCallback
    /** tile data */
    tile: number
}
/** MapTile state definition */
interface MapTileState extends MapTileBase {
    /** flag to know if tile builded */
    builded: boolean,
    style: any
}
/** MapTile style definition */
interface MapTileStyle {
    display: string
    backgroundColor: string
    height: number
    width: number
}
/** 
 * MapTile Component 
 * Display the type given on hover buildable tile
 * Save the display type on click
 */
class MapTile extends React.Component<MapTileProps, MapTileState> {
    /** Intial style of MapTile */
    initialStyle: MapTileStyle = {
        display: "inline-flex",
        backgroundColor: this.getSpriteTile(),
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
    };
    /**
     * MapTile constructor
     */
    constructor(props: MapTileProps) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y,
            type: undefined,
            builded: false,
            style: this.initialStyle
        }
    }
    /**
     * Define if the tile is buildable.
     * If tile is odd so it's buildable else is not
     * @todo define binaries masks 
     */
    private isBuildable() {
        return !(this.props.tile & 1)
    }
    /**
     * Return sprite name matching with sprite value  
     * 
     * @returns Return name sprite of tile
     * @todo 1 - Use real sprites instead of bckgrnd-color
     * @todo 2 - Make this more maintenable
     */
    private getSpriteTile() {
        let sprite: string = 'sandybrown';
        switch (this.props.tile) {
            case 1:
                return TILE_START
            case 3:
                return TILE_END
            default:
                return !this.isBuildable() ? TILE_NOT_BUILDABLE : TILE_DEFAULT
        }
    }
    /**
     * Handle click on component.
     * Save current/hover state if tile is not build 
     */
    private handleClick = () => {
        this.setState((state: MapTileState) => {
            return {
                type: state.type,
                builded: state.type !== undefined
            }
        });

        if (this.props.onTileClick)
            this.props.onTileClick(this.state)
    }
    /**
     * Update style & state with the type props
     */
    private handleMouseEnter = () => {
        if (!this.state.type && this.isBuildable())
            this.setState({
                type: 1,
                style: { ...this.state.style, opacity: .8  }
            })
    }
    /**
     * Reset style & type prop if not build, else keep build state
     */
    private handleMouseLeave = () => {
        if (!this.state.builded)
            this.setState({
                type: undefined,
                style: { ...this.state.style, opacity: 1 }
            })
    }
    /**
     * @inheritdoc
     * Render view of MapTile
     */
    public render() {
        return (
            <div style={this.state.style}
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >&nbsp;{this.state.type}</div>
        )
    }
}
/** Map property definition */
interface MapsProps {
    currentType?: number
}
/** Map state definition */
interface MapsState {
    rows:number[][]
}
/**
 * Map Component
 * Display map
 */
export class Map extends React.Component<MapsProps, MapsState> {
    /**
     * Map constructor
     */
    constructor(props: MapsProps) {
        super(props);
        this.state = {
            rows: (new MapsTiles()).getBattleMap()
        }
    }
    /**
     * Handle click on MapTile component.
     * Save current/hover state if tile is not build 
     */
    private handleClickTile = (tile: MapTileState) => {}
    /**
     * @inheritdoc
     * Render view of MapTile
     */
    public render() {
        return ( <div> {
            this.state.rows.map(
                ((row:number[], y: number) => <div key={y}> {
                    row.map((tile:number, x: number) =>
                        <MapTile key={x} x={x} y={y} tile={tile}
                            onTileClick={this.handleClickTile} />
                    )
                } </div>)
            )   
        } </div>)
    }
}
