'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _headerBar = require('./header-bar');

var _headerBar2 = _interopRequireDefault(_headerBar);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactSignatureCanvas = require('react-signature-canvas');

var _reactSignatureCanvas2 = _interopRequireDefault(_reactSignatureCanvas);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _starRating = require('./star-rating');

var _starRating2 = _interopRequireDefault(_starRating);

var _xss = require('xss');

var _xss2 = _interopRequireDefault(_xss);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactBootstrapSlider from 'react-bootstrap-slider';


var FormElements = {};
var myxss = new _xss2.default.FilterXSS({
  whiteList: {
    u: [],
    br: [],
    b: [],
    i: [],
    ol: ['style'],
    ul: ['style'],
    li: [],
    p: ['style'],
    sub: [],
    sup: [],
    div: ['style'],
    em: [],
    strong: [],
    span: ['style']
  }
});

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var headerClasses = 'dynamic-input ' + this.props.data.element + '-input';
      var classNames = 'static';
      if (this.props.data.bold) {
        classNames += ' bold';
      }
      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement('h3', {
          className: classNames,
          dangerouslySetInnerHTML: {
            __html: myxss.process(this.props.data.content)
          }
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

var Paragraph = function (_React$Component2) {
  _inherits(Paragraph, _React$Component2);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: 'render',
    value: function render() {
      var classNames = 'static';
      if (this.props.data.bold) {
        classNames += ' bold';
      }
      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement('p', {
          className: classNames,
          dangerouslySetInnerHTML: {
            __html: myxss.process(this.props.data.content)
          }
        })
      );
    }
  }]);

  return Paragraph;
}(_react2.default.Component);

var Label = function (_React$Component3) {
  _inherits(Label, _React$Component3);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: 'render',
    value: function render() {
      var classNames = 'static';
      if (this.props.data.bold) {
        classNames += ' bold';
      }
      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement('label', {
          className: classNames,
          dangerouslySetInnerHTML: {
            __html: myxss.process(this.props.data.content)
          }
        })
      );
    }
  }]);

  return Label;
}(_react2.default.Component);

var LineBreak = function (_React$Component4) {
  _inherits(LineBreak, _React$Component4);

  function LineBreak() {
    _classCallCheck(this, LineBreak);

    return _possibleConstructorReturn(this, (LineBreak.__proto__ || Object.getPrototypeOf(LineBreak)).apply(this, arguments));
  }

  _createClass(LineBreak, [{
    key: 'render',
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement('hr', null)
      );
    }
  }]);

  return LineBreak;
}(_react2.default.Component);

var TextInput = function (_React$Component5) {
  _inherits(TextInput, _React$Component5);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this5 = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this5.inputField = _react2.default.createRef();
    return _this5;
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.type = 'text';
      props.className = 'form-control';
      props.name = this.props.data.field_name;
      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement('input', props)
        )
      );
    }
  }]);

  return TextInput;
}(_react2.default.Component);

var NumberInput = function (_React$Component6) {
  _inherits(NumberInput, _React$Component6);

  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    var _this6 = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

    _this6.inputField = _react2.default.createRef();
    return _this6;
  }

  _createClass(NumberInput, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.type = 'number';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement('input', props)
        )
      );
    }
  }]);

  return NumberInput;
}(_react2.default.Component);

