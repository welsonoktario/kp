(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{67:function(a,t,e){"use strict";e.r(t);var s=e(2),n=e(7),i=e(5),o={components:{CHeader:s.a,DataTable:n.a,CModal:i.a},data:function(){return{user:{},columns:[{key:"tanggal_transaksi",sortable:!0},{key:"keterangan",sortable:!1},{key:"pemasukan",sortable:!0},{key:"pengeluaran",sortable:!0},{key:"kategori",label:"Kategori",sortable:!0},{key:"dompet.nama",label:"Dompet",sortable:!0},{key:"actions",label:"Aksi",sortable:!1}],aktivitas:{},meta:{},current_page:1,per_page:10,search:"",sortBy:"tanggal",sortByDesc:!1}},mounted:function(){this.loadTransaksi()},methods:{loadTransaksi:function(){var a=this,t=this.$route.params.id;window.axios.get("/user").then((function(e){a.user=e.data,window.axios.get("/aktivitas/".concat(t)).then((function(t){console.log(t),a.aktivitas=t.data.data}))}))},handlePerPage:function(a){this.per_page=a},handlePagination:function(a){this.current_page=a,this.loadPostsData()},handleSearch:function(a){this.search=a},handleSort:function(a){this.sortBy=a.sortBy,this.sortByDesc=a.sortDesc}}},r=e(1),l=Object(r.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"no"},[e("CHeader",{attrs:{title:a.$route.name}}),a._v(" "),e("div",{staticClass:"bg-white rounded shadow p-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10"},[e("h4",{staticClass:"ml-2 mt-2"},[a._v(a._s(a.aktivitas.keterangan))])]),a._v(" "),a._m(0)]),a._v(" "),a.aktivitas.transaksi?e("DataTable",{attrs:{fields:a.columns,items:a.aktivitas.transaksi,meta:a.meta,"is-detail":"Kegiatan"},on:{per_page:a.handlePerPage,pagination:a.handlePagination,search:a.handleSearch,sort:a.handleSort}}):a._e()],1),a._v(" "),e("CModal",{attrs:{"is-detail":"Kegiatan","id-modal":"modalTambah",tipe:"Tambah","is-aktivitas":!0}})],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col-2 pb-4"},[t("button",{staticClass:"btn btn-block btn-primary",attrs:{"data-toggle":"modal","data-target":"#modalTambah"}},[this._v("\n          Tambah Transaksi\n        ")])])}],!1,null,null,null);t.default=l.exports}}]);