import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SliderItem from "../slider-item/slider-item";
import SliderNav from "../slider-nav/slider-nav";
import { SliderItems, DELAY } from "../../const";
import { setActiveSlideIndex } from '../../store/actions';
import { getActiveSlideIndex} from '../../store/selectors';

const Slider = ({ activeSlideIndex, setActiveSlideIndex }) => {
  const timeoutRef = useRef(null);

  const slidesLength = Object.keys(SliderItems).length;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        const newIndex = activeSlideIndex === slidesLength - 1 ? 0 : activeSlideIndex + 1;
        setActiveSlideIndex(newIndex);
      },
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [activeSlideIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <div className='slider container'>
      <ul className='slider__list'>
        {Object.values(SliderItems).map((item, i) => (
          <SliderItem key={i + 1} slideData={item} slideIndex={i} />
        ))}
      </ul>
      <SliderNav />
    </div>
  );
};


Slider.propTypes = {
  activeSlideIndex: PropTypes.number,
  setActiveSlideIndex: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeSlideIndex: getActiveSlideIndex(state)
});

const mapDispatchToProps = {
  setActiveSlideIndex
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
