# Báo cáo kiểm thử phần mềm

## Thông tin chung

| Mục | Nội dung |
|---|---|
| Tên dự án | My-CV — Portfolio CV cá nhân |
| Phiên bản | v1.0 |
| Ngày kiểm thử | 05/11/2026 |
| Người thực hiện/đánh giá | Copilot QA Assistant |
| Phạm vi | Website tĩnh bằng HTML5 và CSS3, tài liệu bàn giao và cấu trúc repository |
| Môi trường kiểm thử | Windows; kiểm tra mã nguồn tĩnh, liên kết và tài nguyên; chưa chạy trình duyệt chuyên dụng hoặc công cụ kiểm thử tự động |

## Bảng tổng quan trạng thái

| STT | Nhóm tiêu chí | Trạng thái tổng thể | Nhận xét |
|---:|---|---|---|
| 1 | Tính đúng đắn và mức độ đáp ứng yêu cầu chức năng | **Chưa đạt** | Các phần nội dung chính hoạt động; liên kết “Xem chi tiết” của cả bốn thẻ chưa có đích thực tế. |
| 2 | Giao diện, trải nghiệm người dùng và khả năng tương hợp | **Đạt** | Đã kiểm tra trực quan ở mobile 390x844, tablet 768x1024 và desktop 1440x900 bằng hình ảnh tự chụp; bố cục không tràn ngang và chuyển đúng số cột theo breakpoint. |
| 3 | Khả năng vận hành, xử lý lỗi và hiệu năng cơ bản | **Cần cải thiện** | Trang tĩnh và không có xử lý dữ liệu động; chưa kiểm được trang chạy qua HTTP vì công cụ máy chủ thiếu trong môi trường. |
| 4 | Bảo mật, quản lý cấu hình và dữ liệu | **Đạt** | Không xử lý dữ liệu nhạy cảm, không có backend, khóa bí mật hoặc cơ sở dữ liệu; liên kết hoạt động bằng `mailto:` và Zalo công khai. |
| 5 | Chất lượng mã nguồn, cấu trúc repository và tài liệu bàn giao | **Cần cải thiện** | Cấu trúc dễ hiểu, README và release note đầy đủ; có một số lỗi nội dung đang lưu trong HTML và `docs/AI_LOG.md` chưa có nội dung. |
| 6 | Khả năng triển khai, kiểm thử và cung cấp minh chứng | **Chưa đạt** | Không có test suite, script kiểm thử hoặc Docker/Python trong môi trường hiện tại; file release note có nhưng minh chứng kiểm thử cần được bổ sung. |

## 1. Tính đúng đắn và mức độ đáp ứng yêu cầu chức năng

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Phần giới thiệu cá nhân | **Đạt** | `index.html` có hero, ảnh đại diện, tên, vai trò và mô tả ngắn. File `assets/img/avatar.jpg` tồn tại. |
| Thanh điều hướng và anchor | **Đạt** | Các liên kết `#top`, `#about`, `#skills`, `#projects`, `#contact` đều trỏ tới phần tử có `id` tương ứng. |
| Hiển thị sở thích/kỹ năng | **Đạt** | `#skills` sử dụng danh sách chip và các item được định nghĩa trong HTML/CSS. |
| Hiển thị các thẻ kỷ niệm | **Chưa đạt** | Các nút “Xem chi tiết” trong `#projects` đều sử dụng `href="#"` nên không mở nội dung chi tiết hoặc đích thực tế. |
| Liên kết Email và Zalo | **Đạt về cấu hình** | Có `mailto:dvanhoang304@gmail.com` và `https://zalo.me/0983989930`; chưa thực hiện kiểm tra mở ứng dụng ngoài trình duyệt. |
| Nội dung phù hợp yêu cầu | **Cần cải thiện** | Có một số nội dung hiển thị còn lỗi chính tả hoặc chưa hoàn thiện, như “cr ntth”, “k ngừng phát triển” trong `index.html`. |
| Không có yêu cầu chức năng bị bỏ sót rõ ràng | **Cần cải thiện** | Trang đáp ứng mục tiêu portfolio cơ bản, nhưng chưa có trang chi tiết cho các thẻ kỷ niệm và chưa có biểu mẫu liên hệ động. |