var TextArea = function (_React$Component7) {
  _inherits(TextArea, _React$Component7);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this7 = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this7.renderEmotions = function (emotions) {
      var sortedEmotions = Object.keys(emotions).map(function (emotion) {
        return [emotion, emotions[emotion]];
      }).sort(function (current, next) {
        return next[1] - current[1];
      });
      return _react2.default.createElement(
        'span',
        { className: 'comment-emotions' },
        sortedEmotions.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              emotion = _ref2[0],
              score = _ref2[1];

          return _react2.default.createElement(
            'span',
            { className: 'emotion-wrapper', key: emotion },
            _react2.default.createElement(
              'span',
              { className: 'emotion-name' },
              emotion.charAt(0).toUpperCase() + emotion.slice(1)
            ),
            _react2.default.createElement(
              'span',
              { className: 'emotion-bar' },
              _react2.default.createElement('span', {
                style: {
                  width: score * 100 + '%'
                }
              })
            ),
            Number.parseFloat(score).toFixed(2)
          );
        })
      );
    };

    _this7.inputField = _react2.default.createRef();
    return _this7;
  }

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      var sentimentalClass = '';
      var isSentimentAdded = !!this.props.data.sentiment && !!this.props.data.sentiment.label;
      var isEmotionsExist = isSentimentAdded && !!this.props.data.sentiment.emotions && !!Object.keys(this.props.data.sentiment.emotions).length;

      if (isSentimentAdded) {
        sentimentalClass = '' + this.props.data.sentiment.label.toLowerCase();
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            ),
            isSentimentAdded && _react2.default.createElement(
              'span',
              { className: 'form-text-area-sentiment ' + sentimentalClass },
              _react2.default.createElement('span', { className: 'sentimental-dot' }),
              '\xA0',
              this.props.data.sentiment.label + ' (' + this.props.data.sentiment.score + ') Net Sentiment Score'
            ),
            isEmotionsExist && _react2.default.createElement(
              'div',
              { style: { display: 'block' } },
              this.renderEmotions(this.props.data.sentiment.emotions)
            )
          ),
          _react2.default.createElement('textarea', _extends({}, props, { rows: '8' }))
        )
      );
    }
  }]);

  return TextArea;
}(_react2.default.Component);

var DatePicker = function (_React$Component8) {
  _inherits(DatePicker, _React$Component8);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this8 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this8.handleChange = function (dt) {
      if (dt && dt.target) {
        var placeholder = dt && dt.target && dt.target.value === '' ? 'mm/dd/yyyy' : '';
        var formattedDate = dt.target.value ? (0, _moment2.default)(dt.target.value).format('YYYY-MM-DD') : '';

        _this8.setState({
          value: formattedDate,
          internalValue: formattedDate,
          placeholder: placeholder
        });
      } else {
        _this8.setState({
          value: dt ? dt.format('MM/DD/YYYY') : '',
          internalValue: dt,
          placeholder: placeholder
        });
      }
    };

    _this8.inputField = _react2.default.createRef();
    var value = void 0,
        internalValue = void 0;

    if (props.data.defaultToday && (props.defaultValue === '' || props.defaultValue === undefined)) {
      value = (0, _moment2.default)().format('MM/DD/YYYY');
      internalValue = (0, _moment2.default)();
    } else {
      value = props.defaultValue;

      if (props.defaultValue !== '' && props.defaultValue !== undefined) {
        internalValue = (0, _moment2.default)(value, 'MM/DD/YYYY');
      }
    }

    _this8.state = {
      value: value,
      internalValue: internalValue,
      placeholder: 'mm/dd/yyyy',
      defaultToday: props.data.defaultToday
    };
    return _this8;
  }

  _createClass(DatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data.defaultToday && !this.state.defaultToday) {
        this.state.value = (0, _moment2.default)().format('MM/DD/YYYY');
        this.state.internalValue = (0, _moment2.default)(this.state.value);
      } else if (!this.props.data.defaultToday && this.state.defaultToday) {
        this.state.value = '';
        this.state.internalValue = undefined;
      }

      this.state.defaultToday = this.props.data.defaultToday;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = {};
      props.type = 'date';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            this.props.data.readOnly && _react2.default.createElement('input', {
              type: 'text',
              name: props.name,
              ref: this.inputField,
              readOnly: 'true',
              dateFormat: 'MM/DD/YYYY',
              placeholder: this.state.placeholder,
              value: this.state.value,
              className: 'form-control'
            }),
            iOS && !this.props.data.readOnly && _react2.default.createElement('input', {
              type: 'date',
              name: props.name,
              ref: this.inputField,
              onChange: this.handleChange,
              dateFormat: 'MM/DD/YYYY',
              placeholder: this.state.placeholder,
              value: this.state.value,
              className: 'form-control',
              readOnly: this.props.read_only
            }),
            !iOS && !this.props.data.readOnly && _react2.default.createElement(_reactDatepicker2.default, {
              name: props.name,
              ref: this.inputField,
              onChange: this.handleChange,
              selected: this.state.internalValue,
              todayButton: 'Today',
              className: 'form-control',
              isClearable: !this.props.read_only,
              dateFormat: 'MM/DD/YYYY',
              placeholderText: 'mm/dd/yyyy',
              dropdownMode: 'scroll',
              disabled: this.props.read_only,
              readOnly: this.props.read_only
            })
          )
        )
      );
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

