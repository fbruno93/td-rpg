export enum TowerType {
    Type1 = "Type1",
    Type2 = "Type2",
    Type3 = "Type3"
}

export interface ITower {
    getType(): TowerType
}

export abstract class AbstractTower implements ITower {

    constructor(
        readonly type: TowerType
    ) { }

    getType(): TowerType {
        return this.type;
    }
}

export class BaseTower extends AbstractTower {}
