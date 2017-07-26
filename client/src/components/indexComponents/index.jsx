import React from 'react';
import touxiang from '../../img/touxiang.jpg';
import addressIcon from '../../img/addressw.png';
import Footer from '../publicComponents/footer.jsx';

class Index extends React.Component{
    componetWillMount(){
        document.title = "张有明的手札";
    }
	render(){
        var footer = <Footer />
		return(
		    <div className="willerce">
      			<img className="avatar" src={touxiang} />
                <h1>张有明</h1>
                <p>工作 @ 可名互联有限公司
                    <a className="about" href="/myself/index.html">About Me</a>
                </p>
                <p className="address">
                    <img src={addressIcon} />中国北京
                </p>
                <p className="nav">
                    <a href="#/articles/1">前端</a>
                    <a href="#/articles/2">后端</a>
                    <a href="#/articles/3">随笔</a>
                    <a href="#">档案</a>
                </p>
                {footer}
            </div>	 
		)
	}
}

export default Index