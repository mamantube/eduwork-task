import React from "react"


class LikeButton extends React.Component  {
    state = {
        count: 0
    };
    handleTambah = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>Give Me Your Like</p>
                <button onClick={this.handleTambah}>like : {this.state.count} </button>
            </div>
        )

    }
    
}

export default LikeButton