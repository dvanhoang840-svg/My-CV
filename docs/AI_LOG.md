# Nhật ký thay đổi bằng AI

Tài liệu này ghi lại các thay đổi lớn được thực hiện có hỗ trợ AI, nhằm tăng tính minh bạch, truy vết và thuận tiện khi bàn giao dự án.

## Quy tắc ghi log

Mỗi khi có thay đổi lớn cần ghi một mục mới theo mẫu bên dưới:

```markdown
### YYYY-MM-DD HH:mm - Tóm tắt ngắn

- **Người yêu cầu:** Tên hoặc vai trò người yêu cầu.
- **AI hỗ trợ:** Công cụ/mô hình AI đã sử dụng.
- **Phạm vi:** Mô tả rõ khu vực hoặc tính năng bị ảnh hưởng.
- **Thay đổi:** Liệt kê những việc đã thực hiện.
- **Tác động:** Mô tả ảnh hưởng đến chức năng, giao diện hoặc tài liệu.
- **Kiểm chứng:** Lệnh kiểm tra, kết quả kiểm thử hoặc ghi chú chưa kiểm chứng.
- **Trạng thái:** Hoàn thành / Đang thực hiện / Cần người dùng xác nhận.
```

---

## Lịch sử thay đổi

### 2026-11-05 15:57 - Tạo release note v1.0

- **Người yêu cầu:** Người phát triển dự án.
- **AI hỗ trợ:** Copilot AI assistant trong VS Code.
- **Phạm vi:** Tài liệu release note trong thư mục `docs`.
- **Thay đổi:**
  - Tạo `docs/RELEASENOTE.md`.
  - Bổ sung phiên bản, ngày phát hành, chức năng mới, lỗi đã sửa và hạn chế còn tồn tại.
- **Tác động:** Tài liệu bàn giao có thêm phần mô tả nội dung phiên bản v1.0 bằng tiếng Việt.
- **Kiểm chứng:** Đọc lại file Markdown sau khi chỉnh sửa và xác nhận các mục bắt buộc đã đầy đủ.
- **Trạng thái:** Hoàn thành.

### 2026-11-05 16:01 - Tạo báo cáo kiểm thử tổng hợp

- **Người yêu cầu:** Người phát triển dự án với vai trò QA/QC.
- **AI hỗ trợ:** Copilot AI assistant trong VS Code.
- **Phạm vi:** Báo cáo kiểm thử sản phẩm và đánh giá 6 nhóm tiêu chí.
- **Thay đổi:**
  - Tạo `docs/test_report.md`.
  - Bổ sung thông tin chung, bảng tổng quan trạng thái và checklist chi tiết cho từng tiêu chí.
- **Tác động:** Repository có tài liệu đối chiếu trước khi bàn giao và các phát hiện lỗi được ghi nhận rõ ràng.
- **Trạng thái:** Hoàn thành.

### 2026-11-05 16:16 - Bổ sung minh chứng responsive

- **Người yêu cầu:** Người phát triển dự án.
- **AI hỗ trợ:** Copilot AI assistant với công cụ trình duyệt Playwright.
- **Phạm vi:** Kiểm thử giao diện responsive và tài liệu minh chứng trong thư mục `docs/screenshots`.
- **Thay đổi:**
  - Tạo ảnh full-page ở các viewport mobile, tablet và desktop.
- **Trạng thái:** Hoàn thành.

### 2026-11-05 20:15 - Nâng cấp toàn diện giao diện v1.1 theo chuẩn bài kiểm tra A2.1

- **Người yêu cầu:** Đinh Văn Hoàng.
- **AI hỗ trợ:** Antigravity AI Assistant.
- **Phạm vi:** `index.html`, `assets/css/styles.css`, `docs/test_report.md`, `docs/RELEASENOTE.md`.
- **Thay đổi:**
  - Chuẩn hóa HTML5 Ngữ nghĩa, CSS3 Flexbox/Grid Mobile-First, khắc phục liên kết rỗng bằng CSS Modal.
- **Trạng thái:** Hoàn thành.

### 2026-11-05 20:35 - Nâng cấp Portfolio Cá Nhân v2.0 (Xanh dương - Navy, Chuẩn sinh viên năm nhất ĐH Đại Nam)

