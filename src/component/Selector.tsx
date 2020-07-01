import React from "react";
import { ITower, TowerType } from "../model/Tower";

interface onTypeSelectedCallbackType { 
    (type: TowerType): void
}

interface SelectorProps {
    types: Array<ITower>
    onTypeSelected?: onTypeSelectedCallbackType
}

interface SelectorState {
    typeSelected?: TowerType
}

export class Selector extends React.Component<SelectorProps, SelectorState> {

    constructor(props: SelectorProps) {
        super(props)
        this.state = {}
    }

    handleClick(type: TowerType) {
        this.setState({
            typeSelected: type === this.state.typeSelected ? undefined : type
        });

        if (this.props.onTypeSelected)
            this.props.onTypeSelected(type)
    }

    render() {
        return (
            <div>
                <p>Type Selected: { this.state.typeSelected ? TowerType[this.state.typeSelected] : '' }</p>
                { this.props.types.map((type: ITower, index:number) =>
                    <button key={index} onClick={() => this.handleClick(type.getType())}>
                        {TowerType[type.getType()]}
                    </button>
                )}
            </div>
        )
    }
}
