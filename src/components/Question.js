import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'

const Question = ({title, numberQuestion, optionLeft, optionRight, changeLeft, changeRight}) => (
    <div class="control mt-4 mb-4 p-2">
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

export default Question