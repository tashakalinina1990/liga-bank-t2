import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveSlideIndex } from '../../store/actions';
import { getActiveSlideIndex} from '../../store/selectors';

const SliderItem = ({ activeSlideIndex, setActiveSlideIndex, slideData, slideIndex }) => {
  const isActive = slideIndex === activeSlideIndex;

  const { title, titleBtn } = slideData;
  const isBtnShowing = titleBtn !== '';

  return (
    <li className={isActive? 'slider__item' : 'visually-hidden'}>
      <h1>Лига Банк</h1>
      <p>{title}</p>
      {isBtnShowing && (
        <button className='slider__button' type='button' aria-label={titleBtn}>{titleBtn}</button>
      )}
    </li>
  )
};

SliderItem.propTypes = {
  activeSlideIndex: PropTypes.number,
  slideIndex: PropTypes.number,
  setActiveSlideIndex: PropTypes.func,
  slideData: PropTypes.object,
  // title: PropTypes.string,
  // titleBtn: PropTypes.string
};

const mapStateToProps = (state) => ({
  activeSlideIndex: getActiveSlideIndex(state)
});

const mapDispatchToProps = {
  setActiveSlideIndex
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderItem);