var Dropdown = function (_React$Component9) {
  _inherits(Dropdown, _React$Component9);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this9 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this9.inputField = _react2.default.createRef();
    return _this9;
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement(
            'select',
            props,
            this.props.data.options.map(function (option) {
              var this_key = 'preview_' + option.key;
              return _react2.default.createElement(
                'option',
                { value: option.value, key: this_key },
                option.text
              );
            })
          )
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

var Signature = function (_React$Component10) {
  _inherits(Signature, _React$Component10);

  function Signature(props) {
    _classCallCheck(this, Signature);

    var _this10 = _possibleConstructorReturn(this, (Signature.__proto__ || Object.getPrototypeOf(Signature)).call(this, props));

    _this10.inputField = _react2.default.createRef();
    _this10.canvas = _react2.default.createRef();
    return _this10;
  }

  _createClass(Signature, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.defaultValue !== undefined && this.props.defaultValue.length > 0 && !this.props.read_only) {
        var canvas = this.canvas; // this.refs['canvas_'+this.props.data.field_name];
        canvas.fromDataURL('data:image/png;base64,' + this.props.defaultValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = {};
      props.type = 'hidden';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }
      var pad_props = {};
      pad_props.clearButton = true;
      if (this.props.mutable) {
        pad_props.defaultValue = this.props.defaultValue;
        pad_props.ref = this.canvas;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      var sourceDataURL = void 0;
      if (this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0) {
        sourceDataURL = 'data:image/png;base64,' + this.props.defaultValue;
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0 ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: sourceDataURL })
          ) : _react2.default.createElement(_reactSignatureCanvas2.default, pad_props),
          _react2.default.createElement('input', props)
        )
      );
    }
  }]);

  return Signature;
}(_react2.default.Component);

var Tags = function (_React$Component11) {
  _inherits(Tags, _React$Component11);

  function Tags(props) {
    _classCallCheck(this, Tags);

    var _this11 = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

    _this11.getDefaultValue = function () {
      if (_this11.props.defaultValue !== undefined) {
        var selectedValues = _this11.props.defaultValue.split(',');
        return _this11.props.data.options.filter(function (_ref3) {
          var label = _ref3.label,
              value = _ref3.value;
          return selectedValues.includes(value);
        });
      } else {
        return [];
      }
    };

    _this11.state = {
      value: _this11.getDefaultValue()
    };

    _this11.handleChange = function (e) {
      _this11.setState({ value: e });
    };

    _this11.inputField = _react2.default.createRef();
    return _this11;
  }

  _createClass(Tags, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(e) {
      console.log(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.data.options.map(function (option) {
        option.label = option.text;
        return option;
      });

      var props = {};
      props.isMulti = true;
      props.name = this.props.data.field_name;
      props.onChange = this.handleChange;

      props.options = options;
      if (!this.props.mutable) {
        props.value = options[0].text;
      } // to show a sample of what tags looks like
      if (this.props.mutable) {
        props.value = this.state.value;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.isDisabled = true;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement(_reactSelect2.default, props)
        )
      );
    }
  }]);

  return Tags;
}(_react2.default.Component);