## 2. Giao diện, trải nghiệm người dùng và khả năng tương thích

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Thiết kế responsive | **Đạt** | Đã chụp trang ở 390x844, 768x1024 và 1440x900. Mobile hiển thị 1 cột, tablet hiển thị 2 cột card và desktop hiển thị bố cục 3 cột theo CSS breakpoint. |
| Không tràn ngang trên mobile | **Đạt** | Hình ảnh mobile 390x844 không xuất hiện cuộn ngang; CSS đặt `overflow-x: hidden`, `box-sizing: border-box`, `max-width: 100%` và bố cục flex/grid wrap. |
| Thanh điều hướng dạng sticky | **Đạt** | `.site-header` sử dụng `position: sticky`; chưa kiểm tra trực quan trên nhiều trình duyệt. |
| Phản hồi khi tương tác/hover/focus | **Đạt** | Có style cho hover và `:focus-visible`; `:focus-visible` có outline rõ 3px. |
| Cuộn mượt và chuyển động giảm thiểu | **Đạt** | `scroll-behavior: smooth` và media query `prefers-reduced-motion: reduce` được cấu hình trong CSS. |
| Ngữ nghĩa và hỗ trợ truy cập cơ bản | **Đạt** | Sử dụng thẻ semantic như `header`, `main`, `nav`, `section`, `article`, `footer`, thuộc tính `aria-label` và `alt` cho hình ảnh. |
| Tương thích đa trình duyệt | **Chưa đạt** | Chưa thực hiện kiểm thử Chrome, Edge, Firefox và Safari; hiệu lực của `backdrop-filter` cần được kiểm tra riêng. |
| Kiểm tra độ phân giải | **Đạt** | Đã lưu ảnh tự chụp đầy đủ trang tại 390x844 (mobile), 768x1024 (tablet) và 1440x900 (desktop) trong `docs/screenshots/`; độ tương phản màu vẫn cần kiểm tra Lighthouse/WCAG bổ sung. |

## 3. Khả năng vận hành, xử lý lỗi và hiệu năng cơ bản

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Tải trang và tài nguyên | **Cần cải thiện** | Tất cả asset local tham chiếu từ HTML đều tồn tại; kiểm tra HTTP chưa thực hiện được vì Python/Py không có trong môi trường. |
| Xử lý liên kết điều hướng | **Đạt** | Các anchor chính đều trỏ đến vùng tồn tại trong cùng tài liệu. |
| Liên kết placeholder | **Chưa đạt** | Bốn liên kết “Xem chi tiết” có giá trị `#`, làm trang cuộn lên đầu thay vì mở nội dung chi tiết. |
| Tải ảnh | **Đạt về cấu hình** | 5 ảnh local đều đã được tham chiếu từ HTML hoặc tồn tại trong thư mục; chưa đo kích thước hiển thị thực tế trên trình duyệt. |
| Hiệu năng cơ bản | **Cần cải thiện** | Trang không dùng framework/backend, tài nguyên chủ yếu là HTML/CSS và 6 ảnh JPG; chưa đo thời gian tải, Core Web Vitals hoặc kích thước mạng. |
| Trạng thái lỗi phía người dùng | **Đạt về phạm vi tĩnh** | Không có biểu mẫu, API hoặc xử lý dữ liệu động nên không phát sinh luồng lỗi nghiệp vụ phức tạp cần trang trạng thái riêng. |
| Khả năng phục hồi lỗi tài nguyên | **Cần cải thiện** | Không có cơ chế fallback khi ảnh không tải được; không có trang 404 hoặc thông báo lỗi riêng. |

