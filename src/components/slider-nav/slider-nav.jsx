import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SliderItems } from "../../const";
import { getActiveSlideIndex} from '../../store/selectors';

const SliderNav = ({ activeSlideIndex }) => {
  const sliderKeys = Object.keys(SliderItems);

  return (
    <div className='slider__nav'>
      {sliderKeys.map((key, i) => {
        const isActive = i === activeSlideIndex;

        return (
          <button className={isActive? 'slider__nav-btn slider__nav-btn--active' : 'slider__nav-btn'} key={key}/>
        )
      })}
    </div>
  );
}

SliderNav.propTypes = {
  activeSlideIndex: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeSlideIndex: getActiveSlideIndex(state)
});

export default connect(mapStateToProps)(SliderNav);

