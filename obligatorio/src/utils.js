//import React, { Component } from 'react'
//import axios from 'axios'
import fetch from 'cross-fetch'

var cookieValor = document.cookie

function getAllUsers(){
	return fetch('http://localhost:777/users')
	.then(response => response.json())
}
function getUserById(){
	return fetch('http://localhost:777/users?id=' + cookieValor)
	.then(response => response.json())
}


function getAllSites(){
	return fetch('http://localhost:777/sites')
	.then(response => response.json())
}


const direccion = 'http://localhost:777/sites';

function getSitesByName(name){
	return fetch(direccion + '?name=' + name)
	.then(response => response.json())
}

function getSitesById(){
	return fetch(direccion + '?id=' + 1)
	.then(response => response.json())
}

function getAllReviews(){
	return fetch('http://localhost:777/reviews')
	.then(response => response.json())
}

function getReviewsById(id){
	return fetch(direccion + '?id=' + id)
	.then(response => response.json())
}

export {getAllUsers, getUserById, getAllSites, getSitesByName, getSitesById, getAllReviews, getReviewsById}
