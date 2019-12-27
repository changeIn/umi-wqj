import React,{Component} from 'react';
import router from 'umi/router';

export default class index2 extends Component {
    constructor(props){
        super(props);
    }

    goToListPage(){
        router.push('/index2');
    }

    render(){
        return(
            <div onClick={this.goToListPage.bind(this)}>
                index2
            </div>
        )
    }
}