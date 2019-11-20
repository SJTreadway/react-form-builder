'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dynamicOptionList = require('./dynamic-option-list');

var _dynamicOptionList2 = _interopRequireDefault(_dynamicOptionList);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _draftJs = require('draft-js');

var _draftjsToHtml = require('draftjs-to-html');

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _reactDraftWysiwyg = require('react-draft-wysiwyg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toolbar = {
  options: ['inline', 'list', 'textAlign', 'fontSize', 'link', 'history'],
  inline: {
    inDropdown: false,
    className: undefined,
    options: ['bold', 'italic', 'underline', 'superscript', 'subscript']
  }
};

var FormElementsEdit = function (_React$Component) {
  _inherits(FormElementsEdit, _React$Component);

  function FormElementsEdit(props) {
    _classCallCheck(this, FormElementsEdit);

    var _this = _possibleConstructorReturn(this, (FormElementsEdit.__proto__ || Object.getPrototypeOf(FormElementsEdit)).call(this, props));

    _this.state = {
      element: _this.props.element,
      data: _this.props.data,
      dirty: false
    };
    return _this;
  }

  _createClass(FormElementsEdit, [{
    key: 'toggleRequired',
    value: function toggleRequired() {
      var this_element = this.state.element;
    }
  }, {
    key: 'editElementProp',
    value: function editElementProp(elemProperty, targProperty, e) {
      var _this2 = this;

      // elemProperty could be content or label
      // targProperty could be value or checked
      var this_element = this.state.element;
      this_element[elemProperty] = e.target[targProperty];

      this.setState({
        element: this_element,
        dirty: true
      }, function () {
        if (targProperty === 'checked') {
          _this2.updateElement();
        }
      });
    }
  }, {
    key: 'editSelectProp',
    value: function editSelectProp(elemProperty, values) {
      var _this3 = this;

      // elemProperty could be content or label
      // targProperty could be value or checked
      var this_element = this.state.element;
      if (values === undefined || values === null || values === '') {
        this_element[elemProperty] = '';
      } else {
        if (Array.isArray(values)) {
          this_element[elemProperty] = values.map(function (value) {
            return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.value : value;
          });
        } else {
          this_element[elemProperty] = values.value;
        }
      }
      this.setState({
        element: this_element,
        dirty: true
      }, function () {
        _this3.updateElement();
      });
    }
  }, {
    key: 'onEditorStateChange',
    value: function onEditorStateChange(index, property, editorContent) {
      var html = (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(editorContent.getCurrentContent())).replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>');
      var this_element = this.state.element;
      this_element[property] = html;

      this.setState({
        element: this_element,
        dirty: true
      });
    }
  }, {
    key: 'updateElement',
    value: function updateElement() {
      var this_element = this.state.element;
      // to prevent ajax calls with no change
      if (this.state.dirty) {
        this.props.updateElement.call(this.props.preview, this_element);
        this.setState({ dirty: false });
      }
    }
  }, {
    key: 'convertFromHTML',
    value: function convertFromHTML(content) {
      var newContent = (0, _draftJs.convertFromHTML)(content);
      if (!newContent.contentBlocks) {
        // to prevent crash when no contents in editor
        return _draftJs.EditorState.createEmpty();
      }
      var contentState = _draftJs.ContentState.createFromBlockArray(newContent);
      return _draftJs.EditorState.createWithContent(contentState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var this_checked = this.props.element.hasOwnProperty('required') ? this.props.element.required : false;
      var this_read_only = this.props.element.hasOwnProperty('readOnly') ? this.props.element.readOnly : false;
      var this_default_today = this.props.element.hasOwnProperty('defaultToday') ? this.props.element.defaultToday : false;
      var this_checked_inline = this.props.element.hasOwnProperty('inline') ? this.props.element.inline : false;
      var this_checked_bold = this.props.element.hasOwnProperty('bold') ? this.props.element.bold : false;
      var this_checked_italic = this.props.element.hasOwnProperty('italic') ? this.props.element.italic : false;
      var this_checked_center = this.props.element.hasOwnProperty('center') ? this.props.element.center : false;
      var this_checked_page_break = this.props.element.hasOwnProperty('pageBreakBefore') ? this.props.element.pageBreakBefore : false;
      var this_checked_alternate_form = this.props.element.hasOwnProperty('alternateForm') ? this.props.element.alternateForm : false;

      var this_files = this.props.files.length ? this.props.files : [];
      if (this_files.length < 1 || this_files.length > 0 && this_files[0].id !== '') {
        this_files.unshift({
          id: '',
          file_name: ''
        });
      }

      var editorState = void 0;
      if (this.props.element.hasOwnProperty('content')) {
        editorState = this.convertFromHTML(this.props.element.content);
      }
      if (this.props.element.hasOwnProperty('label')) {
        editorState = this.convertFromHTML(this.props.element.label);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'clearfix' },
          _react2.default.createElement(
            'h4',
            { className: 'pull-left' },
            this.props.element.text
          ),
          _react2.default.createElement('i', {
            className: 'pull-right fa fa-times dismiss-edit',
            onClick: this.props.manualEditModeOff
          })
        ),
        this.props.element.hasOwnProperty('content') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label' },
            'Text to display:'
          ),
          _react2.default.createElement(_reactDraftWysiwyg.Editor, {
            toolbar: toolbar,
            defaultEditorState: editorState,
            onBlur: this.updateElement.bind(this),
            onEditorStateChange: this.onEditorStateChange.bind(this, 0, 'content')
          })
        ),
        this.props.element.hasOwnProperty('file_path') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label', htmlFor: 'fileSelect' },
            'Choose file:'
          ),
          _react2.default.createElement(
            'select',
            {
              id: 'fileSelect',
              className: 'form-control',
              defaultValue: this.props.element.file_path,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'file_path', 'value')
            },
            this_files.map(function (file) {
              var this_key = 'file_' + file.id;
              return _react2.default.createElement(
                'option',
                { value: file.id, key: this_key },
                file.file_name
              );
            })
          )
        ),
        this.props.element.hasOwnProperty('href') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_reactTextareaAutosize2.default, {
            type: 'text',
            minRows: 8,
            className: 'form-control',
            defaultValue: this.props.element.href,
            onBlur: this.updateElement.bind(this),
            onChange: this.editElementProp.bind(this, 'href', 'value')
          })
        ),
        this.props.element.hasOwnProperty('src') && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { className: 'control-label', htmlFor: 'srcInput' },
              'Link to:'
            ),
            _react2.default.createElement('input', {
              id: 'srcInput',
              type: 'text',
              className: 'form-control',
              defaultValue: this.props.element.src,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'src', 'value')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'checkbox' },
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', {
                  type: 'checkbox',
                  checked: this_checked_center,
                  value: true,
                  onChange: this.editElementProp.bind(this, 'center', 'checked')
                }),
                'Center?'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: 'elementWidth' },
                'Width:'
              ),
              _react2.default.createElement('input', {
                id: 'elementWidth',
                type: 'text',
                className: 'form-control',
                defaultValue: this.props.element.width,
                onBlur: this.updateElement.bind(this),
                onChange: this.editElementProp.bind(this, 'width', 'value')
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: 'elementHeight' },
                'Height:'
              ),
              _react2.default.createElement('input', {
                id: 'elementHeight',
                type: 'text',
                className: 'form-control',
                defaultValue: this.props.element.height,
                onBlur: this.updateElement.bind(this),
                onChange: this.editElementProp.bind(this, 'height', 'value')
              })
            )
          )
        ),
        this.props.element.hasOwnProperty('label') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Display Label'
          ),
          _react2.default.createElement(_reactDraftWysiwyg.Editor, {
            toolbar: toolbar,
            defaultEditorState: editorState,
            onBlur: this.updateElement.bind(this),
            onEditorStateChange: this.onEditorStateChange.bind(this, 0, 'label')
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked,
                value: true,
                onChange: this.editElementProp.bind(this, 'required', 'checked')
              }),
              'Required'
            )
          ),
          this.props.element.hasOwnProperty('readOnly') && _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_read_only,
                value: true,
                onChange: this.editElementProp.bind(this, 'readOnly', 'checked')
              }),
              'Read only'
            )
          ),
          this.props.element.hasOwnProperty('defaultToday') && _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_default_today,
                value: true,
                onChange: this.editElementProp.bind(this, 'defaultToday', 'checked')
              }),
              'Default to Today?'
            )
          ),
          (this.state.element.element === 'RadioButtons' || this.state.element.element === 'Checkboxes') && _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked_inline,
                value: true,
                onChange: this.editElementProp.bind(this, 'inline', 'checked')
              }),
              'Display horizonal'
            )
          )
        ),
        this.state.element.element === 'Signature' && this.props.element.readOnly ? _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label', htmlFor: 'variableKey' },
            'Variable Key:'
          ),
          _react2.default.createElement('input', {
            id: 'variableKey',
            type: 'text',
            className: 'form-control',
            defaultValue: this.props.element.variableKey,
            onBlur: this.updateElement.bind(this),
            onChange: this.editElementProp.bind(this, 'variableKey', 'value')
          }),
          _react2.default.createElement(
            'p',
            { className: 'help-block' },
            'This will give the element a key that can be used to replace the content with a runtime value.'
          )
        ) : _react2.default.createElement('div', null),
        (this.props.element.custom_options || []).map(function (c_option) {
          if (c_option.type === 'input') {
            return _react2.default.createElement(
              'div',
              { className: 'form-group', key: c_option.name },
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: c_option.name },
                c_option.label
              ),
              _react2.default.createElement('input', {
                id: c_option.name,
                type: 'text',
                className: 'form-control',
                defaultValue: _this4.props.element[c_option.name] || c_option.defaultValue,
                onBlur: _this4.updateElement.bind(_this4),
                onChange: _this4.editElementProp.bind(_this4, c_option.name, 'value')
              })
            );
          } else if (c_option.type === 'textarea') {
            return _react2.default.createElement(
              'div',
              { className: 'form-group', key: c_option.name },
              _react2.default.createElement(
                'label',
                { className: 'control-label', htmlFor: c_option.name },
                c_option.label
              ),
              _react2.default.createElement('textarea', {
                id: c_option.name,
                className: 'form-control',
                rows: '8',
                defaultValue: _this4.props.element[c_option.name] || c_option.defaultValue,
                onBlur: _this4.updateElement.bind(_this4),
                onChange: _this4.editElementProp.bind(_this4, c_option.name, 'value')
              })
            );
          } else if (c_option.type === 'select') {
            var values = _this4.props.element[c_option.name];
            var selectedValues = values;
            if (c_option.isMulti) {
              if (Array.isArray(values) && values.length > 0 && typeof values[0] === 'string') {
                selectedValues = c_option.options.filter(function (option) {
                  return values.includes(option.value);
                });
              }
            } else {
              if (typeof values === 'string') {
                selectedValues = c_option.options.find(function (option) {
                  return values === option.value;
                });
              }
            }
            return _react2.default.createElement(
              'div',
              { className: 'form-group', key: c_option.name },
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                c_option.label
              ),
              _react2.default.createElement(_reactSelect2.default, {
                isMulti: c_option.isMulti || false,
                id: c_option.name,
                options: c_option.options,
                defaultValue: selectedValues || c_option.defaultValue,
                onBlur: _this4.updateElement.bind(_this4),
                onChange: _this4.editSelectProp.bind(_this4, c_option.name)
              })
            );
          } else if (c_option.type === 'checkbox') {
            return _react2.default.createElement(
              'div',
              { className: 'form-group', key: c_option.name },
              _react2.default.createElement(
                'div',
                { className: 'checkbox' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: _this4.props.element[c_option.name] || c_option.defaultvalue || false,
                    value: true,
                    onChange: _this4.editElementProp.bind(_this4, c_option.name, 'checked')
                  }),
                  c_option.label
                )
              )
            );
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label' },
            'Print Options'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked_page_break,
                value: true,
                onChange: this.editElementProp.bind(this, 'pageBreakBefore', 'checked')
              }),
              'Page Break Before Element?'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label' },
            'Alternate/Signature Page'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked_alternate_form,
                value: true,
                onChange: this.editElementProp.bind(this, 'alternateForm', 'checked')
              }),
              'Display on alternate/signature Page?'
            )
          )
        ),
        this.props.element.hasOwnProperty('step') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'form-group-range' },
            _react2.default.createElement(
              'label',
              { className: 'control-label', htmlFor: 'rangeStep' },
              'Step'
            ),
            _react2.default.createElement('input', {
              id: 'rangeStep',
              type: 'number',
              className: 'form-control',
              defaultValue: this.props.element.step,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'step', 'value')
            })
          )
        ),
        this.props.element.hasOwnProperty('min_value') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'form-group-range' },
            _react2.default.createElement(
              'label',
              { className: 'control-label', htmlFor: 'rangeMin' },
              'Min'
            ),
            _react2.default.createElement('input', {
              id: 'rangeMin',
              type: 'number',
              className: 'form-control',
              defaultValue: this.props.element.min_value,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'min_value', 'value')
            }),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'form-control',
              defaultValue: this.props.element.min_label,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'min_label', 'value')
            })
          )
        ),
        this.props.element.hasOwnProperty('max_value') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'form-group-range' },
            _react2.default.createElement(
              'label',
              { className: 'control-label', htmlFor: 'rangeMax' },
              'Max'
            ),
            _react2.default.createElement('input', {
              id: 'rangeMax',
              type: 'number',
              className: 'form-control',
              defaultValue: this.props.element.max_value,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'max_value', 'value')
            }),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'form-control',
              defaultValue: this.props.element.max_label,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'max_label', 'value')
            })
          )
        ),
        this.props.element.hasOwnProperty('default_value') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'form-group-range' },
            _react2.default.createElement(
              'label',
              { className: 'control-label', htmlFor: 'defaultSelected' },
              'Default Selected'
            ),
            _react2.default.createElement('input', {
              id: 'defaultSelected',
              type: 'number',
              className: 'form-control',
              defaultValue: this.props.element.default_value,
              onBlur: this.updateElement.bind(this),
              onChange: this.editElementProp.bind(this, 'default_value', 'value')
            })
          )
        ),
        this.props.element.hasOwnProperty('static') && this.props.element.static && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label' },
            'Text Style'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked_bold,
                value: true,
                onChange: this.editElementProp.bind(this, 'bold', 'checked')
              }),
              'Bold'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this_checked_italic,
                value: true,
                onChange: this.editElementProp.bind(this, 'italic', 'checked')
              }),
              'Italic'
            )
          )
        ),
        this.props.showCorrectColumn && this.props.element.canHaveAnswer && !this.props.element.hasOwnProperty('options') && _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { className: 'control-label', htmlFor: 'correctAnswer' },
            'Correct Answer'
          ),
          _react2.default.createElement('input', {
            id: 'correctAnswer',
            type: 'text',
            className: 'form-control',
            defaultValue: this.props.element.correct,
            onBlur: this.updateElement.bind(this),
            onChange: this.editElementProp.bind(this, 'correct', 'value')
          })
        ),
        this.props.element.hasOwnProperty('options') && _react2.default.createElement(_dynamicOptionList2.default, {
          showCorrectColumn: this.props.showCorrectColumn,
          data: this.props.preview.state.data,
          updateElement: this.props.updateElement,
          preview: this.props.preview,
          element: this.props.element,
          key: this.props.element.options.length
        })
      );
    }
  }]);

  return FormElementsEdit;
}(_react2.default.Component);

exports.default = FormElementsEdit;

FormElementsEdit.defaultProps = { className: 'edit-element-fields' };