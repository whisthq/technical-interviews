import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../../actions';
let Button=({getNews})=>(
   <button onClick={getNews}>Press to see news</button>
)
const mapDispatchToProps = {
     getNews: getNews,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;