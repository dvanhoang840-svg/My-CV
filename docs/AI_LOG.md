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

Mức độ thay đổi lớn bao gồm: thêm/xóa chức năng, sửa cấu trúc repository, thay đổi giao diện đáng kể, cập nhật tài liệu bàn giao quan trọng, thay đổi dữ liệu cấu hình hoặc bổ sung minh chứng kiểm thử.

---

## Lịch sử thay đổi

### 2026-11-05 15:57 - Tạo release note v1.0

- **Người yêu cầu:** Người phát triển dự án.
- **AI hỗ trợ:** Copilot AI assistant trong VS Code.
- **Phạm vi:** Tài liệu release note trong thư mục `docs`.
- **Thay đổi:**
  - Tạo `docs/RELEASENOTE.md`.
  - Bổ sung phiên bản, ngày phát hành, chức năng mới, lỗi đã sửa và hạn chế còn tồn tại.
  - Chuyển release note khỏi tên file sai định dạng `RELEASENOTE. md`.
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
  - Đánh giá mức độ sẵn sàng bàn giao cùng đề xuất khắc phục.
- **Tác động:** Repository có tài liệu đối chiếu trước khi bàn giao và các phát hiện lỗi được ghi nhận rõ ràng.
- **Kiểm chứng:**
  - Kiểm tra toàn bộ liên kết `href` và `src` trong `index.html`.
  - Xác nhận các file CSS/ảnh nội bộ tồn tại và các anchor nội bộ trỏ đến phần tử hợp lệ.
  - Phát hiện các nút “Xem chi tiết” đang dùng `href="#"` và `docs/AI_LOG.md` ban đầu trống.
  - Không thể chạy máy chủ HTTP hoặc Docker trong môi trường hiện tại do thiếu công cụ tương ứng.
- **Trạng thái:** Hoàn thành.

### 2026-11-05 16:16 - Bổ sung minh chứng responsive

- **Người yêu cầu:** Người phát triển dự án.
- **AI hỗ trợ:** Copilot AI assistant với công cụ trình duyệt Playwright.
- **Phạm vi:** Kiểm thử giao diện responsive và tài liệu minh chứng trong thư mục `docs/screenshots`.
- **Thay đổi:**
  - Tạo ảnh full-page ở các viewport mobile, tablet và desktop.
  - Lưu ba hình minh chứng trong `docs/screenshots/`.
  - Liên kết các hình ảnh vào phần Minh chứng và cập nhật trạng thái nhóm tiêu chí Giao diện trong `docs/test_report.md`.
- **Minh chứng:**
  - `docs/screenshots/responsive_mobile_390x844.png`
  - `docs/screenshots/responsive_tablet_768x1024.png`
  - `docs/screenshots/responsive_desktop_1440x900.png`
- **Tác động:** Tiêu chí responsive có minh chứng trực quan thay vì chỉ đánh giá dựa trên mã nguồn CSS.
- **Kiểm chứng:** Kiểm tra trực quan ảnh ở viewport 390x844, 768x1024 và 1440x900; xác nhận bố cục không có cuộn ngang và chuyển số cột theo breakpoint.
- **Trạng thái:** Hoàn thành.