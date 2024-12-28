import React, { Component } from 'react';

class Mynav extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log(
      'shouldComponentUpdate 작동',
      newProps.data, //변경된 값
      this.props.data //변경전 값(부모로 부터 받은 값)
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
  render(){
    console.log('Mynav 실행');
    let lists = [];
    //console.log(this.props.data);
    let data = this.props.data;
    /*
    let i = 0;
    while(i<data.length){
      lists.push(
        <li key={data[i].id}><a href="/">{data[i].title}</a></li>
      );
      i += 1;
    }
    */
    /*
    data.forEach(function(item, idx){
      lists.push(
        <li key={item.id}><a href="/">{item.title}</a></li>
      );
    })
    */
    data.forEach(item=>{
      lists.push(
        <li key={item.id}>
          <a href="/"
            onClick={e=>{
              e.preventDefault();
              this.props.onChangePage(item.id);

            }}
          >{item.title}
          </a>
        </li>
      );
    })
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}
export default Mynav;