- **Người yêu cầu:** Đinh Văn Hoàng.
- **AI hỗ trợ:** Antigravity AI Assistant.
- **Phạm vi:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `README.md`, `docs/RELEASENOTE.md`.
- **Thay đổi:**
  - **Bảng màu chủ đạo:** Chuyển đổi sang màu Xanh dương (`#1d64d8`), Xanh Navy (`#0b2545`) và Trắng tinh khiết (`#ffffff`), tạo phong cách thanh lịch, hiện đại, thân thiện đúng chất sinh viên.
  - **Cấu trúc 6 khu vực hoàn chỉnh:** Trang chủ (`#home`), Giới thiệu (`#about`), Học vấn (`#education` - Trường Đại học Đại Nam, ngành CNTT), Kỹ năng (`#skills`), Sản phẩm/Bài tập & Kỷ niệm (`#projects`), Liên hệ (`#contact`).
  - **Thanh tiến trình kỹ năng:** Trình bày chân thực các kỹ năng đang học (HTML5, CSS3, JS, C/C++, Git, VS Code) với mức độ tiến độ trực quan và thẻ kỹ năng mềm.
  - **JavaScript tương tác cơ bản:** Thêm `assets/js/main.js` xử lý menu hamburger trên điện thoại, hiệu ứng scroll reveal nhẹ khi cuộn trang, active nav link, nút quay lại đầu trang mượt mà, modal chi tiết và phản hồi gửi biểu mẫu.
  - **Giữ trọn vẹn thông tin và ảnh thật:** Giữ nguyên 5 ảnh kỷ niệm và avatar của Hoàng, không bịa thông tin sai lệch hay kinh nghiệm thâm niên.
- **Tác động:** Website nâng cấp thành một Portfolio hoàn chỉnh, đẹp mắt, trẻ trung, hoạt động tốt trên GitHub Pages.
- **Kiểm chứng:** Kiểm tra cấu trúc thẻ HTML (100% cân bằng), cú pháp CSS/JS không lỗi, kiểm tra liên kết anchor ID và tài nguyên ảnh nội bộ.
- **Trạng thái:** Hoàn thành.


### 2026-11-05 21:05 - Nâng cấp Portfolio Cá Nhân v2.1 (Trẻ trung, Sáng tạo, Đa sắc màu, Timeline Học vấn & Hoạt họa kỹ năng)