var Checkboxes = function (_React$Component12) {
  _inherits(Checkboxes, _React$Component12);

  function Checkboxes(props) {
    _classCallCheck(this, Checkboxes);

    var _this12 = _possibleConstructorReturn(this, (Checkboxes.__proto__ || Object.getPrototypeOf(Checkboxes)).call(this, props));

    _this12.options = {};
    return _this12;
  }

  _createClass(Checkboxes, [{
    key: 'render',
    value: function render() {
      var _this13 = this;

      var self = this;
      var classNames = 'checkbox-label';
      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          this.props.data.options.map(function (option) {
            var this_key = 'preview_' + option.key;
            var props = {};
            props.name = 'option_' + option.key;

            props.type = 'checkbox';
            props.value = option.value;

            if (self.props.mutable) {
              props.defaultChecked = self.props.defaultValue.indexOf(option.value) > -1 ? true : false;
            }

            if (_this13.props.read_only) {
              props.disabled = 'disabled';
              props.defaultChecked = self.props.defaultValue.indexOf(option.key) > -1 ? true : false;
            }

            return _react2.default.createElement(
              'label',
              { className: classNames, key: this_key },
              _react2.default.createElement('input', _extends({
                ref: function ref(c) {
                  if (c && self.props.mutable) {
                    self.options['child_ref_' + option.key] = c;
                  }
                }
              }, props)),
              option.text
            );
          })
        )
      );
    }
  }]);

  return Checkboxes;
}(_react2.default.Component);

var RadioButtons = function (_React$Component13) {
  _inherits(RadioButtons, _React$Component13);

  function RadioButtons(props) {
    _classCallCheck(this, RadioButtons);

    var _this14 = _possibleConstructorReturn(this, (RadioButtons.__proto__ || Object.getPrototypeOf(RadioButtons)).call(this, props));

    _this14.options = {};
    return _this14;
  }

  _createClass(RadioButtons, [{
    key: 'render',
    value: function render() {
      var _this15 = this;

      var self = this;
      var classNames = 'radio-label';
      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          this.props.data.options.map(function (option) {
            var this_key = 'preview_' + option.key;
            var props = {};
            props.name = self.props.data.field_name;

            props.type = 'radio';
            props.value = option.value;

            if (self.props.mutable) {
              props.defaultChecked = self.props.defaultValue !== undefined && self.props.defaultValue.indexOf(option.value) > -1 ? true : false;
            }

            if (_this15.props.read_only) {
              props.disabled = 'disabled';
              props.defaultChecked = self.props.defaultValue !== undefined && self.props.defaultValue.indexOf(option.key) > -1 ? true : false;
            }
            return _react2.default.createElement(
              'label',
              { className: classNames, key: this_key },
              _react2.default.createElement('input', _extends({
                ref: function ref(c) {
                  if (c && self.props.mutable) {
                    self.options['child_ref_' + option.key] = c;
                  }
                }
              }, props)),
              ' ',
              option.text
            );
          })
        )
      );
    }
  }]);

  return RadioButtons;
}(_react2.default.Component);

var Image = function (_React$Component14) {
  _inherits(Image, _React$Component14);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var style = this.props.data.center ? { textAlign: 'center' } : null;

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses, style: style },
        !this.props.mutable && _react2.default.createElement(_headerBar2.default, {
          parent: this.props.parent,
          editModeOn: this.props.editModeOn,
          data: this.props.data,
          onDestroy: this.props._onDestroy,
          onEdit: this.props.onEdit,
          required: this.props.data.required
        }),
        this.props.data.src && _react2.default.createElement('img', {
          src: this.props.data.src,
          width: this.props.data.width,
          height: this.props.data.height
        }),
        !this.props.data.src && _react2.default.createElement(
          'div',
          { className: 'no-image' },
          'No Image'
        )
      );
    }
  }]);

  return Image;
}(_react2.default.Component);

var Rating = function (_React$Component15) {
  _inherits(Rating, _React$Component15);

  function Rating(props) {
    _classCallCheck(this, Rating);

    var _this17 = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

    _this17.inputField = _react2.default.createRef();
    return _this17;
  }

  _createClass(Rating, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.name = this.props.data.field_name;
      props.ratingAmount = 5;

      if (this.props.mutable) {
        props.rating = this.props.defaultValue !== undefined && this.props.defaultValue.length ? parseFloat(this.props.defaultValue, 10) : 0;
        props.editing = true;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = true;
        props.editing = false;
        props.rating = this.props.defaultValue !== undefined ? parseFloat(this.props.defaultValue, 10) : 0;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: myxss.process(this.props.data.label)
              }
            }),
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement(_starRating2.default, props)
        )
      );
    }
  }]);

  return Rating;
}(_react2.default.Component);

