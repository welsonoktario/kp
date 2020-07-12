<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/admin/', function () {
    if (Auth::check()) {
        return view('admin.index');
    }
    return redirect('/login');
});

Route::get('/export', 'ExportController@index');
Route::get('/export/pdf', 'ExportController@export');

Route::get('/users', 'UsersController@index');
Route::post('/users', 'UsersController@create');

Route::group(['prefix' => 'api'], function () {
    Route::resource('transaksi', 'TransaksiController');
});

Route::get('/admin/transaksi', function () {
    return view('admin.transaksi.index');
});

Route::get('/admin/dompet', function () {
    return view('admin.dompet.index');
});

Route::get('/admin/kategori', function () {
    return view('admin.kategori.index');
});

Route::get('/admin/aktivitas', function () {
    return view('admin.aktivitas.index');
});

Route::get('/admin/aktivitas/:id', function () {
    return view('admin.aktivitas.detail-aktivitas');
});

Route::get('/admin/laporan', function () {
    return view('admin.laporan.index');
});
