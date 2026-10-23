export const initialServices = [
  {id:'ktp',name:'Pengantar KTP',short:'Pengurusan KTP elektronik',icon:'IdCard',time:'1–2 hari kerja',requires:'Fotokopi KTP lama (jika ada), Kartu Keluarga',extra:'',enabled:true},
  {id:'kk',name:'Pengantar Kartu Keluarga',short:'Pembuatan atau perubahan KK',icon:'Users',time:'1–2 hari kerja',requires:'KTP pemohon, Kartu Keluarga lama (jika ada)',extra:'',enabled:true},
  {id:'skck',name:'Pengantar SKCK',short:'Keperluan kepolisian',icon:'ShieldCheck',time:'1–2 hari kerja',requires:'KTP, Kartu Keluarga, pasfoto bila diwajibkan',extra:'',enabled:true},
  {id:'domisili',name:'Pengantar Domisili',short:'Keterangan domisili warga',icon:'House',time:'1–2 hari kerja',requires:'KTP, Kartu Keluarga',extra:'',enabled:true},
  {id:'sktm',name:'Pengantar Tidak Mampu',short:'Permohonan keterangan kondisi ekonomi',icon:'HeartHandshake',time:'1–3 hari kerja',requires:'KTP, Kartu Keluarga, dokumen pendukung sesuai kebijakan',extra:'',enabled:true},
  {id:'usaha',name:'Pengantar Usaha',short:'Kebutuhan administrasi usaha',icon:'Store',time:'1–2 hari kerja',requires:'KTP, Kartu Keluarga, informasi usaha',extra:'',enabled:true},
  {id:'nikah',name:'Pengantar Nikah',short:'Administrasi pengantar pernikahan',icon:'Heart',time:'2–3 hari kerja',requires:'KTP, Kartu Keluarga, berkas pendukung sesuai ketentuan KUA',extra:'',enabled:true},
  {id:'pindah',name:'Pengantar Pindah Penduduk',short:'Administrasi kepindahan warga',icon:'Truck',time:'1–3 hari kerja',requires:'KTP, Kartu Keluarga, alamat tujuan',extra:'',enabled:true},
  {id:'hilang',name:'Pengantar Kehilangan',short:'Keperluan surat kehilangan',icon:'Search',time:'1–2 hari kerja',requires:'KTP, Kartu Keluarga, rincian barang/dokumen',extra:'',enabled:true},
  {id:'umum',name:'Pengantar Umum / Lainnya',short:'Keperluan administrasi lainnya',icon:'FileText',time:'1–3 hari kerja',requires:'KTP, Kartu Keluarga, dokumen sesuai keperluan',extra:'',enabled:true},
];
export const initialInfo = {
  address:'Kantor Desa Pule, Kecamatan Pule, Kabupaten Trenggalek, Jawa Timur',
  phone:'(Nomor kontak belum diisi)',
  hours:'Senin–Jumat, 08.00–15.00 WIB (contoh; konfirmasi ke kantor desa)',
  announcement:'Portal ini merupakan DEMO. Persyaratan, jam layanan, dan alur penerbitan surat harus diverifikasi oleh Pemerintah Desa Pule.',
  head:'PEMERINTAH KABUPATEN TRENGGALEK',
  district:'KECAMATAN PULE',
  village:'PEMERINTAH DESA PULE',
  official:'Nama pejabat (belum diisi)',
  title:'Kepala Desa / Pejabat Berwenang',
};
export const initialRequests = [
  {id:'REG-2026-001',pin:'246810',type:'domisili',name:'Budi Santosa (Fiktif)',nik:'0000000000000001',kk:'0000000000000011',birthPlace:'Trenggalek',birthDate:'1993-06-14',gender:'Laki-laki',address:'Alamat contoh, Desa Pule',rt:'001',rw:'002',dusun:'Dusun Contoh',phone:'080000000001',purpose:'Keperluan administrasi (contoh)',status:'Diterima',date:'2026-10-20',documents:['KTP-CONTOH.pdf','KK-CONTOH.pdf'],notes:'',letterNumber:'',history:[{status:'Diterima',at:'2026-10-20',by:'Sistem demo',note:'Pengajuan diterima'}]},
  {id:'REG-2026-002',pin:'135790',type:'usaha',name:'Siti Larasati (Fiktif)',nik:'0000000000000002',kk:'0000000000000012',birthPlace:'Trenggalek',birthDate:'1997-04-11',gender:'Perempuan',address:'Alamat contoh, Desa Pule',rt:'003',rw:'001',dusun:'Dusun Contoh',phone:'080000000002',purpose:'Administrasi usaha makanan (contoh)',status:'Menunggu verifikasi',date:'2026-10-21',documents:['KTP-CONTOH.pdf','KK-CONTOH.pdf'],notes:'',letterNumber:'',history:[{status:'Diterima',at:'2026-10-21',by:'Sistem demo',note:'Pengajuan diterima'},{status:'Menunggu verifikasi',at:'2026-10-21',by:'Operator demo',note:'Siap diverifikasi'}]},
  {id:'REG-2026-003',pin:'112233',type:'skck',name:'Agus Pranoto (Fiktif)',nik:'0000000000000003',kk:'0000000000000013',birthPlace:'Trenggalek',birthDate:'1990-03-19',gender:'Laki-laki',address:'Alamat contoh, Desa Pule',rt:'002',rw:'003',dusun:'Dusun Contoh',phone:'080000000003',purpose:'Persyaratan administrasi (contoh)',status:'Diproses',date:'2026-10-21',documents:['KTP-CONTOH.pdf','KK-CONTOH.pdf'],notes:'',letterNumber:'',history:[{status:'Diterima',at:'2026-10-21',by:'Sistem demo',note:'Pengajuan diterima'},{status:'Diproses',at:'2026-10-22',by:'Verifikator demo',note:'Berkas telah diverifikasi'}]},
  {id:'REG-2026-004',pin:'445566',type:'ktp',name:'Dewi Anggraini (Fiktif)',nik:'0000000000000004',kk:'0000000000000014',birthPlace:'Trenggalek',birthDate:'1999-08-04',gender:'Perempuan',address:'Alamat contoh, Desa Pule',rt:'001',rw:'001',dusun:'Dusun Contoh',phone:'080000000004',purpose:'Penggantian KTP (contoh)',status:'Selesai',date:'2026-10-18',documents:['KTP-CONTOH.pdf','KK-CONTOH.pdf'],notes:'Siap diambil di kantor desa (simulasi).',letterNumber:'DEMO/001/2026',history:[{status:'Diterima',at:'2026-10-18',by:'Sistem demo',note:'Pengajuan diterima'},{status:'Menunggu verifikasi',at:'2026-10-18',by:'Operator demo',note:'Berkas lengkap'},{status:'Diproses',at:'2026-10-19',by:'Verifikator demo',note:'Terverifikasi'},{status:'Disetujui',at:'2026-10-19',by:'Pejabat demo',note:'Disetujui untuk simulasi'},{status:'Selesai',at:'2026-10-20',by:'Operator demo',note:'Surat demo siap diambil'}]},
];
export const demoAccounts = [
  {role:'warga',email:'warga@pule.demo',pass:'demo123',label:'Warga (demo)'},
  {role:'operator',email:'operator@pule.demo',pass:'demo123',label:'Operator Desa'},
  {role:'verifikator',email:'verifikator@pule.demo',pass:'demo123',label:'Verifikator'},
  {role:'pejabat',email:'pejabat@pule.demo',pass:'demo123',label:'Pejabat Berwenang'},
];
export const statuses=['Diterima','Menunggu verifikasi','Diproses','Perlu perbaikan','Disetujui','Selesai','Ditolak'];
export const badgeMap={'Diterima':'neutral','Menunggu verifikasi':'amber','Diproses':'blue','Perlu perbaikan':'red','Disetujui':'teal','Selesai':'green','Ditolak':'red'};