var HyperLink = function (_React$Component16) {
  _inherits(HyperLink, _React$Component16);

  function HyperLink() {
    _classCallCheck(this, HyperLink);

    return _possibleConstructorReturn(this, (HyperLink.__proto__ || Object.getPrototypeOf(HyperLink)).apply(this, arguments));
  }

  _createClass(HyperLink, [{
    key: 'render',
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: this.props.data.href },
            this.props.data.content
          )
        )
      );
    }
  }]);

  return HyperLink;
}(_react2.default.Component);

var Download = function (_React$Component17) {
  _inherits(Download, _React$Component17);

  function Download() {
    _classCallCheck(this, Download);

    return _possibleConstructorReturn(this, (Download.__proto__ || Object.getPrototypeOf(Download)).apply(this, arguments));
  }

  _createClass(Download, [{
    key: 'render',
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'a',
            { href: this.props.download_path + '?id=' + this.props.data.file_path },
            this.props.data.content
          )
        )
      );
    }
  }]);

  return Download;
}(_react2.default.Component);

var Camera = function (_React$Component18) {
  _inherits(Camera, _React$Component18);

  function Camera(props) {
    _classCallCheck(this, Camera);

    var _this20 = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, props));

    _this20.displayImage = function (e) {
      var self = _this20;
      var target = e.target;
      var file, reader;

      if (target.files && target.files.length) {
        file = target.files[0];
        reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
          self.setState({
            img: reader.result
          });
        };
      }
    };

    _this20.clearImage = function () {
      _this20.setState({
        img: null
      });
    };

    _this20.inputField = _react2.default.createRef();
    _this20.state = { img: null };
    return _this20;
  }

  _createClass(Camera, [{
    key: 'render',
    value: function render() {
      var props = {};
      props.type = 'hidden';
      props.name = this.props.data.field_name;

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      if (this.props.mutable) {
        props.defaultValue = this.state.img || this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react2.default.createElement(
        'div',
        { className: baseClasses },
        !this.props.mutable && _react2.default.createElement(
          'div',
          null,
          this.props.data.pageBreakBefore && _react2.default.createElement(
            'div',
            { className: 'preview-page-break' },
            'Page Break'
          ),
          _react2.default.createElement(_headerBar2.default, {
            parent: this.props.parent,
            editModeOn: this.props.editModeOn,
            data: this.props.data,
            onDestroy: this.props._onDestroy,
            onEdit: this.props.onEdit,
            'static': this.props.data.static,
            required: this.props.data.required
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'form-label' },
            this.props.data.label,
            this.props.data.hasOwnProperty('required') && this.props.data.required === true && !this.props.read_only && _react2.default.createElement(
              'span',
              { className: 'label-required label label-danger' },
              'Required'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'image-upload-container' },
            !this.state.img && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('input', {
                type: 'file',
                accept: 'image/*',
                capture: 'camera',
                className: 'image-upload',
                onChange: this.displayImage
              }),
              _react2.default.createElement(
                'div',
                { className: 'image-upload-control' },
                _react2.default.createElement(
                  'div',
                  { className: 'btn btn-default btn-school' },
                  _react2.default.createElement('i', { className: 'fa fa-camera' }),
                  ' Upload Photo'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Select an image from your computer or device.'
                )
              )
            ),
            this.state.img && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', { src: this.state.img, height: '100', className: 'image-upload-preview' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', _extends({ type: 'hidden' }, props)),
              _react2.default.createElement(
                'div',
                { className: 'btn btn-school btn-image-clear', onClick: this.clearImage },
                _react2.default.createElement('i', { className: 'fa fa-times' }),
                ' Clear Photo'
              )
            )
          )
        )
      );
    }
  }]);

  return Camera;
}(_react2.default.Component);

