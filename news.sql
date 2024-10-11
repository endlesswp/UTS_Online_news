-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 11, 2024 at 11:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idcategory` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idcategory`, `category`) VALUES
(1, 'Sports'),
(2, 'Politic'),
(3, 'Technology'),
(4, 'Business'),
(5, 'Music');

-- --------------------------------------------------------

--
-- Table structure for table `newscontent`
--

CREATE TABLE `newscontent` (
  `idnews` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `idcategory` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newscontent`
--

INSERT INTO `newscontent` (`idnews`, `link`, `imageurl`, `idcategory`, `judul`, `content`) VALUES
(1, 'https://hot.detik.com/music/d-7401232/27-juni-2024-pembelian-tiket-konser-bruno-mars-di-jakarta-dibuka', 'https://akcdn.detik.net.id/community/media/visual/2024/06/21/bruno-mars_34.jpeg', 5, 'Info Lengkap Konser Bruno Mars Jakarta 2024\n', 'Setelah menunggu lebih dari satu dekade, akhirnya Bruno Mars bakal konser di Indonesia dengan gelaran bertajuk 24K Magic Live. Konser ini bakal dihelat selama tiga hari pada 11, 13, dan 14 September 2024 di Jakarta International Stadium (JIS).\r\nKarena tingginya antusiasme dari penggemar, promotor PK Entertainment bahkan menambah satu hari pertunjukan dari jadwal awal yang cuma dua hari. Bayangin deh, tiga hari berturut-turut penyanyi pemilik nama asli Peter Gene Hernandez itu bakal menghentak JIS dengan hits-hits andalannya. Gokil banget, kan?\r\n'),
(3, 'https://sport.detik.com/raket/d-7582279/hasil-arctic-open-2024-rinov-pitha-tambah-wakil-indonesia-di-perempatfinal', 'https://akcdn.detik.net.id/community/media/visual/2024/05/25/rinov-rivaldypitha-haningtyas-mentari-1_169.jpeg', 1, 'Hasil Arctic Open 2024: Rinov/Pitha Tambah Wakil Indonesia di Perempat final  ', 'Vantaa - Rinov Rinaldy/Pitha Haningtyas Mentari maju ke perempatfinal Arctic Open 2024. Ganda campuran Indonesia mengatasi Gregory Mairs/Jenny Mairs 19-21, 21-10, 21-16.\r\nDi Court 2 Energia Areena, Vantaa, Finlandia, Kamis (10/10/2024), Rinov/Pitha mendapat perlawanan sengit dari pasangan Inggris. Kejar-kejaran poin terjadi sejak awal.\r\n\r\nPada gim pertama, Rinov/Pitha sempat unggul saat interval dengan skor 11-9. Duo Mairs kemudian mengejarnya selepas jeda.\r\n\r\nBaca artikel detiksport, \"Hasil Arctic Open 2024: Rinov/Pitha Tambah Wakil Indonesia di Perempatfinal\" selengkapnya https://sport.detik.com/raket/d-7582279/hasil-arctic-open-2024-rinov-pitha-tambah-wakil-indonesia-di-perempatfinal.'),
(8, 'https://inet.detik.com/consumer/d-7582138/xl-rilis-bundling-esim-xiaomi-14t-galaxy-s23-fe-gratis-kuota-60-gb', 'https://akcdn.detik.net.id/community/media/visual/2024/10/10/bundling-esim-xl-axiata_169.jpeg', 3, 'XL Rilis Bundling eSIM Xiaomi 14T & Galaxy S23 FE, Gratis Kuota 60 GB', 'Jakarta - XL Axiata kembali menghadirkan program bundling eSIM untuk dua HP yang baru dirilis di Indonesia, yaitu Xiaomi 14T series dan Samsung Galaxy S23 FE. Melalui program ini, pelanggan bisa mendapatkan kuota internet berlimpah tiap bulan selama setahun.\r\n\"Peluncuran bundlingeSIM prabayar ini merupakan wujud komitmen XLAxiata dalam menyediakan layanan yang lebih fleksibel dan inovatif bagi pelanggan. Kami ingin memastikan bahwa setiap pengguna dapat menikmati jaringan internet yang cepat, stabil, dan handal di seluruh Indonesia, didukung oleh kuota data yang besar dan kemudahan aktivasi eSIM.\" kata Alfons Eric Bosch Sansa, Chief Marketing Officer XL Axiata.'),
(9, 'https://inet.detik.com/review-produk/d-7580669/review-macbook-air-m3-15-inch-kencang-untuk-kerja-dan-gaming', 'https://akcdn.detik.net.id/community/media/visual/2024/08/22/macbook-air-m3-17_169.jpeg', 3, 'Review MacBook Air M3 15 Inch: Kencang untuk Kerja dan Gaming', 'MacBook Air 15 inch M3 hadir sebagai laptop yang memadukan desain elegan, performa bertenaga, dan portabilitas tinggi. Berbagai keunggulan disematkan Apple pada perangkat ini, menjadikannya pilihan menarik bagi pengguna yang menginginkan laptop mumpuni untuk berbagai kebutuhan.\r\nDemikian rangkuman pengalaman detikINET saat menjajal MacBook Air 15 inch M3 dalam beberapa pekan terakhir untuk menemani aktivitas, mulai dari produktivitas hingga menikmati hiburan.'),
(11, 'https://news.detik.com/pilkada/d-7569791/tema-debat-perdana-pilgub-jakarta-penguatan-sdm-transformasi-kota-global', 'https://akcdn.detik.net.id/community/media/visual/2024/09/18/3-paslon-cagub-jakarta_169.jpeg', 2, 'Tema Debat Perdana Pilgub Jakarta: Penguatan SDM-Transformasi Kota Global', 'Komisi Pemilihan Umum (KPU) DKI Jakarta akan menggelar debat perdana pasangan calon Gubernur-Wakil Gubernur Jakarta akhir pekan ini. Tema debat perdana ialah \'Penguatan Sumber Daya Manusia dan Transformasi Jakarta menjadi Kota Global\'.\r\n\"Tema debat pertama itu Penguatan Sumber Daya Manusia dan Transformasi Jakarta menjadi Kota Global,\" kata Anggota KPU DKI Fahmi Zikrillah saat dikonfirmasi, Kamis (3/10/2024).\r\n\r\nRencananya debat akan digelar pada Minggu, (6/10) di JIExpo Kemayoran, Jakarta Pusat. Debat akan dimulai pukul 19.00 WIB dan disiarkan secara langsung.\r\n\r\nBaca artikel detiknews, \"Tema Debat Perdana Pilgub Jakarta: Penguatan SDM-Transformasi Kota Global\" selengkapnya https://news.detik.com/pilkada/d-7569791/tema-debat-perdana-pilgub-jakarta-penguatan-sdm-transformasi-kota-global.'),
(13, 'https://news.detik.com/berita/d-7581422/putusan-gugatan-pdip-soal-penetapan-pilpres-ditunda-sampai-24-oktober', 'https://akcdn.detik.net.id/community/media/visual/2019/05/10/0e1f9ca0-5e29-48e1-ad7a-be22c4ea1d12_169.jpeg', 2, 'Putusan Gugatan PDIP soal Penetapan Pilpres Ditunda Sampai 24 Oktober', 'PTUN DKI Jakarta sejatinya membacakan putusan gugatan PDIP terkait hasil penetapan Pilpres 2024 hari ini. Namun, putusan itu ditunda hingga 24 Oktober 2024, kenapa?\r\nPDIP melalui Tim Perjuangan Demokrasi Indonesia (PDI) diketahui melayangkan gugatan ke PTUN Jakarta dengan perkara perbuatan melawan hukum terkait penetapan putra sulung Presiden Joko Widodo (Jokowi) Gibran Rakabuming Raka sebagai cawapres. Sidang putusan seharusnya dilaksanakan hari ini, namun ditunda karena hakim ketua sakit.'),
(14, 'https://sport.detik.com/sport-lain/d-7580572/atlet-berkuda-medan-brandon-toa-kecil-kecil-cabe-rawit', 'https://akcdn.detik.net.id/community/media/visual/2024/10/10/brandon-toa_169.jpeg', 1, 'Atlet Berkuda Medan Brandon Toa: Kecil-kecil Cabe Rawit', 'Atlet berkuda muda Brandon Toa terus unjuk gigi di percaturan Equestrian nasional. Dia baru saja mencatatkan prestasi di dua ajang berbeda.\r\nBrandon Toa yang merupakan atlet 13 tahun asal Medan, Sumatera Utara, lagi meramaikan persaingan di level junior Tanah Air. Dia baru saja turun di dua kejuaraan dalam waktu berdekatan, yakni Piala Kampus Kuda Klaten Series (25-29 September) dan Shark Equestrian Competition (2-6 Oktober).'),
(15, 'https://www.detik.com/pop/music/d-7582480/konser-lany-di-jakarta-jadi-tempat-perayaan-cinta-diiringi-musik', 'https://akcdn.detik.net.id/community/media/visual/2024/10/11/lany-2_34.jpeg', 5, 'Konser LANY di Jakarta Jadi Tempat Perayaan Cinta Diiringi Musik', 'LANY baru saja menyelesaikan konsernya dalam rangkaian tur bertajuk a beautiful blur. Konser itu diselenggarakan selama dua hari, pada Rabu dan Kamis (8-9/10/2024) di Beach City International Stadium, Ancol, Jakarta Utara.\r\ndetikpop mengikuti kegiatan konser sejak awal dan melihat banyak sekali penonton yang sangat excited untuk bertemu idolanya tersebut. Teriakan demi teriakan saling sahut menyaut dari mulai penonton di area festival hingga ke tribun.'),
(16, 'https://sport.detik.com/sport-lain/d-7582397/hsn-ketika-olahraga-dan-musik-bersatu-di-surabaya-akhir-pekan-ini', 'https://akcdn.detik.net.id/community/media/visual/2024/10/11/holywings-sport-night-2024_169.jpeg', 1, 'HSN: Ketika Olahraga dan Musik Bersatu di Surabaya Akhir Pekan Ini', 'Holywings Sport Night (HSN) akan menyambangi kota Surabaya akhir pekan ini. Para penikmat olahraga dan musim akan mendapat sajian berkelas.\r\nSetelah sukses diadakan di Jakarta dan Bali beberapa waktu lalu, HSN akan digelar di Ambyar Superclub Basra, Surabaya, 12-13 Oktober. Acara tinju HSN ini memang bertujuan mencari bakat-bakat tinju muda Indonesia yang berpotensi menjadi juara dunia di masa depan.'),
(17, 'https://www.detik.com/pop/music/d-7580353/maliq-dessentials-angkat-tangan-soal-lagu-kita-bikin-romantis-yang-liriknya-diganti', 'https://akcdn.detik.net.id/community/media/visual/2024/10/09/maliq-dessentials.jpeg', 5, 'Maliq & D\'essentials Angkat Tangan soal Lagu Kita Bikin Romantis yang Liriknya Diganti', 'Popularitas lagu Kita Bikin Romantis dari Maliq & D\'essentials emang gak usah diragukan lagi ya. Karena lagu ini, Maliq & D\'essentials jadi semakin pede loh tetap bertahan di dunia musik.\r\nNah karena lagu ini ngetren, otomatis versi lucu-lucunya juga ada loh. Lirik Kita Bikin Romantis kemudian banyak diparodikan.'),
(18, 'https://inet.detik.com/mobile-apps/d-7581689/chatbot-meta-ai-akan-segera-rilis-di-indonesia', 'https://akcdn.detik.net.id/community/media/visual/2024/04/19/meta-ai_169.jpeg', 3, 'Chatbot Meta AI Akan Segera Rilis di Indonesia', 'Chatbot Meta AI sudah tersedia di beberapa negara sejak awal tahun ini. Setelah penantian cukup lama, Meta AI siap diluncurkan di Indonesia dalam waktu dekat.\r\nDalam pengumuman di channel WhatsApp pribadinya, CEO Meta Mark Zuckerberg mengatakan Meta AI saat ini sudah tersedia di enam negara tambahan yaitu Brasil, Inggris, Filipina, Bolivia, Guatemala, dan Paraguay.'),
(19, 'https://finance.detik.com/berita-ekonomi-bisnis/d-7583484/komisi-dpr-nambah-jadi-13-ini-alasannya', 'https://akcdn.detik.net.id/community/media/visual/2024/09/14/ahmad-muzani_169.jpeg', 4, 'Komisi DPR Nambah Jadi 13, Ini Alasannya', 'Ketua Majelis Permusyawaratan Rakyat (MPR) Ahmad Muzani menyebut jumlah komisi di DPR RI akan bertambah dari sebelumnya 11 menjadi 13. Penambahan komisi demi menyesuaikan jumlah kementerian Prabowo yang bertambah.\r\n\"Kemudian sampai sekarang belum ada kegiatan yang berarti karena komisi baru mulai persiapan pembentukan, ada komisi dari komisi 1 sampai 11, sekarang menjadi komisi sampai 13, karena komisi menyesuaikan dengan jumlah kementerian yang akan diumumkan katanya begitu,\" katanya dalam 15th Kompas 100 CEO Forum, disiarkan virtual di YouTube Harian Kompas, Jumat (11/10/2024).');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indexes for table `newscontent`
--
ALTER TABLE `newscontent`
  ADD PRIMARY KEY (`idnews`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `idcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `newscontent`
--
ALTER TABLE `newscontent`
  MODIFY `idnews` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
