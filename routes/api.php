<?php

use Illuminate\Support\Facades\Route;

Route::post('/auth/register', [\App\Http\Controllers\Auth\AuthController::class, 'register']);

Route::post('/auth/login', [\App\Http\Controllers\Auth\AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', [\App\Http\Controllers\UserController::class, 'user']);

    Route::post('/auth/logout', [\App\Http\Controllers\Auth\AuthController::class, 'logout']);
});