## 4. Bảo mật, quản lý cấu hình và dữ liệu

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Quản lý dữ liệu nhạy cảm | **Đạt** | Không có backend, cơ sở dữ liệu, token, khóa API hoặc dữ liệu người dùng riêng. |
| Cấu hình bí mật | **Đạt** | Repository không chứa mã kết nối dịch vụ hoặc cấu hình bí mật; email, số Zalo là thông tin liên hệ công khai. |
| Đầu vào người dùng | **Đạt về phạm vi** | Không có input, biểu mẫu hoặc API nên không có luồng injection cần xử lý trong phiên bản hiện tại. |
| Liên kết bên ngoài | **Đạt về kiểm tra tĩnh** | Zalo sử dụng HTTPS và Email sử dụng `mailto:`; chưa kiểm tra chính sách hoặc trạng thái truy cập của dịch vụ ngoài. |
| Quản lý cấu hình dự án | **Cần cải thiện** | Không có file cấu hình triển khai hoặc biến môi trường; README mô tả Docker nhưng repository không có `docker-compose.yml` hoặc Dockerfile. |
| Bản quyền và tài liệu license | **Cần cải thiện** | README nêu repository chưa khai báo license; cần xác nhận quyền phân phối tài nguyên hình ảnh/nội dung trước bàn giao thương mại. |

## 5. Chất lượng mã nguồn, cấu trúc repository và tài liệu bàn giao

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Cấu trúc thư mục | **Đạt** | Có phân tách `index.html`, CSS trong `assets/css` và hình ảnh trong `assets/img`; repository dễ theo dõi. |
| Chất lượng HTML/CSS | **Cần cải thiện** | Cấu trúc HTML/CSS có mục đích rõ và comment chi tiết; còn khoảng trắng dư và nội dung mẫu/chữ viết tắt trong một số phần. |
| Khả năng bảo trì | **Cần cải thiện** | CSS sử dụng custom properties, media query và layout modular; nội dung thay đổi trực tiếp trong HTML. |
| README | **Đạt** | README mô tả chức năng, công nghệ, cấu trúc, hướng dẫn chạy, Docker và xử lý lỗi. |
| Release note | **Đạt** | [RELEASENOTE.md](./RELEASENOTE.md) mô tả phiên bản, ngày phát hành, chức năng mới, lỗi đã sửa và hạn chế. |
| AI log | **Chưa đạt** | `docs/AI_LOG.md` tồn tại nhưng có dung lượng 0 byte; chưa ghi rõ công cụ AI, phạm vi hỗ trợ hoặc quy trình xác minh. |
| Repository sạch, không tồn tại file thừa | **Cần cải thiện** | File tài liệu `.md` trùng tên hoặc thư mục lưu trữ trước đó có thể gây nhầm lẫn; cần kiểm tra lịch sử và trạng thái Git trước bản bàn giao. |
| Thông tin tài liệu khớp mã nguồn | **Cần cải thiện** | README mô tả file ảnh và cấu trúc cơ bản phù hợp; tuy nhiên một số nội dung README có thể chưa phản ánh đúng tên thư mục/docs hiện tại. |

## 6. Khả năng triển khai, kiểm thử và cung cấp minh chứng

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng cụ thể |
|---|---|---|
| Khả năng mở trực tiếp bằng trình duyệt | **Cần cải thiện** | HTML/CSS/assets là đường dẫn tương đối; logic hoạt động khi mở trực tiếp hoặc qua server cần được xác nhận bằng trình duyệt thực tế. |
| Khả năng chạy bằng máy chủ tĩnh | **Chưa đạt** | README hướng dẫn `python -m http.server`, nhưng `python`, `py` và Docker không có trong môi trường kiểm thử hiện tại. |
| Kiểm thử tự động | **Chưa đạt** | Repository chưa có file kiểm thử, framework, test runner hoặc script CI. |
| HTML validator/linter | **Chưa đạt** | Chưa chạy validator HTML/CSS hoặc công cụ kiểm tra liên kết tự động. |
| Minh chứng kiểm thử | **Cần cải thiện** | Đã có 3 ảnh chụp responsive cho mobile, tablet và desktop; chưa có log kết quả HTTP hoặc kết quả test tự động. |
| Tài liệu triển khai GitHub Pages | **Cần cải thiện** | README có hướng dẫn triển khai GitHub Pages; cần xác nhận cấu hình Pages và URL triển khai thực tế trước bàn giao. |
| Release package | **Chưa đạt** | Chưa có tag/release, checksum hoặc gói bàn giao được xác nhận cho v1.0. |

