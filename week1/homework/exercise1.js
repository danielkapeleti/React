import React, {Component} from 'react';

//

class NavMenu extends Component{
    
    render(){
        let links = [
            {id:'surfing', label:"surfing", url:"#surfing"},
            {id:'rockclimbing', label:"rockclimbing", url:"#rockclimbing"},
            {id:'mountainbiking', label:"mountainbiking", url:"#mountainbiking"},
            {id:'breakdancing', label:"breakdancing", url:"#breakdancing"}
        ];
        return (
            <nav className="main-nav">
                {links.map( (item, index)=> (
                    <NavLink key={index} info={ item } />
                ) )    }
            
                 {
                <NavLink info={links[0]}/>
                <NavLink info={links[1]}/>
                <NavLink info={links[2]} />
                <NavLink info={links[3]} />
                }
                {
                <a href="#home" className="main-link">Surfing</a>
                <a href="#products" className="main-link">Rock climbing</a>
                <a href="#services" className="main-link">Mountain biking</a>
                <a href="#contact" className="main-link">Break dancing</a>
                }
            </nav>
        )
    }
}

export default NavMenu;