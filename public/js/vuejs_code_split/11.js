(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

/* harmony default export */ __webpack_exports__["default"] = ({
  //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
  props: {
    //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
    items: {
      type: Array,
      required: true
    },
    //FIELDS JUGA SAMA DENGAN ITEMS
    fields: {
      type: Array,
      required: true
    },
    //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
    meta: {
      type: Object,
      required: true
    },
    isDetail: {
      type: String,
      required: false,
      "default": undefined
    }
  },
  data: function data() {
    return {
      //VARIABLE INI AKAN MENGHADLE SORTING DATA
      sortBy: null,
      //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
      sortDesc: false,
      //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
      selectedTrans: null
    };
  },
  watch: {
    //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
    sortBy: function sortBy() {
      //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
      //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
      //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    },
    //KETIKA VALUE DARI SORTDESC BERUBAH
    sortDesc: function sortDesc() {
      //MAKA CARA YANG SAMA AKAN DIKERJAKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    }
  },
  methods: {
    //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
    loadPerPage: function loadPerPage() {
      //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
      this.$emit('per_page', this.meta.per_page);
    },
    //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
    changePage: function changePage(val) {
      //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
      this.$emit('pagination', val);
    },
    // eslint-disable-next-line no-unused-vars
    edit: function edit(item, index, button) {
      this.$emit('selected', item);
    },
    //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
    //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
    //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function (e) {
      //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
      this.$emit('search', e.target.value);
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selected: {
      type: Object,
      required: false,
      "default": undefined
    },
    tipe: {
      type: String,
      required: true,
      "default": undefined
    }
  },
  data: function data() {
    return {
      aktif: 0,
      options: [{
        text: 'NonAktif',
        value: 0
      }, {
        text: 'Aktif',
        value: 1
      }],
      dataPegawai: {}
    };
  },
  mounted: function mounted() {
    if (this.tipe === 'Edit') {
      this.aktif = this.selected.aktif;
    }
  },
  methods: {
    action: function action() {
      if (this.tipe === 'Edit') {
        this.edit();
      } else {
        this.tambah();
      }
    },
    tambah: function tambah() {// TODO
    },
    edit: function edit() {
      var _this = this;

      window.axios.put("/pegawai/".concat(this.modal.selected.id), {
        status: this.aktif
      }).then(function (res) {
        console.log(res);

        if (res.status === 200) {
          _this.loadData();

          _this.$bvModal.hide('modal-pegawai');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pegawai.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pegawai.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./resources/js/components/Header.vue");
/* harmony import */ var _components_ModalPegawai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ModalPegawai */ "./resources/js/components/ModalPegawai.vue");
/* harmony import */ var _components_DataTablePegawai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataTablePegawai */ "./resources/js/components/DataTablePegawai.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CHeader: _components_Header__WEBPACK_IMPORTED_MODULE_1__["default"],
    DataTable: _components_DataTablePegawai__WEBPACK_IMPORTED_MODULE_3__["default"],
    CModal: _components_ModalPegawai__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user: {},
      columns: [{
        key: 'npk',
        sortable: true,
        label: 'NPK'
      }, {
        key: 'name',
        sortable: false,
        label: 'Nama'
      }, {
        key: 'role',
        sortable: true
      }, {
        key: 'aktif',
        sortable: true,
        label: 'Status'
      }, {
        key: 'actions',
        label: 'Aksi',
        sortable: false
      }],
      pegawais: [],
      modal: {
        open: false,
        selected: undefined,
        tipe: 'Add'
      },
      meta: {},
      //JUGA BERLAKU UNTUK META
      current_page: 1,
      //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10,
      //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'tanggal',
      //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING

    };
  },
  mounted: function mounted() {
    var _this = this;

    window.axios.get('/user').then(function (res) {
      _this.user = res.data;
    });
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      var current_page = this.search == '' ? this.current_page : 1;
      window.axios.get('/pegawai', {
        params: {
          page: current_page,
          per_page: this.per_page,
          q: this.search
        }
      }).then(function (res) {
        var data = res.data.data;
        _this2.pegawais = data.data;
        _this2.meta = {
          total: data.total,
          current_page: data.current_page,
          per_page: data.per_page,
          from: data.from,
          to: data.to
        };
      });
    },
    open: function open(type) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return !_this3.modal.open;

              case 2:
                _this3.modal.open = _context.sent;
                _this3.modal.tipe = type;
                if (type === 'Tambah') _this3.modal.selected = undefined;

                _this3.$bvModal.show('modal-pegawai');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleSelected: function handleSelected(id) {
      this.modal.selected = id;
      this.open('Edit');
    },
    handleStatus: function handleStatus(status) {
      this.aktif = status;
    },
    handlePerPage: function handlePerPage(val) {
      this.per_page = val;
      this.loadData();
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination: function handlePagination(val) {
      this.current_page = val; //SET CURRENT PAGE YANG AKTIF

      this.loadData();
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch: function handleSearch(val) {
      this.search = val;
      this.loadData();
    },
    //JIKA ADA EMIT SORT
    handleSort: function handleSort(val) {
      //MAKA SET SORT-NYA
      this.sortBy = val.sortBy;
      this.sortByDesc = val.sortDesc;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-4 mb-2" }, [
      _c("div", { staticClass: "form-inline" }, [
        _c("label", { staticClass: "mr-2" }, [_vm._v("Showing")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.meta.per_page,
                expression: "meta.per_page"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.meta,
                    "per_page",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
                _vm.loadPerPage
              ]
            }
          },
          [
            _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
          ]
        ),
        _vm._v(" "),
        _c("label", { staticClass: "ml-2" }, [_vm._v("Entries")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4 offset-md-4" }, [
      _c("div", { staticClass: "form-inline float-right" }, [
        _c("label", { staticClass: "mr-2" }, [_vm._v("Search")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text" },
          on: { input: _vm.search }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c("b-table", {
          attrs: {
            striped: "",
            hover: "",
            items: _vm.items,
            fields: _vm.fields,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "show-empty": ""
          },
          on: {
            "update:sortBy": function($event) {
              _vm.sortBy = $event
            },
            "update:sort-by": function($event) {
              _vm.sortBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "cell(role)",
              fn: function(data) {
                return [
                  _c("b-badge", { staticClass: "mx-1" }, [
                    _vm._v("\n          " + _vm._s(data.value) + "\n        ")
                  ])
                ]
              }
            },
            {
              key: "cell(aktif)",
              fn: function(data) {
                return [
                  data.value === 0
                    ? _c("b-badge", { staticClass: "mx-1" }, [
                        _vm._v("\n          Non-Aktif\n        ")
                      ])
                    : _c(
                        "b-badge",
                        { staticClass: "mx-1", attrs: { variant: "primary" } },
                        [_vm._v("\n          Aktif\n        ")]
                      )
                ]
              }
            },
            {
              key: "cell(actions)",
              fn: function(row) {
                return [
                  _c(
                    "b-button",
                    {
                      staticClass: "mr-1",
                      attrs: { size: "sm", variant: "secondary" },
                      on: {
                        click: function($event) {
                          return _vm.edit(row.item, row.index, $event.target)
                        }
                      }
                    },
                    [_vm._v("\n          Edit\n        ")]
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("p", [
        _vm._v(
          "Showing " +
            _vm._s(_vm.meta.from) +
            " to " +
            _vm._s(_vm.meta.to) +
            " of " +
            _vm._s(_vm.meta.total) +
            " items"
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("b-pagination", {
          attrs: {
            "total-rows": _vm.meta.total,
            "per-page": _vm.meta.per_page,
            align: "right",
            "aria-controls": "dw-datatable"
          },
          on: { change: _vm.changePage },
          model: {
            value: _vm.meta.current_page,
            callback: function($$v) {
              _vm.$set(_vm.meta, "current_page", $$v)
            },
            expression: "meta.current_page"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-header" }, [
    _c("div", { staticClass: "row mb-2" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v(_vm._s(_vm.title))
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      attrs: { id: "modal-pegawai", title: _vm.tipe + " Pegawai" },
      scopedSlots: _vm._u([
        {
          key: "modal-footer",
          fn: function(ref) {
            var cancel = ref.cancel
            return [
              _c(
                "b-button",
                {
                  attrs: { size: "sm", variant: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.action()
                    }
                  }
                },
                [_vm._v("\n      " + _vm._s(_vm.tipe) + "\n    ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { size: "sm", variant: "secondary" },
                  on: {
                    click: function($event) {
                      return cancel()
                    }
                  }
                },
                [_vm._v("\n      Batal\n    ")]
              )
            ]
          }
        }
      ])
    },
    [
      _vm.tipe === "Edit"
        ? [
            _c(
              "b-form-group",
              { attrs: { label: "Status" } },
              [
                _c("b-form-radio-group", {
                  attrs: { options: _vm.options, name: "radio-inline" },
                  model: {
                    value: _vm.aktif,
                    callback: function($$v) {
                      _vm.aktif = $$v
                    },
                    expression: "aktif"
                  }
                })
              ],
              1
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "no" },
    [
      _c("CHeader", { attrs: { title: _vm.$route.name } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-white rounded shadow p-2" },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm.user.role === "Kajur"
              ? _c("div", { staticClass: "col-2 pb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-block btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.open("Tambah")
                        }
                      }
                    },
                    [_vm._v("\n          Tambah Pegawai\n        ")]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("DataTable", {
            attrs: { fields: _vm.columns, items: _vm.pegawais, meta: _vm.meta },
            on: {
              selected: _vm.handleSelected,
              per_page: _vm.handlePerPage,
              pagination: _vm.handlePagination,
              search: _vm.handleSearch,
              sort: _vm.handleSort
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.modal.open
        ? _c("CModal", {
            attrs: { selected: _vm.modal.selected, tipe: _vm.modal.tipe }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-10" }, [
      _c("h4", { staticClass: "ml-2 mt-2" }, [_vm._v("List Pegawai")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DataTablePegawai.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/DataTablePegawai.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTablePegawai.vue?vue&type=template&id=ab42d712& */ "./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712&");
/* harmony import */ var _DataTablePegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTablePegawai.vue?vue&type=script&lang=js& */ "./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTablePegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DataTablePegawai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTablePegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTablePegawai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTablePegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTablePegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTablePegawai.vue?vue&type=template&id=ab42d712& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTablePegawai.vue?vue&type=template&id=ab42d712&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTablePegawai_vue_vue_type_template_id_ab42d712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f42fb90& */ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=1f42fb90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalPegawai.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ModalPegawai.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalPegawai.vue?vue&type=template&id=740b65ee& */ "./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee&");
/* harmony import */ var _ModalPegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalPegawai.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalPegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalPegawai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalPegawai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalPegawai.vue?vue&type=template&id=740b65ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPegawai.vue?vue&type=template&id=740b65ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPegawai_vue_vue_type_template_id_740b65ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pegawai.vue":
/*!****************************************!*\
  !*** ./resources/js/views/pegawai.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pegawai.vue?vue&type=template&id=f9d4a17e& */ "./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e&");
/* harmony import */ var _pegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pegawai.vue?vue&type=script&lang=js& */ "./resources/js/views/pegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pegawai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pegawai.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/pegawai.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pegawai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pegawai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pegawai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pegawai.vue?vue&type=template&id=f9d4a17e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pegawai.vue?vue&type=template&id=f9d4a17e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pegawai_vue_vue_type_template_id_f9d4a17e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);