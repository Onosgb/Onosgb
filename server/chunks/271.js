"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(644);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(614);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const Navigation = () => {
  const {
    0: collapseClasses,
    1: setCollapseClasses
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_2___default())(document.getElementById("navbar-main")); // initialise

    headroom.init();
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("header", {
      className: "header-global",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
        className: "navbar-main navbar-transparent navbar-light headroom",
        expand: "lg",
        id: "navbar-main",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {
            href: "/",
            className: "mr-lg-5",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
              className: "text-white",
              id: "nav-title",
              children: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .greetings.name */ .c0.name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            className: "navbar-toggler",
            "aria-label": "navbar_toggle",
            id: "navbar_global",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "navbar-toggler-icon"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.UncontrolledCollapse, {
            toggler: "#navbar_global",
            navbar: true,
            className: collapseClasses,
            onExiting: onExiting,
            onExited: onExited,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "navbar-collapse-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                  className: "collapse-brand",
                  xs: "6",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    className: "text-black",
                    id: "nav-title",
                    children: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .greetings.name */ .c0.name
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                  className: "collapse-close",
                  xs: "6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    className: "navbar-toggler",
                    id: "navbar_global",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {})]
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
              className: "align-items-lg-center ml-lg-auto",
              navbar: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                  rel: "noopener",
                  "aria-label": "Facebook",
                  className: "nav-link-icon",
                  href: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.facebook */ .KT.facebook,
                  target: "_blank",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-facebook-square"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "nav-link-inner--text d-lg-none ml-2",
                    children: "Facebook"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                  rel: "noopener",
                  "aria-label": "Instagram",
                  className: "nav-link-icon",
                  href: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.instagram */ .KT.instagram,
                  target: "_blank",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-instagram"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "nav-link-inner--text d-lg-none ml-2",
                    children: "Instagram"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                  rel: "noopener",
                  "aria-label": "Twitter",
                  className: "nav-link-icon",
                  href: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.twitter */ .KT.twitter,
                  target: "_blank",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-twitter-square"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "nav-link-inner--text d-lg-none ml-2",
                    children: "Twitter"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                  rel: "noopener",
                  "aria-label": "Github",
                  className: "nav-link-icon",
                  href: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.github */ .KT.github,
                  target: "_blank",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-github"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "nav-link-inner--text d-lg-none ml-2",
                    children: "Github"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                  rel: "noopener",
                  "aria-label": "Linkedin",
                  className: "nav-link-icon",
                  href: _portfolio__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.linkedin */ .KT.linkedin,
                  target: "_blank",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-linkedin"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "nav-link-inner--text d-lg-none ml-2",
                    children: "Linkedin"
                  })]
                })
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ })

};
;