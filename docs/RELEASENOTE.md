# Lịch sử phiên bản (Release Notes)

---

## Phiên bản v1.1 (Phiên bản nâng cấp giao diện & Hoàn thiện bài kiểm tra A2.1)

### Ngày phát hành

05/11/2026

### Mục tiêu phiên bản

- Nâng cấp giao diện website hiện đại, thanh lịch, chuyên nghiệp, phù hợp với năng lực sinh viên năm nhất CNTT.
- Đáp ứng trọn vẹn 5 tiêu chí chấm điểm **A2.1.TC1 – A2.1.TC5** và 7 tiêu chí chấp nhận **AC-01 – AC-07**.
- Giữ vững 100% nguyên tắc: HTML5 semantic + CSS3 thuần (không dùng JavaScript, không dùng thư viện ngoài).

### Chức năng và nâng cấp mới

- **Nhận diện & Giao diện:** Bảng màu công nghệ chuẩn mực (Tech Indigo `#4f46e5`, Sky/Cyan `#06b6d4`, Slate background `#f8fafc`).
- **Thanh điều hướng Sticky Glassmorphism:** Hiệu ứng kính mờ `backdrop-filter: blur(12px)`, cuộn mượt đến từng khu vực.
- **Biểu tượng Vector SVG đồng bộ:** Thay thế toàn bộ emoji thô thành icon SVG vector sắc nét, hiển thị đồng nhất trên mọi hệ điều hành.
- **Avatar & Highlights:** Ảnh đại diện có viền gradient đôi mềm mại, hiệu ứng đổ bóng phát quang nhẹ, huy hiệu K24 IT Student và 2 thẻ tóm tắt năng lực dạng card kính.
- **Kỹ năng (Skills):** Phân chia 3 nhóm mạch lạc với chip bo tròn có chấm màu định danh, hiệu ứng hover nhấc nhẹ.
- **Lưới Kỷ niệm (Projects Grid - AC-07):** CSS Grid co giãn chuẩn mực `1 cột (Mobile 360px) -> 2 cột (Tablet 768px) -> 3 cột (Desktop 1280px)`, tỉ lệ ảnh 16:10 sắc nét.
- **Pure CSS Modal Popup (:target):** Xem chi tiết 5 kỷ niệm mượt mà không dùng JavaScript, có nút đóng và quay lại danh sách thuận tiện.
- **Biểu mẫu liên hệ:** Input focus có viền Indigo và hiệu ứng glow ring êm ái, liên kết Zalo và Email hoạt động chính xác.

### Lỗi đã khắc phục triệt để

- Khắc phục lỗi liên kết rỗng `href="#"` tại các nút xem chi tiết.
- Khôi phục file ảnh `assets/img/hoann.jpg` bị thiếu trong thư mục.
- Đảm bảo 100% hình ảnh có thuộc tính `alt` mô tả đầy đủ nghĩa.
- Đảm bảo 100% không cuộn ngang ở màn hình 360px (`scrollWidth = 360px`).
- Cập nhật đầy đủ tài liệu kiểm thử và minh chứng theo chuẩn bài kiểm tra A2.1.

---

## Phiên bản v1.0

### Ngày phát hành

05/11/2026

### Chức năng ban đầu

- Xây dựng trang CV/portfolio cá nhân với ảnh đại diện và phần giới thiệu.
- Thêm thanh điều hướng cố định và hỗ trợ cuộn đến từng khu vực trên trang.
- Hiển thị danh sách sở thích, kỹ năng và các kỷ niệm bằng bố cục chip và lưới.
- Thêm liên kết Email và Zalo để người xem có thể liên hệ trực tiếp.
- Cung cấp giao diện responsive trên máy tính, máy tính bảng và điện thoại.
- Hỗ trợ cuộn mượt, hiệu ứng chuyển động nhẹ và tôn trọng chế độ `prefers-reduced-motion`.
- Sử dụng thẻ ngữ nghĩa, thuộc tính `aria` và thuộc tính `alt` cho hình ảnh.