- **Người yêu cầu:** Đinh Văn Hoàng.
- **AI hỗ trợ:** Antigravity AI Assistant.
- **Phạm vi:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `README.md`, `docs/RELEASENOTE.md`, `docs/AI_LOG.md`.
- **Thay đổi:**
  - **Màu sắc & Họa tiết trang trí:**
    - Sử dụng hệ màu Xanh dương (`#2563eb`), Xanh tím/Indigo (`#4f46e5` / `#7c3aed`), Cyan (`#06b6d4`), Xanh Navy (`#0b2545`) và các mảng màu pastel sinh động (Blue, Purple, Cyan, Emerald, Amber, Rose).
    - Tạo các khối gradient mờ bồng bềnh (Blobs) cùng lưới chấm nhỏ (Dot pattern) và các biểu tượng CNTT nhẹ nhàng (`</>`, `{ }`, `0101`, `✦`, `>_`) ở nền.
    - Hiệu ứng Text Gradient đa sắc chuyển màu nhẹ nhàng trên tiêu đề tên cá nhân.
  - **Trang chủ (Hero):**
    - Thiết kế vòng xoay kép ngược chiều (Dual concentric rotating rings) và quầng sáng đa sắc (Glow Orb) quanh avatar.
    - Thêm 2 huy hiệu nổi (Floating Badges): `💻 Khoa CNTT - Khóa 2024 - 2028` và `🚀 Đam mê Frontend & C++` với hiệu ứng bồng bềnh tự nhiên.
    - 2 thẻ tóm tắt trường đào tạo và mục tiêu năm nhất viền màu nổi bật.
    - Phân biệt màu sắc hover theo từng mạng xã hội (Email, Facebook, Zalo, GitHub).
  - **Giới thiệu (About):**
    - Hàng chip tóm tắt nhanh thông tin cá nhân.
    - 3 thẻ nội dung phối màu pastel với nhãn chuyên mục và icon sinh động.
    - Lộ trình học tập 3 bước với huy hiệu số thứ tự gradient.
    - Thẻ sở thích cá nhân thiết kế dạng chip đa sắc kèm emoji.
  - **Học vấn (Education):**
    - Thiết kế lại thành **Timeline dọc trực quan có biểu tượng minh họa** với 4 mốc rõ ràng (2021-2024 THPT, 09/2024 Nhập học DNU, 2024-2025 Năm nhất cơ sở & Web, 2025-2028 Mục tiêu tốt nghiệp loại Giỏi).
    - Mốc năm nhất hiện tại có hiệu ứng vòng sáng nhấp nháy (Live status ping).
    - Thẻ trường Đại học Đại Nam với 6 môn học cơ sở dạng chip màu sắc.
  - **Kỹ năng (Skills):**
    - Thiết kế thẻ kỹ năng lập trình nhiều màu sắc với huy hiệu riêng cho từng công nghệ (HTML5 cam, CSS3 xanh, JS vàng hổ phách, C/C++ xanh tím, Git đỏ cam, Tools cyan).
    - Thanh tiến trình hoạt họa tự động chạy mượt mà từ 0% đến phần trăm thực tế khi người dùng cuộn tới.
    - 4 thẻ kỹ năng mềm dạng khung màu pastel với icon nổi bật.
  - **Dự án & Kỷ niệm (Projects & Memories):**
    - Card bài tập thực hành có viền trên gradient, nhãn tag công nghệ sắc nét và hiệu ứng hover nhấc thẻ.
    - 5 card kỷ niệm ảnh thực tế với nhãn phân loại màu sắc, hiệu ứng zoom và lớp phủ khám phá khi di chuột.
  - **Liên hệ (Contact):**
    - Khối liên hệ nổi bật với các icon tròn bo góc mang màu sắc riêng biệt từng kênh.
    - Biểu mẫu lời nhắn với input pastel, viền phát sáng khi focus và nút bấm gradient hiện đại.
  - **Giữ trọn vẹn thông tin và ảnh thật:** Toàn bộ thông tin học vấn tại ĐH Đại Nam, ảnh kỷ niệm, avatar và kênh liên lạc được bảo toàn tuyệt đối, không bịa đặt thêm dữ liệu.
- **Tác động:** Website trở nên trẻ trung, tràn đầy năng lượng sáng tạo, đẹp mắt, có chiều sâu thị giác và sự đầu tư thiết kế vượt trội mà vẫn giữ được tính đơn giản, dễ hiểu của sinh viên năm nhất.
- **Kiểm chứng:** Kiểm tra cấu trúc thẻ HTML (1377 dòng, cân bằng thẻ), CSS tokens và responsive breakpoints (360px, 768px, 1024px+), JavaScript hoạt động trơn tru không lỗi runtime.
- **Trạng thái:** Hoàn thành.


### 2026-11-05 21:14 - Khắc phục lỗi hiển thị ô tròn đè nội dung và cập nhật Niên khóa 2026 - 2030

- **Người yêu cầu:** Đinh Văn Hoàng.
- **AI hỗ trợ:** Antigravity AI Assistant.
- **Phạm vi:** `index.html`, `assets/css/styles.css`, `README.md`, `docs/RELEASENOTE.md`.
- **Thay đổi:**
  - **Sửa lỗi ô tròn xanh đè lên nội dung thẻ Học vấn:** Thay thế thẻ `<span class="status-dot"></span>` trong `.uni-status-tag` thành `<span class="uni-dot-live"></span>` với kích thước cố định `7px x 7px`, đồng thời bổ sung `max-width: 12px; max-height: 12px;` cho `.status-dot` để loại bỏ hoàn toàn hiện tượng tràn khung mở rộng `inset: 0` thành hình oval lớn che mất chữ.
  - **Cập nhật năm học / Niên khóa 2026 – 2030:** Cập nhật đồng bộ toàn bộ các vị trí: Header nhận diện, Huy hiệu trạng thái Hero, Floating badge, Chip tóm tắt About, 4 mốc Timeline học tập và Thẻ trường Đại học Đại Nam sang **Khóa 2026 – 2030** (Năm nhất 2026 – 2027).
- **Trạng thái:** Hoàn thành.
