import React from 'react';
import Display from './display';
import Button from './button';

export default () => (
    <div className="board">     
        <Display />   
        <Button label="C" domain="clear"/>  
        <Button label="±" domain="operator"/>  
        <Button label="%" domain="operator"/>  
        <Button label="÷" domain="operator"/>
        <Button label="7" domain="number"/>
        <Button label="8" domain="number"/>        
        <Button label="9" domain="number"/>  
        <Button label="X" domain="operator"/>  
        <Button label="4" domain="number"/>  
        <Button label="5" domain="number"/>
        <Button label="6" domain="number"/>
        <Button label="−" domain="operator"/>
        <Button label="1" domain="number"/>  
        <Button label="2" domain="number"/>
        <Button label="3" domain="number"/>
        <Button label="+" domain="operator"/>
        <Button label="0" domain="number"/>  
        <Button label="●" domain="number"/>
        <Button label="=" domain="result"/>
    </div>
)
