var stringify = require('../').stringify;
var parse = require('../').parse;
var path = require('path');
var read = require('fs').readFileSync;

describe('stringify(obj, {indent: *})', function() {
  var css =
    '@media print {\n' +
    '\tbody {\n' +
    '\t\tbackground: #fff;\n' +
    '\t}\n' +
    '}';
  var stylesheet = parse(css);

  it('should default to two-space indent', function(){
    var result = stringify(stylesheet);
    result.should.eql(css.replace(/\t/g, '  '));
  });

  it('should indent according to the indent string', function(){
    var result = stringify(stylesheet, { indent: '\t' });
    result.should.eql(css);
  });

  it('should accept empty string for indent', function(){
    var result = stringify(stylesheet, { indent: '' });
    result.should.eql(css.replace(/\t/g, ''));
  });
});
