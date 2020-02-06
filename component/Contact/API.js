
import base64 from 'base-64';
const API_BASE = 'https://sirus.libertaapparel.com/'
const XAPIKEY = 'CODEX@123';
//const AUTH = 'Basic YWRtaW46MTIzNA==';
const AUTH = 'Basic '+base64.encode("admin:1234");

var api = { 
		

	getFeatured() {
		return fetch(API_BASE+'content/article_by_category/8',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

	getSearch(keyword) {
		return fetch(API_BASE+'content/search/'+keyword,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

	getListCategory() {
		return fetch(API_BASE+'content/category',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},


	getArea() {
		return fetch(API_BASE+'content/article_by_category/8',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},  
		}).then((response) => response.json());
	},

	getListing() {
		return fetch(API_BASE+'content/article_by_category/10/15',{
			method:'GET',
			headers: {
        		'Authorization': AUTH      		
      		},
		}).then((response) => response.json());
	},
	getDetailUser(id) {
		return fetch(API_BASE+'user/detail/'+id,{
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	login(email,password) {

		let formdata = new FormData();
		formdata.append("email", email);
		formdata.append("password", password);

		return fetch(API_BASE+'user/login/',{
			method: 'POST',
			headers: {
        		
        		'Authorization': AUTH    		
      		},
      		body: formdata
		}).then((response) => response.json()); 
	},
    getListingslide() {
		return fetch(API_BASE+'content/article_by_category/10/3',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json()); 
	},
addcontact(data) {
		
		let formdata = new FormData();
		formdata.append("type", data.id);
		formdata.append("name", data.name);
		formdata.append("company_name", data.address);
		formdata.append("phone", data.profile.id_province);
		formdata.append("address", data.profile.id_area);

		return fetch(API_BASE+'produk/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
	getListing2(keyword) {
		return fetch(API_BASE+'content/search/'+keyword,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

	getSubCategory() {
		return fetch(API_BASE+'content/article_by_category/8',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},


	getarsuba(id) {
		return fetch(API_BASE+'content/article_by_subcategory/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
	getkategori() {
		return fetch(API_BASE+'content/subcategory/1',{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},


	getDetail(id) {
		return fetch(API_BASE+'content/detail/'+id,{
			method:'GET',
			headers: { 
        		'Authorization': AUTH    		
      		},
		}).then((response) => response.json());
	},

	getcategory(id) {
		return fetch(API_BASE+'content/subcategory/'+id,{
			method:'GET',
			headers: { 
        		'Authorization': AUTH   		
      		},
		}).then((response) => response.json());
	},

	getcategory4() {
		return fetch(API_BASE+'content/article_by_category/10/10',{
			method:'GET',
			headers: { 
        		'Authorization': AUTH   		
      		},
		}).then((response) => response.json());
	},

	get_article_by_category(id){
		return fetch(API_BASE+'content/article_by_category/'+id+'/5',{
			method:'GET',
			headers: { 
        		'Authorization': AUTH	
      		},
		}).then((response) => response.json());
	},

	get_article_by_category_random(id){
		return fetch(API_BASE+'content/article_by_category_random/'+id+'/5',{
			method:'GET',
			headers: { 
        		'Authorization': AUTH	
      		},
		}).then((response) => response.json());
	}

};

module.exports = api;