## Minh chứng kiểm thử đã thu thập

- Đã chụp minh chứng responsive đầy đủ trang bằng Playwright tại ba kích thước:
  - [Mobile 390x844](./screenshots/responsive_mobile_390x844.png)
  - [Tablet 768x1024](./screenshots/responsive_tablet_768x1024.png)
  - [Desktop 1440x900](./screenshots/responsive_desktop_1440x900.png)
- Đã kiểm tra toàn bộ đường dẫn `href` và `src` trong `index.html`.
- 1 file CSS và 5 ảnh local được tham chiếu đều tồn tại.
- 7 liên kết anchor nội bộ được kiểm tra; các anchor `#top`, `#about`, `#skills`, `#projects`, `#contact` đều có phần tử đích tương ứng.
- Phát hiện 4 liên kết trống sử dụng `href="#"` tại các thẻ kỷ niệm.
- Phát hiện `docs/AI_LOG.md` là file 0 byte.
- Không thể chạy máy chủ HTTP vì môi trường không có `python`, `py`, Node.js hoặc Docker.

## Đánh giá tổng kết & Đề xuất

### Nhận định tổng kết

Sản phẩm v1.0 đã có đầy đủ bộ khung của một portfolio CV tĩnh: bố cục chính, điều hướng, phần kỹ năng, danh sách kỷ niệm, liên kết liên hệ và tài liệu README/release note. Mã nguồn HTML/CSS dễ đọc và có các cấu hình cơ bản về responsive, focus và giảm chuyển động.

Tuy nhiên, sản phẩm **chưa đạt mức sẵn sàng bàn giao** do các vấn đề sau:

1. Liên kết “Xem chi tiết” chưa có đích nội dung thực tế.
2. Chưa có minh chứng kiểm thử trực quan trên trình duyệt và nhiều kích thước màn hình.
3. Chưa có test suite, lệnh kiểm thử tự động hoặc quy trình kiểm tra deploy.
4. `docs/AI_LOG.md` chưa có nội dung và chưa được tích hợp vào tài liệu bàn giao.
5. Một số lỗi chính tả hoặc chữ viết tắt cần được sửa trước khi xuất bản.

### Đề xuất khắc phục theo mức ưu tiên

1. **Ưu tiên cao:** Thay `href="#"` bằng đường dẫn chi tiết thực tế hoặc ẩn nút nếu chức năng chi tiết chưa nằm trong phạm vi.
2. **Ưu tiên cao:** Rà soát và sửa nội dung hiển thị trong `index.html`, sau đó chạy kiểm tra trực quan trên Chrome/Edge ở kích thước mobile, tablet và desktop.
3. **Ưu tiên cao:** Chạy kiểm tra HTTP bằng Python hoặc Nginx/Docker, xác nhận mã trạng thái 200 cho trang chính, CSS và toàn bộ ảnh.
4. **Ưu tiên trung bình:** Thêm danh sách test case tối thiểu, kết quả thực thi và ảnh chụp màn hình vào thư mục `docs` hoặc `test_report.md`.
5. **Ưu tiên trung bình:** Điền nội dung cho `docs/AI_LOG.md` hoặc loại bỏ file nếu không nằm trong yêu cầu bàn giao.
6. **Ưu tiên trung bình:** Xác nhận URL GitHub Pages/Docker, tag `v1.0`, release note và license/quyền sử dụng nội dung trước khi công bố.

### Kết luận sẵn sàng

**Kết luận:** Chưa sẵn sàng bàn giao ở trạng thái hiện tại. Sản phẩm có thể chuyển sang vòng kiểm thử hoàn chỉnh sau khi xử lý liên kết placeholder và bổ sung các minh chứng triển khai, kiểm thử trình duyệt.