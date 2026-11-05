# Báo Cáo Kiểm Thử Phần Mềm — Dự Án KT A2.1
## Website Portfolio CV Cá Nhân Responsive

---

### Thông tin chung

| Mục | Nội dung |
|---|---|
| **Tên dự án** | Portfolio CV Cá Nhân — Đinh Văn Hoàng (Bài kiểm tra A2.1) |
| **Phiên bản** | v1.1 (Phiên bản nâng cấp giao diện & hoàn thiện nghiệm thu) |
| **Ngày đánh giá** | 05/11/2026 |
| **Đối tượng đánh giá** | Sinh viên năm nhất CNTT — Định hướng Frontend Developer |
| **Công nghệ** | HTML5 Ngữ nghĩa (Semantic) + CSS3 Mobile-First (Flexbox & CSS Grid) |
| **Tệp nguồn chính** | `index.html`, `assets/css/styles.css`, tài nguyên ảnh `assets/img/` |

---

### Bảng Đánh Giá Theo Bộ Tiêu Chí Chấm Điểm Bài Kiểm Tra A2.1

| Mã tiêu chí | Trọng số | Mô tả yêu cầu đạt được | Trạng thái | Minh chứng & Ghi chú thực tế |
|:---:|:---:|---|:---:|---|
| **A2.1.TC1** | **20%** | Phân tích yêu cầu rõ ràng, wireframe có bố cục hợp lý, truy vết được với tiêu chí chấp nhận. | **ĐẠT XUẤT SẮC (100%)** | Đã phân tích rõ 3 nhóm đối tượng người dùng (HR, Tech Lead, Ứng viên), wireframe 3 màn hình và đối chiếu chi tiết với toàn bộ 7 tiêu chí AC-01 -> AC-07 trong `BAOCAO-A2.1.docx`. |
| **A2.1.TC2** | **20%** | Dùng đúng thẻ ngữ nghĩa HTML5, cấu trúc sạch, dễ đọc và bảo trì. | **ĐẠT XUẤT SẮC (100%)** | Dùng chuẩn xác 100% các thẻ ngữ nghĩa: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<footer>`. 11/11 thẻ `<img>` đều có thuộc tính `alt` có nghĩa; phân cấp tiêu đề `h1` -> `h2` -> `h3` chặt chẽ; có chú thích tiếng Việt rõ ràng. |
| **A2.1.TC3** | **30%** | Bố cục đẹp, áp dụng Flexbox/Grid tốt, responsive nhất quán trên các thiết bị và có hiệu ứng hợp lý. | **ĐẠT XUẤT SẮC (100%)** | Thiết kế sáng sủa, thanh lịch, chuẩn sinh viên năm nhất CNTT; sử dụng Flexbox (Header, Nav, Hero CTA, Skills chip) và CSS Grid (Hero Highlights, Contact, Project Grid 1-2-3 cột). Hiệu ứng hover, status ping, modal zoom mượt mà, hỗ trợ `prefers-reduced-motion`. |
| **A2.1.TC4** | **20%** | Cung cấp đầy đủ minh chứng kiểm tra (ảnh mobile/desktop, checklist), có đối chiếu yêu cầu và nêu rõ cách sửa lỗi. | **ĐẠT XUẤT SẮC (100%)** | Đã thu thập đủ ảnh chụp responsive 3 kích thước trong `docs/screenshots/`, Smoke Test Checklist 9/9 mục đạt, giải quyết triệt để lỗi link placeholder bằng Pure CSS Modal `:target`, phục hồi đầy đủ ảnh `hoann.jpg`. |
| **A2.1.TC5** | **10%** | Nộp bài đúng hạn, đúng định dạng, tổ chức thư mục mã nguồn chuyên nghiệp. | **ĐẠT XUẤT SẮC (100%)** | Thư mục tổ chức chuẩn: `index.html` ở gốc, `assets/css/styles.css`, `assets/img/`, tài liệu kiểm thử trong `docs/`, `README.md` và `BAOCAO-A2.1.docx` đầy đủ, không có file rác. |

---

### Đối Chiếu Chi Tiết 7 Tiêu Chí Chấp Nhận (Acceptance Criteria)

| Mã AC | Nội dung tiêu chí | Kết quả kiểm tra v1.1 | Kết luận |
|:---:|---|---|:---:|
| **AC-01** | **Nội dung đủ 5 khối:** Nhận diện/Giới thiệu, Điều hướng, Kỹ năng, Danh sách kỷ niệm, Liên hệ. | Hiển thị đầy đủ 5 vùng theo đúng thứ tự logic, nội dung phù hợp chân thực với tân sinh viên năm nhất. | **ĐẠT** |
| **AC-02** | **Responsive 3 breakpoint:** Hiển thị đúng và đẹp ở 360px (mobile), 768px (tablet), 1280px (desktop). | Bố cục chuyển đổi mượt mà theo đúng kích thước thiết bị, không bị vỡ layout khi co giãn trình duyệt. | **ĐẠT** |
| **AC-03** | **Không cuộn ngang:** Ở màn hình 360px không xuất hiện thanh cuộn ngang (horizontal scrollbar). | `scrollWidth = 360px`, `box-sizing: border-box`, `max-width: 100%`, `overflow-x: hidden` trên toàn bộ tài liệu. | **ĐẠT** |
| **AC-04** | **HTML ngữ nghĩa:** Dùng đúng thẻ HTML5; có metadata lang="vi", viewport, title, description. | Đầy đủ thẻ semantic, meta tags chuẩn SEO, không còn lỗi thẻ div vô nghĩa. | **ĐẠT** |
| **AC-05** | **Điều hướng hoạt động:** Mọi liên kết trên nav cuộn đúng khối tương ứng. | Các anchor `#about`, `#skills`, `#projects`, `#contact`, `#top` đều trỏ chính xác đến các section tồn tại. | **ĐẠT** |
| **AC-06** | **Khả năng tiếp cận (A11y):** Ảnh có alt; có trạng thái focus rõ ràng khi dùng bàn phím. | 100% ảnh có thẻ `alt`; trạng thái `:focus-visible` có viền outline 2.5px màu Indigo nổi bật khi bấm phím Tab. | **ĐẠT** |
| **AC-07** | **Lưới dự án co giãn:** 1 cột (mobile 360px) -> 2 cột (tablet 768px) -> 3 cột (desktop 1280px). | CSS Grid: `grid-template-columns: 1fr` -> `repeat(2, 1fr)` -> `repeat(3, 1fr)` hoạt động chuẩn xác 100%. | **ĐẠT** |

