 
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
	getNote(id) {
		return fetch(API_BASE+'note/detaillist/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

  	getStatus(id) {
		return fetch(API_BASE+'status/detaillist/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
	getStatusDetail(id) {
		return fetch(API_BASE+'status/detail/'+ id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  getCpa(id) {
		return fetch(API_BASE+'cpa/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  	getNoteUser(id) {
		return fetch(API_BASE+'note/detaillistuser/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
    	getGroupUser(id) {
		return fetch(API_BASE+'group/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
      	getGroupDetail(id) {
		return fetch(API_BASE+'group/detaillistuser/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  
  getUser(id) {
		return fetch(API_BASE+'akses/listsbycontact/'+id+'?iduser=' + global.userid,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
   getGroupUserDetail(id) {
		return fetch(API_BASE+'groupuser/detail/'+id,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori1() {
		return fetch(API_BASE+'produk/detailemailkategori/1',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori2() {
		return fetch(API_BASE+'produk/detailemailkategori/2',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori3() {
		return fetch(API_BASE+'produk/detailemailkategori/3',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori4() {
		return fetch(API_BASE+'produk/detailemailkategori/4',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori5() {
		return fetch(API_BASE+'produk/detailemailkategori/5',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori6() {
		return fetch(API_BASE+'produk/detailemailkategori/6',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori7() {
		return fetch(API_BASE+'produk/detailemailkategori/7',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori8() {
		return fetch(API_BASE+'produk/detailemailkategori/8',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori9() {
		return fetch(API_BASE+'produk/detailemailkategori/9',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori10() {
		return fetch(API_BASE+'produk/detailemailkategori/10',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getkategori11() {
		return fetch(API_BASE+'produk/detailemailkategori/11',{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getTemplate(id) {
		return fetch(API_BASE+'template/detail/'+id,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getTemplateId(id) {
		return fetch(API_BASE+'template/detailbyid/'+id,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
   getAkses(id) {
		return fetch(API_BASE+'akses/detail/'+id,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
	getDetailUser(id) {
		return fetch(API_BASE+'user/detail/'+id,{
			method:'GET',
			headers: {
				'Authorization': AUTH  		
      		},
		}).then((response) => response.json());
	},
  	getRequire(id) {
		return fetch(API_BASE+'loan/detaillists/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
	getContact() {
		return fetch(API_BASE+'produk/detail/'+ global.userid,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

	getRequest() {
		return fetch(API_BASE+'akses/detailcontact/'+ global.userid,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},

  getDetailCpa(id) {
		return fetch(API_BASE+'cpa/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  	getDetailContact(id) {
		return fetch(API_BASE+'produk/detailinfo/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
	getGroupContactadd(id) {
		return fetch(API_BASE+'groupuser/listsbycontact/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  getGroupContactlist(id) {
		return fetch(API_BASE+'groupuser/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
     	groupuserdelete(id) {
		return fetch(API_BASE+'groupuser/delete/'+id,{
			method:'POST',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
   	aksesdelete(id) {
		return fetch(API_BASE+'akses/delete/'+id,{
			method:'POST',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
   	contactdelete(id) {
		return fetch(API_BASE+'produk/delete/'+id,{
			method:'POST',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  groupdelete(id) {
		return fetch(API_BASE+'groupuser/delete/'+id,{
			method:'POST',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
  addGroupUser(data,data2) {
		let formdata = new FormData();
		formdata.append("id_group", data.contactid);
		formdata.append("id_contact", data2);
		return fetch('https://sirus.libertaapparel.com/groupuser/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
	getDetailNote(id) {
		return fetch(API_BASE+'note/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	}, 
  getDetaiLoan(id) {
		return fetch(API_BASE+'loan/detail/'+id,{
			method:'GET',
			headers: {
        		'Authorization': AUTH       		
      		},
		}).then((response) => response.json());
	},
addCpa(data) {
		let formdata = new FormData();
		formdata.append("id_user", data.id_user);
    formdata.append("id_contact", data.id_contact);
    formdata.append("pekerjaan", data.pekerjaan);
    formdata.append("alamat_kantor", data.alamat_kantor);
    formdata.append("lama_bekerja", data.lama_bekerja);
    formdata.append("tujuan_permohonan", data.tujuan_permohonan);
    formdata.append("tujuan_permohonan_keterangan", data.tujuan_permohonan_keterangan);
    formdata.append("plafond", data.plafond);
    formdata.append("jenis_pinjaman", data.jenis_pinjaman);
    formdata.append("jangka_waktu", data.jangka_waktu);
    formdata.append("status_menikah", data.status_menikah);
    formdata.append("nilai_angsuran", data.nilai_angsuran);
    formdata.append("bank", data.bank);
    formdata.append("bank_pengalaman", data.bank_pengalaman);
    formdata.append("total_penghasilan", data.total_penghasilan);
    formdata.append("penghasilan_lain", data.penghasilan_lain);
    formdata.append("ktp_pemohon", data.ktp_pemohon);
    formdata.append("ktp_pasangan", data.ktp_pasangan);
    formdata.append("kk", data.kk);
    formdata.append("akta_nikah", data.akta_nikah);
    formdata.append("npwp", data.npwp);
    formdata.append("spt", data.spt);
    formdata.append("slip_gaji", data.slip_gaji);
    formdata.append("rekening_terakhir", data.rekening_terakhir);
    formdata.append("surat_keterangan", data.surat_keterangan);
    formdata.append("akta_pisah_harta", data.akta_pisah_harta);
    formdata.append("pernyataan_pemilikan", data.pernyataan_pemilikan);
    formdata.append("pernyataan_pemilikan", data.pernyataan_pemilikan);
    formdata.append("imb", data.imb);
    formdata.append("pbb", data.pbb);




		return fetch(API_BASE+'produk/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
  addcontact(data) {
		let formdata = new FormData();
		formdata.append("type", data.type);
		formdata.append("name", data.name);
		formdata.append("id_user", global.userid);
		formdata.append("company_name", data.address);
		formdata.append("phone", data.phone);
		formdata.append("address", data.address);
    formdata.append("email", data.email);

		return fetch(API_BASE+'produk/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
addakses(data,data2) {
		let formdata = new FormData();
		formdata.append("iduser", data2);
		formdata.append("idcontact", data.contactid);
		return fetch('https://sirus.libertaapparel.com/akses/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},

  addtemplate(data) {
		let formdata = new FormData();
		formdata.append("title_message", data.title_message);
		formdata.append("message", data.value);
    formdata.append("id_user", global.userid);

		return fetch(API_BASE+'template/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},


  // aksesdelete(id) {
	// 	let formdata = new FormData();
	// 	formdata.append("id", id);

	// 	return fetch(API_BASE+'akses/delete',{
	// 		method: 'POST',
	// 		headers: {
  //       		'x-api-key': XAPIKEY,
  //       		'Authorization': AUTH     		
  //     		},
  //     		body: formdata
	// 	}).then((response) => response.json());
	// },

	updatecontact(data) {
		
		let formdata = new FormData();
		formdata.append("type", data.type);
		formdata.append("name", data.name);
		formdata.append("id", data.id_contact);
		formdata.append("id_user", global.userid);
		formdata.append("company_name", data.address);
		formdata.append("phone", data.phone);
		formdata.append("address", data.address);
    formdata.append("email", data.email);

		return fetch(API_BASE+'produk/update',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},

  	updateuser(data) {
		
		let formdata = new FormData();
		formdata.append("type", data.type);
		formdata.append("name", data.name);
		formdata.append("id", global.userid);
		formdata.append("company_name", data.address);
		formdata.append("phone", data.phone);
		formdata.append("address", data.address);
    formdata.append("email", data.email);

		return fetch(API_BASE+'user/update',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},

	updateNote(data) {
		
		let formdata = new FormData();
		formdata.append("type", data.type);
    formdata.append("id_user", data.id_user);
    formdata.append("id_contact", data.id_contact);
		formdata.append("assign_to", data.assign_to);
		formdata.append("note_detail", data.note_detail);
		formdata.append("due_date", data.due_date);
		formdata.append("id", data.id);

		return fetch(API_BASE+'note/update',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
  addnote(data) {
		
		let formdata = new FormData();
		formdata.append("type", data.type);
    formdata.append("id_user", data.id_user);
    formdata.append("id_contact", data.id_contact);
		formdata.append("assign_to", data.assign_to);
		formdata.append("note_detail", data.note_detail);
		formdata.append("due_date", data.due_date);

		return fetch(API_BASE+'note/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},

    addgroup(data) {
		
		let formdata = new FormData();
    formdata.append("id_user", global.userid);
    formdata.append("name", data.name);
		formdata.append("description", data.description);

		return fetch(API_BASE+'group/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},
	addloan(data) {
		
		let formdata = new FormData();
		formdata.append("total_amount", data.total_amount);
    formdata.append("id_user", global.userid);
    formdata.append("id_contact", global.userid);
		formdata.append("loan_purpose", data.loan_purpose);
		formdata.append("loan_type1", data.loan_type1);
		formdata.append("loan_amount1", data.loan_amount1);
		formdata.append("loan_type2", data.loan_type2);
		formdata.append("loan_amount2", data.loan_amount2);
		formdata.append("loan_type3", data.loan_type3);
		formdata.append("loan_amount3", data.loan_amount3);
		return fetch(API_BASE+'loan/insert',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
		}).then((response) => response.json());
	},

  updatenote(data) {
		
		let formdata = new FormData();
    formdata.append("id", data.id);
		formdata.append("type", data.type);
    formdata.append("id_user", data.id_user);
    formdata.append("id_contact", data.id_contact);
		formdata.append("assign_to", data.assign_to);
		formdata.append("note_detail", data.note_detail);
		formdata.append("due_date", data.due_date);

		return fetch(API_BASE+'note/update',{
			method: 'POST',
			headers: {
        		'x-api-key': XAPIKEY,
        		'Authorization': AUTH     		
      		},
      		body: formdata
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
	getKategoriLists() {
		return fetch(API_BASE+'kategori/lists/',{
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