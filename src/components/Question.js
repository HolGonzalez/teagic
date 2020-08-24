import React, { Component } from 'react';

class Question extends Component{

    render(){
        const title = this.props.title
        const src = this.props.src
        const alt = this.props.alt
        const autor = this.props.autor
        const numberQuestion = this.props.numberQuestion
        const changeLeft = this.props.changeLeft
        const optionLeft = this.props.optionLeft
        const changeRight = this.props.changeRight
        const optionRight = this.props.optionRight

        if(src == null){
            return(
                <div className="control mt-0 mb-1 p-2">
                    <p><strong>{title}</strong></p>
                    <label className="radio">
                        <input type="radio" name={numberQuestion} value="1"
                            onChange={changeLeft}/>{optionLeft}
                    </label>
                    <label className="radio">
                        <input type="radio" name={numberQuestion} value="1"
                            onChange={changeRight}/>{optionRight}
                    </label>
                </div> 
            )
        } else{
            return(
                <div className="control mt-0 mb-1 p-2">
                    <p><strong>{title}</strong></p>
                    <img className="rounded img-fluid m-2" src={src} alt={alt}></img>
                    <p className="small ml-2 mb-2"><em>{`Autor: ${autor}`}</em></p>
                    <label className="radio">
                        <input type="radio" name={numberQuestion} value="1"
                            onChange={changeLeft}/>{optionLeft}
                    </label>
                    <label className="radio">
                        <input type="radio" name={numberQuestion} value="1"
                            onChange={changeRight}/>{optionRight}
                    </label>
                </div> 
            )
        }
    }

}

export default Question