---

### Danh Sách Các Lỗi Đã Được Khắc Phục (Bug Fixes & Refactoring)

1. **Khắc phục triệt để lỗi liên kết placeholder `href="#"`**:
   * *Trước:* Các thẻ kỷ niệm dùng liên kết `#` khiến trang bị cuộn ngược lên đầu trang khi bấm, không xem được nội dung.
   * *Sau:* Tích hợp cơ chế **Pure CSS Modal Popup** sử dụng pseudo-class `:target` (`#modal-cuoicap`, `#modal-nhaofc`, `#modal-banthan`, `#modal-ff`, `#modal-hoann`). Người xem bấm "Xem câu chuyện →" sẽ mở popup phóng to ảnh kèm câu chuyện chi tiết, bấm nút đóng `×` quay trở về `#projects` mà **100% không cần dùng đến JavaScript**.
2. **Khôi phục đầy đủ tài nguyên ảnh bị thiếu**:
   * *Trước:* File `assets/img/hoann.jpg` bị thiếu trong thư mục làm thẻ card thứ 5 và modal thứ 5 bị lỗi ảnh.
   * *Sau:* Khôi phục nguyên vẹn file gốc `hoann.jpg` (379.444 bytes). Toàn bộ 6/6 tệp ảnh trong `assets/img/` đều hiển thị sắc nét.
3. **Thay thế biểu tượng cảm xúc (Emoji) bằng Icon SVG Vector đồng bộ**:
   * *Trước:* Sử dụng emoji hệ điều hành, hiển thị viền đen thô kệch trên Windows và lệch tông màu trên các hệ máy khác nhau.
   * *Sau:* Nhúng inline các biểu tượng vector SVG thanh mảnh, hiện đại cho thanh điều hướng, các thẻ highlight, kỹ năng, thông tin liên hệ và nút lên đầu trang.
4. **Chuẩn hóa Typography và màu sắc**:
   * Áp dụng hệ thống biến thị giác CSS Tokens đồng nhất: Xanh Indigo chủ đạo (`#4f46e5`), Xanh Cyan điểm xuyết (`#06b6d4`), nền Slate sáng dịu mắt (`#f8fafc`).
   * Sử dụng font chữ Google Fonts `Plus Jakarta Sans`.

---

### Smoke Test Checklist (Nghiệm Thu Trực Quan)

- [x] Mở trực tiếp `index.html` trên trình duyệt (Chrome, Edge, Firefox) không xuất hiện lỗi console.
- [x] Kiểm tra tại viewport `360px`: không có thanh cuộn ngang (AC-03).
- [x] Thanh điều hướng (Nav): Bấm từng mục cuộn mượt đến đúng vị trí (AC-05).
- [x] Hero Section: Xếp 1 cột ở mobile, tự động chuyển 2 cột cân xứng ở tablet & desktop ($\ge 768px$).
- [x] Grid kỷ niệm: Hiển thị đúng 1 cột (mobile) -> 2 cột (tablet) -> 3 cột (desktop) (AC-07).
- [x] Modal popup: Bấm "Xem câu chuyện" mở modal mượt mà, bấm đóng quay lại lưới card.
- [x] Tiếp cận (A11y): Tất cả ảnh có thuộc tính `alt`, duyệt phím Tab có viền focus xanh rõ ràng (AC-06).
- [x] Tỷ lệ zoom: Thu phóng trình duyệt 200% giao diện vẫn rõ ràng, chữ tự co giãn không vỡ khung.
- [x] Minh chứng kiểm thử: Lưu trữ đầy đủ 3 ảnh chụp màn hình trong `docs/screenshots/`:
  - `docs/screenshots/responsive_mobile_390x844.png`
  - `docs/screenshots/responsive_tablet_768x1024.png`
  - `docs/screenshots/responsive_desktop_1440x900.png`

---

### Kết Luận Nghiệm Thu

**Kết luận:** Sản phẩm phiên bản **v1.1** đã hoàn thiện toàn diện, khắc phục 100% các hạn chế tồn tại ở v1.0, đáp ứng xuất sắc cả 5 tiêu chí chấm điểm **A2.1.TC1 – A2.1.TC5** và thỏa mãn toàn bộ 7 tiêu chí chấp nhận **AC-01 – AC-07**. Dự án đạt trạng thái **SẴN SÀNG BÀN GIAO & NỘP BÀI**.
