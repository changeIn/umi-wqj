import {FormattedMessage} from 'umi/locale';

// import {formatMessage} from 'umi/locale';
// console.log(formatMessage({id:'helloword'}));

export default ()=>{
    return (<div> 
        <FormattedMessage id="helloword"/>
        hello world
    </div>)
}
