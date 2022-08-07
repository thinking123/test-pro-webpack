function Ch1(props) {
  var _React$useState2 = React.useState(1),
    sb = _React$useState2[0],
    setSb = _React$useState2[1];
  var ref = React.useRef();
  React.useEffect(
    function () {
      console.log("Ch1 useEffect", sb);
      console.log("Ch1 ref", ref.current);

      return function () {
        console.log("Ch1 useEffect cb", sb);
      };
    },
    [sb]
  );

  return /*#__PURE__*/ React.createElement(
    TestContext.Provider,
    {
      value: {
        tv: sb,
      },
      __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 9 },
    } /*#__PURE__*/,

    React.createElement(
      "div",
      {
        ref: buttonRef1,
        onClick: function () {
          ref.current = {
            b: 12,
          };

          setSb(function (pre) {
            return pre + 1;
          });
        },
        __source: { fileName: _jsxFileName, lineNumber: 107, columnNumber: 11 },
      } /*#__PURE__*/,
      React.createElement(Ch2, {
        __source: { fileName: _jsxFileName, lineNumber: 115, columnNumber: 13 },
      })
    )
  );
}
