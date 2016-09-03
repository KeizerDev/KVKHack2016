var React = require('react');
var Slider = require('react-slick');

var PresentSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h2>Cadeau optie 1</h2>
          <img src="/images/ipad.jpg"></img>
        </div>
        <div>
          <h2>Cadeau optie 2</h2>
          <img src="/images/ipad.jpg"></img>
        </div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
});


module.exports = PresentSlider;