// class Range extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputField = React.createRef();
//     this.state = {
//       value:
//         props.defaultValue !== undefined
//           ? parseInt(props.defaultValue, 10)
//           : parseInt(props.data.default_value, 10) || 0,
//     };
//   }

//   changeValue = e => {
//     const { target } = e;
//     this.setState({
//       value: target.value,
//     });
//   };

//   render() {
//     let props = {};
//     props.type = 'range';
//     props.name = this.props.data.field_name;
//     props.list = 'tickmarks_' + this.props.data.field_name;
//     props.min = this.props.data.min_value;
//     props.max = this.props.data.max_value;
//     props.step = this.props.data.step;
//     props.value = this.state.value;
//     props.disabled = this.props.read_only ? 'disabled' : '';

//     if (this.props.mutable) {
//       props.ref = this.inputField;
//     }

//     let datalist = [];
//     for (
//       var i = parseInt(this.props.data.min_value, 10);
//       i <= parseInt(this.props.data.max_value, 10);
//       i += parseInt(this.props.data.step, 10)
//     ) {
//       datalist.push(i);
//     }

//     let oneBig = 100 / (datalist.length - 1);

//     let _datalist = datalist.map((d, idx) => {
//       return <option key={props.list + '_' + idx}>{d}</option>;
//     });

//     let visible_marks = datalist.map((d, idx) => {
//       let option_props = {};
//       let w = oneBig;
//       if (idx === 0 || idx === datalist.length - 1) w = oneBig / 2;
//       option_props.key = props.list + '_label_' + idx;
//       option_props.style = { width: w + '%' };
//       if (idx === datalist.length - 1) option_props.style = { width: w + '%', textAlign: 'right' };
//       return <label {...option_props}>{d}</label>;
//     });

//     let baseClasses = 'SortableItem rfb-item';
//     if (this.props.data.pageBreakBefore) {
//       baseClasses += ' alwaysbreak';
//     }

//     return (
//       <div className={baseClasses}>
//         {!this.props.mutable && (
//           <div>
//             {this.props.data.pageBreakBefore && (
//               <div className="preview-page-break">Page Break</div>
//             )}
//             <HeaderBar
//               parent={this.props.parent}
//               editModeOn={this.props.editModeOn}
//               data={this.props.data}
//               onDestroy={this.props._onDestroy}
//               onEdit={this.props.onEdit}
//               static={this.props.data.static}
//               required={this.props.data.required}
//             />
//           </div>
//         )}
//         <div className="form-group">
//           <label className="form-label">
//             <span dangerouslySetInnerHTML={{ __html: this.props.data.label }} />
//             {this.props.data.hasOwnProperty('required') &&
//               this.props.data.required === true &&
//               !this.props.read_only && (
//                 <span className="label-required label label-danger">Required</span>
//               )}
//           </label>
//           <div className="range">
//             <div className="clearfix">
//               <span className="pull-left">{this.props.data.min_label}</span>
//               <span className="pull-right">{this.props.data.max_label}</span>
//             </div>
//             <ReactBootstrapSlider
//               name={props.name}
//               value={props.value}
//               step={this.props.data.step}
//               max={this.props.data.max_value}
//               min={this.props.data.min_value}
//               change={this.changeValue}
//               disabled={props.disabled}
//             />
//           </div>
//           <div className="visible_marks">{visible_marks}</div>
//           <input readOnly name={props.name} value={this.state.value} type="hidden" />
//           <datalist id={props.list}>{_datalist}</datalist>
//         </div>
//       </div>
//     );
//   }
// }

FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.Label = Label;
FormElements.LineBreak = LineBreak;
FormElements.TextInput = TextInput;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Signature = Signature;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = DatePicker;
FormElements.RadioButtons = RadioButtons;
FormElements.Image = Image;
FormElements.Rating = Rating;
FormElements.Tags = Tags;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.Camera = Camera;
// FormElements.Range = Range;

module.exports = FormElements;