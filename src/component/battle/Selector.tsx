import React from "react";

interface onTypeSelectedCallbackType { 
    (type?: string): void
}

interface SelectorProps {
    types: string[]
    onTypeSelected?: onTypeSelectedCallbackType
}

interface SelectorState {
    typeSelected?: string
}

export class Selector extends React.Component<SelectorProps, SelectorState> {

    constructor(props: SelectorProps) {
        super(props)
        this.state = {}
    }

    handleClick(type: string) {
        this.setState(() => {
            let tmpType = type === this.state.typeSelected ? undefined : type
            if (this.props.onTypeSelected)
                this.props.onTypeSelected(tmpType)

            return {
                typeSelected: tmpType
            }
        });
    }

    render() {
        return (
            <div>
                <p>Type Selected: { this.state.typeSelected ? this.state.typeSelected : '' }</p>
                { this.props.types.map((type: string, index:number) =>
                    <button key={index} onClick={() => this.handleClick(type)}>
                        {type}
                    </button>
                )}
            </div>
        )
    }
}
